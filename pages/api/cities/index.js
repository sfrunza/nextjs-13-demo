// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { cities } from '@/lib/citiesData';

export default function handler(req, res) {
  res.status(200).json(cities);
}
