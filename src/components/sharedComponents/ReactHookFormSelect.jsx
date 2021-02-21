import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";
import FormHelperText from '@material-ui/core/FormHelperText';

const ReactHookFormSelect = ({
  name,
  control,
  defaultValue,
  children,
  helperText,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <Controller
        as={
          <Select labelId={labelId}>
            {children}
          </Select>
        }
        fullWidth
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
export default ReactHookFormSelect;