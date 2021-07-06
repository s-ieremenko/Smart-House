"use strict";
class ClimateSystem extends TempDevice {
    constructor(currentTemp, name, isActive, maxTemp, minTemp, mode) {
        super(currentTemp, name, isActive, maxTemp, minTemp);
        this._mode = mode;
    }
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        this._mode = mode;
    }
}
//# sourceMappingURL=ClimateSystem.js.map