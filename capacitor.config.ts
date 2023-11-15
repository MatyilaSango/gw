import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gwweather.app',
  appName: 'gw-weather',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
