import { Box } from "@mui/material";
import { ThemeTypography } from "@/app/libs/theme/theme";
import InputFieldItem from "./input-field-item";
import CopyButton from "./copy-button";
import { useRef } from "react";

type InputField = {
  value: string;
  priority: number | string;
};

type SortProps = {
  inputFields: InputField[];
  setInputFields: (value: InputField[]) => void;
  inputRefs: React.MutableRefObject<
    (HTMLInputElement | HTMLTextAreaElement | null)[]
  >;
  isOpenTip: boolean;
  handleAddField: () => void;
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
  sortedFields: InputField[];
  handleCopyToClipboard: () => void;
};

const SortTodoFieldArea: React.FC<SortProps> = ({
  inputFields,
  inputRefs,
  isOpenTip,
  handleChange,
  handlePriorityChange,
  handleKeyDown,
  handleCompositionStart,
  handleCompositionEnd,
  handleDeleteField,
  sortedFields,
  handleCopyToClipboard,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopyClick = () => {
    handleCopyToClipboard();
  };

  return (
    <>
      <Box mt={10}>
        <ThemeTypography lineHeight={2}>
          まずは思いつく限り自分のtodoを書き出してみてください。
        </ThemeTypography>
        <ThemeTypography lineHeight={2} mb={4}>
          その後は優先度をつけて可視化してみましょう。
        </ThemeTypography>
        {inputFields.map((inputField, index) => (
          <InputFieldItem
            key={index}
            index={index}
            inputField={inputField}
            inputRef={(el) => (inputRefs.current[index] = el)}
            handleChange={handleChange}
            handlePriorityChange={handlePriorityChange}
            handleKeyDown={handleKeyDown}
            handleCompositionStart={handleCompositionStart}
            handleCompositionEnd={handleCompositionEnd}
            handleDeleteField={handleDeleteField}
          />
        ))}
      </Box>
      <Box mt={5}>
        <ThemeTypography my={2}>あなたの優先度付きToDoリスト</ThemeTypography>
        {sortedFields.map((inputField, index) => (
          <ThemeTypography key={index}>
            {inputField.priority === "" ? 1 : inputField.priority}.
            {inputField.value}
          </ThemeTypography>
        ))}
      </Box>
      <Box position="relative">
        <CopyButton
          ref={buttonRef}
          isOpenTip={isOpenTip}
          handleCopyClick={handleCopyClick}
        />
      </Box>
    </>
  );
};

export default SortTodoFieldArea;
