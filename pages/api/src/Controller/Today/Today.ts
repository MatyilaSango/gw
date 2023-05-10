import type { NextApiRequest, NextApiResponse } from "next";
import { getSearchOption } from "../../Addon/Search/Search";
import { locationObj, todayObj } from "../../Addon/Objects/Objects";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const query: string = JSON.parse(request.body);
  getSearchOption(query, "today").then((res) => {
    res === "today"
      ? response.json(todayObj.getData(query))
      : response.json(locationObj.getLocations());
  });
}
