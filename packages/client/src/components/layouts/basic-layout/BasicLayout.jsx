import PropTypes from 'prop-types';
import './basic-layout.scss';

function BasicLayout(props) {
  const { children } = props;
  return (
    <main className="basic-layout">
      {children}
    </main>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
