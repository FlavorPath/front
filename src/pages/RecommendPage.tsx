import { centerContainer } from '@/styles/commonStyle/centerContainer';
import { css, cx } from '@styled-system/css';

const RecommendPage = () => {
	return (
    <div className={cx(centerContainer(), css({ textStyle: 'body1' }))}>서비스 준비 중입니다.</div>
  );
};

export default RecommendPage;