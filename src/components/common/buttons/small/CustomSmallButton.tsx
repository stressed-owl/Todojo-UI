import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { ThemeProvider, styled } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

interface StyledSmallButtonProps {
  id: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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

const CustomSmallButton = styled(Button)<ButtonProps>(() => ({
  width: 150,
  padding: 5,
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  fontFamily: "IBM Plex Mono",
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  },
  display: "flex",
  columnGap: 15
}));

export default function StyledCustomSmallButton({
  id,
  onClick,
  children,
}: StyledSmallButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <CustomSmallButton id={id} onClick={onClick}>
        {children}
      </CustomSmallButton>
    </ThemeProvider>
  );
}
