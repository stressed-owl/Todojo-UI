import React from "react";
import TooltipTypography from "./TooltipTypography";

interface TooltipTypoProps {
  children: React.ReactNode;
}

const StyledTooltipTypography = ({ children }: TooltipTypoProps) => {
  return <TooltipTypography>{children}</TooltipTypography>;
};

export default StyledTooltipTypography;
