import React from 'react';

class RhymeView extends React.Component {

    render() {
        return (
            <div className="rhymeView">
              test
                {this.props.rhymes.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        );
    }
}

export default RhymeView;
