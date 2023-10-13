import { dailyObj } from "../../Addon/Objects/Objects";
import { getSearchOption } from "../../Addon/Search/Search";

export default async function dailyHandler(
  search: string,
  dailyOption: string
) {
  const location_query: string = search;
  const day_query: string = dailyOption;
  const res = await getSearchOption(location_query, "daily", day_query);
  if (res === "daily") {
    return dailyObj.getData(location_query, day_query);
  }
}
