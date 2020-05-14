import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0, title: '' };
  }

  componentDidMount = () => {
    this.imageRef.current.addEventListener('load', this.setSpans);
  };

  setSpans = () => {
    const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
    this.setState({ spans });
    this.setState({
      title: `Width = ${this.imageRef.current.naturalWidth} - Hight = ${this.imageRef.current.naturalHeight}`,
    });
  };
  render = () => {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={urls.regular} target="_blank" rel="noopener noreferrer">
          <img
            ref={this.imageRef}
            src={urls.regular}
            alt={alt_description}
            title={this.state.title}
          />
        </a>
      </div>
    );
  };
}
//style={{`grid-row-end: span ${this.state.spans}`}}
export default ImageCard;
