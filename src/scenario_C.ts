//adaptateur
interface ControlerActions {
    sauter();
    attaquer();
    interargir();
  }

class Clavier {
    private _espace = "espace";
    private _gauche = "gauche";
    private _droit = "droite";
    
    constructor() {
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

export class ClavierAdaptateur implements ControlerActions{
    private _clavier: Clavier;

    constructor (input: Clavier) {
        this._clavier = input;
    }

    sauter() {
        return this._clavier.haut;
    }
    attaquer() {
        return this._clavier.gauche;
    }
    interargir() {
        return this._clavier.droite;
    }
}


class XBox {
    private _A = "A";
    private _B = "B";
    private _X = "X";
    
    constructor() {
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

export class XBoxAdaptateur implements ControlerActions {
    private _manette: XBox;

    constructor (input: XBox) {
        this._manette = input;
    }

    sauter() {
        return this._manette.A;
    }
    attaquer() {
        return this._manette.B;
    }
    interargir() {
        return this._manette.X;
    }
}


class PS5 {
    private _X = "X";
    private _O = "O";
    private _triangle = "triangle";
    
    constructor() {
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

export class PS5Adaptateur implements ControlerActions {
    private _manette: PS5;

    constructor (input: PS5) {
        this._manette = input;
    }

    sauter() {
        return this._manette.O;
    }
    attaquer() {
        return this._manette.X;
    }
    interargir() {
        return this._manette.Triangle;
    }
}

const ps5manette = new PS5();
const adapPS5 = new PS5Adaptateur(ps5manette);
console.log(adapPS5.attaquer());