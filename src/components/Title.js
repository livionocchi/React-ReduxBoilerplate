import React from 'react'
import {FormattedMessage} from 'react-intl'

class Title extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1 className="text-center"><FormattedMessage id="utils.greetings"/></h1>
        <h4 className="text-center"><FormattedMessage id="utils.welcome"/></h4>
      </React.Fragment>
    )
  }
}

export default Title;
