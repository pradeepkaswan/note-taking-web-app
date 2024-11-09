import "server-only";

import { prisma } from "@/db";

export async function getNotes() {
  return prisma.note.findMany({
    where: {
      archived: false,
    },
    include: {
      tags: true,
    },
    orderBy: { updatedAt: "desc" },
  });
}
