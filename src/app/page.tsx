import Link from 'next/link'

export default function TopPage() {
  return (
    <div className="desktop-page">
      {/* ===== HERO — full viewport ===== */}
      <section className="top-hero">
        <div className="top-hero-bg">
          <img src="/hero-bg.png" alt="" className="top-hero-bg-img" />
        </div>
        <div className="top-hero-overlay" />
        <div className="top-wave-line" />

        <div className="top-hero-content">
          <div className="top-hero-label">2026.2.13 — 15</div>
          <div className="top-hero-title">VIBE CODING<br />CAMP</div>
          <div className="top-hero-sub">in NAGASAKI</div>
          <div className="top-hero-tagline">旅 × 音声 × バイブコーディング</div>
          <div className="top-hero-date">2泊3日 ─ 長崎市茂木地区</div>

          <div className="top-fish-deco">
            <svg viewBox="0 0 120 32" fill="none" className="top-fish-svg">
              <path d="M80 16c0-8-14-15-36-15S8 8 8 16s14 15 36 15 36-7 36-15z" fill="currentColor" opacity="0.12"/>
              <path d="M80 16l28-13v26L80 16z" fill="currentColor" opacity="0.08"/>
              <circle cx="30" cy="13" r="2.5" fill="currentColor" opacity="0.15"/>
            </svg>
          </div>
        </div>

        {/* Scrolls down hint */}
        <div className="top-scroll-hint">
          <span>SCROLL</span>
          <div className="top-scroll-line" />
        </div>
      </section>

      {/* ===== DAY SELECTION — 3 columns ===== */}
      <section className="top-days">
        <div className="top-days-header">
          <div className="top-days-label">SCHEDULE</div>
          <div className="top-days-title">3 Days Program</div>
        </div>

        <div className="top-days-grid">
          <Link href="/day1" className="top-day-card day-1">
            <div className="top-day-card-top">
              <div className="top-day-number">DAY 1</div>
              <div className="top-day-date">2.13 THU</div>
            </div>
            <div className="top-day-card-body">
              <div className="top-day-name">出発 × 観光<br />× チーム結成</div>
              <div className="top-day-desc">スタートガイド<br />ランチレクチャー<br />長崎観光</div>
            </div>
            <div className="top-day-card-bottom">
              <span className="top-day-enter">Enter →</span>
            </div>
            <div className="top-day-wave">
              <svg viewBox="0 0 400 40" preserveAspectRatio="none">
                <path d="M0 20 Q50 5 100 20 T200 20 T300 20 T400 20 V40 H0Z" fill="currentColor" opacity="0.06"/>
              </svg>
            </div>
          </Link>

          <Link href="/day2" className="top-day-card day-2">
            <div className="top-day-card-top">
              <div className="top-day-number">DAY 2</div>
              <div className="top-day-date">2.14 FRI</div>
            </div>
            <div className="top-day-card-body">
              <div className="top-day-name">制作 ×<br />プロトタイプ</div>
              <div className="top-day-desc">バイブコーディング実践<br />チーム開発</div>
            </div>
            <div className="top-day-card-bottom">
              <span className="top-day-enter">Enter →</span>
            </div>
            <div className="top-day-wave">
              <svg viewBox="0 0 400 40" preserveAspectRatio="none">
                <path d="M0 20 Q50 5 100 20 T200 20 T300 20 T400 20 V40 H0Z" fill="currentColor" opacity="0.06"/>
              </svg>
            </div>
          </Link>

          <Link href="/day3" className="top-day-card day-3">
            <div className="top-day-card-top">
              <div className="top-day-number">DAY 3</div>
              <div className="top-day-date">2.15 SAT</div>
            </div>
            <div className="top-day-card-body">
              <div className="top-day-name">発表 ×<br />ふりかえり</div>
              <div className="top-day-desc">成果発表<br />修了証・帰路</div>
            </div>
            <div className="top-day-card-bottom">
              <span className="top-day-enter">Enter →</span>
            </div>
            <div className="top-day-wave">
              <svg viewBox="0 0 400 40" preserveAspectRatio="none">
                <path d="M0 20 Q50 5 100 20 T200 20 T300 20 T400 20 V40 H0Z" fill="currentColor" opacity="0.06"/>
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== VIBE APP CTA ===== */}
      <section className="top-vibe-cta" style={{ flexDirection: 'column' }}>
        <a
          href="https://nagasaki-vibe-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="vibe-app-btn hero-vibe-btn"
        >
          <span className="vibe-app-btn-glow" />
          <span className="vibe-app-btn-text">価値を考えるアプリ</span>
          <span className="vibe-app-btn-arrow">→</span>
        </a>
        <div style={{ fontSize: '11px', color: '#888', letterSpacing: '0.5px' }}>
          このワークショップで皆さんに活用いただく記録アプリです。別途使い方は説明いたします。
        </div>
      </section>

      {/* ===== MEMBERS ===== */}
      <section className="top-members">
        <div className="top-members-inner">
          <div className="top-members-content">
            <div className="top-days-label">MEMBERS</div>
            <div className="top-members-title">参加者一覧</div>
            <p className="top-members-desc">
              参加者のプロフィールと自己紹介LPを確認できます
            </p>
            <Link href="/participants" className="top-members-btn">
              <span>メンバーを見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className="top-members-visual">
            <div className="top-members-avatars">
              <div className="top-members-avatar a1">🐟</div>
              <div className="top-members-avatar a2">🐠</div>
              <div className="top-members-avatar a3">🐡</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="top-footer">
        <div className="top-footer-fish">
          <svg viewBox="0 0 60 24" fill="none">
            <path d="M42 12c0-6-8-11-20-11S2 6 2 12s8 11 20 11 20-5 20-11z" fill="currentColor" opacity="0.12"/>
            <path d="M42 12l16-10v20L42 12z" fill="currentColor" opacity="0.08"/>
          </svg>
        </div>
        <div className="top-footer-org">おさかなだお長崎 × CIT Web3・AI概論</div>
      </footer>
    </div>
  )
}
