abstract class TempDevice extends Device {
    protected _currentTemp: number
    protected _maxTemp: number
    protected _minTemp: number

    public constructor(currentTemp: number, name: string, isActive: boolean, maxTemp: number, minTemp: number) {
        super(name, isActive)
        this._currentTemp = currentTemp
        this._maxTemp = maxTemp
        this._minTemp = minTemp
    }
    public get currentTemp(): number {
        return this._currentTemp
    }
    public get maxTemp(): number {
        return this._maxTemp
    }
    public get minTemp(): number {
        return this._minTemp
    }
    public set maxTemp(maxTemp: number) {
        this._maxTemp = maxTemp
    }
    public set minTemp(minTemp: number) {
        this._minTemp = minTemp
    }
    public increaseTemp(temp: number): void {
        console.log(`Before: Current temp is ${this._currentTemp}C`)
        try {
            if (!Number.isInteger(temp) || temp < 0) {
                throw new Error('Invalid temperature is entered')
            }
            this._currentTemp += temp
            if (this._currentTemp <= this._maxTemp) {
                console.log(`After: Current temp is increased by ${temp}C and now is ${this._currentTemp}C`)
            } else {
                this._currentTemp = this._maxTemp
                console.log(`Warning: max temp is ${this._currentTemp}C`)
                console.log(`After: Current temp is ${this._currentTemp}C`)
            }
        }
        catch (e) {
            console.warn(e.message)
        }
    }

    public decreaseTemp(temp: number): void {
        console.log(`Before: Current temp is ${this._currentTemp}C`)
        try {
            if (!Number.isInteger(temp) || temp < 0) {
                throw new Error('Invalid temperature is entered')
            }
            this._currentTemp -= temp
            if (this._currentTemp >= this._minTemp) {
                console.log(`After: Current temp is decreased by ${temp}C and now is ${this._currentTemp}C`)
            } else {
                this._currentTemp = this._minTemp
                console.log(`Warning: min temp is ${this._currentTemp}C`)
                console.log(`After: Current temp is ${this._currentTemp}C`)
            }
        }
        catch (e) {
            console.warn(e.message)
        }
    }
}