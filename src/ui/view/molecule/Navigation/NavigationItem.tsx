import { css } from "@styled-system/css";
import * as HeroSolidIcon from "@heroicons/react/24/solid";
import * as HeroOutlineIcon from "@heroicons/react/24/outline";

export interface NavigationItemProps {
  iconName: keyof typeof HeroSolidIcon & keyof typeof HeroOutlineIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavigationItem = ({
  iconName,
  label,
  isActive,
  onClick,
}: NavigationItemProps) => {
  const IconComponent = isActive
    ? HeroSolidIcon[iconName]
    : HeroOutlineIcon[iconName];

  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found.`);
    return null;
  }

  return (
    <div
      className={css({
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        color: "primary.main",
        "& span": {
          fontSize: "10px",
          marginTop: "2",
          fontWeight: "bold",
        },
      })}
      onClick={onClick}
    >
      <IconComponent width={30} height={30} />
      <span>{label}</span>
    </div>
  );
};

export default NavigationItem;
