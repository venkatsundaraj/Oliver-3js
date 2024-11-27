import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Cosmosspiralt from "../../../public/Transformation icon.svg";
import Cosmosspiral from "../../../public/Cosmos spiral.svg";
import Cosmosspiralth from "../../../public/Capability icon.svg";
import Cosmosspiralo from "../../../public/Entry Icon.svg";
import circleline from "../../../public/Circle line.svg";
import rightarrow from "../../../public/right arrow.svg";
import { Icons } from "./icons";

const offerterrain = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveDot(index);
  };

  const handleArrowClick = () => {
    setActiveDot((prevDot) => (prevDot + 1) % 4);
  };
  const contentData = [
    {
      title: "",
      description:
        "Operating Contexts that are Complex or Represent discontinuities or have a history of failure. Across Categories, Industries, Geographies & Domains.",
    },
    {
      title: "Transformation",
      description:
        "Transformations that are Complex or Represent discontinuities or have a history of failure. Across Industries, Geographies & Management Types.",
    },
    {
      title: "Entry",
      description:
        "Entry Points that leverage existing skills and assets and provide avenues for growth.",
    },
    {
      title: "Capability",
      description:
        "Capability Building that is On the Job Through Everyday Processes And Delivers Results Across Industries, Categories & Geographies.",
    },
  ];
  return (
    <section
      id="our-terrain"
      className="bg-background text-white py-16 md:py-24  flex items-center justify-center overflow-hidden"
    >
      <div className="container  flex flex-col md:flex-row items-center justify-center ">
        <div className="flex flex-col md:flex-row  items-center justify-center bg-background text-white w-full">
          {/* Left Text Section */}
          <div className="flex-1 py-8">
            <h2 className="flex items-start justify-start flex-col leading-[1.1]">
              <span className="text-extra_paragraph_heading text-foreground font-heading">
                Our
              </span>
              <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
                Terrain
              </span>
            </h2>
            <div>
              {contentData.map(
                (content, index) =>
                  activeDot === index && (
                    <div key={index}>
                      <h2 className="mt-4 text-2xl font-semibold h-[40px] hidden">
                        {content.title}
                      </h2>
                      <p className="mt-2 text-lg leading-relaxed font-paragraph mb-4 md:mb-0 md:w-[520px] h-[90px]">
                        {content.description}
                      </p>
                    </div>
                  )
              )}
            </div>
            {/* Pagination Dots */}
            <div className="flex items-center mt-12 md:mt-8 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${
                    activeDot === index
                      ? "bg-secondary-foreground"
                      : "bg-gray-600"
                  }`}
                />
              ))}
              {/* Arrow button to reset to default */}
              <button
                onClick={handleArrowClick}
                className="text-secondary-foreground !ml-10 border border-secondary-foreground p-2 rounded-full flex items-center justify-center hover:bg-secondary-foreground/30"
              >
                <Icons.ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Graphic Section */}
          <div className="flex-1 flex items-center justify-end p-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-96 h-96"
            >
              {/* Center Icon/Image */}
              <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-full  flex items-center justify-center z-10">
                <Image
                  src={Cosmosspiral}
                  alt="Entry Icon"
                  className="w-[60%] "
                />
              </div>

              {/* Transformation Sphere */}
              <motion.div
                animate={{
                  top:
                    activeDot === 1
                      ? "46%"
                      : activeDot === 2
                      ? "67%"
                      : activeDot === 3
                      ? "58%"
                      : "10%",
                  left:
                    activeDot === 1
                      ? "50%"
                      : activeDot === 2
                      ? "20%"
                      : activeDot === 3
                      ? "80%"
                      : "50%",
                  scale:
                    activeDot === 1
                      ? 1
                      : activeDot === 2
                      ? 0.7
                      : activeDot === 3
                      ? 0.7
                      : 1,
                  translateX: "-50%",
                  translateY:
                    activeDot === 1
                      ? "-50%"
                      : activeDot === 2
                      ? "-100%"
                      : activeDot === 3
                      ? "-50%"
                      : "0%",
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-16 h-16flex items-center justify-center z-10"
                onClick={() => setActiveDot(1)}
              >
                <div className="bg-[#0077B9] rounded-full border-2  border-[#5CB7E3] p-4 z-10">
                  <Image
                    src={Cosmosspiralt}
                    alt="Entry Icon"
                    className="w-12 "
                  />
                </div>
              </motion.div>

              {/* Capability Sphere */}
              <motion.div
                animate={{
                  top:
                    activeDot === 1
                      ? "50%"
                      : activeDot === 2
                      ? "67%"
                      : activeDot === 3
                      ? "38%"
                      : "70%",
                  left:
                    activeDot === 1
                      ? "20%"
                      : activeDot === 2
                      ? "80%"
                      : activeDot === 3
                      ? "50%"
                      : "15%",

                  scale:
                    activeDot === 1
                      ? 0.7
                      : activeDot === 2
                      ? 0.7
                      : activeDot === 3
                      ? 1
                      : 1, // Slightly smaller when the second dot is active
                  translateX: "-50%",
                  translateY:
                    activeDot === 2 ? "-100%" : activeDot === 3 ? "0%" : "0%",
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-16 h-16  flex items-center justify-center z-10 cursor-pointer"
                onClick={() => setActiveDot(3)}
              >
                <div
                  className="bg-[#0077B9] rounded-full border-2  border-primary-foreground  p-4 z-10 relative cursor-pointer "
                  onClick={() => setActiveDot(3)}
                >
                  <Image
                    src={Cosmosspiralth}
                    alt="Entry Icon"
                    className="w-12 "
                    onClick={() => setActiveDot(3)}
                  />
                </div>
              </motion.div>

              {/* Entry Sphere */}
              <motion.div
                animate={{
                  top:
                    activeDot === 1
                      ? "50%"
                      : activeDot === 2
                      ? "55%"
                      : activeDot === 3
                      ? "58%"
                      : "70%",
                  left:
                    activeDot === 1
                      ? "80%"
                      : activeDot === 2
                      ? "50%"
                      : activeDot === 3
                      ? "20%"
                      : "85%",
                  scale:
                    activeDot === 1
                      ? 0.7
                      : activeDot === 2
                      ? 1
                      : activeDot === 3
                      ? 0.7
                      : 1, // Slightly smaller when the second dot is active
                  translateX: "-50%",
                  translateY:
                    activeDot === 2 ? "-100%" : activeDot === 3 ? "-50%" : "0%",
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-16 h-16  flex items-center justify-center z-10 cursor-pointer"
                onClick={() => setActiveDot(2)}
              >
                <div className="bg-[#0077B9] rounded-full border-2  border-[#5CB7E3] p-4 z-10 cursor-pointer">
                  <Image
                    src={Cosmosspiralo}
                    alt="Entry Icon"
                    className="w-12 "
                  />
                </div>
              </motion.div>

              {/* Additional Labels */}

              <div className="absolute top-[0%] left-1/2 transform -translate-x-1/2 text-center text-sm">
                <span>
                  {activeDot === 1
                    ? "Turn Around"
                    : activeDot === 2
                    ? "Industry"
                    : activeDot === 3
                    ? "Skills"
                    : "Transformation"}
                </span>
              </div>
              {activeDot !== 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, scale: 0 }} // Smoothly fades and scales out when unmounted
                  transition={{ duration: 0.5 }}
                  className="absolute top-[5%] left-1/2 left-[15%] transform -translate-x-1/2 text-center text-sm w-max"
                >
                  <div className="">
                    <span>
                      {activeDot === 1
                        ? "Scale Up"
                        : activeDot === 2
                        ? "Category"
                        : activeDot === 3
                        ? "Competencies"
                        : ""}
                    </span>
                  </div>
                </motion.div>
              )}
              {activeDot !== 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, scale: 0 }} // Smoothly fades and scales out when unmounted
                  transition={{ duration: 0.5 }}
                  className="absolute top-[5%] left-1/2 left-[85%] transform -translate-x-1/2 text-center text-sm w-max"
                >
                  <div className="">
                    <span>
                      {activeDot === 1
                        ? "Operating Culture"
                        : activeDot === 2
                        ? "Geography"
                        : activeDot === 3
                        ? "Potential"
                        : ""}
                    </span>
                  </div>
                </motion.div>
              )}

              <motion.div
                animate={{
                  top:
                    activeDot === 1
                      ? "55%"
                      : activeDot === 2
                      ? "55%"
                      : activeDot === 3
                      ? "55%"
                      : "80%",
                  left:
                    activeDot === 1
                      ? "25%"
                      : activeDot === 2
                      ? "25%"
                      : activeDot === 3
                      ? "25%"
                      : "20%",

                  scale:
                    activeDot === 1
                      ? 0.9
                      : activeDot === 2
                      ? 0.9
                      : activeDot === 3
                      ? 0.9
                      : 1, // Slightly smaller when the second dot is active
                  translateX: "-50%",
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-16 h-16  flex items-center justify-center "
              >
                <div className="absolute bottom-[5%] left-[15%] transform -translate-x-1/2 text-center text-sm">
                  <span>
                    {activeDot === 1
                      ? "Capability"
                      : activeDot === 2
                      ? "Transformation"
                      : activeDot === 3
                      ? "Entry"
                      : "Capability"}
                  </span>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  top:
                    activeDot === 1
                      ? "55%"
                      : activeDot === 2
                      ? "55%"
                      : activeDot === 3
                      ? "55%"
                      : "80%",
                  left:
                    activeDot === 1
                      ? "87%"
                      : activeDot === 2
                      ? "87%"
                      : activeDot === 3
                      ? "87%"
                      : "93%",

                  scale:
                    activeDot === 1
                      ? 0.9
                      : activeDot === 2
                      ? 0.9
                      : activeDot === 3
                      ? 0.9
                      : 1, // Slightly smaller when the second dot is active
                  translateX: "-50%",
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-16 h-16  flex items-center justify-center "
              >
                <div className="absolute bottom-[5%] left-[6%] transform -translate-x-1/2 text-center text-sm">
                  <span>
                    {activeDot === 1
                      ? "Entry"
                      : activeDot === 2
                      ? "Capability"
                      : activeDot === 3
                      ? "Transformation"
                      : "Entry"}
                  </span>
                </div>
              </motion.div>
              {/* Connecting Lines */}
              <div className="absolute top-[10%] left-1/2  w-[3%] transform -translate-x-1/2">
                {" "}
                <Image src={circleline} alt="Entry Icon" className="w-12 " />
              </div>
              {activeDot !== 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, scale: 0 }} // Smoothly fades and scales out when unmounted
                  transition={{ duration: 0.5 }}
                  className="absolute top-[10%] left-1/2  w-[3%] transform -translate-x-1/2   left-[30%] rotate-[-50deg]"
                >
                  <Image src={circleline} alt="Entry Icon" className="w-12" />
                </motion.div>
              )}
              {activeDot !== 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0, scale: 0 }} // Smoothly fades and scales out when unmounted
                  transition={{ duration: 0.5 }}
                  className="absolute top-[10%] left-1/2  w-[3%] transform -translate-x-1/2 left-[70%] rotate-[50deg]"
                >
                  <Image src={circleline} alt="Entry Icon" className="w-12" />
                </motion.div>
              )}

              {/* <div className="absolute top-[10%] left-1/2  w-[3%] transform -translate-x-1/2 left-[70%] rotate-[50deg]">
            {" "}
            <Image src={circleline} alt="Entry Icon" className="w-12 " />
          </div> */}
              <motion.div
                animate={{
                  top:
                    activeDot === 1
                      ? "56%"
                      : activeDot === 2
                      ? "56%"
                      : activeDot === 3
                      ? "56%"
                      : "70%",
                  left:
                    activeDot === 1
                      ? "30%"
                      : activeDot === 2
                      ? "30%"
                      : activeDot === 3
                      ? "30%"
                      : "33%",
                  scale:
                    activeDot === 1
                      ? 0.7
                      : activeDot === 2
                      ? 0.7
                      : activeDot === 3
                      ? 0.7
                      : 1, // Slightly smaller when the second dot is active
                  translateX: "-50%",

                  rotate:
                    activeDot === 1
                      ? 25
                      : activeDot === 2
                      ? 25
                      : activeDot === 3
                      ? 25
                      : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-16 h-16  flex items-center justify-center "
              >
                <div className="absolute bottom-[20%] left-[30%] h-[120px] w-px bg-white transform rotate-[50deg] "></div>
              </motion.div>
              <motion.div
                animate={{
                  top:
                    activeDot === 1
                      ? "56%"
                      : activeDot === 2
                      ? "56%"
                      : activeDot === 3
                      ? "56%"
                      : "70%",
                  left:
                    activeDot === 1
                      ? "70%"
                      : activeDot === 2
                      ? "70%"
                      : activeDot === 3
                      ? "70%"
                      : "68%",
                  scale:
                    activeDot === 1
                      ? 0.7
                      : activeDot === 2
                      ? 0.7
                      : activeDot === 3
                      ? 0.7
                      : 1, // Slightly smaller when the second dot is active
                  translateX: "-50%",

                  rotate:
                    activeDot === 1
                      ? -25
                      : activeDot === 2
                      ? -25
                      : activeDot === 3
                      ? -25
                      : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-16 h-16  flex items-center justify-center "
              >
                <div className="absolute bottom-[20%] right-[30%] h-[120px] w-px bg-white transform -rotate-[50deg]"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default offerterrain;
