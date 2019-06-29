import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withTranslation } from 'react-i18next';

class Index extends React.Component {
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

export default withTranslation(['footer', 'common'])(Index);
