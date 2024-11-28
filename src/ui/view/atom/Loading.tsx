import loading from '@/assets/loading/loading.webp';

interface Props {
	width?: number;
}

const Loading = ({ width = 60 }: Props) => {
  return (
    <img
      src={loading}
      width={width}
    />
  );
};

export default Loading;
