type DebouncedFunction<T extends (...args: any[]) => any> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => void;

const debounce = <T extends (...args: any[]) => any>(
  func: T,
  ms: number,
  options?: { dispatch?: (action: any) => void },
): DebouncedFunction<T> => {
  let timerID: number;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    clearTimeout(timerID);

    timerID = window.setTimeout(() => {
      if (options?.dispatch) {
        options.dispatch(func.apply(this, args));
      } else {
        func.apply(this, args);
      }
    }, ms);
  };
};

export default debounce;
