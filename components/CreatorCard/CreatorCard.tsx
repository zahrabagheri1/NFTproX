import Image from "next/image";
import React from "react";

interface Props {
  user: string;
  image: string;
  price: string;
}
const CreatorCard = ({ image, user, price }: Props) => {
  return (
    <div className="text-center">
      <div>
        <Image
          src={`/images/${image}.jpg`}
          alt={user}
          width={150}
          height={150}
          className="mx-auto rounded-2xl"
        />
      </div>
      <h1 className="text-white text-[25px] mt-[1.5rem]">{user}</h1>
      <p className="text-yellow-600">{price}ETH</p>
    </div>
  );
};

export default CreatorCard;
