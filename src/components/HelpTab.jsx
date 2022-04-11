import React, { Component, useState } from 'react';
// import clipboard from 'electron';
// const { clipboard } = require('electron')
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


const HelpTab = () => {

  const [copiedText, setCopiedText] = useState('');
  const topic = 'docker exec -it kafka101 \
  kafka-topics \
  --create \
  --partitions 6 \
  --replication-factor 3 \
  --topic demo-topic \
  --bootstrap-server kafka101:29092';
  const producer = 'docker exec -it kafka101 \
  kafka-producer-perf-test \
  --throughput 500 \
  --num-records 100000000 \
  --topic demo-topic \
  --record-size 100 \
  --producer-props bootstrap.servers=kafka101:29092';
  const consumer = 'docker exec -it kafka101 \
  kafka-consumer-perf-test \
  --messages 100000000 \
  --timeout 1000000 \
  --topic demo-topic \
  --reporting-interval 1000 \
  --show-detailed-stats \
  --bootstrap-server kafka101:29092';

  return (
    <><div>
      <h1>Quick Start</h1>
      <Grid container spacing={2}>
        <h3>Create a Topic:</h3>
        <Grid item xs={20} md={12} key={1} className="codeblock">
          <CopyToClipboard text={copiedText}>
            <button type="button" id="topic" className="copyButton" onClick={e => setCopiedText(topic)}>Copy</button>
          </CopyToClipboard>
          <Card class="code" value={topic}>$ docker exec -it kafka101 \ <br></br>
            kafka-topics \<br></br>
            --create \<br></br>
            --partitions 6 \<br></br>
            --replication-factor 3 \<br></br>
            --topic demo-topic \<br></br>
            --bootstrap-server kafka101:29092<br></br>
          </Card>
        </Grid>
        <h3>Produce messages:</h3>
        <Grid item xs={20} md={12} key={2} className="codeblock">
          <CopyToClipboard text={copiedText}>
            <button type="button" id="producer" className="copyButton" onClick={e => setCopiedText(producer)}>Copy</button>
          </CopyToClipboard>
          <Card class="code" value={producer}>$ docker exec -it kafka101 \ <br></br>
            kafka-producer-perf-test \<br></br>
            --throughput 500 \<br></br>
            --num-records 100000000 \<br></br>
            --topic demo-topic \<br></br>
            --record-size 100 \<br></br>
            --producer-props bootstrap.servers=kafka101:29092<br></br>
          </Card>
        </Grid>
        <h3>Consume messages:</h3>
        <Grid item xs={20} md={12} key={3} className="codeblock">
          <CopyToClipboard text={copiedText}>
            <button type="button" id="consumer" className="copyButton" onClick={e => setCopiedText(consumer)}>Copy</button>
          </CopyToClipboard>
          <Card class="code" value={consumer}>$ docker exec -it kafka101 \ <br></br>
            kafka-consumer-perf-test \<br></br>
            --messages 100000000 \<br></br>
            --timeout 1000000 \<br></br>
            --topic demo-topic \<br></br>
            --reporting-interval 1000 \<br></br>
            --show-detailed-stats \<br></br>
            --bootstrap-server kafka101:29092<br></br>
          </Card>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default HelpTab;
// module.exports = HelpTab;