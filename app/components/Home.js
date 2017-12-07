import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import Messages from './Messages';
import Dictphone from './Dictphone';
import {getRhymes} from '../actions/rhyme';
import {submitContactForm} from '../actions/contact';
import RhymeView from './RhymeView';

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
            <Button bsStyle={"success"} onClick={this.onClick.bind(this)}>
              Attacke
            </Button>
            <br/>
            <RhymeView rhymes={this.props.rhymes}/>
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
