//factory
interface Personnage {
    attaquer();
}

class PersoFactory {

    static creerPerso(type: string): Personnage {
        switch(type) {
            case 'guerrier':
                return new Guerrier();
                break;

            case 'mage':
                return new Mage();
                break;

            case 'archer':
                return new Archer();
                break;

            default:
                throw new Error("Personnage inconnu");
                break;
        }
    }
}

class Guerrier implements Personnage {
    attaquer() {
        console.log("LEROOOOY JENKINS")
    }

}

class Mage implements Personnage {
    attaquer() {
        console.log("4 MILLIONS DE POINTS POUR GRYFFONDOR")
    }
}

class Archer implements Personnage {
    attaquer() {
        console.log("Vous inquiétez pas, je suis nyctalope!")
    }
}

const archer = PersoFactory.creerPerso('archer');
const guerrier = PersoFactory.creerPerso('guerrier');
const mage = PersoFactory.creerPerso('mage');
archer.attaquer();
mage.attaquer();
guerrier.attaquer();