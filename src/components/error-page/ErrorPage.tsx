import React from 'react';
import { Link } from 'react-router-dom';

import { OwnProps } from './types';

export default function ErrorPage({ code, description }: OwnProps) {
  return (
    <div className="ErrorPage">
      <h1 className="h1 error-page__code">{code}</h1>
      <h3 className="h3 error-page__description margin_tb_s-6">{description}</h3>
      <Link to="/">Главная</Link>
    </div>
  );
}
