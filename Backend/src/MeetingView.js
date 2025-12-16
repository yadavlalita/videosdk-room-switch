import { useMeeting } from "@videosdk.live/react-sdk";
import { ROOM_B } from "./constants";

const MeetingView = () => {
  const {
    join,
    leave,
    participants,
    startRelay,
    stopRelay,
  } = useMeeting();

  return (
    <div style={{ border: "1px solid #ccc", padding: 20 }}>
      <h2>Meeting Controls</h2>

      <button onClick={join}>Join Room</button>
      <button onClick={leave} style={{ marginLeft: 10 }}>
        Leave Room
      </button>

      <hr />

      <h3>Media Relay</h3>
      <button onClick={() => startRelay({ meetingId: ROOM_B })}>
        Relay Media to Room B
      </button>
      <button onClick={stopRelay} style={{ marginLeft: 10 }}>
        Stop Relay
      </button>

      <hr />

      <h3>Participants</h3>
      {[...participants.keys()].map((id) => (
        <p key={id}>{id}</p>
      ))}
    </div>
  );
};

export default MeetingView;
