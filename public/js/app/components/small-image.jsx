import React from 'react';
import PictureActionCreator from '../actions/picture-action-creator';

export default class SmallImage extends React.Component {
    constructor(props) {
        super(props);
    }
    handleImageClick (e) {
    	e.preventDefault(); 
        PictureActionCreator.selectPicture(this.props.name);
    }
    render() {
        return (
            <li className="cw-imgListItem">
            	<a className="cw-imgThumb" href="#"
            		onClick={this.handleImageClick.bind(this)}
            		data-image-name={this.props.name}
            		>
            		<img alt={this.props.name} className="cw-imgThumb" src={this.props.thumb} />
                 	 
                 </a>
            </li>
        );
    }
}