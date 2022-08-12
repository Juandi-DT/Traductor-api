import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { AnkiContextProps, AnkiData } from "../utils/interfaces";

interface AnkiProviderProps {
  children: ReactNode;
}

const AnkiContext = createContext<AnkiContextProps | null>({
  ankiData: null,
  setAnkiData: (ankiData: any) => null,
});

export const AnkiProvider: FC<AnkiProviderProps> = ({ children }) => {
  const [ankiData, setAnkiData] = useState<AnkiData[] | null>(null);

  useEffect(() => {
    const getLocalAnki = () => {
      const data: string | null = localStorage.getItem("anki");
      if (!data) {
        setAnkiData([]);
        localStorage.setItem("anki", "");
      } else {
        const newArray = data.split("|");
        const newData: AnkiData[] = newArray.map(item => {
          const arrayItem = item.split(";");
          return {
            original: arrayItem[0],
            translate: arrayItem[1],
          };
        });
        setAnkiData(newData || []);
      }
    };
    getLocalAnki();
  }, []);

  useEffect(() => {
    const copyAnkiData = () => {
      navigator.clipboard.writeText(localStorage.getItem("anki") || "");
    };
    const sincronization = () => {
      const newData = ankiData
        ?.filter(({ original, translate }) => {
          if (
            (original && original !== "") ||
            (translate && translate !== "")
          ) {
            return { original, translate };
          }
        })
        .map(({ original, translate }) => `${original};${translate}`);

      const joinData = newData?.join("|");
      localStorage.setItem("anki", joinData || "");
      copyAnkiData();
      // console.log("cambio en useEffect de ankiPrpvider");
    };
    if (ankiData) {
      sincronization();
    }
  }, [ankiData]);

  return (
    <AnkiContext.Provider value={{ ankiData, setAnkiData }}>
      {children}
    </AnkiContext.Provider>
  );
};

export default AnkiContext;
