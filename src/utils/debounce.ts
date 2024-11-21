import { useDispatch } from 'react-redux';

type DebouncedFunction<T extends (...args: any[]) => any> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => void;

const debounce = <T extends (...args: any[]) => any>(func: T, ms: number): DebouncedFunction<T> => {
  let timerID: number;
  const dispatch = useDispatch();
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timerID);

    timerID = setTimeout(() => dispatch(func.apply(this, args)), ms);
  };
};

export default debounce;
