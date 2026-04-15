import React from "react";
import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
  // console.log(friend);
  return (

    <Link to={`/details/${friend.id}`}>
     

    <div className="card bg-base-100 shadow-sm h-100 overflow-hidden my-10">
  <figure className="py-6 bg-slate-200 mb-3">
    <img
      src={friend.picture}
      alt={friend.name}
      className="w-46 h-46 object-cover rounded-full"
      />
      
  </figure>
  <div className="flex flex-col justify-center items-center space-y-3 py-0 pb-5">
    <h2 className="card-title font-semibold text-2xl">{friend.name}</h2>
    <p className="text-md text-gray-500">{friend.days_since_contact}d ago</p>

    <div className="card-actions justify-center gap-4 font-semibold">
     {
        friend.tags.map((tag, ind)=>(
            <div key={ind} className="badge bg-green-200 py-4 px-2">{tag}</div>
        ))
     }
    </div>

    <div className={`badge badge-secondary py-4 px-2 font-semibold text-white ${friend.status === "Overdue" ? "badge-error": friend.status === "Almost Due"? "badge-warning":"badge-success"}`}>{friend.status}</div>
  </div>
</div>
    </Link>
  );
};

export default FriendsCard;
