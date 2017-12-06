import React from 'react';

class RhymeView extends React.Component {

    render() {
        return (
            <div className="rhymeView">
                {this.props.rhymes.map((item) => (
<<<<<<< HEAD
                    <button>{item}</button>
=======
                    <span className="badge badge-pill badge-primary">{item}</span>
>>>>>>> 9ead40282c7083c9b27756e07fea9126355cd4e6
                ))}
            </div>
        );
    }
}

export default RhymeView;
