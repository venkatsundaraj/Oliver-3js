import { slugify } from "@/lib/utils";
import { OurProjectsType } from "@/types";
import Link from "next/link";
import { FC } from "react";
import { Icons } from "./icons";

interface ProjectCardProps {
  projects: OurProjectsType;
}

const ProjectCard: FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6">
      {projects.map((item, i) => (
        <Link
          key={i}
          href={slugify(item.subTitle)}
          className="flex flex-col group items-start bg-secondary-foreground justify-between w-full min-h-40"
        >
          <h4 className="font-paragraph p-2 text-2xl md:text-3xl text-background">
            {item.subTitle}
          </h4>
          <div className=" flex gap-4 items-center justify-center self-end">
            <p className="uppercase font-heading text-extra_paragraph_heading text-background">
              View Projects
            </p>
            <span className="bg-background w-10 h-10">
              <Icons.ArrowRight className="w-full h-full p-2 flex items-center justify-center  text-foreground group-hover:rotate-[-45deg] transition-all" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectCard;
