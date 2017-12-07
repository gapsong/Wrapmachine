import React from 'react';

class RhymeView extends React.Component {

  onClick(word) {
    this.props.onClick(word);
  }

  render() {
    return (
      <div className="rhymeView">
        {this.props.rhymes.map((item) => (
          <button className="words-panel" onClick= {() => { this.onClick(item); }}>{item}</button>
        ))}
      </div>
    );
  }
}

export default RhymeView;
