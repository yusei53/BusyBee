"use client";
import { useState, useRef } from "react";
import SortTodoFieldArea from "./sort-todo-field-area";

interface InputField {
  value: string;
  priority: number | string;
}

const SortTodoPage = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([
    { value: "", priority: 1 },
  ]);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [isComposing, setIsComposing] = useState(false);
  const [openTip, setOpenTip] = useState(false);

  const handleAddField = () => {
    setInputFields([...inputFields, { value: "", priority: 1 }]);
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handlePriorityChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const values = [...inputFields];
    values[index].priority =
      event.target.value === "" ? "" : parseInt(event.target.value);
    setInputFields(values);
  };

  const handleKeyDown = (index: number, event: any) => {
    if (event.key === "Enter" && !isComposing) {
      event.preventDefault();
      handleAddField();
      setTimeout(() => {
        if (inputRefs.current[index + 1]) {
          inputRefs.current[index + 1]?.focus();
        }
      }, 0);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const handleDeleteField = (index: number) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  // 優先度に基づいてソート
  const sortedFields = [...inputFields].sort((a, b) => {
    const priorityA = a.priority === "" ? 1 : Number(a.priority);
    const priorityB = b.priority === "" ? 1 : Number(b.priority);
    return priorityA - priorityB;
  });
  const handleCopyToClipboard = () => {
    const todoList = sortedFields
      .map(
        (field) =>
          `${field.priority === "" ? 1 : field.priority}. ${field.value}`
      )
      .join("\n");
    const fullText = `わたしの優先度付きToDoリスト:\n${todoList}\n\n作成場所 : Busy me\n https://busy-me.vercel.app/`;
    navigator.clipboard
      .writeText(fullText)
      .then(() => {
        setOpenTip(true);
        setTimeout(() => setOpenTip(false), 1000);
      })
      .catch((err) => console.error("コピーに失敗しました: ", err));
  };

  return (
    <SortTodoFieldArea
      inputFields={inputFields}
      inputRefs={inputRefs}
      isOpenTip={openTip}
      handleAddField={handleAddField}
      handleChange={handleChange}
      handlePriorityChange={handlePriorityChange}
      handleKeyDown={handleKeyDown}
      handleCompositionStart={handleCompositionStart}
      handleCompositionEnd={handleCompositionEnd}
      handleDeleteField={handleDeleteField}
      sortedFields={sortedFields}
      handleCopyToClipboard={handleCopyToClipboard}
      setInputFields={setInputFields}
    />
  );
};

export default SortTodoPage;
