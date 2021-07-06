"use strict";
const climate = new ClimateSystem(20, 'Climate', true, 30, 15, 'auto');
const alarm = new AlarmSystem('AlarmSystem', true);
const smart = new SmartHouse('SmartHouse', 'samsung', [climate, alarm]);
console.log(smart.findDeviceByName('Climate'));
smart.changeClimate('Climate', -344, Comfort.Colder);
smart.changeClimate('Climate', 5, Comfort.Warmer);
smart.turnOffDeviceByName('Climate');
console.log(smart.getAllActiveDevices());
//# sourceMappingURL=index.js.map