import {
  Box,
  TextField,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export type InputField = {
  value: string;
  priority: number | string;
};

type InputFieldItemProps = {
  index: number;
  inputField: InputField;
  inputRef: (el: HTMLInputElement | HTMLTextAreaElement | null) => void;
  handleChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handlePriorityChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleKeyDown: (
    index: number,
    event: React.KeyboardEvent<HTMLDivElement>
  ) => void;
  handleCompositionStart: () => void;
  handleCompositionEnd: () => void;
  handleDeleteField: (index: number) => void;
};

const InputFieldItem: React.FC<InputFieldItemProps> = ({
  index,
  inputField,
  inputRef,
  handleChange,
  handlePriorityChange,
  handleKeyDown,
  handleCompositionStart,
  handleCompositionEnd,
  handleDeleteField,
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
        value={inputField.value}
        onChange={(event) => handleChange(index, event)}
        inputRef={inputRef}
        variant="standard"
        size="small"
        onKeyDown={(event) => handleKeyDown(index, event)}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
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
      <TextField
        type="number"
        value={inputField.priority}
        onChange={(event) => handlePriorityChange(index, event)}
        variant="standard"
        size="small"
        inputProps={{ min: 1, step: 1 }}
        sx={{
          width: "50px",
          marginLeft: "8px",
          "& input": { textAlign: "center" },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#DCDFE3",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "black",
          },
        }}
      />
      <IconButton
        onClick={() => handleDeleteField(index)}
        color="secondary"
        aria-label="delete"
        sx={{ marginLeft: "8px" }}
      >
        <DeleteIcon sx={{ color: "#DCDFE3" }} />
      </IconButton>
    </Box>
  );
};

export default InputFieldItem;
