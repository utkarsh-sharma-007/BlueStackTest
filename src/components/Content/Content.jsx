// base body of the page

import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Tabs from '../Tabs/Tabs.js'
import {
  translate,
} from 'react-switch-lang';

function Content(props) {
  const {t} = props;
  console.log(props,'in content')
  return (
    <div className="body-container">
      <Container maxWidth="lg" styles={{mindWith: "calc(100vh - 140px)"}}>
        <h1 className="page-header">{t("heading")}</h1>
        <Tabs/>
      </Container>
    </div>
  )
}

Content.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Content);
