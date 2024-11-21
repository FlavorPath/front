import { center } from '@styled-system/patterns';
import StoreCard from '../molecule/StoreCard';
import useStoreState from '@/store/stores/stores.store';

const StoreListTemplate = () => {
  const { stores, noResultText } = useStoreState();

  return (
    <div>
      {stores?.length ? (
        stores?.map((item: any) => (
          <StoreCard
            key={item.name}
            imageUrl='https://mblogthumb-phinf.pstatic.net/MjAyMjA2MTVfNTAg/MDAxNjU1Mjc1NjY4ODQw.6yx22lIpua3VuAel1Qe3W4AYGAR1K1imN21ieqFSd88g.JQ4N1OOBNIK4TLep64AelKYhMI4WdELxGyuxPFQ3NJMg.JPEG.uijing3697/KakaoTalk_20220615_143719849_06.jpg?type=w800'
            keywords={['고기', '한식', '중식']}
            storeName={'홀짝집'}
            storeAddress={'서울 송파구 백제고분로 69 (잠실동)'}
          />
        ))
      ) : (
        <div className={styles.no_result}>{noResultText}</div>
      )}
    </div>
  );
};

export default StoreListTemplate;

const styles = {
  no_result: center({
    height: 'calc(100dvh - 70px)',
    textStyle: 'body3',
    paddingBottom: '30px',
  }),
};