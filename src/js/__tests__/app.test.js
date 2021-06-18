import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should be ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
});

test('should be not ok', () => {
  fetchData.mockReturnValue({ status: '' });
  getLevel(1);
  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});
