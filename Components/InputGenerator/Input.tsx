import { ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { log } from "console";

interface Iinput {
  label?: string;
  width?: string;
  height?: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  onChange: (value: any) => void;
}
const Input: React.FC<Iinput> = ({
  label,
  width = "50%",
  height,
  name,
  value,
  type,
  placeholder,
  onChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(value);
  };
  return (
    <div className={`${styles.inputwrapper}`} style={{ width: `${width}` }}>
      <label>{label}</label>
      <input
        style={{ height: `${height}` }}
        //    className={(errors.name && touch.name ) && styles.uncompleted}
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        //   value={UserData.FName}
      />
    </div>
  );
};

export default Input;
