import React, { useEffect, useState } from "react";
import landingPage from "../landingImage4.jpg";
import "./LandingImage.css";

const LandingImage = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center mt-3"
        style={{
          backgroundImage: `url(${landingPage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
          height: "75vh",
        }}
      >
        <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg"></div>
      </div>
    </>
  );
};

export default LandingImage;
