export function MarqueeTicker() {
  const text = "FREE SHIPPING OVER ₱2,000 — NEW DROP EVERY FRIDAY — EARN LOYALTY POINTS — EXCLUSIVE MEMBER DISCOUNTS — "
  
  return (
    <div className="bg-accent overflow-hidden whitespace-nowrap py-3">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-white text-xs font-mono tracking-[0.2em] uppercase px-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
