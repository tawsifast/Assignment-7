import React, { use, useContext, useState } from 'react';
import { LuArchiveRestore } from 'react-icons/lu';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { Link, useParams } from 'react-router';
import BannerCard from '../../components/BannerCard/BannerCard';
import call from "../../../public/image/call.png"
import video from "../../../public/image/video.png"
import text from "../../../public/image/text.png"
import { FriendContext } from '../../context/FriendsProvider';


const friendsPromise = fetch("/data.json").then((res) => res.json());

const FriendsDetails = () => {
    

    const {handleCall, callList, setcallList,  textList, setTextList, handleText, videoList, setVideoList, handleVideo}
     = useContext(FriendContext);
    console.log(handleCall, callList,);

    
    const friends = use(friendsPromise);
    // console.log(friends);
    const {id} = useParams();

    const expectedFriend = friends.find((friend)=> friend.id === parseInt(id));
    // console.log(expectedFriend,"expected");

    const {picture, name, status,email, tags, bio, goal, days_since_contact, next_due_date} = expectedFriend;

    return (
        <div className='w-11/12 mx-auto grid grid-cols-3 my-20 justify-between gap-20'>
            
    <div className="col-span-1  p-2">
        <div className='shadow-md flex flex-col justify-center py-2 px-1 space-y-2 items-center rounded-2xl'>
         <img
        src={picture}
        alt="Movie" 
        className='w-34 h-34 rounded-full'
      />
      <p><span className={`badge text-white p-2 ${
        status === "Overdue"? "badge-error": status === "Almost Due"? "badge-warning" : "badge-success"}`}>{status}</span></p>

         <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline">{tag}</span>
          ))}
        </div>
             <p className='text-center text-gray-500 my-2'>{bio}</p>
             <p className='text-gray-500'>Preferred : {email}</p>
        </div>

        <div className='flex flex-col gap-7 mt-5 text-center'>
            <p className='font-semibold shadow-md p-3 flex items-center justify-center gap-3'><RiNotificationSnoozeLine />Snooze 2 weeks</p>
            <p className='font-semibold shadow-md p-3 flex items-center justify-center gap-3'><LuArchiveRestore />Archive</p>
            <p className='font-semibold shadow-md p-3 text-red-500 flex items-center justify-center gap-3'><RiDeleteBinLine />Delete</p>
        </div>
  
    </div>

    <div className='col-span-2 space-y-5'>
        <div className='flex justify-between'>
        <BannerCard num={days_since_contact} word={"Day since contact"}/>
        <BannerCard num={goal} word={"Goal (Days)"}/>
        <BannerCard num={next_due_date} word={"Next Due"}/>
        </div>

        <div className=' bg-base-200 flex justify-between shadow-md p-10'>
            <div className='space-y-2'>
                <h2 className='font-semibold text-[#244D3F]'>Relationship Goal</h2>
                <p className=''> Connect every <span className='font-bold'>30 days</span></p>
            </div>
            <button className='btn'>Edit</button>
        </div>

        <div className='space-y-5 my-10 p-9  bg-base-200 shadow-md'>
            <h2 className='font-semibold  text-[#244D3F] text-lg'>Quick Check-In</h2>
            <div className='flex justify-between items-center'>


                <button onClick={()=>handleCall(expectedFriend)} className='btn py-10 px-15 flex flex-col text-lg'>
                <img src={call} alt="" className='w-8'/>Call</button>
                <button onClick={()=>handleText(expectedFriend)} className='btn py-10 px-15 flex flex-col text-lg'>
                <img src={text} alt="" className='w-8'/>Text</button>
                <button onClick={()=>handleVideo(expectedFriend)} className='btn py-10 px-15 flex flex-col text-lg'>
                <img src={video} alt="" className='w-8'/>Video</button>
               
            </div>
        </div>
      
    </div>
        </div>
    );
};

export default FriendsDetails;