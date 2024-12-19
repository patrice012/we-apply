/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  CloseCircle,
  HambergerMenu,
} from "iconsax-react";
import { useRef, useState } from "react";

export default function Home() {
  const [isShow, setShow] = useState(false);

  // Reference to the container div
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Reference for an array of child div elements
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to scroll to a specific index
  const scrollToIndex = (index: number) => {
    if (itemsRef.current[index] && containerRef.current) {
      const targetItem = itemsRef.current[index];
      containerRef.current.scrollTo({
        left: targetItem?.offsetLeft - 30, // Scroll horizontally
        behavior: "smooth", // Smooth animation
      });
      setCurrentIndex(index); // Update current index
    }
  };

  // Next and Previous button handlers
  const handleNext = () => {
    if (currentIndex < itemsRef.current.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className="bg-[url('/Hero.png')] bg-center bg-cover w-full flex flex-col bg-no-repeat pb-[80px]">
        <div className="flex lg:px-[60px] md:px-[40px] px-[20px] py-4 justify-between w-full items-center">
          <img src="/logo.svg" alt="" />
          <div className="hidden lg:flex items-center gap-8 text-base">
            <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
              Home
            </span>
            <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
              How it works
            </span>
            <div className="flex items-center gap-2 text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
              <span>About</span>
              <ArrowDown2 size={15} color="white" />
            </div>
            <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
              Support
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-8">
              <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                Log in
              </span>
              <button className="bg-[#F83E3E] transition-all ease-in-out duration-300 py-3 px-8 rounded-full hover:bg-[#F83E3E]/80">
                Sign Up
              </button>
            </div>

            <div
              onClick={() => setShow(true)}
              className="flex lg:hidden justify-center items-center rounded-sm cursor-pointer border size-[30]"
            >
              <HambergerMenu color="#fff" size={25} />
            </div>
          </div>
        </div>
        {isShow && (
          <div className="grid grid-cols-[0.45fr_1.65fr] bg-[#5150509c] fixed right-0 top-0 w-full h-full z-[1000]">
            <div className="px-4 py-16 z-20 " onClick={() => setShow(false)}>
              <CloseCircle size="32" color="#fff" />
            </div>
            <div className=" flex flex-col text-[#fff] gap-[24px] right-0  top-0 bg-neutral-900  h-full px-8 py-12 pb-2 rounded-s-2xl">
              <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                Home
              </span>
              <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                How it works
              </span>
              <div className="flex items-center gap-2 text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                <span>About</span>
                <ArrowDown2 size={15} color="white" />
              </div>
              <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                Support
              </span>
            </div>
          </div>
        )}
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-[30px] xl:gap-[100px] w-full lg:px-[60px] md:px-[40px] px-[20px] py-[30px] sm:py-[60px] md:py-[100px] lg:py-[120px]">
          <div className="flex flex-col gap-[50px] items-center text-center lg:text-start lg:items-start lg:w-[70%]">
            <div className="flex text-[40px] sm:text-[52px] md:text-[72px] xl:text-[76px] 2xl:text-[84px] flex-col gap-4 md:gap-8">
              <span className=" leading-none font-bold">Human - Crafted</span>
              <span className=" leading-none flex gap-2 self-center lg:self-start sm:gap-8 font-bold">
                Application{" "}
                <img
                  src="/attention.svg"
                  className="size-[60px] md:size-[80px]"
                  alt=""
                />
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-[#FAFAFA]"></div>
              <span>
                We apply to jobs on behalf of you to get you more interviews
              </span>
            </div>
          </div>
          <div className="flex flex-col text-center items-center lg:items-start lg:text-start gap-[50px] lg:w-[40%] xl:w-[35%] ">
            <span>
              Our applications are crafted by real people who understand the
              nuances of personalization and uniqueness. This ensures your job
              applications stand out with authenticity and human touch.
            </span>
            <div className="flex items-center gap-10 ">
              <div className="flex flex-col gap-1">
                <span className="text-[#F83E3E] font-bold text-[36px] md:text-[40px] xl:text-[48px] 2xl:text-[52px]">
                  100k +
                </span>
                <span>Applications sent</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F83E3E] font-bold text-[36px] md:text-[40px] xl:text-[48px] 2xl:text-[52px]">
                  95 %
                </span>
                <span>Interviews Called</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:px-[60px] md:px-[40px] px-[20px]  flex flex-col gap-5 lg:flex-row items-center justify-between w-full">
          <span className="uppercase text-[18px]">
            Personalized applications
          </span>
          <div className=" w-full sm:w-[450px] lg:w-[400px] xl:w-[581px] bg-[#ffffff3a] border items-center pl-8 pr-[6px] py-[6px] border-[#fff]/70 rounded-full h-[68px] justify-between flex ">
            <input
              type="text"
              color="#fff"
              placeholder="ENTER YOUR EMAIL"
              className="bg-transparent w-full rounded-l-full h-full outline-none"
            />
            <button className="uppercase bg-[#F83E3E] transition-all ease-in-out duration-300 py-4 px-8 rounded-full hover:bg-[#F83E3E]/80">
              REGISTER
            </button>
          </div>
          <span className="uppercase text-[18px]">
            Recruiters&apos; attention.
          </span>
        </div>
      </div>
      <div className="bg-[#000000] flex flex-col gap-[80px] py-[80px] ">
        <div className="flex flex-col ">
          <div className="flex md:flex-row flex-col gap-4 w-full text-center md:text-start md:justify-between items-center lg:px-[60px] md:px-[40px] px-[20px]">
            <div className="flex flex-col gap-2">
              <span className="text-[24px] font-bold  ">
                Just graduating? We can help you
              </span>
              <span className="text-[#6A6B6C] md:w-[70%]">
                We can help you submit job applications on behalf of you so you
                stand out from the crowd
              </span>
            </div>
            <button className="bg-[#F83E3E] uppercase transition-all ease-in-out duration-300 py-3 px-8 rounded-full hover:bg-[#F83E3E]/80">
              REGISTER
            </button>
          </div>
          <div
            ref={containerRef}
            className="flex gap-10 items-center pt-[80px] lg:pl-[60px] md:pl-[40px] pl-[20px] pb-[40px] scrollbar-hide overflow-x-scroll"
          >
            {Array.from({ length: 9 }).map((em, idx) => (
              <div
                key={idx}
                ref={(el) => (itemsRef.current[idx] = el)}
                className=""
              >
                <div
                  className={`" relative w-[90vw] xs:w-[360px] h-[400px] xs:h-[450px]   overflow-hidden "`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br rounded-[20px] shadow-inner border-[#20235bb3] border from-[#20235bb3] from-20% to-[#070921b8] to-82%">
                    <div className="relative p-6 pb-12 z-10 flex flex-col h-full justify-between w-full text-white">
                      <div className="flex gap-2 w-full pb-6  border-b border-[#20235bb3] items-center">
                        <img src="/Img_margin.svg" alt="" />
                        <span>Job Application</span>
                      </div>

                      <div className="flex flex-col gap-4">
                        <span className="text-[24px] font-medium">
                          Search salaries by major
                        </span>
                        <span>
                          We can help you search salaries by major and lorem
                          ipsum
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div></div>
          </div>
          <div className="flex w-full justify-between items-center lg:px-[60px] md:px-[40px] px-[20px]">
            <div className="flex flex-nowrap items-center gap-2">
              <span>Show all services</span>
              <ArrowRight color="#fff" size={15} />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="size-[50px] flex border border-[#6C6A6A] rounded-full shadow-inner items-center justify-center"
              >
                <ArrowLeft2 size={15} color="#fff" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === itemsRef.current.length - 1}
                className="size-[50px] flex border border-[#6C6A6A] rounded-full shadow-inner items-center justify-center"
              >
                <ArrowRight2 size={15} color="#fff" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:px-[60px] md:px-[40px] px-[20px]">
          <div className="flex w-full flex-col gap-[32px] rounded-[16px] text-center items-center justify-center p-[24px] md:p-[64px] bg-gradient-to-tr from-[#3599fd73] from-10% via-[#1B243C] via-80% to-[#3599fd73] ">
            <span className="font-semibold text-[36px]">
              Get Your 100 Free Applications
            </span>
            <span>Join with the users already growing with WeApply</span>
            <div className="w-full lg:w-[581px] bg-[#ffffff3a] border items-center pl-8 pr-[6px] py-[6px] border-[#fff]/70 rounded-full h-[68px] justify-between flex ">
              <input
                type="text"
                color="#fff"
                placeholder="ENTER YOUR EMAIL"
                className="bg-transparent w-full rounded-l-full h-full outline-none"
              />
              <button className="uppercase bg-[#F83E3E] transition-all ease-in-out duration-300 py-4 px-8 rounded-full hover:bg-[#F83E3E]/80">
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:px-[60px] md:px-[40px] px-[20px]">
        <div className="flex flex-col gap-4 lg:flex-row border-t border-[#6C6A6A] py-10 justify-between w-full items-center">
          <div className="flex flex-col  md:flex-row items-center gap-4 md:gap-[60px]">
            <img src="/logo.svg" alt="" />
            <div className="flex sm:flex-row flex-col items-center gap-4 sm:gap-8 text-base">
              <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                Home
              </span>
              <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                How it works
              </span>
              <div className="flex items-center gap-2 text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                <span>About</span>
                <ArrowDown2 size={15} color="white" />
              </div>
              <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
                Support
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <span>© 2024 WeApply. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
