// Header component

import logo from '../../assets/images/bs-logo-new.png'
import us from '../../assets/images/us-flag.png'
import germany from '../../assets/images/Flag_of_Germany.svg'

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage
} from 'react-switch-lang';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const classes = useStyles();
  const [lang, setLang] = React.useState('en');

  const handleChange = (event) => {
    setLang(event.target.value);
    setLanguage(event.target.value)
  };
  
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth="lg">
            <Toolbar className="header-container" style={{justifyContent: "space-between"}}>
              <img src={logo} className="logo" alt="logo" />
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={lang}
                  onChange={handleChange}
                  label="Language"
                >
                  <MenuItem value="en">
                    <img src={us} style={{width: "30px"}}/>&nbsp;<span>US-EN</span>
                  </MenuItem>
                  <MenuItem value="ge">
                    <img src={germany} style={{width: "30px"}}/>&nbsp;<span>DE</span>
                  </MenuItem>
                </Select>
              </FormControl>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}