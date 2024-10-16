import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PizzaSkeleton() {
  return (
    <div className="skeleton pizza-block">
      <Skeleton className="skeleton__pizza" circle width={240} />
      <Skeleton className="skeleton__title" />

      <Skeleton className="skeleton__selector" borderRadius={10} />
      <div className="pizza-block__bottom">
        <Skeleton className="skeleton__price" width={90} />
        <Skeleton className="skeleton__add" width={152} />
      </div>
    </div>
  );
}
