import * as React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

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

interface StyledTextFieldProps {
  id: string;
  label: string;
  helperText: string;
  value: string;
  onChange: React.ChangeEventHandler;
  className?: string;
  width: string;
  maxWidth: string;
}

type CustomTextFieldProps = {
  width: string;
  maxWidth: string;
};

const CustomTextField = styled(TextField)<CustomTextFieldProps>(
  ({ width, maxWidth }) => ({
    width: width,
    maxWidth: maxWidth,
    color: theme.palette.success.main,
    fontFamily: "IBM Plex Mono",
  })
);

export default function StyledCustomTextField({
  id,
  label,
  helperText,
  value,
  onChange,
  className,
  width,
  maxWidth,
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
        width={width}
        maxWidth={maxWidth}
      />
    </ThemeProvider>
  );
}
