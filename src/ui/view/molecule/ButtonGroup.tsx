import { css } from "@styled-system/css";
import Button from "../atom/Button";
type ButtonGroupProps = {
  activeLabel: string;
  setActiveLabel: (value: string) => void;
};

const buttonItems = [
  { label: "한식", value: "한식" },
  { label: "일식", value: "일식" },
  { label: "중식", value: "중식" },
  { label: "양식", value: "양식" },
  { label: "디저트", value: "디저트" },
];

const ButtonGroup = ({ activeLabel, setActiveLabel }: ButtonGroupProps) => {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "75px",
        position: "fixed",
        zIndex: 900,
        marginLeft: "30px",
      })}
    >
      {buttonItems.map((item) => (
        <Button
          key={item.value}
          variant={activeLabel === item.value ? "filled" : "outlined"}
          className={css({
            width: "55px",
            height: "24px",
            borderRadius: 12,
            fontWeight: "medium",
          })}
          onClick={() => setActiveLabel(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
