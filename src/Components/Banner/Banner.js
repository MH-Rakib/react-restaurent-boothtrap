import React from "react";
import BannerImage from "../../Assets/bannerbackground.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner_image" src={BannerImage} alt="" />
      <h1 className="banner_text">Best Foods Are Waiting For Your Belly</h1>
    </div>
  );
};

export default Banner;
