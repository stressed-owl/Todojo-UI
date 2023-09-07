import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const TooltipTypography = styled(Typography)<TypographyProps>(() => ({
  fontSize: "16px",
  fontFamily: "IBM Plex Mono",
  fontWeight: 600,
}));

export default TooltipTypography;
