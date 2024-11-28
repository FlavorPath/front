import { centerContainer } from '@/styles/commonStyle/centerContainer';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.number}>404</h3>
      <div className={styles.text_box}>
        <span>이 페이지는 존재하지 않는 페이지입니다.</span>
        <span className={css({ lineHeight: '30px' })}>
          이전으로 돌아가거나,
          <br />
          <a href='http://localhost:5173' className={css({ fontWeight: 'medium'})}>홈페이지</a>에 방문해주세요.
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;

const styles = {
  container: centerContainer({
    direction: 'column',
  }),
  number: css({
    marginTop: '30px',
    fontSize: '120px',
    fontWeight: 'bold',
    letterSpacing: '11px',
    color: 'background.gray',
  }),
  text_box: flex({
    flexDirection: 'column',
    textAlign: 'center',
    gap: '8px',
    marginTop: '30px',
  }),
};