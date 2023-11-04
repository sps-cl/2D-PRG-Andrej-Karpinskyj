class Scene{
    constructor(width, height) {
        this.width = width; 
        this.height = height;
        let platno = document.createElement("canvas");
        platno.width = this.width;
        platno.height = this.height;
        document.body.appendChild(platno)
        this.context = platno.getContext("2d")
    }

    draw(...drawables){
        for (let i = 0; i < drawables.length; i++) {
            drawables[i].draw(this.context)
        }
    }
}
