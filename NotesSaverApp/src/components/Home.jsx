import { Copy, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
  };

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, pastes]);

  return (

    <div className="w-full min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black py-12 px-4 transition-all duration-300">
     
      <div className="fixed right-1  ">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white drop-shadow-lg">
            📝 Notes Saver
          </h1>
        </div>

        <div className="flex flex-col gap-6">

          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <input
              type="text"
              placeholder="Enter a title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 text-gray-800 dark:text-white placeholder-gray-400 dark:bg-gray-800 transition-all duration-300"
            />

            <div className="flex gap-3">
              <button
                onClick={createPaste}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                {pasteId ? "Update" : "Create"}
              </button>

              {pasteId && (
                <button
                  onClick={resetPaste}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
                >
                  <PlusCircle size={20} />
                  New
                </button>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex justify-between items-center px-5 py-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <button
                className="hover:text-green-600 transition-colors dark:text-white dark:hover:text-green-400"
                onClick={() => {
                  navigator.clipboard.writeText(value);
                  toast.success("Copied to Clipboard!", { position: "top-right" });
                }}
              >
                <Copy size={22} />
              </button>
            </div>

            <textarea
              placeholder="Write your content here..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-6 min-h-[320px] resize-none focus:outline-none text-gray-900 dark:text-white text-lg placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800"
              style={{ caretColor: "#000" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
