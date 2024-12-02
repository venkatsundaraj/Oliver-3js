"use server";

import { eq } from "drizzle-orm";
import { workTable, blogTable, peopleTable } from "@/server/db/schema";
import { db } from "@/server/db";

export async function deletePost(id: number, type: string) {
  try {
    if (type === "work") {
      await db.delete(workTable).where(eq(workTable.id, id));
    } else if (type === "blog") {
      await db.delete(blogTable).where(eq(blogTable.id, id));
    } else if (type === "people") {
      await db.delete(peopleTable).where(eq(peopleTable.id, id));
    } else {
      throw new Error("Invalid post type");
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to delete post:", error);
    return { success: false, error: "Failed to delete post" };
  }
}
