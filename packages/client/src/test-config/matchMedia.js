import mediaQuery from 'css-mediaquery';

export const bp = {
  xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920,
};

const createMatchMedia = ({
  width = window.innerWidth, height = window.innerHeight,
}) => (query) => ({
  matches: mediaQuery.match(query, {
    width,
    height,
  }),
  addListener: () => {},
  removeListener: () => {},
});
export const resizeTo = ({ width, height }) => {
  window.matchMedia = createMatchMedia({ width, height });
};

resizeTo({
  width: window.innerWidth,
  height: window.innerHeight,
});
