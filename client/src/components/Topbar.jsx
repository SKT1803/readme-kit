import { Github, Globe } from "lucide-react";
import MyIcon from "../assets/skt-cropped-rb.png";

export default function Topbar() {
  return (
    <div
      className="
        fixed top-6 right-6 z-50 
        flex items-center gap-4
      "
    >
      <a
        href="https://yourwebsite.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2 rounded-xl 
          bg-gray-900/40 backdrop-blur-xl 
          border border-gray-700/50
          hover:border-blue-400/60 
          hover:bg-gray-900/70
          transition-all duration-300
        "
      >
        {/* <Globe className="w-5 h-5 text-gray-300 hover:text-white" /> */}
        <img
          src={MyIcon}
          alt="Website"
          className="w-8 h-8 object-contain opacity-80 hover:opacity-100 transition"
        />
      </a>
      <a
        href="https://github.com/your/repo"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2 rounded-xl 
          bg-gray-900/40 backdrop-blur-xl 
          border border-gray-700/50
          hover:border-purple-400/60 
          hover:bg-gray-900/70
          transition-all duration-300
        "
      >
        <Github className="w-8 h-8 text-gray-300 hover:text-white" />
      </a>
    </div>
  );
}
