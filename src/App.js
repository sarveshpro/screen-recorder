import React from "react";
import useScreenRecording from "use-screen-recording";
import "./App.css";

function App() {
  const { isRecording, recording, toggleRecording } = useScreenRecording();
  return (
    <div className="App">
      <h1>Screen Recorder</h1>
      <button className="btn-primary" onClick={toggleRecording}>
        {isRecording ? "Stop" : "Start Recording"}
      </button>

      {!!recording && (
        <div className="replay-container">
          <video
            className="video-preview"
            autoPlay
            src={recording && URL.createObjectURL(recording)}
          />

          <div className="share-recording">
            <a
              type="button"
              className="btn btn-social"
              download="Screen Recording"
              href={recording && URL.createObjectURL(recording)}
            >
              Share
            </a>
            <a
              type="button"
              className="btn btn-secondary"
              download="Screen Recording"
              href={recording && URL.createObjectURL(recording)}
            >
              Download
            </a>
            <a
              type="button"
              className="btn btn-youtube"
              download="Screen Recording"
              href={recording && URL.createObjectURL(recording)}
            >
              Upload
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
