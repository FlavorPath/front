import { useReview } from '@/hooks/useReview';
import Button from '@/ui/view/atom/Button';
import Textarea from '@/ui/view/atom/Textarea';
import Header from '@/ui/view/molecule/Header';
import { useMobileDevice } from '@/utils/hooks/useMobileDevice';
import { css, cx } from '@styled-system/css';
import { flex, float } from '@styled-system/patterns';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ReviewPage = () => {
  const navigate = useNavigate();
  const { reviewId } = useParams();
  const [searchparams] = useSearchParams();
  const isMobile = useMobileDevice();
	const { isUpdate, restaurant, isFocused, content, onSave } = useReview({
    targetId: Number(searchparams.get('targetId')!),
    reviewId: Number(reviewId) || 0,
  });
	
	return (
    <div className={styles.container}>
      <Header headerText={isUpdate ? '리뷰 수정하기' : '리뷰 남기기'} />
      <div className={css({ margin: '0 30px' })}>
        <h3 className={styles.title}>{restaurant?.name}</h3>
        <p className={styles.address}>{restaurant?.address}</p>
        <div className={css({ position: 'relative' })}>
          <Textarea />
          <span className={styles.length}>{content?.length} / 200</span>
        </div>
      </div>
      <div
        className={cx(
          styles.button_grp,
          css({
            margin: isFocused && isMobile ? '18px auto 0' : '0 30px 0',
            position: isFocused && isMobile ? 'sticky' : 'absolute',
          })
        )}
      >
        {isUpdate && (
          <Button
            variant='outlined'
            className={styles.cancel_btn}
            onClick={() => navigate(-1)}
          >
            취소
          </Button>
        )}
        <Button
          size='large'
          className={cx(styles.save_button, css({ marginLeft: isUpdate ? '8px' : 0 }))}
          onClick={onSave}
        >
          {isUpdate ? '리뷰 수정하기' : '리뷰 등록하기'}
        </Button>
      </div>
    </div>
  );
};

export default ReviewPage;

const styles = {
  container: css({
    height: '100dvh',
    position: 'relative',
    display: 'flex',
    flexDir: 'column',
  }),
  title: css({
    textStyle: 'heading2',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'keep-all',
    whiteSpace: 'pre-wrap',
    lineHeight: '30px',
    marginTop: '20px',
  }),
  address: css({
    marginTop: '6px',
    textStyle: 'body3',
    lineHeight: '20px'
  }),
  button_grp: flex({
    width: 'calc(100% - 60px)',
    bottom: '25px',
    left: 0,
    zIndex: 10,
  }),
  cancel_btn: css({
    width: '123px',
  }),
  save_button: css({
    flex: 1,
  }),
  length: float({
    placement: 'bottom-end',
    right: '50px',
    bottom: '25px',
    textStyle: 'body3',
  }),
};