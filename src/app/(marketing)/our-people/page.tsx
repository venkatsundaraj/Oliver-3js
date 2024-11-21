import { FC } from "react";
import TeamSection from "@/app/_components/team-section";

interface pageProps {}
const page: FC<pageProps> = function () {
  return (
    <>
      <div className="bg-black text-white text-center py-16 md:pt-64 md:pb-16">
        {/* OUR text */}
        <h2 className="text-[30px] font-regular font-heading leading-[1.1]">
          Our
        </h2>

        {/* PEOPLE text */}
        <h1 className="text-[50px] font-bold text-[#00aeef] font-heading">
          People
        </h1>

        {/* Paragraph */}
        <p
          className="text-[20px] max-w-3xl mx-auto"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          The leadership team at Cosmos comprises senior professionals, with
          more than 500 years of cumulative experience in building, managing &
          growing large businesses across various geographies globally.
        </p>
      </div>
      <TeamSection />
    </>
  );
};

export default page;
