// use client
import { Fragment } from "react";
import Image from "next/image";
import Cover from '../img/cover.png'
import StartOne from '../img/startOne.png'
import StartTwo from '../img/startTwo.png'
import StartThree from '../img/startThree.png'
import OptionOne from '../img/optionOne.png'
import OptionTwo from '../img/optionTwo.png'

function Hreo () {


  return (
    <Fragment>
      <Image
        src={Cover}
        alt="cover"
        className="w-full"
        priority
      />
      <div className="w-full  pl-16 pr-16 pt-20">
        <p className="decoration-black text-4xl mb-20">Getting started</p>
        <div className="fext-2xl decoration-black  mb-20">
          Material Icons are available in five styles and a range of downloadable sizes and densities. The icons are crafted based on the core design principles and metrics of Material Design guideline. Our icons are free for everyone to use. It’s available under Apache license version 2.0. Suggestions and/or feedback? Ping us @googlefonts on Twitter.
        </div>
        <div className="flex items-center justify-between">
          <Image
            src={StartOne}
            alt="StartOne"
            className="w-4/12 mr-2.5"
            priority
          />
          <Image
            src={StartTwo}
            alt="StartTwo"
            className="w-4/12 mr-2.5"
            priority
          />
          <Image
            src={StartThree}
            alt="StartThree"
            className="w-4/12"
            priority
          />
        </div>
        <div className="flex mt-5 mb-20 pb-20 border-b-2 border-gray-300">
          <p
            className="decoration-black text-base w-4/12 mr-2.5"
          >
            In this file, over 2000 Material Design icons are built as components in 5 variants: Filled, Outlined, Sharp, Rounded, Two-tone. 
          </p>
          <p
            className="decoration-black text-base w-4/12 mr-2.5"
          >
            Properties can be changed via the menu in the right hand Design panel. Use the menus to customize the icon’s properties.
          </p>
          <p
            className="decoration-black text-base w-4/12 "
          >
            Icon tags are added to the Component description. You can easily search icons by related keywords and tags from the Assets panel.
          </p>
        </div>
        <p className="decoration-black text-4xl mb-20">How to insert components to your design files</p>
        <div className="mb-20">
          <p className="decoration-black text-2xl mb-10">Option 1: Drag and drop components from Assets panel</p>
          <div className="flex flex-row">
            <Image
              src={OptionOne}
              alt="OptionOne"
              className="w-1/4"
              priority
            />
            <div className="ml-3.5">
              <p className="decoration-black text-base mb-3">1. Open the Assets panel in the left hand navigation (or press Alt/Option + 2).</p>
              <p className="decoration-black text-base mb-3">2. In the list of assets, locate the library “local components”. </p>
              <p className="decoration-black text-base ">3. To insert a component, click and drag the item from the menu and paste it into your working file. </p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <p className="decoration-black text-2xl mb-10">Option 2: Copy and paste icons from the ‘Material Design Icons’ page</p>
          <div className="flex flex-row">
            <Image
              src={OptionTwo}
              alt="OptionTwo"
              className="w-1/4"
              priority
            />
            <div className="ml-3.5">
              <p className="decoration-black text-base mb-3">1. Select the “Material Design Icons” page in the Layers panel in the left hand navigation.</p>
              <p className="decoration-black text-base mb-3">2. Copy the desired icon and paste it into your working file. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFEFD3]  pl-16 pr-16 pt-20 pb-20">
        <p className="font-serif text-3xl">Google Fonts</p>
        <div className="decoration-black flex justify-between mt-10">
          <span>Visit fonts.google.com for more resources and guidance to help you build your products.</span>
          <span>02.07.22 V1.5</span>
        </div>
      </div>
    </Fragment>
  )
}

export default Hreo