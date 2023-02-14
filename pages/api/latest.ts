// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { RecordKeeper } from '../../utils';
import { getLatestCurrencyData } from "../../data/currency";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { time }  = req.query;

  const response = await getLatestCurrencyData({
    from: 'USD',
    to: 'BRL',
    amount: 1
  });

  const recorder = new RecordKeeper(req, res);
  const timestamp = time ? new Date(time as string) : new Date();

  recorder.add(response, 'BRL', timestamp)
  const { rates } = response
  // for some reason returning rates directly throws a JSON parse error.
  return res.status(200).json({ ...rates })
}
