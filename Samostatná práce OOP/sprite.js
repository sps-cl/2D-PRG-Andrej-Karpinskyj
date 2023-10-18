class Sprite extends Positionable {
    constructor(imageId, position, width, height) {
        super(position);
        this.height = height;
        this.width = width;
        this.image = document.getElementByld(imageId)
    }

    draw(context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}
