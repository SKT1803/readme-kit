import { Search } from "lucide-react";

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  setIsFocused,
}) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />

      <input
        type="text"
        placeholder="Search for badges... (e.g., C++, TensorFlow, React)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="
          w-full pl-16 pr-6 py-5 
          bg-gray-900/70 border border-blue-500/40 rounded-2xl 
          text-white text-lg placeholder-gray-500
          transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.4)]
          focus:ring-2 focus:ring-blue-500 focus:border-blue-400
        "
      />
    </div>
  );
}
