import axios from "axios";

export default async function getRootHTMLPage(city: string, geo: {lat: string, long: string}) {
  return await axios
    .get(`https://www.accuweather.com/web-api/three-day-redirect?key=GEO_${geo.long}%2c${geo.lat}&city=${city}&postalCode=&target=`)
    .then((prom) => prom.data);
}
