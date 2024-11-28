import { center } from '@styled-system/patterns';
import Loading from '@/ui/view/atom/Loading';

const LoadingPage = () => {
	return (
    <div className={styles.container}>
      <Loading />
    </div>
  );
};

export default LoadingPage;

const styles = {
  container: center({
    flexDirection: 'column',
    height: '100dvh',
    width: '100%',
    paddingBottom: '100px',
  }),
};