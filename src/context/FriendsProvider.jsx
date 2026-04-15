import React, { Children, createContext, useState } from 'react';
import FriendsCard from '../components/FriendsCard/FriendsCard';



export const FriendContext = createContext();

const FriendsProvider = ({children}) => {

    const [textList, setTextList] = useState([]);
    
        const handleText = (currentFriend) =>{
    
        const isExistFrined = textList.find((text)=> text.id === currentFriend.id);
        if(isExistFrined){
            alert("The friend call history is here")
        }else{
            setTextList([...textList, currentFriend])
        }
        console.log(currentFriend, textList, "Friend");
    
        }

    const [callList, setcallList] = useState([]);
    
        const handleCall = (currentFriend) =>{
    
        const isExistFrined = callList.find((call)=> call.id === currentFriend.id);
        if(isExistFrined){
            alert("The friend call history is here")
        }else{
            setcallList([...callList, currentFriend])
        }
        console.log(currentFriend, callList, "Friend");
    
        }

    const [videoList, setVideoList] = useState([]);
    
        const handleVideo = (currentFriend) =>{
    
        const isExistFrined = videoList.find((video)=> video.id === currentFriend.id);
        if(isExistFrined){
            alert("The friend video call history is here")
        }else{
            setVideoList([...videoList, currentFriend])
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