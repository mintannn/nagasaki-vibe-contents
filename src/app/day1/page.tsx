'use client'

import Link from 'next/link'
import { DayNav } from '@/components/day-nav'
import { FadeSection } from '@/components/fade-section'
import { YouTubeEmbed } from '@/components/youtube-embed'
import { TaskCheckbox } from '@/components/task-checkbox'
import { CompletionButton } from '@/components/completion-button'
import { CopyButton } from '@/components/copy-button'

const DAY1_SUMMARY_PROMPT = `# Day 1 まとめLP作成プロンプト

あなたはWebデザイナー兼ファシリテーターです。
以下は「Vibeコーディング合宿 in 長崎」Day1の帰りの車内で、チームが1日を振り返って議論した音声の文字起こしです。

この内容をもとに、チームのDay1まとめページ（LP）を作成してください。

## 出力要件
- モダンでおしゃれな1ページのLP（HTMLで完結）
- ダーク基調のデザイン
- 以下のセクションを含めること：

### 1. チーム紹介
- チーム名（議論から推測、なければ仮名）
- メンバーの名前・役割

### 2. 今日の気づき・学び
- 原爆資料館、出島、大浦天主堂など訪問先ごとの気づき
- 印象に残ったこと

### 3. 発見した課題・可能性
- 長崎の地域課題で気になったもの
- 「こうしたらもっと良くなるのでは？」というアイデア

### 4. 明日への仮説
- 明日の漁港訪問に向けて検証したい仮説
- 仮のターゲットユーザー像
- 仮の課題定義（誰の、どんな困りごとを解決したいか）

### 5. チームの意気込み
- 明日のアプリ制作に向けた一言

## 注意事項
- 議論の中で出てきた具体的なエピソードや固有名詞はそのまま活かす
- メンバーの発言のニュアンスを大切にする
- 明日（Day2）は漁港訪問→課題定義→Vibeコーディングでアプリ制作の流れ

---

## 以下、音声の文字起こし：

`

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
            <em>録音しておくと後でLP素材になります。</em><br />
            ※ 別の車のメンバーとも<em>Discordボイスチャット</em>をつないで一緒に共有しましょう。
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
      <FadeSection className="camp-section lunch-section">
        <div className="lunch-badge">
          <span className="lunch-badge-icon">🍴</span>
          <span className="lunch-badge-text">ランチを食べながら</span>
        </div>
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

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <div style={{ fontSize: '13px', color: 'var(--camp-text-dim)', marginBottom: '12px' }}>
            このコンセプトを実践するアプリはこちら
          </div>
          <a
            href="https://nagasaki-vibe-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="vibe-app-btn"
          >
            <span className="vibe-app-btn-text">価値を考えるアプリ</span>
            <span className="vibe-app-btn-arrow">→</span>
          </a>
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
          この後の見学で、<em>1つ以上の「気づき」</em>を記録してください。
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

        <div className="camp-car-share">
          <span className="camp-car-share-icon">🚗</span>
          <span className="camp-car-share-text">移動中：車内で気づきの共有タイム（ボイチャも活用🎧）</span>
        </div>

        <div className="camp-dest d2">
          <div className="camp-dest-name">出島</div>
          <div className="camp-dest-time">15:50 — 16:20（30min）</div>
          <div className="camp-dest-desc">和華蘭文化の原点。異文化交流の歴史を体感。</div>
        </div>

        <div className="camp-car-share">
          <span className="camp-car-share-icon">🚗</span>
          <span className="camp-car-share-text">移動中：車内で気づきの共有タイム（ボイチャも活用🎧）</span>
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

      {/* ===== 懇親会 ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">DINNER</div>
        <div className="camp-section-title">懇親会</div>

        <div className="camp-action-desc" style={{ marginBottom: '16px' }}>
          今日の見学を終えて、リラックスした雰囲気で交流しましょう。<br />
          チームメンバーや他の参加者と、見学で感じたことを自由に語り合う時間です。
        </div>

        <div className="camp-callout">
          <div className="camp-callout-title">楽しむことが一番大事</div>
          <div className="camp-callout-body">
            ここでは堅い話は不要です。美味しいごはんを食べながら、たくさんお話ししましょう。<br />
            何気ない会話の中に、明日のアイデアの種が隠れているかもしれません。
          </div>
        </div>
      </FadeSection>

      {/* ===== 稲佐山 ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">NIGHT VIEW</div>
        <div className="camp-section-title">稲佐山展望台</div>

        <div className="camp-action-desc" style={{ marginBottom: '16px' }}>
          <em>世界新三大夜景</em>に選ばれた、稲佐山からの絶景を楽しみましょう。<br />
          もし何か気づきがあれば、忘れないうちにアプリに記録しておこう。
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://nagasaki-vibe-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="vibe-app-btn"
          >
            <span className="vibe-app-btn-text">気づきを記録する</span>
            <span className="vibe-app-btn-arrow">→</span>
          </a>
        </div>
      </FadeSection>

      {/* ===== 茂木への移動 & 1日の振り返り ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">WRAP UP</div>
        <div className="camp-section-title">茂木への移動（約45分）</div>

        <div className="camp-action-desc" style={{ marginBottom: '20px' }}>
          Day 1 最後のセッションです。<br />
          チームごとに車に分かれて、<em>今日1日の振り返りと明日への準備</em>を行います。
        </div>

        <div className="slide-theme-box" style={{ marginBottom: '24px' }}>
          <div className="slide-card-title">車内ディスカッションのテーマ</div>
          <div className="camp-check-item">今日一番印象に残った場所・体験は？</div>
          <div className="camp-check-item">長崎の課題で気になったものは？</div>
          <div className="camp-check-item">「こうすればもっと良くなるのでは？」というアイデア</div>
          <div className="camp-check-item">明日の漁港訪問で確かめたいこと</div>
          <div className="camp-check-item">仮のターゲットユーザーと課題の方向性</div>
        </div>

        <div className="camp-callout" style={{ borderLeftColor: 'var(--camp-coral)' }}>
          <div className="camp-callout-title">🎙 代表者1名がボイスメモで録音してください</div>
          <div className="camp-callout-body">
            チームの議論をまるごと録音しておいてください。<br />
            この録音が、次のまとめページ作成の素材になります。
          </div>
        </div>
      </FadeSection>

      {/* ===== DAY1 まとめLP作成セッション ===== */}
      <FadeSection className="camp-section">
        <div className="camp-section-label">BUILD SESSION</div>
        <div className="camp-section-title">Day 1 まとめLP作成</div>

        <div className="camp-action-desc" style={{ marginBottom: '20px' }}>
          車内ディスカッションの録音を文字起こしして、<br />
          以下の定型プロンプトと一緒に <strong>v0</strong> に貼り付けるだけで、<br />
          チームの Day 1 まとめページが自動生成されます。
        </div>

        <div className="slide-theme-box" style={{ marginBottom: '20px' }}>
          <div className="slide-card-title">手順</div>
          <div className="camp-check-item">① 録音した音声を文字起こし（スマホの音声入力やAIツールを活用）</div>
          <div className="camp-check-item">② 下の定型プロンプトをコピー</div>
          <div className="camp-check-item">③ v0.dev を開いてプロンプトを貼り付け</div>
          <div className="camp-check-item">④ プロンプトの末尾に文字起こしテキストを追加して送信</div>
        </div>

        <div className="slide-prompt-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div className="slide-card-title">v0用 定型プロンプト</div>
            <CopyButton text={DAY1_SUMMARY_PROMPT} />
          </div>
          <pre className="slide-code-block" style={{ whiteSpace: 'pre-wrap', fontSize: '13px', lineHeight: 1.7, maxHeight: '300px', overflow: 'auto' }}>
{DAY1_SUMMARY_PROMPT.trim()}
          </pre>
        </div>

        <div style={{ fontSize: '13px', color: 'var(--camp-text-dim)', marginTop: '16px', lineHeight: 1.8 }}>
          ※ プロンプトはそのままでも使えますが、自由にカスタマイズしていただいても構いません。<br />
          ※ これはチーム振り返り用です。提出は不要です。
        </div>

        <div className="slide-theme-box" style={{ marginTop: '24px' }}>
          <div className="slide-card-title">応用編：他のツールも活用できます</div>
          <div style={{ fontSize: '14px', color: 'var(--camp-text-dim)', marginBottom: '12px', lineHeight: 1.7 }}>
            v0以外にも、以下のツールで同じプロンプトを使えます。
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="vibe-app-btn" style={{ margin: 0, fontSize: '13px', padding: '10px 20px' }}>
              <span className="vibe-app-btn-text">Claude</span>
              <span className="vibe-app-btn-arrow">→</span>
            </a>
            <a href="https://www.createanything.com/" target="_blank" rel="noopener noreferrer" className="vibe-app-btn" style={{ margin: 0, fontSize: '13px', padding: '10px 20px' }}>
              <span className="vibe-app-btn-text">Anything</span>
              <span className="vibe-app-btn-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="camp-callout" style={{ marginTop: '20px' }}>
          <div className="camp-callout-title">明日（Day 2）の流れ</div>
          <div className="camp-callout-body">
            午前中に<em>漁港を訪問</em>して現場の気づきを収集。<br />
            そこから<em>仮の課題とターゲット</em>を定め、<br />
            午後はVibeコーディングで<em>アプリ制作</em>に取り組みます。<br />
            今日の議論がそのまま明日のプロダクトの土台になります。
          </div>
        </div>
      </FadeSection>

      {/* ===== DAY1 COMPLETION ===== */}
      <FadeSection className="camp-section" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎉</div>
        <div className="camp-action-title" style={{ fontSize: '26px', marginBottom: '16px' }}>Day 1 おつかれさまでした！</div>
        <div style={{ fontSize: '17px', color: 'var(--camp-text)', lineHeight: 1.9, marginBottom: '28px' }}>
          今日の体験と議論を形にできましたか？<br />
          明日は漁港訪問からアプリ制作へ。今日の気づきが活きてきます。
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
