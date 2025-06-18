import Lottie from "lottie-react";
import logoAnimation from "../../assets/lottie/logo.json";

export default function LogoAnimated() {
  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        minWidth: "150px",
        minHeight: "150px",
        maxWidth: "150px",
        maxHeight: "150px",
      }}
    >
      <Lottie
        animationData={logoAnimation}
        loop={false}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
