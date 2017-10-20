import React from 'react';

class RhymeView extends React.Component {

    render() {
        return (
            <div className="rhymeView">
                {this.props.rhymes.map((item) => (
                    <span className="badge badge-pill badge-primary">{item}</span>
                ))}
            </div>
        );
    }
}

export default RhymeView;
