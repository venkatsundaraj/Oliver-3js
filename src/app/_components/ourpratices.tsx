import React from "react";
import practicedot from "../../../public/our practices dots.svg";
import Image from "next/image";

const ourpractices = () => {
  return (
    <section className="bg-black-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-col items-start justify-center ">
          {/* Title Section */}
          <div className="text-left mb-8">
            <h2 className="text-lg font-light">Our</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500">
              practices
            </h1>
          </div>

          {/* Practice Circles with Lines */}
          <div className="flex flex-col items-center justify-center  mb-12 w-full max-w-4xl">
            <Image src={practicedot} alt="Entry Icon" className="" />
            <div className="flex  items-center justify-between space-x-8 lg:space-x-16  w-full max-w-4xl">
              <div className="flex flex-col items-left">
                <span className="mt-4 text-lg font-semibold text-blue-500">
                  Nu.
                </span>
                <span className="text-sm">
                  Transformation <span className="text-blue-500">Practice</span>
                </span>
              </div>

              <div className="flex flex-col items-left">
                <span className="mt-4 text-lg font-semibold text-blue-500">
                  Qst.
                </span>
                <span className="text-sm">
                  Business Entry <span className="text-blue-500">Practice</span>
                </span>
              </div>

              <div className="flex flex-col items-left">
                <span className="mt-4 text-lg font-semibold text-blue-500">
                  Flr.
                </span>
                <span className="text-sm">
                  Capability <span className="text-blue-500">Practice</span>
                </span>
              </div>
            </div>
          </div>

          {/* Sub-Practice Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
            {/* Column 1 */}
            <div className="flex flex-col items-start space-y-4">
              <div>
                <h3 className="text-blue-500 font-semibold">Nu.Turnaround</h3>
                <p className="text-sm">Turnaround</p>
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold">Nu.Scale</h3>
                <p className="text-sm">Scale Up</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start space-y-4">
              <div>
                <h3 className="text-blue-500 font-semibold">Qst.Geography</h3>
                <p className="text-sm">Geographic Entry</p>
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold">Qst.Category</h3>
                <p className="text-sm">Category or Industry Entry</p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-start space-y-4">
              <div>
                <h3 className="text-blue-500 font-semibold">Flr.Innate</h3>
                <p className="text-sm">Potential Solutions</p>
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold">Flr.Manifest</h3>
                <p className="text-sm">Skill Solutions</p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <div>
                <h3 className="text-blue-500 font-semibold">Flr.Manifest</h3>
                <p className="text-sm">Skill Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourpractices;
