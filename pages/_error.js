import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';

class ErrorPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  render() {
    const { errorCode, stars } = this.props;
    if (errorCode) {
      return (<Error statusCode={errorCode} />);
    }

    return (
      <div>
        Next stars:&nbsp;
        {stars}
      </div>
    );
  }
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};

export default ErrorPage;
