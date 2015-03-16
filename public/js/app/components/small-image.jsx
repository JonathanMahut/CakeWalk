var React = require('react');
class SmallImage extends React.Component {
    constructor(props) {
        super(props);
    }
    handleImageClick (e) {
    	e.preventDefault(); 
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

module.exports = SmallImage;