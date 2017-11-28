import React from 'react';
import { render } from 'react-dom';

// css
import './style/css/bootstrap.min.css';
import './index.css';

// js
import { sampleText } from './sampleText';

class App extends React.Component {

    state = {
        text: sampleText
    };

    editText = event => {
        this.setState({ text: event.target.value });
    };

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea
                            value={this.state.text}
                            rows="35"
                            className="form-control"
                            onChange={e => this.editText(e)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <div>
                            {this.state.text}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(
    <App/>,
    document.getElementById('root')
);

