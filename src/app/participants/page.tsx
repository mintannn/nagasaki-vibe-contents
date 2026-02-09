import Link from 'next/link'
import { fetchParticipants } from '@/lib/google-sheets'

export default async function ParticipantsPage() {
  const participants = await fetchParticipants()

  return (
    <div className="desktop-page">
      {/* Header */}
      <section className="participants-header">
        <Link href="/" className="participants-back">&larr; TOP</Link>
        <div className="participants-header-content">
          <div className="participants-label">VIBE CODING CAMP in NAGASAKI</div>
          <h1 className="participants-title">PARTICIPANTS</h1>
          <div className="participants-subtitle">チェックイン参加者一覧</div>
          <div className="participants-count">
            <span className="participants-count-num">{participants.length}</span>
            <span className="participants-count-label"> 名が参加登録済み</span>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="participants-list-section">
        {participants.length === 0 ? (
          <div className="participants-empty">
            <div className="participants-empty-icon">🐟</div>
            <div className="participants-empty-text">まだ参加者がいません</div>
            <div className="participants-empty-sub">Google Formsからチェックインしてください</div>
          </div>
        ) : (
          <div className="participants-list">
            {participants.map((p, i) => (
              <div key={`${p.discordId}-${i}`} className="participant-card-wide">
                <div className="participant-card-wide-left">
                  <div className="participant-avatar-lg">
                    {p.nickname.charAt(0)}
                  </div>
                </div>

                <div className="participant-card-wide-body">
                  <div className="participant-nickname-lg">{p.nickname}</div>

                  <div className="participant-meta-row">
                    <div className="participant-meta-item">
                      <span className="participant-meta-label">Discord</span>
                      <span className="participant-meta-value">{p.discordId}</span>
                    </div>
                  </div>
                </div>

                <div className="participant-card-wide-action">
                  {p.homeworkUrl && (
                    <a
                      href={p.homeworkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="participant-homework-btn"
                    >
                      <span>自己紹介を見る</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="participants-footer">
        <div className="participants-footer-text">
          おさかなだお長崎 × CIT Web3・AI概論
        </div>
      </footer>
    </div>
  )
}
