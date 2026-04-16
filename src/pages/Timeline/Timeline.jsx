import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendsProvider";
import callImg from "../../../public/image/call.png";
import textImg from "../../../public/image/text.png";
import videoImg from "../../../public/image/video.png";
import CallVideoText from "../../components/ui/callVideoText";


const Timeline = () => {
  const { callList, setcallList } = useContext(FriendContext);
  console.log(callList, "sjkdc");

  const { textList, setTextList } = useContext(FriendContext);

  const { videoList, setVideoList } = useContext(FriendContext);

  // for serach funtionality
  const [filter, setFilter] = useState("");


  return (
    <div className="w-10/12 mx-auto flex flex-col justify-center ">
      <div className="p-5">
        <h2 className="font-bold text-2xl">Timeline</h2>

        <input
          type="text"
          className="input mt-8"
          placeholder="Filter Timeline"
          list="browsers"
          //  input এ যা আছে সেটা filter state এর সাথে connected
          value={filter}
          //  যখনই কিছু টাইপ করব, e.target.value দিয়ে সেই value টা filter state এ সেভ হবে
          onChange={(e)=>setFilter(e.target.value)}
          // প্রতিটা কী-প্রেসে filter আপডেট হয় এবং React পুরো component আবার render করে
        />
        <datalist id="browsers">
          <option value="Call"></option>
          <option value="Text"></option>
          <option value="Video"></option>
        </datalist>
      </div>

      <div className="space-y-5 my-5">


        {/* {(filter === "" || filter.toLowerCase() === "call")  && callList.map((calls) => (
          <CallVideoText call={calls} name={"Call"} img={callImg} />
        ))} */}

        {/* input খালি থাকলে সব দেখাবে */}
        {/* "call".includes(...) → "call" এর মধ্যে টাইপ করা অক্ষর আছে কিনা চেক করে */}
        {(filter === "" || "call".includes(filter.toLowerCase())) && callList.map((calls) => (
          <CallVideoText call={calls} name={"Call"} img={callImg} />
        ))}

        {(filter === "" || "text".includes(filter.toLowerCase())) && textList.map((texts) => (
          <CallVideoText call={texts} name={"Text"} img={textImg} />
        ))}
        {(filter === "" || "video".includes(filter.toLowerCase()))  && videoList.map((videos) => (
          <CallVideoText call={videos} name={"Video"} img={videoImg} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
