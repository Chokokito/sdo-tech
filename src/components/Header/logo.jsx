import React from "react";
import Lottie from "lottie-react";
import logoAnimation from "../../assets/Lottie/logo.json";

export default function LogoAnimated() {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
      }}
    >
      <Lottie
        animationData={logoAnimation}
        loop={false}
        autoplay={true}
        style={{ width: "100%", height: "70px" }}
      />
    </div>
  );
}
