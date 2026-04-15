import React from "react";

const CallVideoText = ({ call, img, name }) => {
  return (
    <div>
      <div className="w-10/12 mx-auto flex items-center p-8 rounded-lg  gap-10 shadow-md my-10">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h2 className="text-lg">
            <span className="text-[#244D3F] font-semibold text-xl">{name}</span> :{" "}
            {call.name}
          </h2>
          {/* <p>March 29, 2026</p> */}
          <p>
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallVideoText;
