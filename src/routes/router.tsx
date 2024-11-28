import RecommendPage from '@/pages/RecommendPage';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const RestaurantPage = lazy(() => import('@/pages/RestaurantPage'));
const ReviewPage = lazy(() => import('@/pages/ReviewPage'));
const ScrapPage = lazy(() => import('@/pages/ScrapPage'));
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const SignUpPage = lazy(() => import('@/pages/SignupPage'));
const UserInfoPage = lazy(() => import('@/pages/UserInfoPage'));
const AuthLayout = lazy(() => import('@/ui/components/layout/AuthLayout'));
const Layout = lazy(() => import('@/ui/components/layout/Layout'));
const NavigationLayout = lazy(() => import('@/ui/components/layout/NavigationLayout'));
const RestaurantMain = lazy(() => import('@/ui/components/restaurant/RestaurantMain'));
const RestaurantMenu = lazy(() => import('@/ui/components/restaurant/RestaurantMenu'));
const RestaurantReview = lazy(() => import('@/ui/components/restaurant/RestaurantReview'));

const router = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <NavigationLayout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/recommendations',
            element: <RecommendPage />,
          },
          {
            path: '/bookmarks',
            element: <ScrapPage />,
          },
          {
            path: '/profile',
            element: <UserInfoPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantPage />,
        children: [
          {
            path: '',
            element: <RestaurantMain />,
          },
          {
            path: 'menu',
            element: <RestaurantMenu />,
          },
          {
            path: 'review',
            element: <RestaurantReview />,
          },
        ],
      },
      {
        path: '/auth',
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
      {
        path: '/bookmark',
        element: <ScrapPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/review',
        element: <ReviewPage />,
      },
      {
        path: '/review/:reviewId',
        element: <ReviewPage />,
      },
    ],
  },
];

export default router;
