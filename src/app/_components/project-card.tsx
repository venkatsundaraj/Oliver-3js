import { slugify } from "@/lib/utils";
import { OurProjectsType } from "@/types";
import Link from "next/link";
import { FC } from "react";
import { workTable } from "@/server/db/schema";
import { InferModel } from "drizzle-orm";
import { Icons } from "@/app/_components/icons";

type Work = InferModel<typeof workTable>;

interface ProjectCardProps {
  projects: Work[];
  type: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ projects, type }) => {
  const uniqueProjects = Array.from(
    new Set(
      projects
        .filter((item) => slugify(item.type) === slugify(type))
        .map((item) => item.subType)
    )
  )
    .map((subType) => projects.find((item) => item.subType === subType))
    .filter((item): item is Work => !!item);

  if (!uniqueProjects) {
    return (
      <p className="text-foreground text-extra_subtitle_heading font-paragraph">
        No projects are updated.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6">
      {uniqueProjects.filter((item) => {
        return slugify(item.type) === slugify(type);
      }).length ? (
        uniqueProjects
          .filter((item) => {
            return slugify(item.type) === slugify(type);
          })
          .map((item, i) => (
            <Link
              key={i}
              href={`/our-work/${slugify(item.type)}`}
              className="flex flex-col group items-start bg-secondary-foreground justify-between w-full min-h-40"
            >
              <h4 className="font-paragraph p-2 text-extra_paragraph_heading text-foreground">
                {item.subType}
              </h4>
              <div className=" flex gap-4 items-center justify-center self-end">
                <p className="uppercase font-heading text-extra_paragraph_heading text-foreground">
                  View Projects
                </p>
                <span className="bg-background w-10 h-10">
                  <Icons.ArrowRight className="w-full h-full p-2 flex items-center justify-center  text-foreground group-hover:rotate-[-45deg] transition-all" />
                </span>
              </div>
            </Link>
          ))
      ) : (
        <p className="text-foreground text-extra_subtitle_heading font-paragraph">
          No projects are updated.
        </p>
      )}
    </div>
  );
};

export default ProjectCard;
