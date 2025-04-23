//adaptateur
interface ControlerActions {
    sauter();
    attaquer();
    interargir();
  }

class Clavier {
    private _espace: string;
    private _gauche: string;
    private _droit: string;
    
    constructor(haut: string, gauche: string, droit: string) {
        this._droit = droit;
        this._gauche = gauche;
        this._espace = haut;
    }

    get haut() {
        return this._espace;
    }

    get droite() {
        return this._droit;
    }

    get gauche() {
        return this._gauche;
    }
}

class XBox {
    private _A: string;
    private _B: string;
    private _X: string;
    
    constructor(a: string, b: string, x: string) {
        this._X = x;
        this._B = b;
        this._A = a;
    }

    get A() {
        return this._A;
    }

    get B() {
        return this._X;
    }

    get X() {
        return this._B;
    }
}

class PS5 {
    private _X: string;
    private _O: string;
    private _triangle: string;
    
    constructor(x: string, o: string, triangle: string) {
        this._triangle = triangle;
        this._O = o;
        this._X = x;
    }

    get X() {
        return this._X;
    }

    get O() {
        return this._triangle;
    }

    get Triangle() {
        return this._O;
    }
}
