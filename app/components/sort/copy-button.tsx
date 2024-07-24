import { Tooltip } from "@mui/material";
import React, { forwardRef } from "react";
import CustomButton from "../common/button";

type TProps = {
  isOpenTip: boolean;
  handleCopyClick: () => void;
};

const CopyButton = forwardRef<HTMLButtonElement, TProps>(
  ({ isOpenTip, handleCopyClick }, ref) => {
    return (
      <Tooltip
        open={isOpenTip}
        placement="top"
        title="コピーしました"
        sx={{ position: "absolute", top: 5, right: 5 }}
      >
        <CustomButton
          isCopyButton
          ref={ref}
          text="コピーする"
          onClick={handleCopyClick}
        />
      </Tooltip>
    );
  }
);

CopyButton.displayName = "CopyButton";

export default CopyButton;
