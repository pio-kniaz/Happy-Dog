import PropTypes from 'prop-types';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { config } from '@/config';

const queryCache = new QueryCache();

function QueryProvider({ children }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {children}
      {config.MODE === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </ReactQueryCacheProvider>
  );
}

export default QueryProvider;

QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
