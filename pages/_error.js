import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';
import { withTranslation } from '../i18n';

class ErrorPagex extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['footer'],
    };
  }

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


ErrorPagex.getInitialProps = () => ({
  requiredNamespaces: ['common', 'footer'],
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('footer')(ErrorPagex);
