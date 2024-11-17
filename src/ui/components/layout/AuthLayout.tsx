import Header from '@/ui/view/molcule/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

type AuthPathType = '/signup' | '/login';

const AuthLayout = () => {
	const location = useLocation();
	const [type, setType] = useState<AuthPathType>('/login');
	const text = type === '/signup' ? '회원가입' : '로그인';

	useEffect(() => {
		setType(location.pathname as AuthPathType);
  }, [location.pathname]);

  return (
    <div style={{ height: '100%', position: 'relative' }}>
      <Header headerText={text} />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
