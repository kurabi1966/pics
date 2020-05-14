import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount = () => {
    this.imageRef.current.addEventListener('load', this.setSpans);
  };

  setSpans = () => {
    const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
    this.setState({ spans });
  };
  render = () => {
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={urls.regular} target="_blank">
          <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
        </a>
      </div>
    );
  };
}
//style={{`grid-row-end: span ${this.state.spans}`}}
export default ImageCard;
