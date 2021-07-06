class ClimateSystem extends TempDevice {
    protected _mode: string
    public constructor(currentTemp: number, name: string, isActive: boolean, maxTemp: number, minTemp: number, mode: string) {
        super(currentTemp, name, isActive, maxTemp, minTemp)
        this._mode = mode
    }
    public get mode(): string {
        return this._mode
    }
    public set mode(mode: string) {
        this._mode = mode
    }
}