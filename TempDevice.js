"use strict";
class TempDevice extends Device {
    constructor(currentTemp, name, isActive, maxTemp, minTemp) {
        super(name, isActive);
        this._currentTemp = currentTemp;
        this._maxTemp = maxTemp;
        this._minTemp = minTemp;
    }
    get currentTemp() {
        return this._currentTemp;
    }
    get maxTemp() {
        return this._maxTemp;
    }
    get minTemp() {
        return this._minTemp;
    }
    set maxTemp(maxTemp) {
        this._maxTemp = maxTemp;
    }
    set minTemp(minTemp) {
        this._minTemp = minTemp;
    }
    increaseTemp(temp) {
        console.log(`Before: Current temp is ${this._currentTemp}C`);
        try {
            if (!Number.isInteger(temp) || temp < 0) {
                throw new Error('Invalid temperature is entered');
            }
            this._currentTemp += temp;
            if (this._currentTemp <= this._maxTemp) {
                console.log(`After: Current temp is increased by ${temp}C and now is ${this._currentTemp}C`);
            }
            else {
                this._currentTemp = this._maxTemp;
                console.log(`Warning: max temp is ${this._currentTemp}C`);
                console.log(`After: Current temp is ${this._currentTemp}C`);
            }
        }
        catch (e) {
            console.warn(e.message);
        }
    }
    decreaseTemp(temp) {
        console.log(`Before: Current temp is ${this._currentTemp}C`);
        try {
            if (!Number.isInteger(temp) || temp < 0) {
                throw new Error('Invalid temperature is entered');
            }
            this._currentTemp -= temp;
            if (this._currentTemp >= this._minTemp) {
                console.log(`After: Current temp is decreased by ${temp}C and now is ${this._currentTemp}C`);
            }
            else {
                this._currentTemp = this._minTemp;
                console.log(`Warning: min temp is ${this._currentTemp}C`);
                console.log(`After: Current temp is ${this._currentTemp}C`);
            }
        }
        catch (e) {
            console.warn(e.message);
        }
    }
}
//# sourceMappingURL=TempDevice.js.map