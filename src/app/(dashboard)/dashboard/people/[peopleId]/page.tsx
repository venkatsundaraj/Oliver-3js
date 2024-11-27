import { FC } from "react";
import AddBlog from "@/app/_components/add-blog";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { blogTable, peopleTable } from "@/server/db/schema";
import { notFound } from "next/navigation";
import AddPeople from "@/app/_components/add-people";

interface pageProps {
  params: { peopleId: string };
}

const page = async ({ params }: pageProps) => {
  if (!params.peopleId) notFound();

  const [people] = await db
    .select()
    .from(peopleTable)
    .where(eq(peopleTable.id, Number(params.peopleId)))
    .limit(1);

  if (!people) notFound();

  return (
    <main className="bg-background min-h-screen w-full flex items-center justify-center">
      <AddPeople people={people} />
    </main>
  );
};

export default page;
