import React from "react";
import IconButtonTooltip from "./IconButtonTooltip";

interface IconButtonTooltip {
  children: React.ReactElement;
  actionType: React.ReactElement;
}

const StyledIconButtonTooltip = ({
  children,
  actionType,
}: IconButtonTooltip) => {
  return <IconButtonTooltip title={actionType}>{children}</IconButtonTooltip>;
};

export default StyledIconButtonTooltip;
