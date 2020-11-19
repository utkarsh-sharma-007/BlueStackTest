// tabs containing table

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  translate,
} from 'react-switch-lang';

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
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleUpdate = (app) => {
    let data = initialData
    data[app.index] = app;
    setInitialData(data);
    setTheData(data)
  }
  const currentDate = moment(new Date());
  currentDate.set({hour:0,minute:0,second:0,millisecond:0})
  
  // setting the data for the three tabs
  const setTheData = (d) => {
    let u = [], l = [],p = [];
    d.forEach((v,i)=>{
      let date = moment(v.campaign_date);
      if(date.diff(currentDate,'days')<0) p.push({...v,index:i})
      else if(date.diff(currentDate,'days')) u.push({...v,index:i})
      else l.push({...v,index:i})
    })
    setUpcoming(sortViaDate(u))
    setPast(sortViaDate(p))
    setLive(sortViaDate(l))
  }

  const sortViaDate = (dates) => {
    // console.log(dates)
    dates.sort((b,a)=>{
      // console.log(moment(b.campaign_date).diff(moment(a.campaign_date),'days'))
      // if(moment(b.campaign_date).diff(moment(a.campaign_date),'days'))
        return moment(b.campaign_date).diff(moment(a.campaign_date),'days')
    })
    // console.log(dates)
    return dates
  }

  // Initially setting the data
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