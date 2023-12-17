import { useState, ChangeEvent } from "react";

interface UseInputResult {
  content: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export const useInput = (): UseInputResult => {
  const [content, setContent] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const reset = () => {
    setContent("");
  };

  return { content, onChange, reset };
};
