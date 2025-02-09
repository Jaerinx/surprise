import { useState } from "react";
import FrontPage from "./Components/FrontPage";
import SecondPage from "./Components/winterwerkschau";
import ThirdPage from "./Components/PosterDesign";
import Maztermind from "./Components/Maztermind";
import SocialMediaGraphics from "./Components/SocialMediaGraphics";
import GraphicMagazine from "./Components/GraphicMagazine";
import AppConcept from "./Components/AppConcept";
import ChildrensBooklet from "./Components/ChildrensBooklet";
import { motion } from "motion/react";
import { Link, Element } from "react-scroll";
export default function Portfolio() {
  const [Index, setIndex] = useState(1);
  const bacckgroundVariants = {
    initial: {
      backgroundColor: "#000000"
    },
    animate: {
      backgroundColor: "#FFFFFF"
    }
  };
  const dotsVariants = {
    initial: {
      scale: 1
    },
    animate: {
      scale: 2
    }
  };

  const dotsBackgrounds = {
    initial: {
      backgroundColor: "#e01c78"
    },
    animate: {
      backgroundColor: "#0061e1"
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="m-0 overflow-x-hidden overflow-y-auto"
        variants={bacckgroundVariants}
        initial="initial"
        animate={Index != 1 ? "animate" : "initial"}
      >
        <div className="fixed right-[2vw] top-1/2 mt-[-9vw] flex flex-col z-50 ">
          {Array.from({ length: 8 }, (_, i) => i).map((i) => {
            return (
              <Link to={`${i + 1}`} smooth={true} duration={500} offset={100}>
                <motion.div
                  variants={dotsVariants}
                  initial="initial"
                  animate={Index == i + 1 ? "animate" : "initial"}
                >
                  <motion.div
                    className=" rounded-[50%] inline-block h-[1.5vw] aspect-square m-3 opacity-40 cursor-pointer"
                    key={i}
                    variants={dotsBackgrounds}
                    initial="initial"
                    animate={Index == 1 ? "initial" : "animate"}
                    whileHover={{ scale: Index == i + 1 ? 1 : 1.5 }}
                    transition={{ duration: 0.1 }}
                  ></motion.div>
                </motion.div>
              </Link>
            );
          })}
        </div>
        <Element name="1">
          <FrontPage setIndex={setIndex} />
        </Element>

        <Element name="2">
          <SecondPage setIndex={setIndex} />
        </Element>

        <Element name="3">
          <ThirdPage setIndex={setIndex} />
        </Element>

        <Element name="4">
          <Maztermind setIndex={setIndex} />
        </Element>

        <Element name="5">
          <SocialMediaGraphics setIndex={setIndex} />
        </Element>

        <Element name="6">
          <GraphicMagazine setIndex={setIndex} />
        </Element>

        <Element name="7">
          <AppConcept setIndex={setIndex} />
        </Element>

        <Element name="8">
          <ChildrensBooklet setIndex={setIndex} />
        </Element>
      </motion.div>
    </motion.div>
  );
}
