import React from 'react';
import "./Card.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans : 0 }
    }

    componentDidMount() {
        this.imgageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imgageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState({ spans });
    }

    render () {
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular}
                />
            </div>
        );
    }
}

export default Card;