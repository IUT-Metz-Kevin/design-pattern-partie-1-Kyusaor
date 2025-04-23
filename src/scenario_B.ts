//composite
export class Employe {
    private _identifiant: string;
    
    constructor() {

    }

    get identifiant() {
        return this._identifiant;
    }
}

export class Departement {
    private _nom: string;
    private _dependance?: Departement;
    private _employes: string[];

    constructor(nom: string, dependance?: Departement) {
        this.nom = nom;
        if(dependance)
            this.dependance = dependance;
    }

    get nom() {
        return this._nom;
    }

    set nom(nom: string) {
        this._nom = nom;
    }

    get dependance(): Departement | undefined {
        return this._dependance;
    }

    set dependance(dpt: Departement) {
        this._dependance = dpt;
    }

    ajoutEmploye(employe: Employe) {
        this._employes.push(employe.identifiant);
    };

    retraitEmploye(employe: Employe) {
        const index = this._employes.indexOf(employe.identifiant);
        if(index >= 0)
            this._employes.splice(index, 1);
        else
            throw new Error("Employé non affilié au département");
    };
}

const SG = new Departement("Secrétariat général");


const DT = new Departement("Departement technique");

const it = new Departement("IT");
const web = new Departement("Web");
it.dependance = DT;
web.dependance = DT;


const DC = new Departement("Département commercial");

const ventes = new Departement("Ventes");
const achats = new Departement("Achats");
ventes.dependance = DC;
achats.dependance = DC;


const DF = new Departement("Département financier");

const rh = new Departement("RH");
const compta = new Departement("Comptabilité");
const admin = new Departement("Administration");
rh.dependance = DF;
compta.dependance = DF;
admin.dependance = DF;


