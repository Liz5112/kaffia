"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const path = require('path');
const path = __importStar(require("path"));
// import module from 'path';
const yaml = require('js-yaml');
// const yaml = require('js-yaml');
const fs = require('fs');
// const fs = require('fs');
/**
 * dockerConfigGenerator creates a yaml file for a multi-container Docker application
 * that uses Grafana, Prometheus, jmx-exporter, and Kafka to create a self-monitoring
 * cluster.
 * @param brokerCount
 * @returns void
 *
 */
const dockerConfigGenerator = (brokerCount) => {
    try {
        const dockerConfig = yaml.load(fs.readFileSync(path.join(__dirname, './docker/docker_multiple_nodes_template.yml'), 'utf8'));
        const jmxTemplate = {
            image: 'sscaling/jmx-prometheus-exporter',
            environment: {
                CONFIG_YML: '/../jmx_exporter/config.yml',
                JVM_OPTS: '-Xmx512M',
            },
        };
        const kafkaTemplate = {
            image: 'confluentinc/cp-kafka:latest',
            depends_on: ['zk1'],
            environment: {
                KAFKA_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
                KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: 'PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT',
                KAFKA_INTER_BROKER_LISTENER_NAME: 'PLAINTEXT',
                CONFLUENT_METRICS_REPORTER_ZOOKEEPER_CONNECT: 'zookeeper1:2181',
                CONFLUENT_METRICS_REPORTER_TOPIC_REPLICAS: 1,
                CONFLUENT_METRICS_ENABLE: 'false',
                KAFKA_HEAP_OPTS: '-Xmx512M -Xms512M',
            },
        };
        for (let i = 0; i < brokerCount; i++) {
            const jmxConfig = Object.assign(Object.assign({}, jmxTemplate), { ports: [`${5556 + i}:5556`], volumes: [
                    `../jmx_exporter/config_kafka10${i + 1}.yml:/../jmx_exporter/config.yml`,
                ], container_name: `jmx-kafka${101 + i}`, depends_on: [`kafka${101 + i}`] });
            dockerConfig.services[`jmx-kafka${101 + i}`] = jmxConfig;
            const kafkaConfig = Object.assign(Object.assign({}, kafkaTemplate), { ports: [`909${i + 1}:909${i + 1}`, `999${i + 1}:999${i + 1}`], container_name: `kafka${101 + i}`, environment: Object.assign(Object.assign({}, kafkaTemplate.environment), { KAFKA_BROKER_ID: 101 + i, KAFKA_JMX_PORT: 9991 + i, KAFKA_ADVERTISED_LISTENERS: `PLAINTEXT://kafka10${i + 1}:29092,PLAINTEXT_HOST://localhost:909${i + 1}`, KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: brokerCount < 3 ? brokerCount : 3, KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: brokerCount < 3 ? brokerCount : 3, CONFLUENT_METRICS_REPORTER_BOOTSTRAP_SERVERS: `kafka10${i + 1}:29092` }) });
            dockerConfig.services[`kafka${101 + i}`] = kafkaConfig;
        }
        fs.writeFileSync(path.join(__dirname, './docker/docker_multiple_nodes.yml'), yaml.dump(dockerConfig, { noRefs: true }));
    }
    catch (e) {
        console.log(e);
    }
};
/**
 *
 * @param brokerCount
 * @returns void
 *
 */
const promConfigGenerator = (brokerCount) => {
    try {
        const promConfig = yaml.load(fs.readFileSync(path.join(__dirname, './prometheus/prometheus.yml'), 'utf8'));
        const promTargets = [];
        for (let i = 0; i < brokerCount; i++) {
            promTargets.push(`jmx-kafka10${i + 1}:5556`);
        }
        promConfig.scrape_configs[0].static_configs[0].targets = promTargets;
        fs.writeFileSync(path.join(__dirname, './prometheus/prometheus.yml'), yaml.dump(promConfig, { noRefs: true }));
    }
    catch (e) {
        console.log(e);
    }
};
module.exports = (brokerCount) => {
    dockerConfigGenerator(brokerCount);
    promConfigGenerator(brokerCount);
};
//# sourceMappingURL=configGenerator.js.map