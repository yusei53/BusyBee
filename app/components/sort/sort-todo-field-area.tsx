import { Box, Input } from "@mui/material";
import { ThemeTypography } from "@/app/libs/theme/theme";
import InputFieldItem, { InputField } from "./input-field-item";
import CopyButton from "../button/copy-button";
import { useRef } from "react";
import InputTodoTitle from "./input-todo-title";

type SortProps = {
  todoTitle: string;
  inputFields: InputField[];
  inputRefs: React.MutableRefObject<
    (HTMLInputElement | HTMLTextAreaElement | null)[]
  >;
  isOpenTip: boolean;
  handleAddField: () => void;
  handleTodoTitleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleTodoChange: (
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
  todoTitle,
  inputFields,
  inputRefs,
  isOpenTip,
  handleTodoTitleChange,
  handleTodoChange,
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
          まずは思いつく限り自分のtodoを書き出し、自分が作成したtodoにタイトルをつけましょう。
        </ThemeTypography>
        <ThemeTypography lineHeight={2} mb={4}>
          その後は数字で優先度をつけて可視化してみましょう。
        </ThemeTypography>
        <InputTodoTitle
          todoTitle={todoTitle}
          handleChange={handleTodoTitleChange}
        />
        {inputFields.map((inputField, index) => (
          <InputFieldItem
            key={index}
            index={index}
            inputField={inputField}
            inputRef={(el) => (inputRefs.current[index] = el)}
            handleChange={handleTodoChange}
            handlePriorityChange={handlePriorityChange}
            handleKeyDown={handleKeyDown}
            handleCompositionStart={handleCompositionStart}
            handleCompositionEnd={handleCompositionEnd}
            handleDeleteField={handleDeleteField}
          />
        ))}
      </Box>
      <Box my={5} py={3} px={4} border={"1px solid #DCDFE3"} borderRadius={6}>
        <ThemeTypography>{todoTitle}</ThemeTypography>
        {sortedFields.map((inputField, index) => (
          <ThemeTypography key={index}>
            {inputField.priority === "" ? 1 : inputField.priority}.
            {inputField.value}
          </ThemeTypography>
        ))}
      </Box>
      <Box position="relative" mb={15}>
        <CopyButton
          ref={buttonRef}
          isOpenTip={isOpenTip}
          handleCopyClick={handleCopyClick}
        />
      </Box>
      <ThemeTypography>
        十分に吐き出せたら、あなたの優先度付きToDoリストをコピーして、友達や家族に共有してみましょう。times文化があるコミュニティでは、ToDoを可視化することでお互いの進捗や状況を共有し、切磋琢磨することができます。誰にも見られたくない方は、メモアプリなんかにこれを貼り付けて生産性を向上させてください。
      </ThemeTypography>
      <ThemeTypography mt={3}>
        あなたのタスクが効率よく進むことを願っています。
      </ThemeTypography>
    </Box>
  );
};

export default SortTodoFieldArea;
