import App from "../../Components/App/App";
import axios from "axios";

export default async function Home() {
  const data = await (await axios.get("https://ipinfo.io/")).data

  return (
    <App />
  )
}