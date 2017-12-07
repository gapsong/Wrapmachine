import React from 'react';
import {connect} from 'react-redux';
import {Button, Panel} from 'react-bootstrap';
import Messages from './Messages';
import Dictphone from './Dictphone';
import {getRhymes} from '../actions/rhyme';
import RhymeView from './RhymeView';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch({type: 'SHUFFLE'});
  }

  getRhymes(rhymes){
    this.props.dispatch(getRhymes(rhymes));
    this.props.dispatch({type: 'SHUFFLE'});
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
            <br/>
            <Panel><RhymeView onClick = {this.getRhymes.bind(this)} rhymes={this.props.rhymes}/></Panel>
            <Panel><RhymeView onClick = {this.getRhymes.bind(this)} rhymes={this.props.randomWords}/></Panel>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {rhymes: state.temp.rhymes, randomWords: state.randomWords};
};

export default connect(mapStateToProps)(Home);
