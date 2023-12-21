type RoleStateEnum =
  | "ADMIN"
  | "INTERNE"
  | "PRENANTES"
  | "PRODUCTEUR"
  | "REALISATEUR"
  | "PUBLIC";

type RoleStateDef = {
  readonly label: string;
};

export type RoleState = {
  readonly [K in RoleStateEnum]: { readonly id: K } & RoleStateDef;
};

export const RoleState = {
  ADMIN: { id: "ADMIN", label: "Administrateur" },
  INTERNE: { id: "INTERNE", label: "Interne Miyu" },
  PRENANTES: { id: "PRENANTES", label: "Parties prenantes" },
  PRODUCTEUR: { id: "PRODUCTEUR", label: "Producteur" },
  REALISATEUR: { id: "REALISATEUR", label: "Réalisateur" },
  PUBLIC: { id: "PUBLIC", label: "Public" },
} as const satisfies RoleState;

export const RoleStates = [
  RoleState.ADMIN,
  RoleState.INTERNE,
  RoleState.PRENANTES,
  RoleState.PRODUCTEUR,
  RoleState.REALISATEUR,
  RoleState.PUBLIC,
] as const satisfies readonly RoleState[keyof RoleState][];
