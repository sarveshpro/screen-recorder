import React from "react";
import useScreenRecording from "use-screen-recording";
import "./App.css";

function App() {
  const { isRecording, recording, toggleRecording } = useScreenRecording();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div className="App">
      <div className="navbar">
        <button
          className="btn"
          onClick={() => {
            isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      <div className="headingContainer">
        <h1>Screen Recorder</h1>
        <button className="btn-primary" onClick={toggleRecording}>
          {isRecording ? "Stop" : "Start Recording"}
        </button>
      </div>

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
      {isLoggedIn ? (
        <div>
          <h2>My Recordings</h2>
          <div className="prevRecordings">
            {[...Array(10).keys()].map((n) => {
              return (
                <div className="recordingSingle">
                  <h4>Video {n + 1}</h4>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
