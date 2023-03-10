import React from "react";

import HeaderStyle from "../reusable_components/HeaderStyle";
import ButtonStyle from "../reusable_components/ButtonStyle";

import aboutImage from "../assets/images/1.png";

export default function AboutSection() {
  const pStyle = "text-sm text-gray-500";
  return (
    <section
      id='about'
      className='text-left px-12 py-28 flex flex-col gap-10 justify-evenly items-center sm:flex-row sm:px-40'
    >
      <div className='flex flex-col gap-10 sm:w-[50%]'>
        <div>
          <HeaderStyle color={"gray"} text={"The Unique Story"} />
          <HeaderStyle color={"gold"} text={"50 Years of Experience"} />
        </div>

        <p className={pStyle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className={pStyle}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium.
        </p>

        <ButtonStyle color={"gold"} />
      </div>
      <img className='sm:w-[50%]' src={aboutImage} alt='' />
    </section>
  );
}
