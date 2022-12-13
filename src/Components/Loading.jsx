import React from "react";
import Lottie from "lottie-react";
import Load from "./../assets/lotties/loading-animation-blue.json";
export default function Loading() {
  return (
    <Lottie
      animationData={Load}
      loop={true}
      style={{ width: 200, height: 200 }}
    />
  );
}
