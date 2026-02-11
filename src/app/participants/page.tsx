import Link from 'next/link'
import { fetchParticipants } from '@/lib/google-sheets'

export const revalidate = 300 // 5分ごとに再検証

export default async function ParticipantsPage() {
  const participants = await fetchParticipants()

  return (
    <div className="desktop-page">
      {/* Header */}
      <section className="members-header">
        <Link href="/" className="members-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          TOP
        </Link>
        <div className="members-header-content">
          <div className="members-label">VIBE CODING CAMP 2026</div>
          <h1 className="members-title">MEMBERS</h1>
          <div className="members-subtitle">参加者一覧・自己紹介LP</div>
          <div className="members-count">
            <span className="members-count-num">{participants.length}</span>
            <span className="members-count-label">participants</span>
          </div>
        </div>
        <div className="members-header-deco">
          <svg viewBox="0 0 200 60" fill="none" className="members-fish-svg">
            <path d="M120 30c0-16-28-28-60-28S0 14 0 30s28 28 60 28 60-12 60-28z" fill="currentColor" opacity="0.06"/>
            <path d="M120 30l60-25v50l-60-25z" fill="currentColor" opacity="0.04"/>
            <circle cx="50" cy="24" r="4" fill="currentColor" opacity="0.08"/>
          </svg>
        </div>
      </section>

      {/* Grid */}
      <section className="members-grid-section">
        {participants.length === 0 ? (
          <div className="members-empty">
            <div className="members-empty-icon">🐟</div>
            <div className="members-empty-text">まだ参加者がいません</div>
            <div className="members-empty-sub">Google Formsからチェックインしてください</div>
          </div>
        ) : (
          <div className="members-grid">
            {participants.map((p, i) => (
              <div key={`${p.nickname}-${i}`} className="member-card">
                <div className="member-card-avatar">
                  <span className="member-card-initial">{p.nickname.charAt(0)}</span>
                </div>
                <div className="member-card-body">
                  <div className="member-card-name">{p.nickname}</div>
                  {p.homeworkUrl ? (
                    <a
                      href={p.homeworkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-card-link"
                    >
                      自己紹介LPを見る
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="member-card-no-link">LP未登録</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="members-footer">
        <div className="members-footer-text">
          おさかなだお長崎 × CIT Web3・AI概論
        </div>
      </footer>
    </div>
  )
}
