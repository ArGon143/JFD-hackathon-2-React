import PropTypes from 'prop-types';

export const H2 = ({ children, fontSize = '38px', margin = '40px 0' }) => {
	return <h2 style={{ fontSize: fontSize, margin: margin }}>{children}</h2>;
};

H2.propTypes = {
	children: PropTypes.node.isRequired,
	fontSize: PropTypes.string,
	margin: PropTypes.string,
};
