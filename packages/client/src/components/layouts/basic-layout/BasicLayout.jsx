import PropTypes from 'prop-types';
import './basic-layout.scss';

function BasicLayout(props) {
  const { children } = props;
  return (
    <div className="basic-layout">
      {children}
    </div>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
