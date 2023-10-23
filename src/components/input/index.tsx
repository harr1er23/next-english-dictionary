import React from "react";
import styles from "./input.module.scss";

type InputProps = {
    value: string,
    onChangeFunction: any,
    textPlaceholder: string,
    type: string,
    onKeyDownFunction?: any,
    svgSrc?: string,
    onClickFunction?: any,
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeFunction,
  textPlaceholder,
  type,
  onKeyDownFunction,
  svgSrc,
  onClickFunction,
  disabled=false
}) => {
  return (
    <div className={styles.inputBlock}>
      <input
        value={value}
        onChange={(e) => onChangeFunction(e.target.value)}
        type={type}
        onKeyDown={onKeyDownFunction}
        className={styles.input}
        placeholder={textPlaceholder}
      />
      {svgSrc ? <div className={styles.soundImg}>{svgSrc}</div> : ''}
    </div>
  );
};

export default Input;