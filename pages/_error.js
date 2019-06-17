import React from 'react'
import Error from 'next/error'

class Page extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }

  render() {
    if (this.props.errorCode) {
      return <Error statusCode={this.props.errorCode} />
    }

    return <div>Next stars: {this.props.stars}</div>
  }
}

export default Page;
