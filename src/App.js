import React, { useState } from "react";
import mqtt from "mqtt";

const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt"); // Connect via WebSocket

function App() {
  const [message, setMessage] = useState("");

  const publishMessage = () => {
    client.publish(
      "print/job",
      JSON.stringify({ document: message }),
      {},
      (error) => {
        if (error) {
          console.error("Publish error:", error);
        }
      }
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={publishMessage}>Send Print Job</button>
    </div>
  );
}

export default App;
