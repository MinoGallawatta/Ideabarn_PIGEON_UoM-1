import { KeyboardDatePicker, MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import { Controller } from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';
import React from 'react'

const ReactHookFormDatePicker = ({
    name,
    control,
    defaultValue,
    ...props
}) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                as={DateTimePicker}
                control={control}
                {...props}
                // error={errors.dob}
                // helperText={errors.dob?.message}
                disableToolbar
                defaultValue={new Date()}
                inputVariant="outlined"
                format="dd/MM/yyyy h:mm a"
                margin="normal"
                style={{margin: 0}}
                name={name}
                fullWidth
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
export default ReactHookFormDatePicker;