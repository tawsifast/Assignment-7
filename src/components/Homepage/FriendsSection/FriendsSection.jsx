import React, { use } from "react";
import FriendsCard from "../../FriendsCard/FriendsCard";


const friendsPromise = fetch("/data.json").then((res) => res.json());
// console.log(friendsPromise);

const FriendsSection = () => {
  const frineds = use(friendsPromise);
  console.log(frineds);
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="font-bold text-4xl text-center md:text-left">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
        {frineds.map((friend) => {
          return <FriendsCard key={friend.id} friend={friend}/>;
        })}
      </div>
    </div>
  );
};

export default FriendsSection;
