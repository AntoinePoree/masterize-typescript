// Pick permet de créer un type en "PRENNANT" les propriétés voulu d'une interface
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// Omit est le contraire de Pick
// Il permet de créer un type en excluant des propriétés d'une interface

interface Card {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type CardPreview = Omit<Card, "description">;

const card: CardPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

type CardInfo = Omit<Card, "completed" | "createdAt">;

const cardInfo: CardInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
