import React from 'react'
import { Trans } from 'react-i18next'
import { IoMdStar } from 'react-icons/io'
import { Link } from 'react-router-dom'


const PremiumAd = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-600 via-emerald-900 to-black text-white p-10 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around items-center">
      <div className="flex flex-col gap-7">
        <h1 className="text-xl md:text-3xl font-thin py-5 pr-5">
          {" "}
          <Trans i18nKey={"description.premium0p1"} />{" "}
          <span className="font-medium text-emerald-300">Recipo</span>
        </h1>
        <p className="text-md md:text-lg font-thin flex gap-2 items-center">
          <IoMdStar size={25} className="text-emerald-300" />
          <Trans i18nKey={"description.premium0p2"} />
        </p>
        <p className="text-md md:text-lg font-thin flex gap-2 items-center">
          <IoMdStar size={25} className="text-emerald-300" />
          <Trans i18nKey={"description.premium0p3"} />{" "}
          <span className="text-emerald-300 font-medium">Recipo Premium</span>.
        </p>
      </div>
      <Link
        to={"/Subscriptions"}
        className="bg-emerald-500 px-4 py-4 active:shadow-lg active:shadow-emerald-700/50 hover:shadow-lg hover:shadow-emerald-400/60 hover:bg-emerald-400 duration-150  hover:scale-105 active:bg-emerald-700 rounded-full flex gap-2 items-center font-medium z-10"
      >
        <IoMdStar size={21} />
        <Trans i18nKey={"description.premium0button"} />
      </Link>
    </div>
  );
}

export default PremiumAd