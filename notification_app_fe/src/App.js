import { useEffect, useState } from "react";
import { Log } from "./utils/logger";
import "./App.css";

function App() {
  const [status, setStatus] = useState("");
  const [lastLog, setLastLog] = useState(null);

  const sendLog = async (level, pkg, message) => {
    setStatus("Sending...");
    setLastLog({
      level,
      message,
      time: new Date().toLocaleTimeString(),
    });

    try {
      await Log("frontend", level, pkg, message);
      setStatus("Sent ✅");
    } catch {
      setStatus("Failed ❌");
    }
  };

  useEffect(() => {
    sendLog("info", "component", "App loaded");
  }, []);

  return (
    <div className="container">
      <h1 className="title">Frontend Logging Dashboard 🚀</h1>

      <div className="card">
        <p>Test different log actions:</p>

        <button onClick={() => sendLog("info", "component", "Info log triggered")}>
          Info Log
        </button>

        <button onClick={() => sendLog("warn", "api", "Warning log triggered")}>
          Warning Log
        </button>

        <button onClick={() => sendLog("error", "component", "Error log triggered")}>
          Error Log
        </button>

        <button onClick={() => sendLog("debug", "state", "Debug log triggered")}>
          Debug Log
        </button>

        <div className="status">
          <p><b>Status:</b> {status}</p>

          {lastLog && (
            <div className="log-preview">
              <b>Last Log:</b> [{lastLog.level}] {lastLog.message} • {lastLog.time}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;