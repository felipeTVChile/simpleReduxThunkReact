import React from 'react';
import { connect } from 'react-redux'
import { getName } from '../actions'


class Home extends React.Component {



    render() {
        return (
            <div >
                <button onClick={this.props.saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
                <h2>{this.props.whatsUp}</h2>
                <button onClick={() => console.log('Redux State:', this.props.stateObject)} >Press to inspect STATE in console panel</button>
            </div>
        )
    }


}



export default connect(
    (state) => ({
        whatsUp: state.say,
        stateObject: state
    }),
    (dispatch) => ({
        saySomething: () => { getName(dispatch)  }
    }))
    // eslint-disable-next-line
    (Home);
