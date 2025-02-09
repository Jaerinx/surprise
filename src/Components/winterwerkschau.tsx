// import { animate } from "motion";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import winterwerkschau_1 from "/assets/winterwerkschau/winterwerkschau_2024_1.png";
import winterwerkschau_2 from "/assets/winterwerkschau/winterwerkschau_2024_2.png";
export default function Winterwerkschau({
  setIndex
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 });
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
      setIndex(2);
    }
  }, [isInView, setIndex]);
  return (
    <>
      <motion.div
        className="w-screen mx-auto h-[125vh] overflow-y-auto relative  text-blue my-[20vh]"
        ref={ref}
      >
        <div className="fixed top-7/16 w-full left-[-35vw] flex justify-center z-1">
          <motion.div
            className="z-1 text-[5vh] flex rotate-270 [transform-origin:center]"
            variants={sliderVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            Poster________________design: <br />
            winterwerkschau 2024 freie kunst
          </motion.div>
        </div>
        <div className="absolute left-[20vw] flex w-[65vw] justify-between top-[20vh]">
          <img src={winterwerkschau_1} alt="" className="h-[90vh]" />
          <img src={winterwerkschau_2} alt="" className="h-[90vh]" />
        </div>
      </motion.div>
    </>
  );
}
