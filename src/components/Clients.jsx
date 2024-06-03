import React from "react";
import tanyaLogo from "../assets/brandLogos/tanya-logo.png";
import constantinLogo from "../assets/brandLogos/ConstantinLogo.svg";
import mellaLogo from "../assets/brandLogos/mella-logo.png";
import etstride from "../assets/brandLogos/etstride.png";
import { TranslationContext } from "../App";

const Clients = () => {
  const t = React.useContext(TranslationContext);
  return (
    <>
      <div className="flex flex-col items-center  max-w-[80%] md:max-w-[60%] mx-auto mb-[5em] mt-[4em]">
        <h1
          className="raleway text-[13px] text-[#5C6063] my-[3em] text-center"
          style={{ letterSpacing: "6px" }}
        >
          {t("brands")}
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-4">
          <div className="my-auto cursor-pointer">
            <img src={mellaLogo} className="" />
          </div>

          <div className="cursor-pointer">
            <img src={etstride} className="" />
          </div>
          <div className="flex cursor-pointer flex justify-center items-center">
            <img src={tanyaLogo} className="w-1/2 h-1/2" />
          </div>
          <div className="cursor-pointer">
            <img src={constantinLogo} className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
