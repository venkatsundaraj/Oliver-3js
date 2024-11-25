import React from "react";
import practicedot from "../../../public/our practices dots.svg";
import Image from "next/image";
import { FC } from "react";

// const ourpractices = () => {
//   return (
//     <section
//       id="our-practices"
//       className="bg-black-900 text-white flex items-center justify-center py-16 md:py-24 "
//     >
//       <div className="container mx-auto flex flex-col md:flex-col items-center justify-center px-4 md:px-8 lg:px-16">
//         <div className="flex flex-col md:flex-col items-start justify-center ">
//           {/* Title Section */}
//           <div className="text-left mb-8">
//             <h2 className="flex items-start justify-start flex-col leading-[1.1]">
//               <span className="text-extra_paragraph_heading text-foreground font-heading">
//                 Our
//               </span>
//               <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
//                 Practices
//               </span>
//             </h2>
//           </div>

//           {/* Practice Circles with Lines */}
//           <div className="flex flex-col items-center justify-center  mb-12 w-full max-w-4xl">
//             <Image src={practicedot} alt="Entry Icon" className="" />
//             <div className="flex  items-center justify-between space-x-8 lg:space-x-16  w-full max-w-4xl">
//               <div className="flex flex-col items-left">
//                 <span className="mt-4 font-heading font-semibold text-secondary-foreground text-tertiary_heading">
//                   Nu.
//                 </span>
//                 <span className="text-extra_paragraph_heading">
//                   Transformation{" "}
//                   <span className="text-secondary-foreground text-extra_paragraph_heading">
//                     Practice
//                   </span>
//                 </span>
//               </div>

//               <div className="flex flex-col items-left">
//                 <span className="mt-4 font-heading font-semibold text-secondary-foreground text-tertiary_heading">
//                   Qst.
//                 </span>
//                 <span className="text-extra_paragraph_heading">
//                   Business Entry{" "}
//                   <span className="text-secondary-foreground text-extra_paragraph_heading">
//                     Practice
//                   </span>
//                 </span>
//               </div>

//               <div className="flex flex-col items-left">
//                 <span className="mt-4 font-heading font-semibold text-secondary-foreground text-tertiary_heading">
//                   Flr.
//                 </span>
//                 <span className="text-extra_paragraph_heading">
//                   Capability{" "}
//                   <span className="text-secondary-foreground text-extra_paragraph_heading">
//                     Practice
//                   </span>
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Sub-Practice Details */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
//             {/* Column 1 */}
//             <div className="flex flex-col items-start space-y-4">
//               <div>
//                 <h3 className="text-foreground text-extra_paragraph_heading font-semibold">
//                   <span className="font-heading text-secondary-foreground inline-block">
//                     Nu.
//                   </span>
//                   Turnaround
//                 </h3>
//                 <p className="text-extra_paragraph_heading text-secondary-foreground">
//                   Turnaround
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-foreground text-extra_paragraph_heading font-semibold">
//                   <span className="font-heading text-secondary-foreground inline-block">
//                     Nu.
//                   </span>
//                   Scale
//                 </h3>
//                 <p className="text-extra_paragraph_heading text-secondary-foreground">
//                   Scale Up
//                 </p>
//               </div>
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col items-start space-y-4">
//               <div>
//                 <h3 className="text-foreground text-extra_paragraph_heading font-semibold">
//                   <span className="font-heading text-secondary-foreground inline-block ">
//                     Qst.
//                   </span>
//                   Geography
//                 </h3>
//                 <p className="text-extra_paragraph_heading text-secondary-foreground">
//                   Geographic Entry
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-foreground text-extra_paragraph_heading font-semibold">
//                   <span className="font-heading text-secondary-foreground inline-block">
//                     Qst.
//                   </span>
//                   Category
//                 </h3>
//                 <p className="text-extra_paragraph_heading text-secondary-foreground">
//                   Category or Industry Entry
//                 </p>
//               </div>
//             </div>

//             {/* Column 3 */}
//             <div className="flex flex-col items-start space-y-4">
//               <div>
//                 <h3 className="text-foreground text-extra_paragraph_heading font-semibold">
//                   <span className="font-heading text-secondary-foreground inline-block">
//                     Flr.
//                   </span>
//                   Innate
//                 </h3>
//                 <p className="text-extra_paragraph_heading text-secondary-foreground">
//                   Potential Solutions
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-foreground text-extra_paragraph_heading font-semibold">
//                   <span className="font-heading text-secondary-foreground inline-block">
//                     Flr.
//                   </span>
//                   Manifest
//                 </h3>
//                 <p className="text-extra_paragraph_heading text-secondary-foreground">
//                   Skill Solutions
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-col items-start space-y-4">
//               <div>
//                 <h3 className="text-foreground text-extra_paragraph_heading font-semibold">
//                   <span className="font-heading text-secondary-foreground inline-block">
//                     Flr.
//                   </span>
//                   Manifest
//                 </h3>
//                 <p className="text-extra_paragraph_heading text-secondary-foreground">
//                   Skill Solutions
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

interface pageProps {}
const ourpractices: FC<pageProps> = function () {
  return (
    <section className="w-screen flex items-center justify-center bg-background py-16 md:py-16 z-[16] relative">
      <div className="container flex items-start gap-8 flex-col justify-start">
        <h2 className="flex items-start justify-start flex-col leading-[1.1]">
          <span className="text-extra_paragraph_heading text-foreground font-heading">
            Our
          </span>
          <span className="text-primary-foreground text-secondary_heading font-normal font-heading">
            Practices
          </span>
        </h2>
        <div className="grid grid-cols-2  w-full md:grid-cols-3 gap-6 md:gap-0 relative">
          <div className="flex items-start gap-8 md:border-t border-foreground flex-col justify-start py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1]">
                Nu.
              </h4>
              <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                Transformation{" "}
                <span className="text-secondary-foreground">Practice</span>
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-8 mt-6 md:mt-10">
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1] ">
                  Nu.
                  <span className="text-foreground text-extra_paragraph_heading md:text-our_text_heading leading-[1.1] font-paragraph">
                    Turnaround
                  </span>
                </h4>
                <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                  Turnaround
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1] ">
                  Nu.
                  <span className="text-foreground text-extra_paragraph_heading md:text-our_text_heading leading-[1.1] font-paragraph">
                    Scale
                  </span>
                </h4>
                <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                  Scale Up
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1] ">
                  Nu.
                  <span className="text-foreground text-extra_paragraph_heading md:text-our_text_heading leading-[1.1] font-paragraph">
                    Op-Culture
                  </span>
                </h4>
                <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                  Operating Culture
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-8 md:border-t border-foreground flex-col justify-start py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1]">
                Qst.
              </h4>
              <p className="text-foreground font-paragraph text-extra_paragraph_heading md:text-extra_paragraph_heading ">
                Business Entry{" "}
                <span className="text-secondary-foreground">Practice</span>
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-8 mt-6 md:mt-10">
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1] ">
                  Qst.
                  <span className="text-foreground text-extra_paragraph_heading md:text-our_text_heading leading-[1.1] font-paragraph">
                    Geography
                  </span>
                </h4>
                <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                  Geographic Entry
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1] ">
                  Qst.
                  <span className="text-foreground text-extra_paragraph_heading md:text-our_text_heading leading-[1.1] font-paragraph">
                    Category
                  </span>
                </h4>
                <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                  Category or Industry Entry
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-8 flex-col justify-start py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1]">
                Flr.
              </h4>
              <p className="text-foreground font-paragraph text-extra_paragraph_heading md:text-extra_paragraph_heading ">
                Capability{" "}
                <span className="text-secondary-foreground">Practice</span>
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-8 mt-6 md:mt-10">
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1] ">
                  Flr.
                  <span className="text-foreground text-extra_paragraph_heading md:text-our_text_heading leading-[1.1] font-paragraph">
                    Innate
                  </span>
                </h4>
                <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                  Potential Solutions
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-secondary-foreground font-heading text-tertiary_heading leading-[1] ">
                  Flr.
                  <span className="text-foreground text-extra_paragraph_heading md:text-our_text_heading leading-[1.1] font-paragraph">
                    Manifest
                  </span>
                </h4>
                <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
                  Skill Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourpractices;
