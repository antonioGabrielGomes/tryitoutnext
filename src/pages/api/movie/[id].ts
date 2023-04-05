import type { NextApiRequest, NextApiResponse } from "next";
import { apiBase, apiKey } from "../../../../lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const response = await fetch(
    `${apiBase}/movie/${id}?api_key=${apiKey}&language=pt-BR`
  );
  const json = await response.json();

  res.status(200).json({
    info: json
  });
}
