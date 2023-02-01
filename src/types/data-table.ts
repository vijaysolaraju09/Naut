export interface Column {
  header: string;
  accessor: string;
  formatDisplay?: (row: any) => JSX.Element | undefined;
  alignment?: "center" | "left" | "right";
}

export interface Action {
  name: string;
  content: JSX.Element | string;
  action: (row: any) => void;
}
