import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from '@/pages/SignupPage';
import Bottom from "@/ui/components/Bottom";
import AuthLayout from '@/ui/components/layout/AuthLayout';

const router = [
  {
    path: '/',
    element: <Bottom />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
    ],
  },
];

export default router;
