import React from "react";

import { Button } from 'primereact/button';

import "./accesoButton.css";

export interface AccesoButtonProps  {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Button icon
   */
  icon?: string;  
  /**
   * Optional click handler
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

/**
 * Primary UI component for user interaction
 */
const AccesoButton = ({
  backgroundColor,
  label,
  icon,
  onClick,
}: AccesoButtonProps) => {
  return (
    <Button
      label={label}
      icon={icon}
      style={backgroundColor ? { backgroundColor }: {}}
      onClick={onClick}
    >
      
    </Button>
  );
};

export default AccesoButton;
