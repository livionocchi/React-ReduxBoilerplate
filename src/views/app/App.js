import { hot } from 'react-hot-loader/root'
import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeBgColor} from './actions'

import Title from '../title/Title'
import { Button } from 'react-bootstrap'

export const initialState = {
  color: 'coral'
}

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route
          exact path="/"
          component={(routeProps) => (
            <Title {...routeProps} />
        )} />
        <Button onClick={ () => this.props.changeBgColor() } >change color</Button>
        <div className={ `text text__color-${this.props.data.color}` }>The font color should be {this.props.data.color}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ AppReducer }) => ({
  data: AppReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeBgColor }, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(App)));
