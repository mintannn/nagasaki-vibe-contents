import { DayNav } from '@/components/day-nav'
import { FadeSection } from '@/components/fade-section'
import { ConfettiCanvas, ConfettiButton, FinaleButton, TeamCard } from '@/components/day3-interactive'

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

        <div className="slide-card gold">
          <div className="slide-card-label">TODAY&apos;S SCHEDULE</div>
          <div className="slide-card-title">本日のスケジュール</div>
          <div className="slide-card-body">
            <em>〜 11:00</em> — プロダクト最終調整・ブラッシュアップ<br />
            <em>11:00 – 11:30</em> — 共有会の準備（URLの整理など）<br />
            <em>11:30 – 12:30</em> — 🎤 3日間の振り返り＆共有会<br />
            <em>12:30 –</em> — 記念撮影・解散
          </div>
        </div>

        {/* 3-day timeline */}
        <div className="d3-timeline">
          <div className="slide-tag">OUR JOURNEY</div>
          <div className="slide-title" style={{ fontSize: '28px', marginBottom: '36px' }}>3日間の軌跡</div>

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
          <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--camp-cream)', marginBottom: '8px', textAlign: 'left' }}>
            共有会の流れ
          </div>
        </div>

        <div className="d3-agenda-steps">
          <div className="d3-ag-step s-teal">
            <div className="d3-ag-num">01</div>
            <div className="d3-ag-label">SHARE</div>
            <div className="d3-ag-title">チームごとの共有</div>
            <div className="d3-ag-body">
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>❶ 課題と解決策を一言で</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>❷ プロダクトをURL/デモで紹介</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>各チーム後に<em>質疑応答</em></span></div>
            </div>
          </div>
          <div className="d3-ag-step s-coral">
            <div className="d3-ag-num">02</div>
            <div className="d3-ag-label">DISCUSS</div>
            <div className="d3-ag-title">チーム議論</div>
            <div className="d3-ag-body">
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span><em>個人の学び・気づき</em>を共有</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>社会課題と価値の再発見</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>Vibeコーディングの気づき</span></div>
              <div className="d3-ag-item"><span className="d3-ag-bullet">▸</span><span>今後の取り組みと意見交換</span></div>
            </div>
          </div>
          <div className="d3-ag-step s-gold">
            <div className="d3-ag-num">03</div>
            <div className="d3-ag-label">WRAP UP</div>
            <div className="d3-ag-title">全体で発表</div>
            <div className="d3-ag-body">
              一人ひとり、<em>一言ずつ</em>。<br /><br />
              この3日間で得たもの、<br />
              感じたことを全体で共有しましょう。
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== 3-3: PHOTO ===== */}
      <div className="d3-photo">
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
          <div className="slide-card-title" style={{ fontSize: '18px' }}>これからも続けていくこと</div>
          <div className="slide-card-body" style={{ fontSize: '14px', lineHeight: 1.9 }}>
            ・おさかなDAOで、今回検討した内容の議論を継続しましょう<br />
            ・作ったプロダクトのブラッシュアップ、新しいアイデアの実験<br />
            ・次の課題、次の地域、次のチャレンジへ<br /><br />
            <em>この3日間で生まれたつながりと学びを、新しい課題解決につなげていきましょう。</em>
          </div>
        </div>

        <FinaleButton />
      </FadeSection>

      {/* ===== FOOTER ===== */}
      <footer className="slide-footer">
        <div className="slide-footer-left">VIBE CODING CAMP in NAGASAKI</div>
        <div className="slide-footer-right">DAY 3 — Closing</div>
      </footer>
    </div>
  )
}
