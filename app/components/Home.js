import React from 'react';
import {connect} from 'react-redux'
import Messages from './Messages';
import Dictphone from './Dictphone';
import {getRhymes} from '../actions/rhyme';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastword: 'auto'
    };
  }

  componentDidMount() {
    this.setState({lastword: 'auto'});
  }

  onClick() {
    this.props.dispatch(getRhymes(this.state.lastword));
  }

  onRelease(param) {
    this.props.dispatch(getRhymes(param));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="panel">
          <div className="panel-body">
            <Dictphone onRelease={this.onRelease.bind(this)}/>
            {/* <button bsStyle={"success"} onClick={this.onClick.bind(this)}>
              Attacke
            </button> */}
            <br/>
            <panel>{this.props.rhymes}</panel>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {rhymes: state.temp.rhymes};
};

export default connect(mapStateToProps)(Home);
