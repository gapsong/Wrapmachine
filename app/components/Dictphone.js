import React from 'react';
import {Button} from 'react-bootstrap';

class Dictphone extends React.Component {
  constructor() {
    super(); //pass in the 'props' arg to access this.props
    this.state = {
      resultText: 'Text received: ---'
    };
  }

  updateState(resultText) {
    this.setState({resultText: resultText});
  }

  onRelease(param) {
    this.props.onRelease(param);
  }

  handleClick() {
    let self = this;
    let resultText;
    let newColour;

    let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

    let recognition = new SpeechRecognition();
    recognition.lang = 'de-DE';

    recognition.start();

    recognition.onresult = function(event) {
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The [last] returns the SpeechRecognitionResult at the last position.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object

      let last = event.results.length - 1;
      newColour = event.results[last][0].transcript;
      var n = newColour.split(" ");
      n = n[n.length - 1];
      resultText = 'Reim auf: ' + n;
      self.updateState(resultText);
      self.onRelease(n);
    }

    recognition.onspeechend = function() {
      recognition.stop();
    }

    recognition.onerror = function(event) {
      newColour = null;
      resultText = 'Error occurred in recognition: ' + event.error;
      self.updateState(resultText);
    }
  }

  render() {
    return (
      <div className="background_box">
        <div className="content_box">
          <div className="info_box">
            <div>
              <h1>Freestyle</h1>
              <p><RecordButton handleClick={this.handleClick.bind(this)}/></p>
            </div>
          </div>
        </div>
        <Result resultText={this.state.resultText}/>
      </div>
    )
  }
}

class RecordButton extends React.Component {
  render() {
    return (
      <Button bsStyle={"success"} onClick={this.props.handleClick}>
        Gib mir einen Reim
      </Button>
    )
  }
}

class Result extends React.Component {
  render() {
    return (
      <div className="result_box">
        <span className="result_text">{this.props.resultText}</span>
      </div>
    )
  }
}

export default Dictphone;
