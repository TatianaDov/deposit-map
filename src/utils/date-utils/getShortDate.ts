export const getShortDate = (date: Date) => {
  if (date.toString() === 'Invalid Date') {
    date = new Date();
  }
  const localedDateArr = date
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('.');

  return `${localedDateArr[2]}-${localedDateArr[1]}-${localedDateArr[0]}`;
};
