import React from 'react';

import ErrorPage from '../../components/error-page/ErrorPage';

export default function NotFound() {
  return <ErrorPage code={404} description="Не туда попали" />;
}
