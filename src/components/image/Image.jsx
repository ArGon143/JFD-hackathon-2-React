import styles from './Image.module.css';
import React from 'react';

export const Image = ({ src, alt, width, height }) => {
	if (!src) {
		src = `https://via.placeholder.com/${width}x${height}`;
	}

	return (
		<img className={styles.img} src={src} alt={alt} width={width} height={height} />
	);
};
