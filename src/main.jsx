import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { store } from './redux/store.js';
import { Provider } from 'react-redux';

import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';

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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
