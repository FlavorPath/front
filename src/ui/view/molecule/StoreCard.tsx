import { css, cx } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import Icon from '../atom/Icon';
import { useLocation } from 'react-router-dom';
import { Store } from '@/mocks/mock-data/stores.mock';
import { useDeleteBookmark } from '@/store/queries/bookmarks.query';

const StoreCard = ({searchText, ...props}: Store & {searchText: string}) => {
  const location = useLocation();
  const isSearching = location.pathname === '/search'

  const { mutate: deleteBookmark } = useDeleteBookmark();

  return (
    <div className={styles.container}>
      <a className={flex({ width: '100%' })}>
        <div className={styles.store_img}>
          <img
            src={props.photo_url}
            alt='store img'
            className={styles.photo}
            loading="lazy"
          />
        </div>
        <div className={styles.info_box}>
          <div className={flex({ marginTop: '2px', gap: '4px' })}>
            {props.labels.map((key, index) => (
              <span
                key={key}
                className={cx(
                  styles.keyword,
                  css({ color: searchText === key ? 'primary.main' : 'background.gray' })
                )}
              >
                {key}
                {index !== props.labels.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
          <strong className={styles.title}>{props.name}</strong>
          <span className={styles.address}>{props.address}</span>
        </div>
      </a>
      {!isSearching && (
        <button
          className={styles.bookmark}
          onClick={() => deleteBookmark({ restaurantId: props.restaurantId })}
        >
          <span className={styles.solid_icon}>
            <Icon
              library={'hero-solid'}
              iconName='BookmarkIcon'
            />
          </span>
        </button>
      )}
    </div>
  );
};

export default StoreCard;

const styles = {
  container: flex({
    width: '100%',
    padding: '30px 30px',
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
    right: '30px',
    width: '20px',
    height: '24px',
  }),
  outlined_icon: css({
    '& > button > svg': {
      fill: 'white',
      stroke: 'primary.main',
      strokeWidth: '2',
    },
  }),
  solid_icon: css({
    '& > button > svg': {
      fill: 'primary.main',
    },
  }),
  photo: css({
    width: '100%',
    height: 'inherit',
    objectFit: 'cover',
  }),
};