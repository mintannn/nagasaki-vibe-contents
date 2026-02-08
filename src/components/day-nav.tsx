import Link from 'next/link'

export function DayNav({ current }: { current: 1 | 2 | 3 }) {
  return (
    <nav className="day-nav">
      <Link href="/" className="day-nav-back">← TOP</Link>
      <div className="day-nav-tabs">
        {[1, 2, 3].map((d) => (
          <Link
            key={d}
            href={`/day${d}`}
            className={`day-nav-tab ${d === current ? 'active' : ''}`}
          >
            D{d}
          </Link>
        ))}
      </div>
    </nav>
  )
}
