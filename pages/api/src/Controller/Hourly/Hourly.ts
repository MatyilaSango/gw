import { NextApiRequest, NextApiResponse } from "next";
import { hourlyObj, locationObj } from "../../Addon/Objects/Objects";
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
  const query: string = JSON.parse(request.body);
  getSearchOption(query, "hourly").then((res) => {
    res === "hourly"
      ? response.json(hourlyObj.getData(query))
      : response.json(locationObj.getLocations());
  });
}
