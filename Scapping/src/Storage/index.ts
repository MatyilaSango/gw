import {
  todayDataType,
  hourlyDataType,
  dailyDataType,
  monthlyWeatherData,
} from "../../../Types/types";

const todayDataMap = new Map<string, todayDataType>()
const hourlyDataMap = new Map<string, hourlyDataType>()
const dailyDataMap = new Map<string, dailyDataType>()
const monthlyDataMap = new Map<string, monthlyWeatherData>()

//today getter and setter
export const setToday = (today: todayDataType): void => {
  todayDataMap.set(today.search_parameter, today)
};

export const getToday = (location: string): todayDataType => {
  return todayDataMap.get(location) as todayDataType
};

export const deleteToday = (location: string): void => {
  todayDataMap.delete(location);
};

//hourly getter and setter
export const setHourly = (hourly: hourlyDataType): void => {
  hourlyDataMap.set(hourly.search_parameter, hourly);
};

export const getHourly = (location: string): hourlyDataType => {
  return hourlyDataMap.get(location) as hourlyDataType
};

export const deleteHourly = (location: string): void => {
  hourlyDataMap.delete(location)
};

//daily getter and setter
export const setDaily = (daily: dailyDataType, day: string): void => {
  dailyDataMap.set(`${daily.search_parameter}_${day}`, daily);
};

export const getDaily = (location: string, day: string): dailyDataType => {
  return dailyDataMap.get(`${location}_${day}`) as dailyDataType;
};

export const deleteDaily = (location: string, day: string): void => {
  dailyDataMap.delete(`${location}_${day}`)
};

//monthly getter and setter
export const setMonthly = (location: string, monthly: monthlyWeatherData): void => {
  monthlyDataMap.set(`${location}_${monthly.month}`, monthly);
};

export const getMonthly  = (location: string, month: string): monthlyWeatherData => {
  return monthlyDataMap.get(`${location}_${month}`) as monthlyWeatherData;
};

export const deleteMonthly  = (location: string, month: string): void => {
  monthlyDataMap.delete(`${location}_${month}`)
};
