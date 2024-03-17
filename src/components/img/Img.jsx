import PropTypes from 'prop-types'
import styled from './Img.module.css'
import common from '../../index.module.css'
import { mergeStrings } from '../../utils'

export const Img = ({ image }) => { 
    return (
        <img className={mergeStrings([styled.image, common.crop])} src={image} />
    )
}

Img.propTypes = {
    image: PropTypes.string
}