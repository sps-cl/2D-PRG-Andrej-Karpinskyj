class Meteor extends GameObject() {
    constructor(position, speed, size) {
        super(position);
        this.speed = speed;
        this.sprite = new Sprite("meteor", position, size, size);
    }
}