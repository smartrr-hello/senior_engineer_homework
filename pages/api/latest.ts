// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { RecordKeeper } from '../../utils';
import { getLatestCurrencyData } from "../../data/currency";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getLatestCurrencyData({
    from: 'USD',
    to: 'BRL',
    amount: 1
  });

  const recorder = new RecordKeeper(req, res);

  recorder.add(response, 'BRL', new Date())

  res.status(200).json(response.rates)
}
