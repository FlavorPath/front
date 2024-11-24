import { useReview } from '@/hooks/useReview';
import Button from '@/ui/view/atom/Button';
import Header from '@/ui/view/molecule/Header';
import { useMobileDevice } from '@/utils/hooks/useMobileDevice';
import { css, cx } from '@styled-system/css';
import { flex, float } from '@styled-system/patterns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  // TODO: 리뷰 아이템 만드는 대로 적용할 것
	review: string;
	// 리뷰 추가일때는 음식점 id, 리뷰 수정일때는 리뷰 id
	targetId: number;
}

const ReviewPage = ({ review, targetId }: IProps) => {
	const navigate = useNavigate();

	const { isUpdate, content, setContent, onSave } = useReview({
    initialContent: review,
    targetId,
  });
	
	const isMobile = useMobileDevice()
	const [isFocused, setIsFocused] = useState(false)
	
	return (
    <div
      className={css({
        height: '100dvh',
        position: 'relative',
        display: 'flex',
        flexDir: 'column',
      })}
    >
      <Header headerText={isUpdate ? '리뷰 수정하기' : '리뷰 남기기'} />
      <div className={css({ margin: '0 30px' })}>
        <h3 className={styles.title}>박순례손말이고기 산정집 광화문점</h3>
        <p className={styles.address}>서울 종로구 종로 19</p>
        <div className={css({ position: 'relative' })}>
          <textarea
            className={styles.textarea}
            value={content}
            onChange={e => setContent(e.target.value)}
            maxLength={200}
            placeholder='리뷰를 남겨주세요!'
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <span className={styles.length}>{content.length} / 200</span>
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
    marginTop: '16px',
    textStyle: 'body3',
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
  textarea: css({
    borderColor: 'primary.main',
    borderWidth: '1px',
    borderRadius: '16px',
    height: '215px',
    resize: 'none',
    marginTop: '24px',
    width: '100%',
    outline: 'none',
    padding: '15px',
    textStyle: 'body3',
    fontWeight: 'light',
    lineHeight: '20px',
  }),
  length: float({
    placement: 'bottom-end',
    right: '50px',
    bottom: '25px',
    textStyle: 'body3',
  }),
};