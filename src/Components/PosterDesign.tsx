// import { animate } from "motion";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import woman from "/assets/erstiparty/woman.png";
import poster from "/assets/erstiparty/poster.png";
export default function PosterDesign({
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
      setIndex(3);
    }
  }, [isInView, setIndex]);
  return (
    <>
      <motion.div
        className="w-screen mx-auto h-[125vh] overflow-y-auto relative  text-blue my-[20vh] overflow-x-hidden"
        ref={ref}
      >
        <div className="fixed top-1/2 w-full left-[-35vw] flex justify-center z-1">
          <motion.div
            className="z-1 text-[5vh] flex rotate-270 [transform-origin:center]"
            variants={sliderVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            posterdesign: <div className="w-[10vh]"></div> fk ersti party
          </motion.div>
        </div>
        <div className="relative left-[20vw] ">
          <div className="italic text-[2vw] top-[15vh] absolute left-[4vw]">
            illusion of space
          </div>
          <span className="absolute top-[30vh]">
            <img src={woman} alt="" className="w-[17vw]" />
            <div className="ml-[1vw]">
              <div className="text-[1vw]">"space age" source: pinterest</div>
              <div className="text-[2vw] mt-[-2.5vh]">
                & threshold + type design
              </div>
            </div>
          </span>
          <img
            src={poster}
            alt=""
            className="absolute left-[30vw] h-[80vh] top-[20vh]"
          />
        </div>
      </motion.div>
    </>
  );
}
