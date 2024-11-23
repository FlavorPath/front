import { css } from "@styled-system/css";
import Button from "../atom/Button";

interface IProp {
  labelItems: string[];
}

const LabelGroup = ({ labelItems }: IProp) => {
  return (
    <div
      className={css({
        display: "flex",
        gap: "10px",
      })}
    >
      {labelItems.map((item, index) => (
        <Button
          key={index}
          variant={"filled"}
          className={css({
            width: "55px",
            height: "24px",
            borderRadius: 12,
            fontWeight: "medium",
          })}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default LabelGroup;
