import { useEffect, useState } from "react";
import { getToken } from "./api";
import { ROOM_A, ROOM_B } from "./constants";
import MeetingWrapper from "./MeetingWrapper";
import MeetingView from "./MeetingView";

function App() {
  const [token, setToken] = useState(null);
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    getToken().then(setToken);
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>VideoSDK Room Switching Demo</h1>

      <button onClick={() => setRoomId(ROOM_A)}>
        Join Room A
      </button>

      <button
        onClick={() => setRoomId(ROOM_B)}
        style={{ marginLeft: 10 }}
      >
        Switch to Room B (Normal)
      </button>

      <hr />

      <MeetingWrapper token={token} roomId={roomId}>
        <MeetingView />
      </MeetingWrapper>
    </div>
  );
}

export default App;
