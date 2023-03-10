import React from "react";

import HeaderStyle from "../reusable_components/HeaderStyle";
import ButtonStyle from "../reusable_components/ButtonStyle";

import service_1 from "../assets/images/service-1.png";
import service_2 from "../assets/images/service-2.png";
import service_3 from "../assets/images/service-3.png";

export default function Service() {
  const containerStyle1 =
    "flex flex-col justify-center gap-10 border-2 border-gray-200 border-solid pb-4 hover:shadow-xl";
  const containerStyle2 =
    "flex flex-col items-center justify-center gap-2 px-14 sm:px-4";

  const cutStyle = "font-poppins uppercase text-base text-gray-800 font-bold";
  const pStyle = "font-poppins text-gray-500 text-xs pb-2";

  return (
    <section id='service' className='px-12 py-28 bg-gray-100 sm:px-40'>
      <HeaderStyle color={"gray"} text={"Nothing But The Best"} />
      <HeaderStyle color={"gold"} text={"Our Services"} />

      <div className='flex flex-col items-center justify-center gap-10 sm:flex-row pt-10'>
        <section className={containerStyle1}>
          <img src={service_1} alt='' />
          <div className={containerStyle2}>
            <h3 className={cutStyle}>Classic Haircut</h3>
            <p className={pStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonStyle color={"black"} />
          </div>
        </section>

        <section className={containerStyle1}>
          <img src={service_2} alt='' />
          <div className={containerStyle2}>
            <h3 className={cutStyle}>Clipper Cut</h3>
            <p className={pStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonStyle color={"black"} />
          </div>
        </section>

        <section className={containerStyle1}>
          <img src={service_3} alt='' />
          <div className={containerStyle2}>
            <h3 className={cutStyle}>Razoe Shaver</h3>
            <p className={pStyle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonStyle color={"black"} />
          </div>
        </section>
      </div>
    </section>
  );
}
