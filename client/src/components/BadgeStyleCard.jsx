import { Copy } from "lucide-react";
import { useState } from "react";

export default function BadgeStyleCard({ style }) {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(style.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 900);
  };

  return (
    <div
      className="
        relative 
        bg-gray-900/40 
        border border-gray-800 
        rounded-xl
        overflow-hidden
        transition-all duration-300
        hover:border-blue-400/40 
        hover:bg-gray-900/70
        flex items-center justify-center
        h-[140px]
        w-full
        p-4
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={copyToClipboard}
        className="
          absolute top-2 right-2 z-20 p-1.5
          bg-blue-600/85 
          text-white rounded-lg shadow-sm
          cursor-pointer
          transition-all duration-200
          hover:scale-110
          hover:bg-blue-600
          active:scale-95
        "
      >
        <Copy className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-center w-full h-full">
        <div
          className="scale-120 origin-center max-w-[85%] flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: style.code }}
        />
      </div>

      {hovered && !copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/95 backdrop-blur-md p-4">
          <div
            className="
              border border-gray-700 
              rounded-lg 
              px-3 py-2
              max-w-full
              max-h-full
              overflow-auto
            "
          >
            <code className="text-[11px] text-gray-200 font-mono break-all leading-relaxed block">
              {style.code}
            </code>
          </div>
        </div>
      )}

      {copied && (
        <div
          className="
            absolute inset-0 
            bg-blue-500/20 backdrop-blur-sm
            flex items-center justify-center rounded-xl
            text-blue-100 font-medium text-sm
          "
        >
          Copied!
        </div>
      )}
    </div>
  );
}
