import * as ReactHeroIcon from "react-icons/hi";
import * as HeroSolidIcon from "@heroicons/react/24/solid";
import * as HeroOutLineIcon from "@heroicons/react/24/outline";

interface IProps {
  iconName: string;
  library?: "react-icons" | "hero-solid" | "hero-outline";
  size?: number;
  color?: string;
  fill?: string;
  onClick?: () => void;
  className?: string;
}

const Icon = ({
  iconName,
  library = "react-icons",
  size = 24,
  color = "currentColor",
  fill = "none",
  onClick,
  className,
}: IProps) => {
  let IconComponent: React.ElementType | undefined;
  if (library === "react-icons") {
    IconComponent = ReactHeroIcon[iconName as keyof typeof ReactHeroIcon];
  }
  if (library === "hero-solid") {
    IconComponent = HeroSolidIcon[iconName as keyof typeof HeroSolidIcon];
  }
  if (library === "hero-outline") {
    IconComponent = HeroOutLineIcon[iconName as keyof typeof HeroOutLineIcon];
  }

  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found in "${library}" library.`);
    return null;
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      <IconComponent
        width={size}
        height={size}
        color={color}
        fill={fill}
        className={className}
      />
    </button>
  );
};

export default Icon;
