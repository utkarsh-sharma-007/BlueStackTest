// tabs containing table

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  translate,
} from 'react-switch-lang';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SwipeableViews from 'react-swipeable-views';

import Table from '../Table/Table';

import test from '../../test.json';

import moment from 'moment';

function CustomTabs(props) {
  const [value, setValue] = React.useState(0);
  const [initialData, setInitialData] = React.useState(test.data)
  const [upcoming, setUpcoming] = React.useState([]);
  const [live, setLive] = React.useState([]);
  const [past, setPast] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue,'newValue')
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleUpdate = (app) => {
    console.log(app, "in handle upadte")
    console.log(app.index);
    let data = initialData
    data[app.index] = app;
    setInitialData(data);
    setTheData(data)
  }
  const currentDate = new Date()
  // console.log(data)
  
  const setTheData = (d) => {
    let u = [], l = [],p = [];
    d.forEach((v,i)=>{
      let date = moment(v.campaign_date);
      console.log(date.diff(currentDate,'days'))
      if(date.diff(currentDate,'days')<0) p.push({...v,index:i})
      else if(date.diff(currentDate,'days')) u.push({...v,index:i})
      else l.push({...v,index:i})
    })
    setUpcoming(u)
    setPast(p)
    setLive(l)
    // console.log(upcoming,live,past)
  }

  useEffect(()=>{
    setTheData(initialData)
  },[])

  const {t} = props

  return (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        
      >
        <Tab label={t("upcomingCampaigns")} />
        <Tab label={t("liveCampaigns")} />
        <Tab label={t("pastCampaigns")} />
      </Tabs>
      <SwipeableViews
      style={{paddingTop: "20px"}}
        enableMouseEvents
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <Table data={upcoming} updateData={handleUpdate}/>
        <Table data={live} updateData={handleUpdate}/>
        <Table data={past} updateData={handleUpdate}/>
      </SwipeableViews>
    </>
  );
}

CustomTabs.propTypes = {
  t: PropTypes.func.isRequired,
};
 
export default translate(CustomTabs);
// import React from 'react';
// import PropTypes from 'prop-types';
 
// // Translation Higher Order Component
// import {
//   setTranslations,
//   setDefaultLanguage,
//   setLanguageCookie,
//   setLanguage,
//   translate,
// } from 'react-switch-lang';
// import en from '../../assets/transalte/eng.json'
// import ge from '../../assets/transalte/german.json';
 
// // Do this two lines only when setting up the application
// setTranslations({ en, ge });
// setDefaultLanguage('en');
 
// If you want to remember selected language
// setLanguageCookie();
 
// class SomeComponent extends React.Component {
//   handleSetLanguage = (key) => () => {
//     setLanguage(key);
//   };
 
//   render() {
//     const { t } = this.props;
//     return (
//       <div>
//         {t('heading')}
//         {/* {t('heading', null, 'ge')}
//         {t('heading', { name: 'World' })}
//         {t('heading')} */}
 
//         <button type="button" onClick={this.handleSetLanguage('ge')}>
//           Switch language
//         </button>
//       </div>
//     )
//   }
// }
 
// SomeComponent.propTypes = {
//   t: PropTypes.func.isRequired,
// };
 
// export default translate(SomeComponent);