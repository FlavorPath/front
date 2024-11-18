import { InputHTMLAttributes } from "react";
import * as HeroSolidIcon from "@heroicons/react/24/solid";
import * as HeroOutlineIcon from "@heroicons/react/24/outline";
import { css } from "@styled-system/css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  defaultValue?: string;
  value?: string;
  icon?: keyof typeof HeroSolidIcon & keyof typeof HeroOutlineIcon; // 사용할 아이콘
  disabled?: boolean;
  onValueChange?: (value: string) => void; // 입력 값 변경 핸들러
}

const SearchInput = ({
  className,
  defaultValue,
  value,
  icon,
  disabled = false,
  onValueChange,
  ...props
}: IProps) => {
  const IconComponent = icon
    ? HeroOutlineIcon[icon] || HeroSolidIcon[icon]
    : null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value); // 입력 값 변경 시 호출
    }
  };

  return (
    <div className={`${styles.inputWrap} ${className || ""}`}>
      <input
        {...props}
        type="text"
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
      />
      {IconComponent && (
        <span className={styles.icon}>
          <IconComponent width={20} height={20} />
        </span>
      )}
    </div>
  );
};

export default SearchInput;

const styles = {
  inputWrap: css({
    display: "flex",
    alignItems: "center",
    width: "315px",
    height: "40px",
    border: "2px solid",
    borderColor: "primary.main",
    borderRadius: "8px",
    padding: "0 10px",
    backgroundColor: "white",
    overflow: "hidden",
  }),
  icon: css({
    marginRight: "8px",
    color: "primary.main",
    strokeWidth: "2",
  }),
  input: css({
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    fontWeight: "bold",
    color: "gray.700",
    "&::placeholder": {
      color: "background.lightgrtay",
    },
  }),
};
