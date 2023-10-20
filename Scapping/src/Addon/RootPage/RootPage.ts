import axios from "axios";

export default async function getRootHTMLPage(search: string) {
  return await axios
    .get(`https://www.accuweather.com/en/search-locations?query=${search}`)
    .then((prom) => prom.data);
}
