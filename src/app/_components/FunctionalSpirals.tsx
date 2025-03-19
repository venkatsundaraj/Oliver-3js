import React from "react";

const FunctionalSpirals = () => {
  const spirals = [
    { title: "Enterprise", titletwo: "-Spiral", description: "Business" },
    { title: "Brand", titletwo: "-Spiral", description: "Brand & Marketing" },
    { title: "Innovation", titletwo: "-Spiral", description: "Innovation" },
    {
      title: "Human Capital",
      titletwo: "-Spiral",
      description: "Human Resources",
    },
    {
      title: "Sales",
      titletwo: "-Spiral",
      description: "Sales, Business Development & Distribution",
    },
    {
      title: "Finance",
      titletwo: "-Spiral",
      description: "Financial Management, Management Accountancy",
    },
    {
      title: "Operations",
      titletwo: "-Spiral",
      description: "Operations & Supply Chain",
    },
    {
      title: "Synthesis",
      titletwo: "-Spiral",
      description: "Data Analytics, Synthesis & Reasoning",
    },
    { title: "Tech", titletwo: "-Spiral", description: "Technology" },
    { title: "Design", titletwo: "-Spiral", description: "Digital & Social" },
    { title: "Digital", titletwo: "-Spiral", description: "Design" },
  ];
  return (
    <section
      id="our-functional-spirals"
      className="bg-background text-white py-16 md:py-24 flex items-center justify-center bg-[url('https://utfs.io/f/ZowmNmBHF7rV60Iee5hbQOfRazMg3kr4BxVuqK1noU7SLJGE')] bg-center bg-no-repeat bg-contain"
    >
      <div className="container mx-auto  px-4 md:px-8 lg:px-16">
        {/* Title */}
        <div className="text-start mb-12">
          <h2 className="flex items-start justify-start flex-col leading-[1.1]">
            <span className="text-extra_paragraph_heading text-foreground font-heading">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
              Domain spirals
            </span>
          </h2>
        </div>
        <div className=" flex items-center justify-start  bg-transparent bg-opacity-90 p-4 md:p-8">
          <div
            className={` w-full relative transition-opacity duration-700 `}
            style={{
              // backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="absolute inset-0 bg-transparent bg-opacity-80"></div>

            <div className="relative  z-10 grid grid-cols-2 md:grid-cols-4 gap-0">
              {/* Left Column */}
              <div className="flex flex-col items-end text-right pr-6 py-8">
                <h2 className="text-pargrpah_heading font-heading font-light text-secondary-foreground mb-8">
                  Cosmos-Spirals
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Enterprise-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Brand-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Marketing-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Innovation-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Human Capital-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Sales-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Finance-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Operations-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Synthesis-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Tech-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Digital-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <span className="text-foreground text-subtitle_heading font-light">
                      Design-
                    </span>
                    <span className="text-secondary-foreground text-subtitle_heading font-light">
                      Spiral
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="block absolute left-1/2 md:left-1/4 top-0 bottom-0 w-0.5 bg-orange-500 transform -translate-x-1/2"></div>

              {/* Mobile Divider */}
              {/* <div className="md:hidden w-full h-0.5 bg-orange-500 my-4"></div> */}

              {/* Right Column */}
              <div className="flex flex-col items-start text-left pl-6 py-8 md:col-start-2 md:col-end-4">
                <h2 className="text-pargrpah_heading font-heading font-light text-secondary-foreground mb-8">
                  Strategy & Program Spirals
                </h2>

                <div className="space-y-4">
                  <div className="text-foreground text-subtitle_heading font-light">
                    Business
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Brand
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Marketing
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Innovation
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Human Resources
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Sales, Business Development & Distribution
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Financial Management, Management Accountancy
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Operations & Supply Chain
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Data Analytics, Synthesis & Reasoning
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Technology
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Digital & Social
                  </div>
                  <div className="text-foreground text-subtitle_heading font-light">
                    Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalSpirals;
