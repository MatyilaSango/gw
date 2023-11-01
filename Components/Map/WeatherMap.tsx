import styles from "./WeatherMap.module.css"

export default function WeatherMap({ latitude, longitude }: { latitude: string, longitude: string }): JSX.Element {
    const mapSource = `https://embed.windy.com/embed2.html?lat=${latitude}&lon=${longitude}&detailLat=${longitude}&detailLon=${longitude}&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`
    return (
        <div className={styles["WeatherMap-wrapper"]}>
            <iframe className={styles["WeatherMap-wrapper-iframe"]}
                width="400"
                height="450"
                src={mapSource}
                frameBorder="0">
            </iframe>
        </div>

    )
}
