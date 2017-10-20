import React from 'react';

class RhymeView extends React.Component {

    render() {
        return (
            <div className="ryhmeView">
                <span className="badge badge-pill badge-primary">{this.props.rhymes}</span>
            </div>
        );
    }
}

export default RhymeView;
