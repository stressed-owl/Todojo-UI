import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { ThemeProvider, styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

interface StyledTextFieldProps {
  id: string;
  label: string;
  helperText: string;
  value: string;
  onChange: React.ChangeEventHandler;
  className?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#222222",
      main: "#000",
      dark: "#000",
      contrastText: "#fff",
    },
  },
});

const CustomTextField = styled(TextField)<TextFieldProps>(() => ({
  color: theme.palette.success.main,
  fontFamily: "IBM Plex Mono",
}));

export default function StyledCustomTextField({
  id,
  label,
  helperText,
  value,
  onChange,
  className,
}: StyledTextFieldProps) {
  return (
    <ThemeProvider theme={theme}>
      <CustomTextField
        id={id}
        label={label}
        helperText={helperText}
        value={value}
        onChange={onChange}
        className={className}
      />
    </ThemeProvider>
  );
}
