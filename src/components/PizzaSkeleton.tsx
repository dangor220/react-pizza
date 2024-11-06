import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PizzaSkeleton(): React.ReactNode {
  return (
    <div className="pizza-block-wrapper">
      <div className="skeleton pizza-block">
        <Skeleton
          className="skeleton__pizza"
          containerClassName="skeleton__pizza-container"
          circle
        />
        <Skeleton className="skeleton__title" containerClassName="skeleton__title-container" />

        <Skeleton
          className="skeleton__selector"
          containerClassName="skeleton__selector-container"
          borderRadius={10}
        />
        <div className="skeleton__bottom pizza-block__bottom">
          <Skeleton className="skeleton__price" containerClassName="skeleton__price-container" />
          <Skeleton className="skeleton__add" containerClassName="skeleton__add-container" />
        </div>
      </div>
    </div>
  );
}
