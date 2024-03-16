import React, { useState } from "react";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

const AddTodoForm = ({ onSubmit }: AddTodoFormProps) => {
  const [content, setContent] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit(content);
    setContent("");
  };
  return (
    <form className="flex" onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="What needs to be done?"
        className="rounded-l-md p-2 grow border border-gray-200 outline-none"
        value={content}
      />
      <button
        type="submit"
        className="w-16 bg-slate-900 rounded-r-md text-white hover:bg-slate-800 duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
