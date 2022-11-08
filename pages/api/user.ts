import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.user.create({ data: { email: JSON.parse(req.body).email } });

  res.status(200);
}
