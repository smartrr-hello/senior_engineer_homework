// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getLatestCurrencyData } from "../../data/currency";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rates = await getLatestCurrencyData({
    from: 'USD',
    to: 'BRL',
    amount: 1
  });

  res.status(200).json(rates)
}
