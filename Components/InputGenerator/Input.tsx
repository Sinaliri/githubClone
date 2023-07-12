import { ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { log } from "console";

interface Iinput {
  label: string;
  width?: string;
  height?: string;
  name: string;
  value: string;
  type: string;
  onChange: (value: string) => void;
}
const Input: React.FC<Iinput> = ({
  label,
  width = "6",
  height,
  name,
  value,
  type,
  onChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(value);
  };
  return (
    <div className={`${styles.inputwrapper} col-12 xl:col-${width}`}>
      <label>{label}</label>
      <input
        style={{ height: `${height}` }}
        //    className={(errors.name && touch.name ) && styles.uncompleted}
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        //   value={UserData.FName}
      />
    </div>
  );
};

export default Input;
