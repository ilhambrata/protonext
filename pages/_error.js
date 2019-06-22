import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';
import { withI18next } from '../lib/withI18next';

class ErrorPagex extends React.Component {
  render() {
    const { errorCode, stars, t } = this.props;
    if (errorCode) {
      return (
        <div>
          {t('description')}
          <Error statusCode={errorCode} />
        </div>
      );
    }

    return (
      <div>
        {t('description')}
        Next stars:&nbsp;
        {stars}
      </div>
    );
  }
}

ErrorPagex.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  t: PropTypes.func.isRequired,
};

ErrorPagex.defaultProps = {
  errorCode: '400',
  stars: 0,
};

export default withI18next(['common', 'footer'])(ErrorPagex);
