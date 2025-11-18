import BadgeStyleCard from "./BadgeStyleCard";

export default function BadgeCard({ badge }) {
  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-white mb-4">{badge.name}</h2>

      <div
        className="
          grid
          grid-cols-2        
          sm:grid-cols-3       
          lg:grid-cols-5     
          gap-4
        "
      >
        {badge.styles.map((style) => (
          <BadgeStyleCard key={style.name} style={style} />
        ))}
      </div>
    </div>
  );
}
