import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

import App from './App.tsx';
import Home from './pages/Home';

const Cart = lazy(() => import(/* webpackChunkName: 'Cart' */ './pages/Cart'));
const PizzaCard = lazy(() => import(/* webpackChunkName: 'PizzaCard' */ './components/PizzaCard'));
const ErrorPage = lazy(() => import(/* webpackChunkName: 'ErrorPage' */ './pages/Error'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: (
        <Suspense fallback={<div>Идет загрузка...</div>}>
          <ErrorPage />
        </Suspense>
      ),
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'cart',
          element: (
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: 'pizza/:id',
          element: (
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <PizzaCard />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: '/react-pizza/' },
);

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
