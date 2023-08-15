export const getShortDateISO = (date: Date) => {
  return date.toISOString().slice(0, 16);
};
