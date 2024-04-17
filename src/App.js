// src/App.js
import React, { useState } from "react";
import mqtt from "mqtt";

function App() {
  const [message, setMessage] = useState("");

  const handlePublish = () => {
    const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");
    client.on("connect", () => {
      client.publish("test/topic", message);
      console.log("Message published:", message);
      client.end();
    });
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>MQTT Publisher</h1>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter message to publish"
        style={{ marginRight: "10px" }}
      />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
}

export default App;
