import * as HeroIcon from "react-icons/hi";

interface IProps {
  iconName: keyof typeof HeroIcon;
  size?: number;
  color?: string;
  onClick: () => void;
  className?: string;
  fill?: string;
}

const Icon = ({ iconName, size, color, onClick, className, fill }: IProps) => {
  const IconComponent = HeroIcon[iconName];
  return (
    <button type="button" onClick={onClick} className={className}>
      <IconComponent size={size} color={color} fill={fill} />
    </button>
  );
};

export default Icon;
