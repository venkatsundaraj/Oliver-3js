import { contentLists } from "@/config/marketing";
import Link from "next/link";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <nav className="max-w-sm w-full flex items-start justify-center border-e border-e-foreground h-screen overflow-hidden p-4">
      <ul className="flex list-none items-center flex-col justify-between w-full">
        {contentLists.map((item, i) => (
          <li className="text-subtitle_heading w-full text-center" key={i}>
            <Link
              href={item.disabled ? "#" : item.href}
              className={cn(
                "inline-flex bg-transparent items-center text-secondary_heading text-foreground flex-row justify-center hover:text-primary-foreground text-sm font-medium font-paragraph",
                {
                  "cursor-not-allowed text-foreground/50": item.disabled,
                }
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
