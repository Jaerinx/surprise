// import { animate } from "motion";
import { motion } from "motion/react";
import maztermind from "/assets/maztermind/maztermind.jpg";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
export default function Maztermind({
  setIndex
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6 });
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
      setIndex(4);
    }
  }, [isInView, setIndex]);
  return (
    <>
      <motion.div
        className="w-screen mx-auto h-[125vh] overflow-y-auto relative  text-blue my-[40vh]"
        ref={ref}
      >
        <div className="fixed top-1/2 w-full left-[-35vw] flex justify-center z-1">
          <motion.div
            className="z-1 text-[5vh] flex rotate-270 [transform-origin:center]"
            variants={sliderVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            commercial photography
          </motion.div>
        </div>
        <img
          src={maztermind}
          alt=""
          className="absolute w-[25vw] z-0 h-[70vh] left-[15vw] bottom-1/10"
        />
        <div className="font-fancy z-1 absolute left-[30vw] bottom-5/8 text-[6vw] ">
          @maztermind
        </div>
        <div className="w-[30vw] absolute left-[50vw] bottom-2/8 text-[1.5vw]">
          maztermind is a house of artisan traditional vietnamese board games
          meticulously designed & crafted in vietnam. this bầu cua board game
          was sent by maztermind to me to promote the set for the lunar new year
          of 2023. <br />
          <br />
          the photos from the shoot were then posted to instagram.
        </div>
      </motion.div>
    </>
  );
}
