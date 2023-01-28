import React from "react";
import profile from "../assets/profile.jpg";
import thumbnail1 from "../assets/thumbnail1.jpg";
import thumbnail2 from "../assets/thumbnail2.jpg";
import thumbnail3 from "../assets/thumbnail3.jpg";
import thumbnail4 from "../assets/thumbnail4.jpg";
import thumbnail5 from "../assets/thumbnail5.jpg";
import thumbnail6 from "../assets/thumbnail6.jpg";
import thumbnail7 from "../assets/thumbnail7.jpg";
import thumbnail8 from "../assets/thumbnail8.jpg";
import thumbnail9 from "../assets/thumbnail9.jpg";
import thumbnail10 from "../assets/thumbnail10.jpg";
import thumbnail11 from "../assets/thumbnail11.jpg";
import thumbnail12 from "../assets/thumbnail12.jpg";
import ContentCard from "./ContentCard";

const Content = () => {
  const videos = [
    {
      photo: thumbnail1,
      title: "World Cup Match live from the stadium join now 2022  ",
      profile: profile,
    },
    {
      photo: thumbnail2,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail3,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail4,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail5,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail6,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail7,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail8,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail9,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail10,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail11,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
    {
      photo: thumbnail12,
      title: "World Cup Match live from the stadium join now 2022",
      profile: profile,
    },
  ];
  return (
    <div className="px-5 lg:px-6 pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video, index) => (
        <ContentCard
          key={index}
          photo={video.photo}
          title={video.title}
          profile={video.profile}
        />
      ))}
    </div>
  );
};

export default Content;
