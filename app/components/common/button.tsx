import { Button } from "@mui/material";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button> & {
  text: string;
};

const CustomButton: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <Button
      href={href}
      sx={{
        color: "black",
        border: "1px solid #DCDFE3",
        borderRadius: 10,
        padding: "10px 20px",
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
