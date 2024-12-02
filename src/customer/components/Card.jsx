import React from "react";
import { Link } from "react-router-dom";

const Card = ({ productName, productPrice, productId, imagePath }) => {
  return (
    <div className="relative m-2 inline-block h-[20rem] min-h-[20rem] w-[17rem] space-y-4 overflow-hidden rounded-xl shadow-2xl">
      <Link
        to={`/product-list/${productId}`}
        className="space-y-2 rounded-full text-base font-bold text-cyan-600"
      >
        <div className="absolute -right-[75px] top-[240px] h-[30rem] w-[30rem] skew-x-[19deg] skew-y-[-9deg] rounded-xl bg-gradient-to-tl from-green-500 via-green-300 to-cyan-300 shadow-xl transition-all ease-in-out hover:top-[235px]"></div>

        <img
          src={imagePath}
          alt="anh"
          className="h-[15rem] w-full rounded-t-xl pt-[0px]"
        />

        <h2 className="absolute right-7 top-[15rem] w-[170px] overflow-hidden text-ellipsis whitespace-nowrap text-slate-100">
          {productName}
        </h2>
        <div className="absolute right-28 top-[265px] flex text-red-400">
          <p className="pt-[2px] font-semibold">$</p>
          <p className="text-lg">{productPrice}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
