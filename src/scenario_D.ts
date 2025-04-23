//decorateur
abstract class Produit {
    private _nom: string;
    private _description: string;
    private _cout: number;

    constructor(nom: string, cout: number, descri?: string) {
        this.nom = nom;
        this.cout = cout;
        if(descri)
            this.description = descri;
    }

    get nom() {
        return this._nom;
    }

    set nom(input: string) {
        this._nom = input;
    }

    get description() {
        return this._description;
    }

    set description(input: string) {
        this._description = input;
    }

    get cout() {
        return this._cout;
    }

    set cout(input: number) {
        if(input < 0)
            throw new Error("Le tarif est invalide");

        this._cout = Math.round(input * 100) / 100;
    }
}

class Cafe extends Produit {
    private _maxOptions: number = 4;

    constructor(nom: string, cout: number, descri?: string, maxOption?: number) {
        super(nom, cout, descri);
        if(maxOption)
            this._maxOptions = maxOption;
    }

    get maxOptions() {
        return this._maxOptions;
    }

    set maxOptions(input: number) {
        if(input < 0)
            throw new Error("Le maximum est invalide");
        this._maxOptions = Math.floor(input);
    }

}

class Extra extends Produit {}

class Commande {
    private _cafe: Cafe;
    private _options: Extra[] = [];

    constructor(cafe: Cafe, options?: Extra[]) {
        this.cafe = cafe;
        if(options)
            options.forEach(extra => this.addExtra(extra));
    }

    get cafe() {
        return this._cafe;
    }

    set cafe(input: Cafe) {
        this._cafe = input;
    }

    get options() {
        return this._options;
    }

    addExtra(input: Extra) {
        if(this._options.length >= this.cafe.maxOptions)
            throw new Error(`Vous ne pouvez ajouter que ${this.cafe.maxOptions} option(s)`);
        this._options.push(input);
    }

    removeExtra(input: Extra) {
        if(!this.options.includes(input))
            throw new Error("Cet extra n'est pas dans la liste actuelle");
    }

    getTarif() {
        let cout = this.cafe.cout;
        this.options.forEach(opt => cout += opt.cout);
        return cout;
    }

    get description() {
        return [this.cafe.nom, ...this.options.map(opt => opt.nom)].join(', ');
    }

}

const cafeGournamd = new Cafe("Café Gourmand", 4);
const lait = new Extra('Lait', 1);
const laitCoco = new Extra('Lait de coco', 2);
const chantilly = new Extra('Chantilly', 1);
const vanille = new Extra('Saveur Vanille', 0.5);

const commande = new Commande(cafeGournamd, [laitCoco, chantilly, vanille]);
console.log(commande.getTarif());
console.log(commande.description);