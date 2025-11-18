import { useState, useMemo } from "react";
import badgesData from "../data/badges.json";

import SearchBar from "../components/SearchBar";
import BadgeCard from "../components/BadgeCard";
import Topbar from "../components/Topbar";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isFocused || searchQuery.trim().length > 0;

  const filteredBadges = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const q = searchQuery.toLowerCase();

    return badgesData.badges.filter((badge) =>
      badge.searchTerms.some((t) => t.toLowerCase().startsWith(q))
    );
  }, [searchQuery]);

  return (
    <div
      className="
        min-h-screen 
        bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950
        flex flex-col items-center px-4
        custom-scrollbar
      "
    >
      <Topbar />
      <div
        className={`
          transition-all duration-500 
          ${isActive ? "mt-10" : "mt-[20vh]"}
        `}
      >
        <div className="relative w-fit mx-auto mb-2">
          <div
            className="
              absolute inset-0
              bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20
              blur-3xl opacity-70 
              animate-pulse
            "
          />
          <img
            src="/logo-rb.png"
            alt="Readme Kit"
            className="
              relative h-28 w-auto mx-auto
              drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]
              transition-all duration-500
              hover:drop-shadow-[0_0_45px_rgba(147,51,234,0.45)]
            "
          />
        </div>

        <p
          className="
            text-center text-lg mt-4 tracking-wide
            bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
            bg-clip-text text-transparent
          "
        >
          The fastest way to add beautiful shields.io badges to your README
        </p>
      </div>

      <div
        className={`
          w-full max-w-3xl transition-all duration-500
          ${isActive ? "mt-4" : "mt-14"}
        `}
      >
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsFocused={setIsFocused}
        />
      </div>

      <div className="w-full max-w-7xl mt-10 mb-20">
        {searchQuery.trim().length > 0 &&
          (filteredBadges.length === 0 ? (
            <div className="text-center py-12 rounded-2xl border border-gray-800 bg-gray-900/30">
              <div className="text-gray-400 text-lg mb-2">Not Found</div>
              <div className="text-gray-600 text-sm">
                No badges found for "{searchQuery}"
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              {filteredBadges.map((badge) => (
                <BadgeCard key={badge.name} badge={badge} />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
