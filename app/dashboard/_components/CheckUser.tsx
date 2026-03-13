import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function CheckUser() {
  const user = await currentUser();

  if (!user) return null;

  try {
    // 1. Check if user exists in your Neon DB
    const loggedInUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.clerkId, user.id));

    // 2. If the list is empty, it's a new user! Insert them.
    if (loggedInUser.length === 0) {
      await db.insert(usersTable).values({
        clerkId: user.id,
        name: user.fullName || "User",
        email: user.emailAddresses[0].emailAddress,
        credits: 10, // Giving them their starting credits
      });
      console.log("New user synced to Neon successfully");
    }
  } catch (error) {
    console.error("Error syncing user:", error);
  }

  return null;
}