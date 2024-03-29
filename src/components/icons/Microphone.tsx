import { FC } from "react";
interface MicrophoneType {
  isListening?: boolean;
}
const MicrophoneIcon: FC<MicrophoneType> = ({ isListening = false }) => {
  return (
    <svg
      baseProfile="tiny"
      height="24px"
      version="1.2"
      viewBox="1 1 22 22"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: isListening ? "#00ff76" : "" }}
    >
      <g id="Layer_1">
        <g>
          <path d="M12,16c-2.206,0-4-1.795-4-4V6c0-2.205,1.794-4,4-4s4,1.795,4,4v6C16,14.205,14.206,16,12,16z M12,4c-1.103,0-2,0.896-2,2    v6c0,1.104,0.897,2,2,2s2-0.896,2-2V6C14,4.896,13.103,4,12,4z" />
        </g>
        <path d="M19,12v-2c0-0.553-0.447-1-1-1s-1,0.447-1,1v2c0,2.757-2.243,5-5,5s-5-2.243-5-5v-2c0-0.553-0.447-1-1-1s-1,0.447-1,1v2   c0,3.52,2.613,6.432,6,6.92V20H8c-0.553,0-1,0.447-1,1s0.447,1,1,1h8c0.553,0,1-0.447,1-1s-0.447-1-1-1h-3v-1.08   C16.387,18.432,19,15.52,19,12z" />
      </g>
    </svg>
  );
};

export default MicrophoneIcon;
