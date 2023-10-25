import { monthlyObj } from "../../Addon/Objects/Objects";

export default async function monthlyHandler(
    search: string,
    rootPage: Promise<any>
  ) {
    await monthlyObj.scrapMonthly(search, rootPage);
    return monthlyObj.getData(search);
  }