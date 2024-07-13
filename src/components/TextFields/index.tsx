import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import React from "react";
import { FieldProps } from "formik";
import { theme } from "../../theme";

interface TextFieldProps {
  placeholder?: string;
  type?: string;
  label: string;
  multiline?: boolean;
  rows?: number;
}

type Props = TextFieldProps & FieldProps;

const CustomTextField: React.FC<Props> = ({
  placeholder,
  type,
  label,
  field,
  form: { touched, errors, setFieldValue },
  multiline = false,
  rows,
}) => {
  return (
    <Box position="relative" mb={"50px"}>
      {touched[field.name] && errors[field.name] && (
        <Typography
          component="div"
          sx={{
            position: "absolute",
            top: -30,
            color: "error.main",
            transition: "0.3s",
          }}
          variant="body1"
        >
          {String(errors[field.name])}
        </Typography>
      )}
      <TextField
        fullWidth
        placeholder={placeholder}
        type={type}
        value={field.value}
        label={label}
        color="primary"
        multiline={multiline}
        rows={rows}
        onChange={(event) => setFieldValue(field.name, event.target.value)}
        InputLabelProps={{
          sx: {
            color: "grey.500",
          },
        }}
        sx={{
          "& .MuiInputLabel-root": {
            color: "grey.500",
          },
          "& .MuiOutlinedInput-root": {
            fontSize: 18,
            borderRadius: "4px",
            color: "common.black",
            bgcolor: "common.white",
            p: 0,

            "&:hover": {
              border: "none",
              fieldset: {
                border: "1px solid",
                borderColor: "grey.400",
              },
            },
            fieldset: {
              borderColor: "grey.400",
              border: `1px solid ${theme.palette.grey[400]}`,
            },
            "&.Mui-focused fieldset": {
              border: "2px solid",
              borderColor: "grey.400",
              zIndex: 2,
            },
          },
          "& .MuiOutlinedInput-input": {
            height: "auto",
            p: "15px",
            borderRadius: "4px",
            "&::placeholder": {
              color: "grey.400",
              fontSize: 18,
              opacity: 1,
            },
          },
        }}
      />
    </Box>
  );
};

export default CustomTextField;
