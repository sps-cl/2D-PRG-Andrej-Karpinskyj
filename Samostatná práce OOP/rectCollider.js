class RectCollider extends Positionable {
    constructor(position, width, height) {
        super(position);
        this.width = width;
        this.height = height;
    }

    collideWith(other) {
        return other.collideWithRect(this);
    }

    collideWithRect(other) {
        return CollisionDetection.checkRectCollision(this, other);  
    }

    collideWithCircle(other) {
        return CollisionDetection.checkRectCircleCollision(this, other);
    }

    get leftEdge() {
        return this.x;
    }

    get rightEdge() {
        return this.x + this.width;
    }

    get topEdge() {
        this.y;
    }

    get bottomEdge() {
        this.y + this.height;
    }


}