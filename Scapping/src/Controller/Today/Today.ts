import { getSearchOption } from "../../Addon/Search/Search";
import { todayObj } from "../../Addon/Objects/Objects";

export default async function todayHandler(query: string) {
  const res = await getSearchOption(query, "today");
  if (res === "today") {
    return todayObj.getData(query);
  } 
}
