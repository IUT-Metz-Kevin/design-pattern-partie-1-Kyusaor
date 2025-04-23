//composite

export class Employe {
    constructor() {

    }
}


export class Departement {
    private _nom: string;
    private _dependance: Departement;
    private _employes: Employe[];

    constructor(nom: string, dependance: Departement) {
    }

    //Getters / Setters

    ajoutEmploye(employe: Employe) {};

    retraitEmploye(employe: Employe) {};
}

