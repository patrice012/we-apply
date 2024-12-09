import { ArrowDown2, ArrowLeft2, ArrowRight, ArrowRight2 } from "iconsax-react";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/Hero.png')] bg-cover w-full flex flex-col bg-no-repeat pb-[80px]">
        <div className="flex px-[60px] py-10 justify-between w-full items-center">
          <img src="/logo.svg" alt="" />
          <div className="flex items-center gap-8 text-base">
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
            <span className="text-[#FAFAFA]/70 hover:text-[#FAFAFA] cursor-pointer">
              Log in
            </span>
            <button className="bg-[#F83E3E] transition-all ease-in-out duration-300 py-3 px-8 rounded-full hover:bg-[#F83E3E]/80">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex items-end gap-[100px] w-full px-[60px] py-[180px]">
          <div className="flex flex-col gap-[50px] w-[70%]">
            <div className="flex flex-col gap-8">
              <span className="text-[92px] leading-none font-bold">
                Human - Crafted
              </span>
              <span className="text-[92px] leading-none flex gap-8 font-bold">
                Application <img src="/attention.svg" alt="" />
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-[2px] bg-[#FAFAFA]"></div>
              <span>
                We apply to jobs on behalf of you to get you more interviews
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] w-[30%] ">
            <span>
              Our applications are crafted by real people who understand the
              nuances of personalization and uniqueness. This ensures your job
              applications stand out with authenticity and human touch.
            </span>
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-1">
                <span className="text-[#F83E3E] font-bold text-[52px]">
                  100k +
                </span>
                <span>Applications sent</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F83E3E] font-bold text-[52px]">
                  95 %
                </span>
                <span>Interviews Called</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-[60px] flex items-center justify-between w-full">
          <span className="uppercase text-[18px]">
            Personalized applications
          </span>
          <div className="w-[581px] bg-[#ffffff3a] border items-center pl-8 pr-[6px] py-[6px] border-[#fff]/70 rounded-full h-[68px] justify-between flex ">
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
          <div className="flex w-full justify-between items-center px-[60px]">
            <div className="flex flex-col gap-2">
              <span className="text-[24px] font-bold  ">
                Just graduating? We can help you
              </span>
              <span className="text-[#6A6B6C] w-[70%]">
                We can help you submit job applications on behalf of you so you
                stand out from the crowd
              </span>
            </div>
            <button className="bg-[#F83E3E] uppercase transition-all ease-in-out duration-300 py-3 px-8 rounded-full hover:bg-[#F83E3E]/80">
              REGISTER
            </button>
          </div>
          <div className="flex gap-10 items-center pt-[80px] pl-[60px] pb-[40px] scrollbar-hide overflow-x-scroll">
            {Array.from({ length: 9 }).map((em, idx) => (
              <div key={idx} className="">
                <div className="relative  w-[360px] h-[450px]   overflow-hidden">
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
          <div className="flex w-full justify-between items-center px-[60px]">
            <div className="flex flex-nowrap items-center gap-2">
              <span>Show all services</span>
              <ArrowRight color="#fff" size={15} />
            </div>

            <div className="flex gap-2">
              <button className="size-[50px] flex border border-[#6C6A6A] rounded-full  shadow-inner items-center justify-center">
                <ArrowLeft2 size={15} color="#fff" />
              </button>
              <button className="size-[50px] flex border border-[#6C6A6A] rounded-full  shadow-inner items-center justify-center">
                <ArrowRight2 size={15} color="#fff" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full px-[60px]">
          <div className="flex w-full flex-col gap-[32px] rounded-[16px] items-center justify-center p-[64px] bg-gradient-to-tr from-[#3599fd73] from-10% via-[#1B243C] via-80% to-[#3599fd73] ">
            <span className="font-semibold text-[36px]">
              Get Your 100 Free Applications
            </span>
            <span>Join with the users already growing with WeApply</span>
            <div className="w-[581px] bg-[#ffffff3a] border items-center pl-8 pr-[6px] py-[6px] border-[#fff]/70 rounded-full h-[68px] justify-between flex ">
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
      <div className="flex w-full px-[60px]">
        <div className="flex  border-t border-[#6C6A6A] py-10 justify-between w-full items-center">
          <div className="flex items-center gap-[60px]">
            <img src="/logo.svg" alt="" />
            <div className="flex items-center gap-8 text-base">
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
