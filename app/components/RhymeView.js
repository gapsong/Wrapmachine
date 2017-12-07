import React from 'react';

class RhymeView extends React.Component {

    render() {
        return (
            <div className="rhymeView">
                {this.props.rhymes.map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        );
    }
}

export default RhymeView;
