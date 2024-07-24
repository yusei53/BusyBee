import React, { forwardRef } from "react";
import { Button, ButtonProps } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

type CustomButtonProps = {
  text: string;
  isCopyButton?: boolean;
} & ButtonProps;

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ text, isCopyButton, sx, ...props }, ref) => (
    <Button
      ref={ref}
      sx={{
        color: "black",
        border: "1px solid #DCDFE3",
        borderRadius: 10,
        padding: "10px 20px",
        ...sx,
      }}
      {...props}
      endIcon={
        isCopyButton && <ContentCopyIcon fontSize="small" sx={{ ml: 0.5 }} />
      }
    >
      {text}
    </Button>
  )
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
