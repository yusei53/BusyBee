import { Box } from "@mui/material";
import { ThemeTypography } from "@/app/libs/theme/theme";
import InputFieldItem from "./input-field-item";
import CopyButton from "../common/copy-button";
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
    <Box my={10}>
      <Box>
        <ThemeTypography lineHeight={2}>
          まずは思いつく限り自分のtodoを書き出してみてください。
        </ThemeTypography>
        <ThemeTypography lineHeight={2} mb={4}>
          その後は数字で優先度をつけて可視化してみましょう。
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
      <Box my={10} py={3} px={4} border={"1px solid #DCDFE3"} borderRadius={6}>
        <ThemeTypography>あなたの優先度付きToDoリスト</ThemeTypography>
        {sortedFields.map((inputField, index) => (
          <ThemeTypography key={index}>
            {inputField.priority === "" ? 1 : inputField.priority}.
            {inputField.value}
          </ThemeTypography>
        ))}
      </Box>
      <ThemeTypography>
        十分に吐き出せたら、あなたの優先度付きToDoリストをコピーして、友達や家族に共有してみましょう。times文化があるコミュニティでは、ToDoを可視化することでお互いの進捗や状況を共有し、切磋琢磨することができます。誰にも見られたくない方は、メモアプリなんかにこれを貼り付けて生産性を向上させてください。
      </ThemeTypography>
      <ThemeTypography mt={3}>
        あなたのタスクが効率よく進むことを願っています。
      </ThemeTypography>
      <Box position="relative" mb={15}>
        <CopyButton
          ref={buttonRef}
          isOpenTip={isOpenTip}
          handleCopyClick={handleCopyClick}
        />
      </Box>
    </Box>
  );
};

export default SortTodoFieldArea;
