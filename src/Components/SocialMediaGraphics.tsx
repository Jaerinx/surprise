// import { animate } from "motion";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
export default function SocialMediaGraphics({
  setIndex
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const image_src_illustrator = [
    "/assets/SocialMediaGraphics/graphics_1.jpg",
    "/assets/SocialMediaGraphics/graphics_2.jpg",
    "/assets/SocialMediaGraphics/graphics_3.jpg",
    "/assets/SocialMediaGraphics/graphics_4.jpg",
    "/assets/SocialMediaGraphics/graphics_5.jpg",
    "/assets/SocialMediaGraphics/graphics_6.jpg",
    "/assets/SocialMediaGraphics/graphics_7.jpg",
    "/assets/SocialMediaGraphics/graphics_8.jpg",
    "/assets/SocialMediaGraphics/graphics_9.jpg",
    "/assets/SocialMediaGraphics/graphics_10.jpg"
  ];
  const image_src_musk = [
    "/assets/SocialMediaGraphics/musk_1.jpg",
    "/assets/SocialMediaGraphics/musk_2.jpg",
    "/assets/SocialMediaGraphics/musk_3.jpg",
    "/assets/SocialMediaGraphics/musk_4.jpg",
    "/assets/SocialMediaGraphics/musk_5.jpg",
    "/assets/SocialMediaGraphics/musk_6.jpg",
    "/assets/SocialMediaGraphics/musk_7.jpg"
  ];
  const sliderVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  };
  useEffect(() => {
    if (isInView) {
      setIndex(5);
    }
  }, [isInView, setIndex]);
  return (
    <>
      <motion.div
        className="w-screen mx-auto overflow-x-hidden relative text-blue my-[20vh]"
        ref={ref}
      >
        <div className="fixed top-1/2 w-full left-[-35vw] flex justify-center">
          <motion.div
            className="z-1 text-[5vh] flex rotate-270 [transform-origin:center]"
            variants={sliderVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            social media <div className="w-[5vw]"></div> graphics
          </motion.div>
        </div>

        <div className=" w-[75vw] ml-[17vw]  ">
          <span>
            <div className="text-[2vw]">adobe illustrator + photoshop</div>
            <div className="ml-[1vw] grid grid-cols-5  gap-2 ">
              {image_src_illustrator.map((src, index) => {
                return (
                  <img src={src} key={index} alt="" className="rounded-lg" />
                );
              })}
            </div>
            <div className="ml-[40%] text-[2vw] mt-[1%]">
              adobe illustrator + photoshop
            </div>
          </span>

          <span>
            <div className="text-[2vw] mt-[40vh]">\\\adobe photoshop</div>
            <div className="ml-[1vw] grid grid-cols-3  gap-2 ">
              {image_src_musk.map((src, index) => {
                return (
                  <img src={src} key={index} alt="" className="rounded-lg" />
                );
              })}
            </div>
          </span>
        </div>
      </motion.div>
    </>
  );
}
