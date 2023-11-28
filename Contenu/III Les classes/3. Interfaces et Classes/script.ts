interface Country {
  name: string;
  population: number;
  lang: string[];
}

class Norway implements Country {
  constructor(
    public name: string,
    public population: number,
    public lang: string[],
    public Capital: string
  ) {}
}
const NorwayData = new Norway("Norway", 9, ["Norwegian"], "Oslo");
console.log(NorwayData);

class France implements Country {
  constructor(
    public name: string,
    public population: number,
    public lang: string[]
  ) {}
}
const FranceData = new France("France", 70, ["Français", "Breton", "Basque"]);
console.log(FranceData);

class Aquitaine extends France {}

const AquitaineData = new Aquitaine("Aquitaine", 4, [
  "Français",
  "Basque",
  "Gascon",
]);

/**
 * EXEMPLE AVEC UN DTO POUR MAPPER DEPUIS UNE API
 */

export interface ISkillDTO {
  id: string;
  competence: string;
  type: string;
  note: number;
}

export interface ISkill {
  id: string;
  name: string;
  type: string;
  level: number;
}

export class Skill implements ISkill {
  id: string;
  name: string;
  type: string;
  level: number;

  constructor(skill: ISkillDTO) {
    this.id = skill.id;
    this.name = skill.competence;
    this.type = skill.type;
    this.level = skill.note;
  }
}
