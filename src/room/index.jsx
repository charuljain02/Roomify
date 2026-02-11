import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();
  const myMeetingRef = useRef(null);

  useEffect(() => {
    // Wait until ref.current is available
    if (!myMeetingRef.current) return;

    const startMeeting = async () => {
      const appID = 403927921;
      const serverSecret = "a68cb06c3c0560b6975a927fbe14eaed";

      // Generate token
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Piyush"
      );

      // Create instance
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Join room
      zp.joinRoom({
        container: myMeetingRef.current, // attach to DOM
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference, // make sure SDK version supports this
        },
        showPreJoinView: true, // optional: shows "join" screen before connecting
      });
    };

    startMeeting();
  }, [roomId]);

  return (
    <div className="room-page" style={{ width: "100vw", height: "100vh" }}>
      <div
        className="meeting-container"
        ref={myMeetingRef}
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default RoomPage;
