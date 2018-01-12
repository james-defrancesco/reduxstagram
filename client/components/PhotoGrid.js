import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {/* .map because posts is an array
          "...this.props" is a ES6 spread */}
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i}
        post={post} />)}
      </div>
    )
  }
});

export default PhotoGrid;
