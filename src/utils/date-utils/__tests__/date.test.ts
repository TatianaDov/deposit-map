// import { getShortDateISO } from '../getShortDateISO';
import { getShortDate } from '../getShortDate';

describe('Validation getShortDate function', () => {
  const exampleDate = '07.19.2022 18:51:32';
  test.each([
    {expected: '2022-07-19'},
  ])(' ($expected)', ({expected}) => {
    const result = getShortDate(new Date(exampleDate));
    expect(result).toBe(expected);
  });
});
