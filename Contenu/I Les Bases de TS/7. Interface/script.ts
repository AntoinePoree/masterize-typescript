interface IRocket {
  reacteur: number;
  vMax: number;
  takeOff: (action: string) => void;
}

interface IRocket {
  price: number;
  name: string;
}

// Interface s'occupe que des Objects
// Notre interface rocket sera un merge des deux interface du dessus
// Sachant que les types ne peuvent pas faire cela
// Les interfaces sont souvent utilisés de paires avec les Class

class RocketFactory implements IRocket {
  reacteur: number;
  vMax: number;
  price: number;
  name: string;

  constructor(reacteur: number, vMax: number, price: number, name: string) {
    this.reacteur = reacteur;
    this.vMax = vMax;
    this.price = price;
    this.name = name;
  }

  takeOff(action: string) {
    console.log(action);
  }
}

const Falcon1 = new RocketFactory(4, 999, 12000, "Falcon1");
console.log(Falcon1);
// {
//   reacteur: 4;
//   vMax: 999;
//   price: 12000;
//   name: 'Falcon1';
// }
Falcon1.takeOff("Décollage");
