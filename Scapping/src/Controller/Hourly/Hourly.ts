import { hourlyObj } from "../../Addon/Objects/Objects";
import { getSearchOption } from "../../Addon/Search/Search";

export default async function hourlyHandler(query: string) {
  const res = await getSearchOption(query, "hourly");
  if (res === "hourly") {
    return hourlyObj.getData(query);
  }
}
