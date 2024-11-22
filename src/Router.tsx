import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WholePage from './pages/Whole.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WholePage />,
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default Router;