import useTextareaStore from '@/store/stores/textarea.store';
import { css } from '@styled-system/css';

const Textarea = () => {
	const { content, setContent, setIsFocused } = useTextareaStore()

	return (
    <textarea
      className={styles.textarea}
      value={content}
      onChange={e => setContent(e.target.value)}
      maxLength={200}
      placeholder='리뷰를 남겨주세요!'
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default Textarea;

const styles = {
  textarea: css({
    borderColor: 'primary.main',
    borderWidth: '1px',
    borderRadius: '16px',
    height: '255px',
    resize: 'none',
    marginTop: '24px',
    width: '100%',
    outline: 'none',
    padding: '15px',
    textStyle: 'body3',
    fontWeight: 'light',
    lineHeight: '20px',
  }),
};