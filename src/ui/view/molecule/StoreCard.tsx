import { css, cx } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import bookmark from '../../../assets/icons/bookmark.svg';
import bookmarkInactive from '../../../assets/icons/bookmark-inactive.svg';
import { useToggle } from '@/hooks/useToggle';

interface IProps {
	imageUrl: string;
	keywords: string[];
	storeName: string;
	storeAddress: string;
	searchText?: string;
}

const StoreCard = (props: IProps) => {
  const { imageUrl, keywords, storeName, storeAddress, searchText } = props;
  const { value: isBookmarked, toggle: toggleBookmark } = useToggle({defaultValue: false})
	
  return (
    <div className={styles.container}>
      <a className={flex({ width: '100%'})}>
        <div className={styles.store_img}>
          <img
            src={imageUrl}
            alt='store img'
            style={{ height: 'inherit', objectFit: 'cover' }}
          />
        </div>
        <div className={styles.info_box}>
          <div className={flex({ marginTop: '2px' })}>
            {keywords.map((key, index) => (
              <span
                key={key}
                className={cx(
                  styles.keyword,
                  css({ color: searchText === key ? 'primary.main' : 'background.gray' })
                )}
              >
                {key}
                {index !== keywords.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
          <strong className={styles.title}>{storeName}</strong>
          <span className={styles.address}>{storeAddress}</span>
        </div>
      </a>
      <button
        className={styles.bookmark}
        onClick={toggleBookmark}
      >
        {isBookmarked ? <img src={bookmark} /> : <img src={bookmarkInactive} />}
      </button>
    </div>
  );
};

export default StoreCard;

const styles = {
  container: flex({
    width: '100%',
    padding: '30px 20px',
    position: 'relative',
    borderBottomColor: 'background.lightgray',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  }),
  store_img: css({
    width: '65px',
    height: '65px',
    borderRadius: '8px',
    overflow: 'hidden',
  }),
  info_box: flex({
    flexDirection: 'column',
    marginLeft: '8px',
    flex: 1,
  }),
  keyword: css({
    textStyle: 'caption1',
  }),
  title: css({
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  }),
  address: css({
    marginTop: '8px',
    textStyle: 'caption1',
    fontWeight: 'light',
  }),
  bookmark: css({
    position: 'absolute',
    right: '20px',
  }),
};