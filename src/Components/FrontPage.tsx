import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import pfp from "/assets/FrontPage/pfp.jpeg";
import { NavLink } from "react-router";
export default function FrontPage({
  setIndex
}: {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setIndex(1);
    }
  }, [isInView, setIndex]);
  return (
    <motion.div className="w-screen h-screen m-0 mb-[20vh]" ref={ref}>
      <div className=" border-x-katpink border-y-darkpink border-2 absolute h-fit bottom-1/9 left-1/5 rounded-2xl border-radius p-5">
        <img src={pfp} alt="" className="h-[70vh] rounded-2xl" />
      </div>

      <div className="absolute left-1/2 top-1/12">
        <div className="text-ariel m-0 p-0 text-[5vw] font-extrabold font-stretch-ultra-condensed font-style italic [letter-spacing:-0.7vw] text-katpink ">
          PORTFOLIO
        </div>
        <div className="font-fancy absolute right-[-20%] text-[2vw] text-darkpink [letter-spacing:-0.2vw]">
          Võ Đặng Kỳ Anh <br />
        </div>
        <div className="font-fancy absolute right-[-25%] text-[1.5vw] mt-[4vw] ml-[7vw] text-white [letter-spacing:-0.1vw]">
          BA Visual Communication @ Bauhaus-Universität Weimar <br />
        </div>
        <div className="absolute right-[-14vw] text-[1vw] mt-[13vw] ml-[7vw] text-white w-[30vw] flex flex-col">
          I'm currently a Visual Communication BA student at Bauhaus-Universität
          Weimar, with an interest in graphic design, typography, and mixed
          media works. <br /> <br /> My passion also lies in art event
          organizing and bringing creatives together in curated spaces :)
          <button className="border-2 border-katpink rounded-lg cursor-pointer px-4 py-2 font-fancy w-fit mt-[2vh] hover:bg-darkpink  duration-200">
            <NavLink to="/Contact">Contact me</NavLink>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
