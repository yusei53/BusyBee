import { Box, TextField, useMediaQuery, useTheme } from "@mui/material";

type InputTodoTitleProps = {
  todoTitle: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const InputTodoTitle: React.FC<InputTodoTitleProps> = ({
  todoTitle,
  handleChange,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display={matches ? "flex" : "block"}
      alignItems={matches ? "center" : "initial"}
      justifyContent={matches ? "center" : "initial"}
      mb={1}
    >
      <TextField
        value={todoTitle}
        onChange={(event) => handleChange(event)}
        variant="standard"
        size="small"
        placeholder="例）今日のタスク, 今週のtodo, 今日の午前, etc..."
        InputProps={{
          sx: {
            "&.Mui-focused .MuiInput-underline:after": {
              borderBottomColor: "black",
            },
          },
        }}
        sx={{
          width: "400px",
          "& .MuiInput-underline:before": {
            borderBottomColor: "#DCDFE3",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
          },
        }}
      />
    </Box>
  );
};

export default InputTodoTitle;
