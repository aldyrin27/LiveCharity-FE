import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import LivestreamPage from '../views/LivestreamPage';

import LayoutHome from '../components/layoutHome/LayoutHome';
import CampaignPage from '../views/CampaignPage';
import CampaignDetailPage from '../views/CampaignDetailPage';

import TopUpModal from '../components/modal/TopUpModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutHome />,
    children: [
      {
        path: '/',
        index: true,
        element: <CampaignPage />,
      },
    ],
  },

  {
    path: '/livestream',
    element: <LivestreamPage />,
  },

  {
    path: '/detail/:id',
    element: <CampaignDetailPage />,
  },

  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default router;
