// tables that show table data

import React from 'react';
import PropTypes from 'prop-types';

import {
    translate,
} from 'react-switch-lang';  
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';

import PricingDialog from '../Dialogs/PricingDialog'
import RescheduleDialog from '../Dialogs/RescheduleDialog'

import price from '../../assets/images/Price.png'
import calendar from '../../assets/images/calendar.png'
import file from '../../assets/images/file.png'
import stats from '../../assets/images/statistics-report.png'
 
function TableExample(props) {
  const [open, setOpen] = React.useState(false);
  const [schedule, setSchedule] = React.useState(false);
  const [app, setApp] = React.useState({});

  const {t,data} = props;
  const currentDate = new Date();
  
  return (
    <>
      <PricingDialog open={open} close={()=>setOpen(!open)} app={app}/>
      {schedule &&<RescheduleDialog 
                    close={()=>setSchedule(!schedule)} 
                    date={app.campaign_date} 
                    update={(e)=>{
                      setSchedule(!schedule)
                      let a = {...app}
                      a.campaign_date = e;
                      props.updateData(a)
                    }}
                  />
      }
      <Table>
        <Thead>
          <Tr>
            <Th><div>{t("date")}</div></Th>
            <Th><div>{t("campaign")}</div></Th>
            <Th><div>{t("view")}</div></Th>
            <Th><div>{t("actions")}</div></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((v,i)=>{
              const date = moment(v.campaign_date),
              days = date.diff(currentDate,'days');
              return <Tr key={i}>
                  <Td>
                      <div>
                          <h3>{moment(v.campaign_date).format('MMMM Do YYYY')}</h3>
                          {Math.abs(days)>0?<div>{Math.abs(days)} {t("days")} {days>0?t("ahead"):t("ago")}</div>:<div>{t("live")}</div>}
                      </div>
                  </Td>
                  <Td>
                      <div className="image-with-text">
                          <img alt={v.name} src={v.image_url}/>
                          <div>
                              <div>{v.name}</div>
                              <div>{v.region}</div>
                          </div>
                      </div>
                  </Td>
                  <Td>
                      <div className="image-with-text" onClick={()=>{setOpen(!open); setApp(v);}}><img alt="View Pricing" src={price}/><div>{t("viewPricing")}</div></div>
                  </Td>
                  <Td>
                      <div className="multiple-img-txt">
                          <Tooltip title={v.csv}><div className="image-with-text"><img src={file} alt="CSV"/><div>{t("csv")}</div></div></Tooltip>
                          <Tooltip title={v.report}><div className="image-with-text"><img src={stats} alt="Report"/><div>{t("report")}</div></div></Tooltip>
                          <div className="image-with-text"  onClick={()=>{setSchedule(!schedule); setApp(v);}}><img src={calendar} alt="Reschedule"/><div>{t("schedule")}</div></div>
                      </div>
                  </Td>
              </Tr>
          })}
        </Tbody>
      </Table>
    </>
  );
}

TableExample.propTypes = {
    t: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    updateData: PropTypes.func.isRequired
};

export default translate(TableExample)