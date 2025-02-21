class Rectangle {

        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {

        super(side, side);
    }

    getPerimeter() {
        return 4 * this.width; // or 4 * this.height (both are the same)
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
