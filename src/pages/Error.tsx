import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import NotFound from '../components/NotFound';

export default function ErrorPage(): React.ReactNode {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <NotFound />
      <Link className="error-back" to="/">
        На главную
      </Link>
    </div>
  );
}
