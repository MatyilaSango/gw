import styles from "./HourlyFullView.module.css"
import clostImg from "../../Pics/close.svg"
import Image from "next/image"
import { hourlydataType } from "../../Types/types"
import HourlyFullViewTable from "../Table/HourlyFullViewTable"

interface IHourlyFullView {
  setShowHourlyFullView: React.Dispatch<React.SetStateAction<boolean>>
  hourlyFullViewdata: hourlydataType
}

export default function HourlyFullView({ setShowHourlyFullView, hourlyFullViewdata }: IHourlyFullView) {
  return (
    <div className={styles["HourlyFullView-wrapper"]}>
      <div className={styles["HourlyFullView-wrapper__data-view-con"]}>
        <div className={styles["HourlyFullView-wrapper__data-view-con__exit-btn"]} onClick={() => setShowHourlyFullView(false)}>
          <Image src={clostImg} alt="close" width={30} height={30} />
        </div>
        <HourlyFullViewTable
          temp={hourlyFullViewdata.temp}
          real_feel={hourlyFullViewdata.real_feel}
          real_feel_shade={hourlyFullViewdata.real_feel_shade === "undefined" ? "" : hourlyFullViewdata.real_feel_shade}
          max_uv_index={hourlyFullViewdata.max_uv_index}
          wind={hourlyFullViewdata.wind}
          wind_gusts={hourlyFullViewdata.wind_gusts}
          precip={hourlyFullViewdata.precip}
          hour={hourlyFullViewdata.hour}
          type={hourlyFullViewdata.type}
          humidity={hourlyFullViewdata.humidity}
          indoor_humidity={hourlyFullViewdata.indoor_humidity}
          dew_point={hourlyFullViewdata.dew_point}
          air_quality={hourlyFullViewdata.air_quality}
          cloudy_cover={hourlyFullViewdata.cloudy_cover}
          visibility={hourlyFullViewdata.visibility}
          cloud_ceiling={hourlyFullViewdata.cloudy_cover}
          icon={hourlyFullViewdata.icon}
        />
      </div>
    </div>
  )
}
