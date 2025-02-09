// import { animate } from "motion";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { ChildrenArr } from "./images";
export default function ChildrensBooklet({
  setIndex
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
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
      setIndex(8);
    }
  }, [isInView, setIndex]);
  return (
    <motion.div
      className="w-screen mx-auto overflow-x-hidden relative bg-white text-blue my-[20vh]"
      ref={ref}
    >
      <motion.div
        className="z-1 fixed text-[5vh] flex bottom-3/4 rotate-270 [transform-origin:_top_right] left-[-22.5vw] "
        variants={sliderVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        childrens booklet ____ 4 adults
      </motion.div>

      <div className=" w-[70vw] ml-[17vw]  ">
        <span className="ml-[1vw] flex justify-between">
          <img
            src={ChildrenArr[0]}
            alt=""
            className="rounded-lg h-[100vh] object-cover"
          />
          <img
            src={ChildrenArr[1]}
            alt=""
            className="rounded-lg h-[100vh] object-cover"
          />
        </span>
        <span>
          <div className="ml-[1vw] grid grid-cols-3  gap-2 mt-[10vh] ">
            {ChildrenArr.slice(2, 8).map((src, index) => {
              return (
                <img src={src} key={index} alt="" className="rounded-lg" />
              );
            })}
          </div>
        </span>
        <span className="ml-[1vw] flex justify-between mt-[10vh]">
          <img
            src={ChildrenArr[8]}
            alt=""
            className="rounded-lg h-[100vh] object-cover"
          />
        </span>
      </div>
    </motion.div>
  );
}
