import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {

    const {roomID} = useParams();
    
    let myMeeting = async (element) => {
      const appID = 120548491;
      const serverSecret = "8af1ad1491ae1bad06cabaf1b8387a76";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,
        Date.now().toString(), 'Anjali');

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Personal link',
                url:`http://localhost3000/room/${roomID}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });    
    };

  return (
    <div ref={myMeeting}></div>
  )
}

export default Room