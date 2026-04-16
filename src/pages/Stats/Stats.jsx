import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../../context/FriendsProvider";
const Stats = () => {

  const { callList } = useContext(FriendContext);
  const { textList } = useContext(FriendContext);
  const { videoList} = useContext(FriendContext);

  const data = [
    { name: "Text", value: textList.length, fill: "#0088FE" },
    { name: "Call", value: callList.length, fill: "#00C49F" },
    { name: "Video", value: videoList.length, fill: "#FF8042" },
  ];

  return (
    <div className="my-10 w-10/12 mx-auto">
        <div>
            <h2 className="font-bold text-3xl">Friendship Analytics</h2>
        </div>
        <div className="my-10 shadow-lg p-10">
            <p className="text-xl text-gray-600">By Interaction Type</p>
    <PieChart
      style={{
        width: "100%",
        maxWidth: "350px",
        maxHeight: "80vh",
        aspectRatio: 1,
        margin:"auto"
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Tooltip />
      <Legend />
    </PieChart>
    </div>
    </div>
  );
};

export default Stats;
