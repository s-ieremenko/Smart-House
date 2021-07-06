abstract class Device implements IDevice {
    readonly _name: string
    protected _isActive: boolean
    public constructor(name: string, isActive: boolean) {
        this._name = name
        this._isActive = isActive
    }
    public get name(): string {
        return this._name
    }
    public get isActive(): boolean {
        return this._isActive
    }
    public set isActive(isActive: boolean) {
        this._isActive = isActive
    }
}