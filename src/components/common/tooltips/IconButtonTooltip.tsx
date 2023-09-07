import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const IconButtonTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#DADFF7",
    color: "#000",
    maxWidth: 220,
    fontFamily: "IBM Plex Mono",
  },
}));

export default IconButtonTooltip;
