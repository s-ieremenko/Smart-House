class SmartHouse {
    readonly _name: string
    readonly _brand: string
    readonly _devices: IDevice[]
    public constructor(name: string, brand: string, devices: IDevice[]) {
        this._name = name
        this._brand = brand
        this._devices = devices
    }
    public get name(): string {
        return this._name
    }
    public get brand(): string {
        return this._brand
    }
    public get devices(): IDevice[] {
        return this._devices
    }
    public addDevice(device: IDevice): void {
        this._devices.push(device)
    }

    public findDeviceByName(deviceName: string): IDevice | null {
        const foundDevice: IDevice | null = this._devices.find(device => device.name === deviceName) ?? null
        return foundDevice
    }
    public removeDeviceByName(deviceName: string): void {
        const device = this.findDeviceByName(deviceName)
        if (device) {
            this._devices.splice(this._devices.indexOf(device), 1)
        }
    }

    public switchState(deviceName: string, state: boolean): void {
        const device: IDevice | null = this.findDeviceByName(deviceName)
        if (device) {
            device.isActive = state
        } else {
            console.log('Wrong device name')
        }
    }
    public turnOnDeviceByName(deviceName: string): void {
        this.switchState(deviceName, true)
    }
    public turnOffDeviceByName(deviceName: string): void {
        this.switchState(deviceName, false)
    }
    public changeClimate(deviceName: string, temp: number, comfort: Comfort): void {
        const climateDevice: IDevice | null = this.findDeviceByName(deviceName)
        if (!climateDevice) {
            console.warn('Not found')
        }
        else if (climateDevice && climateDevice instanceof TempDevice) {
            switch (comfort) {
                case Comfort.Warmer:
                    climateDevice.increaseTemp(temp)
                    break;
                case Comfort.Colder:
                    climateDevice.decreaseTemp(temp)
                    break
            }
        }
        else {
            console.log('Is not a climate device')
        }
    }
    public getAllActiveDevices(): IDevice[] | null {
        const isActiveDevice: IDevice[] | null = this._devices.filter(device => device.isActive === true) ?? null
        return isActiveDevice
    }
}