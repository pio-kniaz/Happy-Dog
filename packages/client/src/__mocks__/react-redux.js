const mockDispatch = jest.fn();

module.exports = {
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => mockDispatch),
};
