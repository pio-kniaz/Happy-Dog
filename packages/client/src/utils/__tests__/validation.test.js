import { maxLength, minLength, ValidationMessages } from '../validation';

it('MaxLength should return correct message', () => {
  expect(maxLength(355)).toBe(`${ValidationMessages.maxLength} 355`);
});
it('MinLength should return correct message', () => {
  expect(minLength(3)).toBe(`${ValidationMessages.minLength} 3`);
});
