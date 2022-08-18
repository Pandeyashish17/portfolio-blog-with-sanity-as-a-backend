import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";

import loader1 from "../public/loader1.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="flex justify-center place-items-center bg-[#121212]"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Lottie options={defaultOptions} width={300} height={300} />
    </div>
  );
};

export default Loader;
