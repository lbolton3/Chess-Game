export abstract class piece{
    protected abstract fenChar: fenChar;
    protected abstract directions: Coords[];
    constructor(private color: Color){}

    public get fenChar(): fenChar{
        return this.fenChar;
    }

    public get directions(): Coords[]{
        return this.directions
    }

    public get color(): Color{
        return this.color;
    }

    
}