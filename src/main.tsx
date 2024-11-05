import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

import App from './App.tsx';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PizzaCard from './components/PizzaCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'pizza/:id',
        element: <PizzaCard />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
