import React from "react";
import DesktopHomePic from "../assets/images/image-web-3-desktop.jpg";
import MobileHomePic from "../assets/images/image-web-3-mobile.jpg";
import useMediaQuery from "../utils/useMediaQuery";

const Home = () => {
  const flexBetween = "flex justify-between items-center";
  const isAboveLargeScreens = useMediaQuery("(min-width: 1024px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 800px)");
  const news = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      desc: "Will hydrigen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Down Side of AI Artistry",
      desc: "What are the possible adverse effects of on-demand AI image generations?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <section className="w-full">
      <div className={`flex justify-between items-center w-full`}>
        <div
          className={`flex justify-between items-center mx-auto w-[90%] lg:w-4/6`}
        >
          <div className="grid grid-rows-2 grid-flow-col gap-9">
            <div className="col-span-2 ">
              {isAboveLargeScreens || isAboveMediumScreens ? (
                <img
                  alt="HomePhoto"
                  src={DesktopHomePic}
                  className="w-full h-[300px]"
                />
              ) : (
                <img
                  alt="HomePhoto"
                  src={MobileHomePic}
                  className="w-full h-[300px]"
                />
              )}
            </div>
            <div className="col-span-2 ">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <h1 className="w-full lg:w-4/5 text-6xl font-extrabold">
                    The Bright Future of Web 3.0?
                  </h1>
                </div>
                <div
                  className="flex flex-col justify-between 
                                    lg:mt-0 mt-5"
                >
                  <p className="text-[#5D5F79]">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button
                    className="border border-none bg-hoverRed hover:bg-[#00001A] text-white text-lg 
                                        lg:w-56 w-3/6 py-3 px-0 mt-5"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div></div>
            <div className="row-span-2 bg-[#00001A]">
              <div
                className={`${flexBetween} text-hoverOrange pt-7 pl-7 font-semibold text-4xl`}
              >
                New
              </div>
              <div className={`flex justify-start flex-col w-[95%] pl-7`}>
                {news.map((item) => (
                  <div key={item.id} className="flex flex-col justify-center">
                    <h1 className="font-bold text-lg text-white pt-5 hover:text-hoverOrange hover:cursor-pointer">
                      {item.title}
                    </h1>
                    <p className="text-[#C5C6CE] text-sm pb-6 pt-2">
                      {item.desc}
                    </p>
                    {item.id === news.length ? (
                      <></>
                    ) : (
                      <hr className="h-px bg-[#5D5F79] border-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className={`lg:flex justify-between items-stretch w-full gap-8 mt-5`}>
                        
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='col-span-2'>
                                {
                                    isAboveLargeScreens || isAboveMediumScreens ? (
                                        <img alt='HomePhoto' src={DesktopHomePic} className='w-full h-[300px]'/>
                                    ) : (
                                        <img alt='HomePhoto' src={MobileHomePic} className='w-full h-[300px]'/>
                                    )
                                }
                                
                            </div>
                            <div className='lg:flex justify-between col-span-2 pt-5 lg:pl-3 gap-20'>
                                <h1 className='w-full lg:w-4/5 text-6xl font-extrabold'>
                                    The Bright Future of Web 3.0?
                                </h1>
                                <div className='flex flex-col justify-between 
                                    lg:mt-0 mt-5'>
                                    <p className='text-[#5D5F79]'>
                                        We dive into the next evolution of the web that claims to put the power
                                        of the platforms back into the hands of the people. But is it really 
                                        fulfilling its promise?
                                    </p>
                                    <button className='border border-none bg-hoverRed hover:bg-[#00001A] text-white text-lg 
                                        lg:w-56 w-3/6 py-3 px-0 my-5'>
                                        Read More
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className={`${flexBetween} lg:w-3/5 mt-10 lg:mt-0`}>
                            <div className='bg-[#00001A] w-full h-full'>
                                <div className={`${flexBetween} text-hoverOrange pt-7 pl-7 font-semibold text-4xl`}>
                                    New
                                </div>
                                <div className={`flex justify-start flex-col w-[95%] pl-7`}>
                                    {
                                        news.map((item)=>(
                                            <div key={item.id} className="flex flex-col justify-center">
                                                <h1 className='font-bold text-lg text-white pt-5 hover:text-hoverOrange hover:cursor-pointer'>
                                                    {item.title}
                                                </h1>
                                                <p className='text-[#C5C6CE] text-sm pb-6 pt-2'>
                                                    {item.desc}
                                                </p>
                                                {
                                                    item.id === news.length  ? (
                                                        <></>
                                                    ) : (
                                                        <hr/>
                                                    )
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
