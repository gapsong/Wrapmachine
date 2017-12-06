import React from 'react';

class RhymeView extends React.Component {

    render() {
        return (
            <div className="rhymeView">
                {this.props.rhymes.map((item) => (
                    <button>{item}</button>
                ))}
            </div>
        );
    }
}

export default RhymeView;
