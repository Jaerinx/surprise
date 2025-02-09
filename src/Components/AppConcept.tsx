// import { animate } from "motion";
import { motion, useInView } from "motion/react";
import appConcept from "/assets/Appconcept/Appconcept_1.png";
import { useEffect, useRef } from "react";
export default function AppConcept({
  setIndex
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
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
      setIndex(7);
    }
  }, [isInView, setIndex]);
  return (
    <>
      <motion.div
        className="w-screen mx-auto h-[125vh] overflow-y-auto relative bg-white text-blue my-[40vh]"
        ref={ref}
      >
        <div className="fixed top-1/2 w-full left-[-35vw] flex justify-center">
          <motion.div
            className="z-1 text-[5vh] flex rotate-270 [transform-origin:center]"
            variants={sliderVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            app concept
          </motion.div>
        </div>
        <img
          src={appConcept}
          className=" absolute z-0 h-[70vh] left-[20vw] bottom-1/10"
        />

        <div className=" z-1 absolute right-[20vw] top-[36vh] text-[2vw] ">
          adobe illustrator illustration
        </div>
      </motion.div>
    </>
  );
}
