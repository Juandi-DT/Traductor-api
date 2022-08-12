import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "../../styles/modules/Item.module.css";

interface ItemType {
  icon: ReactNode;
  name: string;
  shadow?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Item: FC<ItemType> = ({ icon, name, shadow = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={styles.item}
      title={name}
      style={{ boxShadow: shadow ? "var(--shadow)" : "" }}
    >
      {icon}
    </div>
  );
};

export default Item;
