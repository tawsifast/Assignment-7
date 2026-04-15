import React, { useContext } from 'react';
import { FriendContext } from '../../context/FriendsProvider';
import callImg from "../../../public/image/call.png"
import textImg from "../../../public/image/text.png"
import videoImg from "../../../public/image/video.png"
import CallVideoText from '../../components/ui/callVideoText';

const Timeline = () => {

    const {callList, setcallList} = useContext(FriendContext);
    console.log( callList, "sjkdc");

   
    const {textList, setTextList} = useContext(FriendContext);

    const {videoList, setVideoList} = useContext(FriendContext);

    return (
        
        <div>
            {
                callList.map((calls)=>(
                    <CallVideoText call={calls} name={"Call"} img={callImg}/>
                ))
            }

            {
                textList.map((texts)=>(
                    <CallVideoText call={texts} name={"Text"}  img={textImg}/>
                ))
            }
            {
                videoList.map((videos)=>(
                    <CallVideoText call={videos} name={"Video"}  img={videoImg}/>
                ))
            }

           
        </div>
    );
};

export default Timeline;