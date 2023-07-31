import { NextApiRequest, NextApiResponse } from "next";
import { dailyObj, locationObj } from "../../Addon/Objects/Objects";
import { getSearchOption } from "../../Addon/Search/Search";

export const config = {
  api: {
    externalResolver: true,
  },
}

export default function handler(
    request: NextApiRequest,
    response: NextApiResponse
  ) {
    const req: {search: string, dailyOption: string} = JSON.parse(request.body)
    const location_query: string = req.search
    const day_query: string = req.dailyOption

    getSearchOption(location_query, "daily", day_query).then((res) => {
        res === "daily"
            ? response.json(dailyObj.getData(location_query, day_query))
            : response.json(locationObj.getLocations());
    });
  }