import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all items-center justify-center gap-2 flex focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-opacity-10 dark:bg-white disabled:bg-opacity-65 disabled:scale-100  "
    >
      {pending ? (
        <div className="h-5 w-5 rounded-full border-b-2 border-white animate-spin "></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 "></FaPaperPlane>
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
