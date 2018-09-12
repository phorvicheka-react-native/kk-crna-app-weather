/* eslint-disable global-require */

const images = {
  Mist: require('../assets/mist.png'),
  Thunderstorm: require('../assets/thunder.png'),
  Drizzle: require('../assets/light-rain.png'),
  Rain: require('../assets/heavy-rain.png'),
  Snow: require('../assets/snow.png'),
  Atmosphere: require('../assets/hail.png'),
  Clear: require('../assets/clear.png'),
  Clouds: require('../assets/light-cloud.png'),
};

export default weather => images[weather];
