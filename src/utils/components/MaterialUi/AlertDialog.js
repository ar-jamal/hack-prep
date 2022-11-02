import * as React from 'react';
import { useState } from 'react';
// import Button from '../CusButton'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from './inputField';

export default function AlertDialog(props) {
    const [open, setOpen] = useState(false);
    return (
        <div /* style={{ margin: 18 }} */ >
             <Input
              label="Age"
              placeholder={props.placeholder}
              onClick={props.onClick}
              disabled={props.disabled}
              value={props.value}
            />
            <Dialog
                open={props.open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"age is dependent on Date of Birth"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Plz select your Date of Birth field
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
