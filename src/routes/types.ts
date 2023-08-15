import { RouteProps } from 'react-router-dom';

export type RoutePropsStrict =
  | RouteProps
  | {
      path: string;
      title?: string;
      label?: string;
      redirect?: string;
      onClick?: () => void;
    };
