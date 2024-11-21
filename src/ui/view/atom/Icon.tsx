import * as HeroIcon from 'react-icons/hi';

interface IProps {
  iconName: keyof typeof HeroIcon;
  size?: number;
  color?: string;
  onClick: () => void;
  className?: string;
  width?: number;
  height?: number;
}

const Icon = ({ iconName, size, color, onClick, className, width, height }: IProps) => {
  const IconComponent = HeroIcon[iconName];
  return (
    <button
      type='button'
      onClick={onClick}
      className={className}
    >
      <IconComponent
        size={size}
        color={color}
        width={width || size}
        height={height || size}
      />
    </button>
  );
};

export default Icon;
