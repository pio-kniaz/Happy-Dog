import PropTypes from 'prop-types';
import { components } from 'react-select';

function CustomSingleValue(props) {
  const {
    children,
  } = props;
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <components.SingleValue {...props}>
      <div data-testid="select-value">
        {children}
      </div>
    </components.SingleValue>
  );
}

CustomSingleValue.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomSingleValue;
