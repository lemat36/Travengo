import Image from "next/image";
import React from "react";

export default function PopularTours() {
  const pays: string[] = [
    "POLAND",
    "GERMANY",
    "SWITZERLAND",
    "SWEDEN",
    "NORWAY",
    "ITALY",
  ];
  const countryImages: { [key: string]: string } = {
    POLAND: "/images/a7b4bb1e-5779-4d46-9d57-b2f014f9f150.jpg",
    GERMANY: "/images/56ed2e60-09a9-441b-9e35-75736a3cf89a.jpg",
    SWITZERLAND: "/images/5d616ba5-6c83-42c6-87a7-cc34fbdce225.jpg",
    SWEDEN: "/images/b088dd58-e936-478f-a765-af739bc19172.jpg",
    NORWAY: "/images/4c47dc82-ef55-4c1e-944e-3f3966bcbeb2.jpg",
    ITALY: "/images/3037cc90-8101-4389-b16e-c6469c7a7b59.jpg",
  };

  return (
    <>
      <div className="py-8 px-10 max-h-max">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Popular Tours</h2>
          <p className="text-gray-600">
            Check out the Most Popular Tours offered by Travengo.
          </p>
        </div>
        <div className="grid  md:grid-cols-3 gap-10">
          {pays.map((pay: string, index: number) => (
            <div key={index} className="bg-white">
              <div className="relative w-full h-72">
                <Image
                  src={countryImages[pay]}
                  alt={pay}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
                <div className="absolute mt-40 inset-0 flex flex-col justify-center items-center text-center ">
                  <h3 className="text-3xl font-bold mb-2 text-white">{pay}</h3>
                  <p className="text-white text-xl">14 jours</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-orange-500 text-white px-4 py-3 ">
            Show All
          </button>
        </div>
      </div>
    </>
  );
}
