import { MeetingProvider } from "@videosdk.live/react-sdk";

const MeetingWrapper = ({ token, roomId, children }) => {
  if (!token || !roomId) return null;

  return (
    <MeetingProvider
      config={{
        meetingId: roomId,
        micEnabled: true,
        webcamEnabled: true,
        name: "Demo User",
      }}
      token={token}
    >
      {children}
    </MeetingProvider>
  );
};

export default MeetingWrapper;
