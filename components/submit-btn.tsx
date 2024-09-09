import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group h-[3rem] w-[8rem] transition-all text-white rounded-full outline-none items-center justify-center gap-2 flex focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-opacity-10 disabled:bg-opacity-65 disabled:scale-100 btn-gradient "
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
