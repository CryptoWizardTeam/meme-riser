import React, { useState } from "react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const HomePage = () => {
  const [tokenAddress, setTokenAddress] = useState("1231243233");
  const [promotionType, setPromotionType] = useState("advanced");

  return (
    <div className="min-h-[calc(100dvh-120px)] px-4 lg:px-28">
      {/* Header */}
      <header className="flex bg-[hsla(0,0%,100%,.015)] p-6 rounded-3xl mx-auto items-center justify-center md:justify-between gap-2 px-4 sm:px-6 pt-9">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img src="/assets/icon.png" alt="" className="w-[24px] h-[24px]" />

          <span className="text-[#f6f6f6] text-[26px] font-medium">
            Promote
            <span className="text-[#6968ff]">Memes</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-3 sm:space-x-6">
          <div className="hidden sm:flex py-3 px-7 bg-[hsla(0,0%,100%,.02)] items-center gap-2.5 rounded-full hover:bg-[hsla(0,0%,100%,.03)] text-[#f6f6f6]">
            <span className="font-medium text-[17px]">Partial Outage</span>
            <div className="bg-yellow-500 -mr-1 w-3 aspect-square rounded-full relative">
              <div className="bg-yellow-500 w-3 aspect-square rounded-full animate-ping absolute"></div>
            </div>
          </div>
          {/* <button className="bg-[rgb(81_81_245/var(--tw-bg-opacity,1))] text-[#f6f6f6] hover:bg-[rgb(72_72_221/var(--tw-bg-opacity,1))] cursor-not-allowed opacity-50 py-3 px-7 text-[17px] duration-200 rounded-full flex items-center justify-center gap-2.5 font-medium relative">
            <img
              src="/assets/btn-icon.png"
              alt=""
              className="w-[16px] h-[12px] sm:w-[19px] sm:h-[15px]"
            />
            <span className="font-medium text-[14px] sm:text-base">
              Connect Wallet
            </span>
          </button> */}
          <WalletMultiButton />
        </div>
      </header>


      {/* Main Content */}
      <main className="flex flex-col items-center justify-center lg:mt-0 mt-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl w-full">
          <h1 className="text-[28px] sm:text-[36px] md:text-[45px] lg:text-[58px] font-semibold text-white leading-tight">
            <span className="relative">
              Promote{" "}
              <img
                src="/assets/circle.png"
                alt=""
                className="w-[340px] object-fill z-[-10000] lg:flex opacity-30 hidden absolute -left-2 top-[0px] h-[80px]"
              />
            </span>
            Your <span className="text-[#6968ff]">Meme Coin</span>
          </h1>
          <p className="text-[hsla(0,0%,100%,.7)] mt-2 sm:mt-1 font-light text-sm sm:text-base lg:text-[20px] mx-auto px-4">
            Let AI Amplify Your Solana Meme Coin Across Multiple Platforms
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl max-w-[600px] p-4 sm:p-6 lg:p-8 w-full bg-[hsla(0,0%,100%,.02)] space-y-4 sm:space-y-6 mx-4">
          {/* Token Address Input */}
          <div className="space-y-2">
            <label className="text-[hsla(0,0%,96%,.7)] text-[14px] sm:text-sm font-light">
              Token Address
            </label>
            <input
              type="text"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              className="w-full px-3 sm:px-4 py-3 bg-[hsla(0,0%,100%,.025)] border border-transparent rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ef4444] transition-colors text-[14px] sm:text-base"
              placeholder="Enter token address"
            />
          </div>

          {/* Promotion Type Selection */}
          <div className="space-y-2">
            <label className="text-[hsla(0,0%,96%,.7)] text-[14px] sm:text-sm font-light">
              Promotion Type
            </label>
            <div className="relative">
              <select
                value={promotionType}
                onChange={(e) => setPromotionType(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 bg-[hsla(0,0%,100%,.025)] border border-transparent rounded-lg text-white focus:outline-none focus:border-[#ef4444] transition-colors appearance-none cursor-pointer text-[14px] sm:text-base"
              >
                <option value="basic">Basic (10 minutes) - Free</option>
                <option value="advanced">Advanced (3 hours) - 0.1 SOL</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Connect Wallet Button */}
          {/* <div className="flex space-x-1 sm:space-x-2 bg-[#2f2f79] w-full justify-center items-center hover:opacity-80 px-3 sm:px-4 rounded-[60px] py-3 sm:py-4 text-white transition-colors"> */}
            {promotionType === "basic" ? (
              <div className="flex space-x-1 sm:space-x-2 bg-[#2f2f79] w-full justify-center items-center hover:opacity-80 px-3 sm:px-4 rounded-[60px] py-3 sm:py-4 text-white transition-colors">
                <span className="font-medium text-sm sm:text-base">
                  Promoted Meme Coin (Free)
                </span>
              </div>
            ) : (
              <>
                {/* <img
                  src="/assets/btn-icon.png"
                  alt=""
                  className="w-[16px] h-[12px] sm:w-[19px] sm:h-[15px]"
                />
                <span className="font-medium text-sm sm:text-base">
                  Connect Wallet
                </span> */}
                <div className="flex justify-center items-center">
                  <WalletMultiButton />
                </div>
              </>
            )}
          {/* </div> */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
