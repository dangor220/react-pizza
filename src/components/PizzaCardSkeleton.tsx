import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function PizzaCardSkeleton(): React.ReactNode {
  return (
    <>
      <div className="pizza__card">
        <div className="pizza__image">
          <Skeleton
            className="skeleton__pizza"
            containerClassName="skeleton__pizza-container skeleton__pizza-card-container"
            circle
          />
        </div>
        <div className="pizza__info">
          <h2 className="pizza__title">
            <Skeleton className="skeleton__title" containerClassName="skeleton__title-container" />
          </h2>

          <Skeleton
            className="skeleton__description"
            containerClassName="skeleton__description-container"
          />

          <Skeleton
            className="skeleton__selector"
            containerClassName="skeleton__selector-container skeleton__selector-card-container"
            borderRadius={10}
          />
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">
              <Skeleton
                className="skeleton__price"
                containerClassName="skeleton__price-container skeleton__price-card-container"
              />
            </div>

            <Skeleton
              className="skeleton__add"
              containerClassName="skeleton__add-container skeleton__add-card-container"
            />
          </div>
        </div>
      </div>
      <div className="cart__bottom-buttons">
        <Skeleton
          className="skeleton__back"
          containerClassName="skeleton__back-container skeleton__back-card-container"
        />
      </div>
    </>
  );
}
