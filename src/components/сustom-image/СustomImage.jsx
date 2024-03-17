import PropTypes from 'prop-types';
import React from 'react';
import { mergeStrings } from '../../utils';
import styles from './CustomImage.module.css';
import common from '../../index.module.css'

export const CustomImage = ({...props}) => {
	return (
		<img
			className={mergeStrings([styles.img, common.crop])}
			src={props.src ? props.src : `https://via.placeholder.com/${props.width}x${props.height}`}
			{...props}
		/>
	);
};

CustomImage.propTypes = {
	props: PropTypes.objectOf(PropTypes.string),
};
