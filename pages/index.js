import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withTranslation } from '../i18n';

class Index extends React.Component {
  static async getInitialProps() {
    console.log('getinitprops');
    return {
      namespacesRequired: ['footer'],
    };
  }

  render() {
    // const classes = useStyles();
    const { t } = this.props;
    return (
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {t('description')}
        </Typography>
      </Container>
    );
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('footer')(Index);
