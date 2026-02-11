'use client'

import Link from 'next/link'
import { DayNav } from '@/components/day-nav'
import { FadeSection } from '@/components/fade-section'
import { YouTubeEmbed } from '@/components/youtube-embed'
import { TaskCheckbox } from '@/components/task-checkbox'
import { CompletionButton } from '@/components/completion-button'

export default function Day1Page() {
  return (
    <div className="mobile-page">
      <DayNav current={1} />

      {/* ===== HERO ===== */}
      <div className="camp-hero">
        <div className="camp-hero-day">DAY 1</div>
        <div className="camp-hero-label">2026.2.13 THU</div>
        <div className="camp-hero-title">出発 × 観光<br />× チーム結成</div>
        <div className="camp-hero-sub">START GUIDE &amp; LUNCH LECTURE</div>
        <div className="camp-hero-date">長崎市茂木地区へ</div>
      </div>

      {/* ===== 1-1: START GUIDE ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">START GUIDE</div>
        <div className="camp-section-title">はじめにやること</div>

        <div className="camp-action">
          <div className="camp-action-num gold">01</div>
          <div className="camp-action-title">チェックイン</div>
          <div className="camp-action-desc">
            下のフォームに入力して、チェックインを完了してください。
          </div>
          <div className="camp-checkin-embed">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSde7-FCsZabGK3yTT0812OlFJZq6kLFHk0lbxx552WNlJw0tQ/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.95)' }}
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>

        <div className="camp-action">
          <div className="camp-action-num coral">02</div>
          <div className="camp-action-title">あだ名を決める</div>
          <div className="camp-action-desc">
            この旅で呼ばれたいニックネームを考えて、<em>名前シールに書いてください。</em>
          </div>
        </div>

        <div className="camp-action">
          <div className="camp-action-num teal">03</div>
          <div className="camp-action-title">移動中に自己紹介</div>
          <div className="camp-action-desc">
            車内で1人ずつ自己紹介します。<br />
            LP作成済みの方は画面を見せながら。まだの方は口頭でOK。<br />
            <em>録音しておくと後でLP素材になります。</em>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div style={{ fontSize: '14px', color: 'var(--camp-ocean)', marginBottom: '12px', fontWeight: 600 }}>
              📺 事前宿題動画（自己紹介LPの作り方）
            </div>
            <YouTubeEmbed videoId="ZGTPgAT_k0E" title="自己紹介LP作成ガイド" />
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/gallery" className="camp-gallery-btn">
              🐟 皆さんの自己紹介LP集
            </Link>
          </div>
        </div>
      </FadeSection>

      {/* ===== 1-2: LUNCH LECTURE ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">LUNCH LECTURE</div>
        <div className="camp-section-title">アジェンダ</div>

        <div className="camp-agenda-item a1">
          <div className="camp-agenda-head">
            <span className="camp-agenda-title">&#10102; 旅のオリエンテーション</span>
            <span className="camp-agenda-time t1">5 min</span>
          </div>
          <div className="camp-agenda-speaker">全体</div>
          <div className="camp-agenda-body">
            <div className="camp-check-item">長崎ってどんな街？地域の魅力と、日本の未来につながる課題を知ろう</div>
            <div className="camp-check-item">あなたの得意なことや経験を、この旅で活かそう</div>
            <div className="camp-check-item">移動中も大事な時間。車内ではどんどん会話・交流しよう</div>
          </div>
        </div>

        <div className="camp-agenda-item a2">
          <div className="camp-agenda-head">
            <span className="camp-agenda-title">&#10103; 長崎のエンタメと課題</span>
            <span className="camp-agenda-time t2">5 min</span>
          </div>
          <div className="camp-agenda-speaker">maiP</div>
          <div className="camp-agenda-body">
            <div className="camp-check-item">おさかなDAOの紹介と長崎の魅力</div>
            <div className="camp-check-item">長崎の水産業が抱える課題の共有</div>
          </div>
        </div>

        <div className="camp-agenda-item a3">
          <div className="camp-agenda-head">
            <span className="camp-agenda-title">&#10104; Vibeコーディングの目標</span>
            <span className="camp-agenda-time t3">5 min</span>
          </div>
          <div className="camp-agenda-speaker">spark / minta</div>
          <div className="camp-agenda-body">
            <div style={{ fontSize: '14px', color: 'var(--camp-teal)', marginBottom: '8px' }}>
              今回の旅におけるVibeコーディングのステップ
            </div>
            <div className="camp-check-item">テーマ：旅 × 音声 × Vibeコーディング</div>
            <div className="camp-check-item">旅をしながらVibeコーディング。学びながら旅を楽しむ</div>
            <div className="camp-check-item">事業開発フレームワーク、AIツールによるVibeコーディング</div>
          </div>
        </div>
      </FadeSection>

      {/* ===== VIBE CODING EXPLAINED ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">WHAT IS</div>
        <div className="camp-section-title">バイブコーディング</div>

        <div className="camp-action-desc" style={{ marginBottom: '24px' }}>
          AIと会話しながらプロダクトを作る、新しい開発スタイル。<br />
          <em>プログラミングの経験は不要。</em><br />
          必要なのは「誰の、何を解決したいか」という想いと、AIへの語りかけだけ。
        </div>

        <div className="camp-divider" />

        <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--camp-cream)', marginBottom: '16px' }}>
          あなたの言葉が、プロダクトになる。
        </div>

        <div className="camp-check-item">自然言語（日本語の会話）でアプリが作れる</div>
        <div className="camp-check-item">コードを書かなくても、AIが実装してくれる</div>
        <div className="camp-check-item">アイデアからプロトタイプまで数時間で到達</div>
        <div className="camp-check-item" style={{ color: 'var(--camp-gold)' }}>今回のツール：v0（Vercel社）</div>
      </FadeSection>

      {/* ===== VOICE = PROMPT SEED ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">KEY CONCEPT</div>
        <div className="camp-section-title">音声 ＝ プロンプトの種</div>

        <div className="camp-steps">
          <div className="camp-step">
            <div className="camp-step-title">体験する</div>
            <div className="camp-step-desc">観光・見学・地元の方との交流で、長崎の魅力と課題を体感する。</div>
          </div>
          <div className="camp-step-arrow">↓</div>
          <div className="camp-step">
            <div className="camp-step-title">記録する</div>
            <div className="camp-step-desc">
              気づいたことを音声メモ・写真・テキストで記録する。
              <em style={{ color: 'var(--camp-gold)', fontStyle: 'normal' }}>録音推奨。</em>
            </div>
          </div>
          <div className="camp-step-arrow">↓</div>
          <div className="camp-step">
            <div className="camp-step-title">プロンプトにする</div>
            <div className="camp-step-desc">記録した音声・気づきが、明日のバイブコーディングの入力データになる。</div>
          </div>
        </div>
      </FadeSection>

      {/* ===== TEAM & GOALS ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">TEAM</div>
        <div className="camp-section-title">チーム＆目標設定</div>

        <TaskCheckbox id="day1-team-decide" label="チームを決める" />
        <TaskCheckbox id="day1-team-name" label="チーム名を決める" />
        <TaskCheckbox id="day1-personal-goal" label="個人目標を設定する" />
        <TaskCheckbox id="day1-team-goal" label="チーム目標を設定する" />

        <div className="camp-divider" />

        <div style={{ fontSize: '12px', letterSpacing: '3px', color: 'var(--camp-gold-dim)', marginBottom: '16px' }}>
          CHALLENGE FRAME
        </div>

        <div className="camp-frame-item">
          <div className="camp-frame-icon">🌱</div>
          <div className="camp-frame-text">良いものを伸ばす</div>
        </div>
        <div className="camp-frame-item">
          <div className="camp-frame-icon">🎯</div>
          <div className="camp-frame-text">課題を収束する</div>
        </div>
        <div className="camp-frame-item">
          <div className="camp-frame-icon">💪</div>
          <div className="camp-frame-text">自分自身の強みを活かす</div>
        </div>

        <div className="camp-callout">
          <div className="camp-callout-title">「Join」の精神</div>
          <div className="camp-callout-body">
            訪問者と地域住民が相互に価値を提供し合う。<br />
            お金ではない価値の交換が、この合宿の核です。
          </div>
        </div>
      </FadeSection>

      {/* ===== MISSION ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">MISSION</div>
        <div className="camp-section-title">長崎を感じて、記録する</div>

        <div className="camp-action-desc" style={{ marginBottom: '20px' }}>
          この後の観光で、<em>1つ以上の「気づき」</em>を記録してください。
        </div>

        <a
          href="https://nagasaki-vibe-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="vibe-app-btn"
        >
          <span className="vibe-app-btn-icon">✨</span>
          <span className="vibe-app-btn-text">記録はコチラから</span>
          <span className="vibe-app-btn-arrow">→</span>
        </a>

        <div className="camp-dest d1">
          <div className="camp-dest-name">原爆資料館</div>
          <div className="camp-dest-time">14:30 — 15:30（1h）</div>
          <div className="camp-dest-desc">平和への祈りと歴史。心に残ったことを記録しよう。</div>
        </div>

        <div className="camp-dest d2">
          <div className="camp-dest-name">出島</div>
          <div className="camp-dest-time">15:50 — 16:20（30min）</div>
          <div className="camp-dest-desc">和華蘭文化の原点。異文化交流の歴史を体感。</div>
        </div>

        <div className="camp-dest d3">
          <div className="camp-dest-name">大浦天主堂</div>
          <div className="camp-dest-time">16:30 — 17:00（30min）</div>
          <div className="camp-dest-desc">潜伏キリシタンの奇跡。信仰と文化の融合。</div>
        </div>

        <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--camp-cream)', marginTop: '24px', marginBottom: '12px' }}>
          記録方法
        </div>

        <div className="camp-methods">
          <div className="camp-method">
            <div className="camp-method-icon">🎙</div>
            <div className="camp-method-label">
              音声メモ<br />
              <span style={{ color: 'var(--camp-coral)', fontSize: '10px' }}>推奨</span>
            </div>
          </div>
          <div className="camp-method">
            <div className="camp-method-icon">📷</div>
            <div className="camp-method-label">写真</div>
          </div>
          <div className="camp-method">
            <div className="camp-method-icon">📝</div>
            <div className="camp-method-label">テキスト</div>
          </div>
        </div>

        <div className="camp-callout">
          <div className="camp-callout-title">なぜ記録するの？</div>
          <div className="camp-callout-body">
            この記録が、明日のバイブコーディングの素材（プロンプト）になります。<br />
            <span style={{ color: 'var(--camp-text-dim)', fontStyle: 'italic' }}>まずは単純に楽しむことも大切に。</span>
          </div>
        </div>
      </FadeSection>

      {/* ===== DAY1 COMPLETION ===== */}
      <FadeSection className="camp-section" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎉</div>
        <div className="camp-action-title" style={{ fontSize: '26px', marginBottom: '16px' }}>Day 1 おつかれさまでした！</div>
        <div style={{ fontSize: '17px', color: 'var(--camp-text)', lineHeight: 1.9, marginBottom: '28px' }}>
          今日の観光で感じたことを忘れないうちに記録しておきましょう。
          明日のVibeコーディングで、この記録が活きてきます。
        </div>
        <CompletionButton label="Day 1 できた！" dayKey="day1-complete" />
      </FadeSection>

      {/* ===== FOOTER ===== */}
      <div className="camp-footer">
        <div className="camp-footer-logo">VIBE CODING CAMP</div>
        <div className="camp-footer-credit">おさかなだお長崎 × ChibaTech web3 AI概論</div>
        <div className="camp-footer-credit" style={{ marginTop: '8px', opacity: 0.7 }}>© 2026 uni**</div>
      </div>
    </div>
  )
}
