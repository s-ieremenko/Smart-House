"use strict";
class SmartHouse {
    constructor(name, brand, devices) {
        this._name = name;
        this._brand = brand;
        this._devices = devices;
    }
    get name() {
        return this._name;
    }
    get brand() {
        return this._brand;
    }
    get devices() {
        return this._devices;
    }
    addDevice(device) {
        this._devices.push(device);
    }
    findDeviceByName(deviceName) {
        var _a;
        const foundDevice = (_a = this._devices.find(device => device.name === deviceName)) !== null && _a !== void 0 ? _a : null;
        return foundDevice;
    }
    removeDeviceByName(deviceName) {
        const device = this.findDeviceByName(deviceName);
        if (device) {
            this._devices.splice(this._devices.indexOf(device), 1);
        }
    }
    switchState(deviceName, state) {
        const device = this.findDeviceByName(deviceName);
        if (device) {
            device.isActive = state;
        }
        else {
            console.log('Wrong device name');
        }
    }
    turnOnDeviceByName(deviceName) {
        this.switchState(deviceName, true);
    }
    turnOffDeviceByName(deviceName) {
        this.switchState(deviceName, false);
    }
    changeClimate(deviceName, temp, comfort) {
        const climateDevice = this.findDeviceByName(deviceName);
        if (!climateDevice) {
            console.warn('Not found');
        }
        else if (climateDevice && climateDevice instanceof TempDevice) {
            switch (comfort) {
                case Comfort.Warmer:
                    climateDevice.increaseTemp(temp);
                    break;
                case Comfort.Colder:
                    climateDevice.decreaseTemp(temp);
                    break;
            }
        }
        else {
            console.log('Is not a climate device');
        }
    }
    getAllActiveDevices() {
        var _a;
        const isActiveDevice = (_a = this._devices.filter(device => device.isActive === true)) !== null && _a !== void 0 ? _a : null;
        return isActiveDevice;
    }
}
//# sourceMappingURL=SmartHouse.js.map