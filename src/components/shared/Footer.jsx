import React from "react";

const Footer = () => {
  return (
    <div className="w-full lg:px-52 px-6 py-6 bg-[hsla(0,0%,100%,.01)]">
      <div className="w-full flex flex-col gap-2 justify-center items-center max-w-[1600px] mx-auto">
        <p className="text-sm font-light text-center text-[hsla(0,0%,100%,.2)]">
          We do not guarantee any returns or promise any specific results from
          using our free plan. The promotion of coins on PromoteMemes or any
          other platform is not guaranteed. Users should exercise caution and
          conduct their own research before making any investment decisions.
          Cryptocurrency trading involves substantial risk and may not be
          suitable for all investors.
        </p>
        <p className="text-sm text-center text-[hsla(0,0%,100%,.3)] font-normal">Copyright © 2025 PromoteMemes</p>
      </div>
    </div>
  );
};

export default Footer;
