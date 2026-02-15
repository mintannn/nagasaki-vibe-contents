'use client'

import Link from 'next/link'
import { DayNav } from '@/components/day-nav'
import { FadeSection } from '@/components/fade-section'
import { ConfettiCanvas, ConfettiButton, TeamCard } from '@/components/day3-interactive'
import { CompletionButton } from '@/components/completion-button'
import { CopyButton } from '@/components/copy-button'
import { TaskCheckbox } from '@/components/task-checkbox'
import { Accordion } from '@/components/accordion'

const V0_TEMPLATE_PROMPT = `以下の情報をもとに、私の自己紹介LPに「Vibeコーディング合宿 in 長崎」の成果セクションを追加してください。

【合宿概要】
- 日程: 2026年2月13日〜15日
- 場所: 長崎市茂木地区
- テーマ: 旅 × 音声 × Vibeコーディング

【追加してほしいセクション】
「合宿の成果」というセクションを作成し、以下の発表内容を要約して掲載してください。
チーム名、取り組んだ課題、作成したプロダクトURL、学んだことを抽出してください。

【作成したプロダクトのURL】
（ここにURLを手で貼り付けてください）

【発表の文字起こし】
`

export default function Day3Page() {
  return (
    <div className="desktop-page">
      <DayNav current={3} />
      <ConfettiCanvas />

      {/* ===== 3-1: MORNING ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">DAY 3 — MORNING</div>
        <div className="slide-title">おはようございます 🌅</div>
        <div className="slide-subtitle">
          最終日です。午前中はプロダクトの仕上げ、<em>11:30 – 12:30</em> に3日間の振り返り＆共有会を行います。
        </div>

        <div className="journal-card">
          <div className="journal-card-header">
            <span className="journal-card-emoji">📋</span>
            <span className="journal-card-label">TODAY&apos;S GOALS</span>
          </div>
          <div className="journal-card-title">本日のゴール</div>
          <div className="journal-goals">
            <TaskCheckbox id="day3-goal-1" label="〜 11:00 プロダクト最終調整・ブラッシュアップ" />
            <TaskCheckbox id="day3-goal-2" label="11:00 – 11:30 共有会の準備（URLの整理など）" />
            <TaskCheckbox id="day3-goal-3" label="11:30 – 12:30 🎤 3日間の振り返り＆共有会" />
            <TaskCheckbox id="day3-goal-4" label="12:30 – 記念撮影・解散" />
          </div>
        </div>

        {/* 3-day timeline */}
        <div className="d3-timeline">
          <div className="slide-tag">OUR JOURNEY</div>
          <div className="slide-card-title" style={{ marginBottom: '36px' }}>3日間の軌跡</div>

          {/* Day 1 */}
          <div className="d3-tl-day">
            <div className="d3-tl-left">
              <div className="d3-tl-badge d1">Day 1</div>
              <div className="d3-tl-line" />
            </div>
            <div className="d3-tl-events">
              <div className="d3-tl-event">
                <div className="d3-tl-icon">✈️</div>
                <div className="d3-tl-content">
                  <strong>長崎空港に集合</strong>
                  <div className="d3-tl-desc">チーム編成、あだ名決め、自己紹介</div>
                </div>
              </div>
              <div className="d3-tl-event">
                <div className="d3-tl-icon">🍽️</div>
                <div className="d3-tl-content">
                  <strong>ランチレクチャー</strong>
                  <div className="d3-tl-desc">Vibeコーディングとは？ 音声＝プロンプトの種</div>
                </div>
              </div>
              <div className="d3-tl-event">
                <div className="d3-tl-icon">🕊️</div>
                <div className="d3-tl-content">
                  <strong>原爆資料館・出島・大浦天主堂</strong>
                  <div className="d3-tl-desc">長崎の歴史と文化に触れる</div>
                </div>
              </div>
              <div className="d3-tl-event">
                <div className="d3-tl-icon">🎙️</div>
                <div className="d3-tl-content">
                  <strong>気づきを記録</strong>
                  <div className="d3-tl-desc">音声メモ・写真で「心が動いた瞬間」を残す</div>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="d3-tl-day">
            <div className="d3-tl-left">
              <div className="d3-tl-badge d2">Day 2</div>
              <div className="d3-tl-line" />
            </div>
            <div className="d3-tl-events">
              <div className="d3-tl-event">
                <div className="d3-tl-icon">🐟</div>
                <div className="d3-tl-content">
                  <strong>茂木フィールドワーク</strong>
                  <div className="d3-tl-desc">漁港を歩き、地元の方の生の声を聞く</div>
                </div>
              </div>
              <div className="d3-tl-event">
                <div className="d3-tl-icon">⚡</div>
                <div className="d3-tl-content">
                  <strong>レク1 — v0ハンズオン</strong>
                  <div className="d3-tl-desc">AIと対話してアプリを作る感覚を体験</div>
                </div>
              </div>
              <div className="d3-tl-event">
                <div className="d3-tl-icon">📐</div>
                <div className="d3-tl-content">
                  <strong>レク2 — 事業開発フレームワーク</strong>
                  <div className="d3-tl-desc">ペルソナ・ジャーニー・VPCで価値を設計</div>
                </div>
              </div>
              <div className="d3-tl-event">
                <div className="d3-tl-icon">🚀</div>
                <div className="d3-tl-content">
                  <strong>レク3 — Vibeコーディング実践</strong>
                  <div className="d3-tl-desc">チームの課題に基づきプロダクトを形に</div>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="d3-tl-day">
            <div className="d3-tl-left">
              <div className="d3-tl-badge d3">Day 3</div>
            </div>
            <div className="d3-tl-events">
              <div className="d3-tl-event">
                <div className="d3-tl-icon">🔧</div>
                <div className="d3-tl-content">
                  <strong>プロダクト仕上げ</strong>
                  <div className="d3-tl-desc">最後のブラッシュアップ</div>
                </div>
              </div>
              <div className="d3-tl-event now">
                <div className="d3-tl-icon">🎤</div>
                <div className="d3-tl-content">
                  <strong>振り返り＆共有会</strong>
                  <div className="d3-tl-desc">3日間の成果をみんなで共有 ← 今ここ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-callout">
          <div className="slide-callout-icon">💡</div>
          <div className="slide-callout-text">
            <strong>共有会の準備</strong><br />
            作ったプロダクトのURLを整理しておいてください。スライド不要です。<br />
            プロダクトそのものを見せながら共有しましょう。自己紹介ページにリンクを貼っておくとスムーズです。
          </div>
        </div>
      </FadeSection>

      {/* ===== 3-2: SHARING SESSION ===== */}
      <FadeSection className="slide slide-flow slide-center">
        <div className="slide-tag">11:30 – 12:30</div>
        <div className="slide-title">3日間の振り返り＆共有会</div>
        <div className="slide-subtitle">
          チームで取り組んだ課題、生まれたアウトプット、そしてこれからのこと。<br />
          <em>みんなで共有し、讃え合う時間です。</em>
        </div>

        <div><ConfettiButton /></div>

        <div className="d3-team-grid">
          <TeamCard id="team1-name" label="TEAM 1" defaultName="チーム 1" />
          <TeamCard id="team2-name" label="TEAM 2" defaultName="チーム 2" />
        </div>

        <div className="d3-output-grid">
          <div className="d3-output-card">
            <div className="d3-output-num">❶</div>
            <div className="d3-output-title">設定した課題と解決策</div>
            <div className="d3-output-desc">
              一言で。チームが見つけた課題と<br />それに対するアプローチを共有
            </div>
          </div>
          <div className="d3-output-card">
            <div className="d3-output-num">❷</div>
            <div className="d3-output-title">具体的なアウトプット</div>
            <div className="d3-output-desc">
              楽しく自由に。プロダクトのURL・デモ画面を<br />みんなに見せましょう
            </div>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <div className="slide-tag" style={{ textAlign: 'left' }}>AGENDA</div>
          <div className="slide-card-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
            共有会の流れ
          </div>
        </div>

        <div className="d3-agenda-steps">
          <div className="d3-ag-step s-teal">
            <div className="d3-ag-num">01</div>
            <div className="d3-ag-label">DISCUSS</div>
            <div className="d3-ag-title">チーム議論</div>
            <div className="d3-ag-body">
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span><em>個人の学び・気づき</em>を共有</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>この3日間の振り返り</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>印象に残ったこと</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>今後の取り組みの意見交換</span></div>
            </div>
          </div>
          <div className="d3-ag-step s-coral">
            <div className="d3-ag-num">02</div>
            <div className="d3-ag-label">TEAM SHARE</div>
            <div className="d3-ag-title">チームで全体共有</div>
            <div className="d3-ag-body">
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>チームで考えた<em>ペルソナ</em></span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>取り組んだ<em>課題</em></span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span><em>届けたい価値</em></span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>チーム代表者が発表</span></div>
            </div>
          </div>
          <div className="d3-ag-step s-gold">
            <div className="d3-ag-num">03</div>
            <div className="d3-ag-label">INDIVIDUAL</div>
            <div className="d3-ag-title">個人で発表</div>
            <div className="d3-ag-body">
              一人ずつ、全体の前で発表。<br /><br />
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>この3日間で<em>得たもの</em></span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span><em>感じたこと</em></span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>自分が試しで<em>作ってみたもの</em>の紹介</span></div>
            </div>
          </div>
        </div>

        {/* 録音準備アコーディオン - チェックリストの前に配置 */}
        <div style={{ width: '100%', marginTop: '40px' }}>
          <Accordion title="📱 発表前に確認：録音しておこう" id="recording-accordion">
            <div className="slide-card gold" style={{ marginTop: '0' }}>
              <div className="slide-card-label">WHY</div>
              <div className="slide-card-title">なぜ録音するの？</div>
              <div className="slide-card-body">
                後ほど<em>自己紹介LPに追加</em>するために録音しておいてください。<br /><br />
                発表の内容は、あなたの学びの結晶です。<br />
                V0のプロンプトと一緒に文字起こしを貼り付けるだけで、<br />
                <em>あなただけの成果が一目でわかるLP</em>を作り上げましょう！
              </div>
            </div>

            <div className="slide-card teal" style={{ marginTop: '16px' }}>
              <div className="slide-card-label">HOW</div>
              <div className="slide-card-title">録音の手順</div>
              <div className="slide-card-body">
                <em>1.</em> スマホの録音アプリを起動<br />
                <em>2.</em> 発表中は録音を継続<br />
                <em>3.</em> 終了後、音声ファイルを保存<br />
                <em>4.</em> Appleのボイスメモ等で文字起こし<br />
                <em>5.</em> 文字起こしをv0に渡してLP更新
              </div>
            </div>
          </Accordion>
        </div>

        {/* チェックリスト */}
        <div style={{ width: '100%', marginTop: '32px' }}>
          <div className="slide-tag" style={{ textAlign: 'left', marginBottom: '16px' }}>CHECKLIST</div>
          <TaskCheckbox id="day3-url-ready" label="URLを共有した" />
          <TaskCheckbox id="day3-recording-ready" label="録音アプリを準備した" />
          <TaskCheckbox id="day3-presentation-done" label="チーム発表を完了した" />
          <TaskCheckbox id="day3-individual-share" label="個人の学びを共有した" />
        </div>
      </FadeSection>

      {/* ===== LP HOMEWORK SECTION ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">NEXT STEP</div>
        <div className="slide-title">自己紹介LPに成果を追加しよう</div>
        <div className="slide-subtitle">
          合宿の成果を自己紹介LPに残すことで、<em>この経験が資産</em>になります。
        </div>

        <div className="slide-cols">
          <div className="slide-card teal">
            <div className="slide-card-label">事前宿題で作成</div>
            <div className="slide-card-title">自己紹介LP</div>
            <div className="slide-card-body">
              事前宿題として作成した自己紹介LP。<br />
              今回の合宿での成果を追加して、<em>最終仕上げ</em>をしましょう。
            </div>
          </div>
          <div className="slide-card coral">
            <div className="slide-card-label">今回追加する内容</div>
            <div className="slide-card-title">合宿の成果セクション</div>
            <div className="slide-card-body">
              ・チーム名と取り組んだ課題<br />
              ・作成したプロダクトのURL<br />
              ・学んだこと・気づき<br />
              ・発表の内容（録音から要約）
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== V0 TEMPLATE PROMPT ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">TEMPLATE</div>
        <div className="slide-title">V0用 定型プロンプト</div>
        <div className="slide-subtitle">
          このプロンプトをコピーして、v0に貼り付けてください。<br />
          <em>[ ]内</em>を自分の情報に置き換えるだけでOKです。
        </div>

        <div className="slide-prompt-wrapper" style={{ marginTop: '24px' }}>
          <div className="slide-prompt-box gold-border" style={{ whiteSpace: 'pre-line' }}>
            <div className="slide-prompt-label gold">V0に貼り付けるプロンプト</div>
            {V0_TEMPLATE_PROMPT}
          </div>
          <CopyButton text={V0_TEMPLATE_PROMPT} />
        </div>

        <div className="slide-callout" style={{ marginTop: '32px' }}>
          <div className="slide-callout-icon">💡</div>
          <div className="slide-callout-text">
            <strong>Tips：</strong>プロダクトのURLは文字起こしに含まれないため、<br />
            【作成したプロダクトのURL】の部分に手動で貼り付けてください。<br />
            チーム名や学んだことも追記すると、より良いLPが生成されます。
          </div>
        </div>

        {/* LP Gallery Link */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/gallery" className="camp-gallery-btn" style={{ padding: '18px 40px', fontSize: '18px' }}>
            🐟 みんなの自己紹介 & 成果LP集
          </Link>
          <div style={{ marginTop: '12px', fontSize: '13px', color: 'var(--camp-text-dim)' }}>
            ※ LPのURLが変わった場合は<a href="https://docs.google.com/forms/d/e/1FAIpQLSde7-FCsZabGK3yTT0812OlFJZq6kLFHk0lbxx552WNlJw0tQ/viewform" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--camp-teal)', textDecoration: 'underline' }}>最初のフォーム</a>から修正をお願いします
          </div>
        </div>
      </FadeSection>

      {/* ===== 3-4: CLOSING ===== */}
      <FadeSection className="d3-closing">
        <div className="slide-tag">CLOSING</div>
        <div className="d3-closing-ty">ありがとうございました</div>
        <div className="d3-closing-q">3日間のVIBEコーディングキャンプ in 長崎、いかがでしたか？</div>

        <div className="d3-closing-box">
          <div className="d3-closing-hl">
            観光で終わらせない。<br />
            再発見し、再発展させる。
          </div>
          <div className="d3-closing-body">
            この旅の目的は、単純に長崎を観光することではありませんでした。<br /><br />
            日本が直面する<em>少子高齢化</em>、地方の美しい産業や景色が失われていくリスク。<br />
            それに対して、私たちそれぞれが持っている<em>アセット — 知識、技術、経験、ネットワーク</em>を使って、<br />
            何ができるかを考え、実際に手を動かす3日間でした。<br /><br />
            長崎の水産業、歴史、文化、人の温かさ。<br />
            フィールドワークや対話を通じて、その<em>価値を再発見</em>し、<br />
            Vibeコーディングという新しい手段で<em>再発展</em>の可能性を形にしました。<br /><br />
            これからも、単純に観光するのではなく、<br />
            <em>地域貢献・地域活性化</em>を意識しながら、<br />
            みんなでこの取り組みを続けていきましょう。
          </div>
        </div>

        <div className="d3-dao-badge">🐟 おさかなDAOで引き続きつながりましょう</div>

        <div className="d3-next-card">
          <div className="slide-card-label">NEXT STEP</div>
          <div className="slide-card-title">これからも続けていくこと</div>
          <div className="slide-card-body">
            ・おさかなDAOで、今回検討した内容の議論を継続しましょう<br />
            ・作ったプロダクトのブラッシュアップ、新しいアイデアの実験<br />
            ・次の課題、次の地域、次のチャレンジへ<br /><br />
            <em>この3日間で生まれたつながりと学びを、新しい課題解決につなげていきましょう。</em>
          </div>
        </div>

        {/* 記念撮影 */}
        <div className="d3-photo" style={{ marginTop: '48px' }}>
          <div className="d3-sparkle" style={{ top: '12%', left: '8%', animationDelay: '0s' }} />
          <div className="d3-sparkle" style={{ top: '22%', left: '88%', animationDelay: '1.1s' }} />
          <div className="d3-sparkle" style={{ top: '65%', left: '15%', animationDelay: '2.3s' }} />
          <div className="d3-sparkle" style={{ top: '35%', left: '78%', animationDelay: '0.7s' }} />
          <div className="d3-sparkle" style={{ top: '75%', left: '55%', animationDelay: '1.8s' }} />
          <div className="d3-sparkle" style={{ top: '18%', left: '42%', animationDelay: '3.1s' }} />
          <div className="d3-sparkle" style={{ top: '82%', left: '28%', animationDelay: '2.5s' }} />
          <div className="d3-sparkle" style={{ top: '48%', left: '92%', animationDelay: '0.3s' }} />
          <div className="d3-sparkle" style={{ top: '55%', left: '5%', animationDelay: '1.5s' }} />
          <div className="d3-sparkle" style={{ top: '8%', left: '65%', animationDelay: '3.6s' }} />
          <div className="d3-photo-content">
            <div className="d3-photo-icon" style={{ animation: 'd3-float 4s ease-in-out infinite' }}>📸</div>
            <div className="d3-photo-title">記念撮影</div>
            <div className="d3-photo-sub">
              3日間を一緒に過ごした仲間と。<br />
              最高の一枚を残しましょう。
            </div>
          </div>
        </div>

        <CompletionButton dayKey="day3-complete" imageSrc="/DAY3.png" />
      </FadeSection>

      {/* ===== FOOTER ===== */}
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
