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
        {spirals.map((spiral, index) => (
          <div className="flex flex-row mb-4">
            <div className="w-1/2 sm:w-1/6">
              <p className="">
                {spiral.title}
                <span className="text-[#0077B9]"> {spiral.titletwo}</span>
              </p>
            </div>
            <span className="w-[3%]">-</span>
            <div className="w-1/2">
              <p> {spiral.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FunctionalSpirals;
