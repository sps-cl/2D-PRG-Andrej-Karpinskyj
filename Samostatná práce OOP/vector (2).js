class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(other) {
        this.x += other.x;
        this.y += other.y;
    }

    substract() {
        this.x -= other.x;
        this.y -= other.y;
    }

    sum(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    difference() {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    get squeareSize() {
        return  this.x * this.x + this.y * this.y;
    }
}