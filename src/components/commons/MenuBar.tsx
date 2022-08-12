import { FC, useState } from "react";
import useAnki from "../../hooks/useAnki";
import { AnkiContextProps, AnkiData } from "../../utils/interfaces";
import AnkiIcon from "../icons/Anki";
import MenuIcon from "../icons/Menu";
import PlayIcon from "../icons/Play";
import Item from "./Item";
interface MenuBarType {
  data: AnkiData;
  setResultTranslate: (prev: any) => void;
}

const API_URL = "https://api.mymemory.translated.net";

const MenuBar: FC<MenuBarType> = ({ data, setResultTranslate }) => {
  const { ankiData, setAnkiData } = useAnki() as AnkiContextProps;
  const [loading, setLoading] = useState(false);

  const convertToAnkiFormat = () => {
    if (ankiData) {
      setAnkiData((prev: AnkiData[]) => {
        const newData: AnkiData = {
          original: data.original,
          translate: data.translate,
        };
        return [...prev, newData];
      });
    }
  };

  const translate = () => {
    const input = data.original;
    if (input.length > 2 && input !== " ") {
      setLoading(true);
      fetch(`${API_URL}/get?q=${input}&langpair=en|es&mt=1`)
        .then(response => response.json())
        .then(texto => {
          const textoTraducido = texto.responseData.translatedText;
          setResultTranslate(textoTraducido);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  const clearAnki = () => {
    setAnkiData([]);
  };
  return (
    <div className="menu-box">
      <Item icon={<MenuIcon />} name="Menu" onClick={clearAnki} />
      <Item
        icon={<AnkiIcon />}
        name="add to anki format"
        onClick={convertToAnkiFormat}
      />
      <Item
        icon={<PlayIcon loading={loading} />}
        name="Translate"
        onClick={translate}
      />
    </div>
  );
};

export default MenuBar;
