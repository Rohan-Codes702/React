import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utlis/formatDate";
import ThemeToggle from "./ThemeToggle";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
    toast.success("Paste deleted!");
  };

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-5 bg-gradient-to-br from-[#e0f7fa] via-[#e3f2fd] to-[#ede7f6] dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all duration-300">

      <div className="fixed top-15 right-1 ">
        <ThemeToggle />
      </div>
      
      <div className="max-w-5xl mx-auto mt-14">
        <div className="mb-8">
          <input
            type="search"
            placeholder="🔍 Search paste by title..."
            className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 text-gray-700 dark:text-white dark:bg-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 border-b border-gray-300 dark:border-gray-600 pb-4">
            📁 All Notes
          </h2>

          {filteredPastes.length > 0 ? (
            <div className="flex flex-col gap-6">
              {filteredPastes.map((paste) => (
                <div
                  key={paste._id}
                  className="flex flex-col md:flex-row justify-between gap-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-5 shadow hover:shadow-xl transition-all duration-300"
                >
                  {/* Paste Content */}
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{paste.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-3 max-w-xl">
                      {paste.content}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col justify-between items-start md:items-end gap-4">
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href={`/?pasteId=${paste._id}`}
                        className="p-2 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg hover:border-blue-500 group transition"
                        title="Edit"
                      >
                        <PencilLine className="text-gray-700 dark:text-white group-hover:text-blue-500" size={20} />
                      </a>

                      <button
                        className="p-2 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg hover:border-pink-500 group transition"
                        title="Delete"
                        onClick={() => handleDelete(paste._id)}
                      >
                        <Trash2 className="text-gray-700 dark:text-white group-hover:text-pink-500" size={20} />
                      </button>

                      <a
                        href={`/pastes/${paste._id}`}
                        target="_blank"
                        className="p-2 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg hover:border-orange-500 group transition"
                        title="View"
                      >
                        <Eye className="text-gray-700 dark:text-white group-hover:text-orange-500" size={20} />
                      </a>

                      <button
                        className="p-2 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg hover:border-green-500 group transition"
                        title="Copy"
                        onClick={() => {
                          navigator.clipboard.writeText(paste.content);
                          toast.success("Copied to Clipboard!");
                        }}
                      >
                        <Copy className="text-gray-700 dark:text-white group-hover:text-green-500" size={20} />
                      </button>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={18} />
                      {FormatDate(paste.createdAt)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-red-500 dark:text-red-400 font-medium py-10">
              No pastes found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paste;
