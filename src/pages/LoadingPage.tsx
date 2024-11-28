import Loading from '@/ui/view/atom/Loading';
import { centerContainer } from '@/styles/commonStyle/centerContainer';

const LoadingPage = () => {
	return (
    <div className={centerContainer()}>
      <Loading />
    </div>
  );
};

export default LoadingPage;