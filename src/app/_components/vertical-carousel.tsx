import { FC } from "react";
import { ourDifferentiatorContent } from "@/config/marketing";
import Image from "next/image";
import { Icons } from "@/app/_components/icons";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { Button } from "@/app/_components/ui/button";
import { insightCenteredContent } from "@/config/marketing";

interface VerticalCarouselProps {}

const VerticalCarousel: FC<VerticalCarouselProps> = () => {
  return (
    <section
      id="our-differentiators"
      className="w-screen flex md:min-h-screen items-start relative justify-start bg-background py-16 md:py-16 flex-col"
    >
      <div className="container">
        <h2 className="flex self-start items-start justify-start flex-col leading-[1.1] mb-8 left-0 top-[125px]">
          <span className="text-extra_paragraph_heading text-foreground font-heading">
            Our
          </span>
          <span className="text-primary-foreground text-tertiary_heading font-heading font-normal">
            Differentiators
          </span>
        </h2>
        <Tabs
          defaultValue="Insights centered"
          orientation="vertical"
          className="flex flex-col w-full md:flex-row space-x-4 "
        >
          <TabsList className="flex scrollbar-hide flex-row overflow-x-scroll md:overflow-x-auto md:flex-col h-auto w-full md:max-w-[400px] space-y-1 space-x-4 md:space-x-0 justify-start md:justify-center">
            {ourDifferentiatorContent.map((item, index) => {
              return (
                <TabsTrigger
                  value={item.title}
                  key={index}
                  className="flex flex-row items-center justify-start gap-6 py-0  w-full min-w-[280px]"
                >
                  <Image
                    alt="Our Trrain"
                    className="h-[60px] object-contain"
                    src={item.imgPath}
                    width={38}
                    height={38}
                  />
                  <p className="text-foreground text-center">{item.title}</p>
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="flex-1 mt-4 md:mt-0">
            <TabsContent value="Insights centered" className="mt-0">
              <div className="flex items-start justify-top flex-col gap-4 md:gap-0 md:flex-row md:max-h-[500px] overflow-y-scroll scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-1 px-0 md:px-2 max-w-[550px]">
                  <div className="flex w-full flex-col items-start">
                    <div className="flex items-start justify-center flex-col gap-4 text-foreground">
                      <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                        Traditional, algorithmic, 'engineering' approach
                      </h4>
                      <ul className="list-disc list-inside">
                        <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                          Top-down break up of problem &#x2192; bottom-up
                          synthesis of solution parts Interpreting organization
                          as sum of parts.
                        </li>
                        <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                          Interpreting organisation as sum of parts
                        </li>
                      </ul>
                      <p className="text-extra_subtitle_heading font-paragraph text-foreground hidden">
                        &#x2192;
                      </p>
                      <p className="font-heading text-foreground text-extra_paragraph_heading leading-[1.1]">
                        Vs.
                      </p>
                    </div>
                    <div className="flex items-start justify-center flex-col gap-4 text-foreground">
                      <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                        Modern, Insights centered, 'doctor' approach
                      </h4>
                      <ul className="list-disc list-inside">
                        <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                          Core insights about problem &#x2192; Reimagine
                          Organisation + enterprise around insight
                          concentrically
                        </li>
                        <li className="text-extra_subtitle_heading font-paragraph text-foreground">
                          Interpreting Organisation as an engine fuelled by
                          differentiated insights
                        </li>
                      </ul>

                      <p className="font-paragraph font-bold text-foreground text-extra_subtitle_heading">
                        Insights at the center of P&L and organisation vs
                        insights at the center of marketing, innovation, design,
                        etc.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 px-0 md:px-2">
                  <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex items-center justify-center flex-row gap-6">
                      <Button
                        className="rounded-xl min-w-24 font-paragraph"
                        variant={"default"}
                      >
                        Value Chain
                      </Button>
                      <Icons.ArrowRight className="text-foreground" />
                      <Button
                        className="rounded-xl min-w-24 font-paragraph"
                        variant={"default"}
                      >
                        Business
                      </Button>
                    </div>
                    <Image
                      alt="Our Trrain"
                      className="w-full md:w-3/4"
                      src="https://utfs.io/f/ZowmNmBHF7rVHVpLcCdWuQopKOivRcLqJD7x46CXtZGlw0Sh"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="Insights → Hero Actions → P&Ls"
              className="mt-0"
            >
              <h1 className="text-foreground">
                <div className="flex items-start justify-top flex-col md:max-h-[500px] overflow-y-scroll scrollbar-hide">
                  <h4 className="font-paragraph text-subtitle_heading text-primary-foreground mb-4">
                    From empathy to insights to hero actions to execution
                    Strategy : choice of actions - not that of intent or
                    directions
                  </h4>
                  <div className="flex items-center justify-start gap-4 flex-col relative py-8">
                    {insightCenteredContent.map((item) => (
                      <Button
                        className="rounded-xl min-w-52 md:min-w-80 font-paragraph static z-[1]"
                        size={"lg"}
                        variant={"default"}
                      >
                        {item}
                      </Button>
                    ))}
                    <Image
                      className="w-full object-contain z-0 h-full absolute left-0 top-0 md:translate-y-6"
                      src={
                        "https://utfs.io/f/ZowmNmBHF7rVi72fZMu12L9SrhBkonyJq4Z8l0ANjKH7a5eu"
                      }
                      alt="Arrow"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </h1>
            </TabsContent>
            <TabsContent value="360 deg co-creation" className="mt-0">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                Intensive 360 degree solution co-creation & collaboration
                workshops
              </h4>
              <p className="font-paragraph text-foreground text-extra_paragraph_heading">
                With organization employees, customers, stakeholders
              </p>
            </TabsContent>
            <TabsContent value="Only senior consultants" className="mt-0">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                Only senior industry leaders as collaborative consultants
                working across all levels
              </h4>
            </TabsContent>
            <TabsContent value="500+ years, 70% practitioners" className="mt-0">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                500+ years of experience : 70% client side, practitioner
                experience
              </h4>
            </TabsContent>
            <TabsContent value="Tremendous diversity" className="mt-0">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                Tremendous diversity of experience
              </h4>
              <ul className="text-foreground font-paragraph text-extra_paragraph_heading flex flex-col items-start gap-2 list-none">
                <li>Across 60+ b2c, b2b, b2p industries</li>
                <li>Across all inhabited continents </li>
                <li>Across diverse scales & management types</li>
                <li className="text-foreground/30">
                  Multinational, Regional or local giants, MSME's, start ups,
                  NFPs
                </li>
                <li>Across all functions</li>
              </ul>
            </TabsContent>
            <TabsContent
              value="Handholding till execution & success"
              className="mt-0"
            >
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                Strategy + Plan + Execution Oversight + On Job Capability
                Building
              </h4>
            </TabsContent>
            <TabsContent value="Agile remuneration" className="mt-0">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                Customized Renumeration
              </h4>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default VerticalCarousel;
