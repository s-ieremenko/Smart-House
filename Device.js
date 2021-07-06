"use strict";
class Device {
    constructor(name, isActive) {
        this._name = name;
        this._isActive = isActive;
    }
    get name() {
        return this._name;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(isActive) {
        this._isActive = isActive;
    }
}
//# sourceMappingURL=Device.js.map