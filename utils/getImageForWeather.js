/* eslint-disable global-require */

const images = {
  Clear: require('../assets/clear.png'),
  'clear sky': require('../assets/clear.png'),
  Hail: require('../assets/hail.png'),
  mist: require('../assets/heavy-cloud.png'),
  'Heavy Cloud': require('../assets/heavy-cloud.png'),
  'Light Cloud': require('../assets/light-cloud.png'),
  'scattered clouds': require('../assets/light-cloud.png'),
  'Heavy Rain': require('../assets/heavy-rain.png'),
  'Light Rain': require('../assets/light-rain.png'),
  Showers: require('../assets/showers.png'),
  Sleet: require('../assets/sleet.png'),
  Snow: require('../assets/snow.png'),
  Thunder: require('../assets/thunder.png'),
};

export default weather => images[weather];
