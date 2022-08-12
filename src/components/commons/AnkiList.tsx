import { FC } from "react";
import useAnki from "../../hooks/useAnki";
import { AnkiContextProps, AnkiData } from "../../utils/interfaces";
import TrashIcon from "../icons/Trash";
import Item from "./Item";

// interface AnkiListProps {}
const AnkiList: FC = () => {
  const { ankiData, setAnkiData } = useAnki() as AnkiContextProps;
  const deleteItem = (i: number) => {
    setAnkiData((prev: AnkiData[]) => {
      const newData = prev.filter((item, id) => id !== i);
      return [...newData];
    });
  };

  if (!ankiData) {
    return (
      <div className="anki-list">
        <span className="other">cargando....</span>
      </div>
    );
  }
  if (ankiData?.length === 0) {
    return (
      <div className="anki-list">
        <span className="other">no data saving, add a new data :)</span>
      </div>
    );
  }
  return (
    <div className="anki-list">
      <table border={1}>
        <thead>
          <tr>
            <th> Original </th>
            <th> Translate </th>
            <th> Delete </th>
          </tr>
        </thead>
        <tbody>
          {ankiData.map(({ translate, original }, i) => {
            if (
              !original ||
              !translate ||
              original === "" ||
              translate === ""
            ) {
              return null;
            }
            return (
              <tr key={i}>
                <td> {original} </td>
                <td> {translate} </td>
                <td>
                  <Item
                    icon={<TrashIcon />}
                    name="trash"
                    onClick={() => deleteItem(i)}
                  ></Item>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AnkiList;
