// component for Rescheduling the date

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { DatePicker } from "@material-ui/pickers";

export default function RescheduleDialog(props) {
    const [date, changeDate] = React.useState(new Date(props.date));

    const {open} = props;

  return (
    <div>
      <Dialog
        open={true}
        onClose={()=>{props.close()}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DatePicker
            autoOk
            orientation="landscape"
            variant="static"
            openTo="date"
            value={date}
            onChange={(e)=>{
                props.update(e.format("YYYY-MM-DD"))
            }}
        />
      </Dialog>
    </div>
  );
}