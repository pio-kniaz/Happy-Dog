import PropTypes from 'prop-types';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { config } from '@/config';

const queryClient = new QueryClient();

function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {config.MODE === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

export default QueryProvider;

QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
