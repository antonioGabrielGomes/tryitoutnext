import type { NextApiRequest, NextApiResponse } from "next";
import { apiBase, apiKey } from "../../../lib/tmdb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;

  const response = await fetch(
    `${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`
  );
  const json = await response.json();

  res.status(200).json(json.results);
}
