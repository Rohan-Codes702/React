import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((paste) => paste._id === id);

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all duration-300">
      <div className="max-w-4xl mx-auto">

        <div className="fixed top-15 right-1 ">
          <ThemeToggle />
        </div>

        <h2 className="text-5xl font-extrabold text-center mb-10 text-gray-800 dark:text-white drop-shadow">
          📄 View Your Note
        </h2>

        <div className="flex flex-col gap-6 bg-white dark:bg-gray-800 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">

          <input
            type="text"
            placeholder="Title"
            value={paste?.title || ""}
            disabled
            className="w-full text-xl font-semibold text-gray-800 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-xl p-4 shadow-inner focus:outline-none cursor-default"
          />

          <div className="relative w-full rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600 shadow-lg">

            <div className="flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <button
                className="text-gray-700 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-all duration-200 active:scale-95"
                onClick={() => {
                  navigator.clipboard.writeText(paste?.content || "");
                  toast.success("Copied to Clipboard!", {
                    position: "top-right",
                  });
                }}
                title="Copy to Clipboard"
              >
                <Copy size={22} />
              </button>
            </div>

            
            <textarea
              value={paste?.content || ""}
              disabled
              placeholder="Write your content here..."
              className="w-full p-6 text-gray-800 dark:text-white text-base bg-white dark:bg-gray-900 resize-none min-h-[320px] focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
              style={{ caretColor: "#000" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
