import React from "react";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

export default function CustomButton({ label, margin = 12,...props }) {
    return (
        <div style={{ margin: margin }}>
            <Button color="primary" variant="contained" {...props}>
                <Typography variant="button" style={{color: props.variant !== 'outlined' ? 'white' : '#e77448'}}>
                    {label}
                </Typography>
            </Button>
        </div>
    )
}