export interface AnkiData {
  original: string;
  translate: string;
}

export interface AnkiContextProps {
  ankiData: AnkiData[] | null;
  setAnkiData: (ankiData: any) => AnkiData[] | void | null;
}
