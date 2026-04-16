import React, { Children, createContext, useState } from 'react';
import FriendsCard from '../components/FriendsCard/FriendsCard';
import { toast } from 'react-toastify';



export const FriendContext = createContext();

const FriendsProvider = ({children}) => {

    const [textList, setTextList] = useState([]);
    
        const handleText = (currentFriend) =>{
    
        const isExistFriend = textList.find((text)=> text.id === currentFriend.id);

        if(isExistFriend){
            toast.error("This text is already in the timeline")
        }else{
            setTextList([...textList, currentFriend]);
            toast.success(`Text with ${currentFriend.name}`)
        }
        console.log(currentFriend, textList, "Friend");
    
        }

    const [callList, setcallList] = useState([]);
    
        const handleCall = (currentFriend) =>{
    
        const isExistFriend = callList.find((call)=> call.id === currentFriend.id);
        if(isExistFriend){
           toast.error("This call is already in the timeline")
        }else{
            setcallList([...callList, currentFriend]);
            toast.success(`Call with ${currentFriend.name}`)
        }
        console.log(currentFriend, callList, "Friend");
    
        }

    const [videoList, setVideoList] = useState([]);
    
        const handleVideo = (currentFriend) =>{
    
        const isExistFriend = videoList.find((video)=> video.id === currentFriend.id);
        if(isExistFriend){
           toast.error("This video is already in the timeline")
        }else{
            setVideoList([...videoList, currentFriend]);
            toast.success(`Video with ${currentFriend.name}`)
        }
        console.log(currentFriend, videoList, "Friend");
    
        }
    

    const data ={
        callList,
        setcallList,
        handleCall,
        textList,
        setTextList,
        handleText,
        videoList,
        setVideoList,
        handleVideo
    }

    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};

export default FriendsProvider;