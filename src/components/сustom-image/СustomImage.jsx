import PropTypes from 'prop-types';
import styles from './Image.module.css';
import React from 'react';

export const СustomImage = ({
	src = '',
	alt = '',
	width = 100,
	height = 100,
	...props
}) => {
	if (!src) {
		src = `https://via.placeholder.com/${width}x${height}`;
	}

	return (
		<img
			className={styles.img}
			src={src}
			alt={alt}
			width={width}
			height={height}
			{...props}
		/>
	);
};

СustomImage.propTypes = {
	src: PropTypes.node.isRequired,
	alt: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};
