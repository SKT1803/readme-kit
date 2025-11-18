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

        h-[170px]     /* geniş kart */
        w-full
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={copyToClipboard}
        className="
    absolute top-2 left-2 z-20 p-1.5
    bg-blue-600/85 
    text-white rounded-lg shadow-sm

    /* INTERACTIVITY */
    cursor-pointer
    transition-all duration-200

    /* HOVER */
    hover:scale-110
    hover:bg-blue-600
 

    /* PRESS */
    active:scale-95
    
  "
      >
        <Copy className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-center">
        <div
          className="scale-[1.4] origin-center"
          dangerouslySetInnerHTML={{ __html: style.code }}
        />
      </div>

      {hovered && !copied && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="
            bg-gray-900/80 
            backdrop-blur-md 
            border border-gray-700 
            rounded-lg 
            px-3 py-2
            shadow-xl
            max-w-[90%]
            text-center
          "
          >
            <code className="text-[12px] text-gray-200 font-mono break-all leading-tight">
              {style.code}
            </code>
          </div>
        </div>
      )}

      {copied && (
        <div
          className="absolute inset-0 bg-blue-500/20 backdrop-blur-sm
                     flex items-center justify-center rounded-xl
                     text-blue-100 font-medium"
        >
          Copied!
        </div>
      )}
    </div>
  );
}
