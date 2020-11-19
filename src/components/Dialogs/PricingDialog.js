// component for viewing the pricing

import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

export default function PricingDialog(props) {
    const {open,app} = props;

    console.log(app,'app')

  return (
    <div>
      <Dialog
        open={open}
        onClose={()=>{props.close()}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{app.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div><img src={app.image_url}/></div>
            <div>{app.region}</div>
          </DialogContentText>
          <Grid container spacing={3}>
            {app.price && Object.entries(app.price).map(a=><Grid item xs={12} className="pricing">
                <div>{a[0]}</div> <div>{a[1]}</div>
            </Grid>)}
        </Grid>
        </DialogContent>
        <div style={{textAlign: "center"}}>
          <Button onClick={()=>{props.close()}} color="primary">
            Close
          </Button>
        </div>
      </Dialog>
    </div>
  );
}