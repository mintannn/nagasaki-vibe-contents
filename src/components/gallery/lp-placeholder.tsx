'use client'

const FISH_EMOJIS = ['🐟', '🐠', '🐡', '🦈', '🐳', '🐬', '🦑', '🐙', '🦐', '🦀']

// ニックネームから固定のインデックスを生成（同じ人は常に同じ魚）
function getFishEmoji(seed?: string): string {
  if (!seed) return FISH_EMOJIS[Math.floor(Math.random() * FISH_EMOJIS.length)]
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash)
  }
  return FISH_EMOJIS[Math.abs(hash) % FISH_EMOJIS.length]
}

export function LPPlaceholder({ nickname }: { nickname?: string }) {
  return (
    <div className="lp-placeholder">
      <div className="lp-placeholder-fish">
        {getFishEmoji(nickname)}
      </div>
      <div className="lp-placeholder-bubbles">
        <div className="lp-placeholder-bubble" />
        <div className="lp-placeholder-bubble" />
        <div className="lp-placeholder-bubble" />
      </div>
    </div>
  )
}
