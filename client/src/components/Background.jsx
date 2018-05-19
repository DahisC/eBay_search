import React from 'react';

//

const Star = (props) => {
  const starStyle = () => {
    return {
      width: '3px',
      height: '3px',
      backgroundColor: 'yellow',
      borderRadius: '0%',
      position: 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      zIndex: '-1',
      padding: 0,
    };
  };

  let stars = [];
  for (let index = 0; index < props.starQ; index++) {
    stars.push(
      <div key={Math.random() * 100} className="star" style={starStyle()} />,
    );
  }

  return stars;
};

const Sky = () => {
  const skyStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: '-2',
    backgroundColor: '#141724',
  };

  return <div className="sky" style={skyStyle} />;
};

//

class Background extends React.Component {
  state = {
    starQ: 50,
  };

  render() {
    return (
      <React.Fragment>
        <Sky />
        <Star starQ={this.state.starQ} />
      </React.Fragment>
    );
  }
}

export default Background;
