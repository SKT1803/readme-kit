import { Copy } from "lucide-react";
import { useMemo, useState } from "react";

const PRESET_COLORS = ["#2563EB", "#7C3AED", "#F97316", "#22C55E", "#E11D48"];

function extractInitialColor(code) {
  const paramMatch = code.match(/color=([0-9a-fA-F]{3,8})/);
  if (paramMatch) return `#${paramMatch[1]}`;

  const pathMatch = code.match(/-([0-9a-fA-F]{3,8})(\?style=)/);
  if (pathMatch) return `#${pathMatch[1]}`;

  return "#2563EB";
}

function applyColor(code, hex) {
  const color = hex.replace("#", "");
  if (!color) return code;

  if (code.includes("color=")) {
    if (code.match(/color=([0-9a-fA-F]{3,8})/)) {
      return code.replace(/color=([0-9a-fA-F]{3,8})/, `color=${color}`);
    }
    return code.replace(/color=([^&"]*)/, `color=${color}`);
  }

  if (code.match(/-([0-9a-fA-F]{3,8})(\?style=)/)) {
    return code.replace(/-([0-9a-fA-F]{3,8})(\?style=)/, `-${color}$2`);
  }

  return code.replace(/src="([^"]+)"/, (match, url) => {
    const joiner = url.includes("?") ? "&" : "?";
    return `src="${url}${joiner}color=${color}"`;
  });
}

export default function BadgeStyleCard({ style }) {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const initialColor = useMemo(
    () => extractInitialColor(style.code),
    [style.code]
  );
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const displayCode = useMemo(
    () => applyColor(style.code, selectedColor),
    [style.code, selectedColor]
  );

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 900);
  };

  const isSocial = style.name === "social";

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
        h-[160px]
        w-full
        p-4
      "
    >
      <button
        onClick={copyToClipboard}
        className="
          absolute top-2 right-2 z-30 p-1.5
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

      <div
        className="flex items-center justify-center w-full h-full pb-6"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="scale-120 origin-center max-w-[85%] flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: displayCode }}
        />
      </div>

      <div className="absolute left-3 right-3 bottom-2 z-30 flex items-center justify-between">
        {!isSocial ? (
          <>
            <div className="flex items-center gap-1">
              {PRESET_COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`
                    w-4 h-4 rounded-full border 
                    ${selectedColor === c ? "border-white" : "border-white/40"}
                    shadow-sm
                  `}
                  style={{ backgroundColor: c }}
                />
              ))}

              <button
                type="button"
                onClick={() => setSelectedColor(initialColor)}
                className="
                  ml-2 px-2 py-[2px]
                  text-[10px] 
                  rounded-md border border-gray-600
                  text-gray-300 
                  bg-gray-900/70
                  hover:bg-gray-800 
                  hover:border-gray-400
                  transition-colors
                "
                title="Reset to the original badge color"
              >
                Reset
              </button>
            </div>

            <label className="text-[10px] text-gray-400 flex items-center gap-1 ml-1">
              <span>Custom</span>
              <input
                type="color"
                className="w-6 h-6 rounded-md border border-gray-700 bg-transparent p-0 cursor-pointer"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              />
            </label>
          </>
        ) : (
          <div className="w-full flex items-center justify-between">
            <span
              className="text-[10px] text-gray-500 truncate"
              title="Shields.io social style has limited color support; custom colors may not be applied."
            >
              Social style color is fixed by Shields.io
            </span>
          </div>
        )}
      </div>

      {hovered && !copied && (
        <div
          className="
            absolute inset-x-0 top-0 bottom-10
            flex items-center justify-center 
            bg-gray-900/95 backdrop-blur-md 
            p-4 
            z-20
            pointer-events-none
          "
        >
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
              {displayCode}
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
            z-40
          "
        >
          Copied!
        </div>
      )}
    </div>
  );
}
