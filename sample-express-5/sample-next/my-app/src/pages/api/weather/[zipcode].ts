import type { NextApiRequest, NextApiResponse } from "next";

type WeatherDetailType = {
    weather: string;
    zipcode: string;
    temp?: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<NextApiResponse<WeatherDetailType> | void> {
    return res.status(200).json({
        zipcode: req.query.zipcode,
        weather: 'sunny',
        temp: 35
    });

}