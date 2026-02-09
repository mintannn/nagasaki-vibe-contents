import Link from 'next/link'
import { fetchParticipants } from '@/lib/sheets'
import { LPCard } from '@/components/gallery/lp-card'
import { DayNav } from '@/components/day-nav'

// ISR: 1時間ごとに再検証
export const revalidate = 3600

export default async function GalleryPage() {
  const participants = await fetchParticipants()

  return (
    <div className="desktop-page camp-base">
      <DayNav current={1} />

      <div className="gallery-page">
        <div className="gallery-header">
          <div className="gallery-title">
            皆さんの自己紹介LP集
          </div>
          <div className="gallery-subtitle">
            参加者の皆さんが作成した自己紹介ページを見てみましょう。<br />
            カードをクリックすると各LPに移動します。
          </div>
        </div>

        {participants.length > 0 ? (
          <div className="gallery-grid">
            {participants.map((participant, index) => (
              <LPCard key={index} participant={participant} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 24px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🐟</div>
            <div style={{ fontSize: '17px', color: 'var(--camp-text-dim)' }}>
              まだLPが登録されていません。<br />
              チェックインフォームから登録してください。
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/day1" className="camp-gallery-btn" style={{ background: 'linear-gradient(135deg, var(--camp-gold), var(--camp-coral))' }}>
            Day 1 に戻る
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="slide-footer">
        <div className="slide-footer-left">VIBE CODING CAMP in NAGASAKI</div>
        <div className="slide-footer-right">
          <div>おさかなだお長崎 × ChibaTech web3 AI概論</div>
          <div style={{ marginTop: '4px', opacity: 0.7 }}>© 2026 uni**</div>
        </div>
      </footer>
    </div>
  )
}
