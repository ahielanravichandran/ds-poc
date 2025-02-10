import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  "&.MuiButton-sizeLarge": {
    padding: "12px 24px",
    fontSize: "1.125rem",
  },
  "&.MuiButton-sizeSmall": {
    padding: "6px 16px",
    fontSize: "0.875rem",
  },
}));

export interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "error";
  size?: "small" | "medium" | "large";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
