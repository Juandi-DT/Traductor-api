import { ChangeEvent, FC, useRef, useState } from "react";
import ClearIcon from "../icons/Clear";
import CopyIcon from "../icons/Copy";
import MicrophoneIcon from "../icons/Microphone";
import Item from "./Item";
interface LenguajeType {
  lenguaje: string;
  data: string;
  setData: (prev: string) => void;
}
const Lenguaje: FC<LenguajeType> = ({ lenguaje, data, setData }) => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const copyAction = () => {
    navigator.clipboard.writeText(data);
  };
  const transcriptAction = () => {
    // setIsListening(true);
    // let transcript = "Browser is not Support this action ";
    // setData(transcript);
    // setIsListening(false);
  };
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newData = e.target.value;
    setData(newData);
  };
  const clearInput = () => {
    setData("");
    textAreaRef.current && textAreaRef.current.focus();
  };

  return (
    <div className="lenguaje-box">
      <textarea
        ref={textAreaRef}
        placeholder={lenguaje}
        value={data}
        onChange={handleChange}
      ></textarea>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <Item icon={<ClearIcon />} name="clear textarea" onClick={clearInput} />
      </div>
      <div className="iconsArea">
        <Item
          icon={<CopyIcon />}
          name="copy"
          shadow={true}
          onClick={copyAction}
        />
        <Item
          icon={<MicrophoneIcon isListening={isListening} />}
          name="Microphone"
          shadow={true}
          onClick={transcriptAction}
        />
      </div>
    </div>
  );
};

export default Lenguaje;
