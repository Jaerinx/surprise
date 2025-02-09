// import { animate } from "motion";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
export default function GraphicMagazine({
  setIndex
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const image_src_illustrator = [
    "/assets/Graphic_Magazine/GraphicMagazine_1.png",
    "/assets/Graphic_Magazine/GraphicMagazine_2.png"
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
      setIndex(6);
    }
  }, [isInView, setIndex]);
  return (
    <motion.div
      className="w-screen mx-auto overflow-x-hidden relative  text-blue pt-[40vh]"
      ref={ref}
    >
      <motion.div
        className="z-1 fixed text-[5vh] flex bottom-3/4 rotate-270 [transform-origin:_top_right] left-[-20.5vw] "
        variants={sliderVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        graphic design: <div className="w-[5vw]"></div> magazine
      </motion.div>

      <div className=" w-[75vw] ml-[17vw]  ">
        <span>
          <div className="ml-[1vw] flex justify-between">
            {image_src_illustrator.map((src, index) => {
              return (
                <img
                  src={src}
                  key={index}
                  alt=""
                  className="rounded-lg h-[100vh] object-cover"
                />
              );
            })}
          </div>
          <img
            src="/assets/Graphic_Magazine/GraphicMagazine_3.png"
            alt=""
            className="ml-[1vw] mt-[10vw]"
          />
        </span>
      </div>
    </motion.div>
  );
}
