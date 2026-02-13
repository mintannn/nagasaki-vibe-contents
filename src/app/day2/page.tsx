'use client'

import { DayNav } from '@/components/day-nav'
import { FadeSection } from '@/components/fade-section'
import { CopyButton } from '@/components/copy-button'
import { Accordion } from '@/components/accordion'
import { TaskCheckbox } from '@/components/task-checkbox'
import { CompletionButton } from '@/components/completion-button'

// Helper component for copyable prompt boxes
function CopyablePrompt({ label, labelClass, text, boxClass }: { label: string; labelClass?: string; text: string; boxClass?: string }) {
  return (
    <div className="slide-prompt-wrapper">
      <div className={`slide-prompt-box ${boxClass || ''}`}>
        <div className={`slide-prompt-label ${labelClass || ''}`}>{label}</div>
        <div style={{ whiteSpace: 'pre-line' }}>{text}</div>
      </div>
      <CopyButton text={text} />
    </div>
  )
}

export default function Day2Page() {
  return (
    <div className="desktop-page">
      <DayNav current={2} />

      {/* ===== HERO ===== */}
      <FadeSection className="slide">
        <div className="slide-tag">DAY 2 — 2026.2.14 FRI</div>
        <div className="slide-title">フィールドワーク<br />× 開発 × 交流</div>
        <div className="slide-subtitle">
          朝の漁港から夜のBBQまで。<em>見て、学んで、作って、語る</em>1日。
        </div>

        <div className="slide-stack">
          <div className="slide-card teal">
            <div className="slide-card-label">TODAY&apos;S FLOW</div>
            <div className="slide-card-title">1日の流れ</div>
            <div className="slide-card-body" style={{ lineHeight: 2.2 }}>
              <strong>9:00</strong> — フィールドワーク（茂木漁港）<br />
              <strong>10:30</strong> — レクチャー1: v0 on PC ハンズオン<br />
              <strong>12:00</strong> — 昼食<br />
              <strong>13:00</strong> — レクチャー2: 事業開発 × チーム開発<br />
              <strong>18:20</strong> — BBQ<br />
              <strong>20:00</strong> — 夜セッション（任意）
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== FIELD WORK — 9:00〜 ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">FIELD WORK — 9:00</div>
        <div className="slide-title">茂木地区<br />フィールドワーク</div>
        <div className="slide-subtitle">
          漁港を訪問し、茂木の<em>気づき・魅力・課題</em>を探索しましょう。<br />
          朝食もこの時間帯にとります。
        </div>

        <div className="slide-stack">
          <div className="slide-card coral">
            <div className="slide-card-label">MISSION</div>
            <div className="slide-card-title">見て、聞いて、感じて、記録する</div>
            <div className="slide-card-body">
              茂木漁港を歩きながら、五感で感じたことを記録してください。<br /><br />
              <em>地元の方との会話</em>、漁港の風景、朝の空気 ——<br />
              すべてが午後のアプリ開発の素材になります。<br /><br />
              DAY1の観光で感じたこととの違いや共通点にも注目してみましょう。
            </div>
          </div>

          <div className="slide-card teal">
            <div className="slide-card-label">RECORDING</div>
            <div className="slide-card-title">記録方法</div>
            <div className="slide-card-body">
              DAY1と同じ方法で記録しましょう。<br /><br />
              <span style={{ fontSize: '18px' }}>🎙</span> <em>音声メモ</em>（推奨）<br />
              <span style={{ fontSize: '18px' }}>📷</span> 写真<br />
              <span style={{ fontSize: '18px' }}>📝</span> テキストメモ<br /><br />
              気づいたことは、どんな小さなことでも記録しておくと<br />
              午後のプロンプトの種になります。
            </div>
          </div>

          <div className="slide-card gold">
            <div className="slide-card-label">COMMUNICATION</div>
            <div className="slide-card-title">移動中の意見交換はボイチャで</div>
            <div className="slide-card-body">
              フィールドワーク中の移動時間も大切な議論タイムです。<br />
              チーム間の意見交換は<em>Discordのボイスチャット</em>を活用してください。<br /><br />
              歩きながら感じたことをリアルタイムで共有すると、<br />
              チームの課題意識がどんどん揃っていきます。
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://nagasaki-vibe-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="vibe-app-btn"
            style={{ fontSize: '17px', padding: '18px 40px' }}
          >
            <span className="vibe-app-btn-icon">✨</span>
            <span className="vibe-app-btn-text">価値を考えるアプリ</span>
            <span className="vibe-app-btn-arrow">→</span>
          </a>
          <div style={{ fontSize: '13px', color: 'var(--camp-text-dim)', marginTop: '12px' }}>
            気づき・魅力・課題をここから記録してください
          </div>
        </div>
      </FadeSection>

      {/* ===== LECTURE 1: v0 on PC ===== */}
      <FadeSection className="slide">
        <div className="slide-tag">LECTURE 1 — 10:30</div>
        <div className="slide-title">Vibeコーディング<br />ハンズオン</div>
        <div className="slide-subtitle">
          フィールドワークから戻って、宿泊施設でのレクチャー。<br />
          <em>v0 on PC</em> を使って、AIと会話しながらアプリを作ってみよう。
        </div>

        <div className="slide-stack">
          <div className="slide-card teal">
            <div className="slide-card-label">TODAY&apos;S THEME</div>
            <div className="slide-card-title">旅 × 音声 × Vibeコーディング</div>
            <div className="slide-card-body">
              昨日の観光で感じたこと、今朝のフィールドワークで見たこと。<br />
              それを<em>プロンプトの種</em>にして、アプリを作ります。
            </div>
          </div>
          <div className="slide-card gold">
            <div className="slide-card-label">TOOL</div>
            <div className="slide-card-title">v0 by Vercel — PC版</div>
            <div className="slide-card-body">
              DAY1ではスマホで体験しましたが、今日は<em>PCでより本格的に</em>取り組みます。<br />
              画面が広い分、複雑なUIも作りやすく、コードの確認もスムーズです。<br /><br />
              <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="slide-link teal">v0.dev →</a>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== SLIDE 2: DEMO APP CONCEPT ===== */}
      <FadeSection className="slide">
        <div className="slide-tag">LIVE DEMO</div>
        <div className="slide-title">茂木おさかなガイド</div>
        <div className="slide-subtitle">みんなで一緒に手を動かしながら、Vibeコーディングを体感しましょう。</div>

        <div className="slide-stack">
          <div className="slide-theme-box">
            <div className="slide-theme-label">DEMO APP CONCEPT</div>
            <div className="slide-theme-title">茂木で獲れる魚の旬と魅力を<br />伝えるガイドアプリ</div>
            <div className="slide-theme-desc">
              今朝のフィールドワークで見た<em>茂木の漁港</em>。<br />
              250種以上の魚が水揚げされる長崎の海。<br /><br />
              「どの季節にどんな魚が美味しいの？」<br />
              「この魚はどうやって食べるの？」<br /><br />
              そんな疑問に答えるアプリを、<em>AIとの会話だけ</em>で作ります。
            </div>
          </div>

          <div>
            <div className="slide-features-label">FEATURES TO BUILD</div>

            <div className="slide-feature">
              <div className="slide-feature-icon">📅</div>
              <div>
                <div className="slide-feature-title">月別の旬カレンダー</div>
                <div className="slide-feature-desc">月を選ぶと、その時期に美味しい魚の一覧が表示される</div>
              </div>
            </div>
            <div className="slide-feature">
              <div className="slide-feature-icon">🐟</div>
              <div>
                <div className="slide-feature-title">魚の詳細カード</div>
                <div className="slide-feature-desc">魚をタップすると、食べ方・豆知識・長崎での呼び名が表示される</div>
              </div>
            </div>
            <div className="slide-feature">
              <div className="slide-feature-icon">💬</div>
              <div>
                <div className="slide-feature-title">AIチャット（API連携）<span style={{ fontSize: '10px', color: 'var(--camp-coral)', marginLeft: '4px' }}>オプション</span></div>
                <div className="slide-feature-desc">「この魚について教えて」とAIに質問できるチャット機能</div>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== SLIDE 3: HANDS-ON STEPS (full-width rows) ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">HANDS-ON — 3 STEPS</div>
        <div className="slide-title">一緒にやってみよう</div>
        <div className="slide-subtitle">ライブデモを見ながら、同じ手順を自分のPCで試してください。</div>

        {/* Step 01 */}
        <div className="slide-step-row">
          <div className="slide-step-row-info">
            <div className="slide-step-num">01</div>
            <div>
              <div className="slide-step-title">v0にログイン → 旬カレンダーを作る</div>
              <div className="slide-step-desc">
                <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="slide-link teal">v0.dev</a> にログインし、最初のプロンプトを入力。<br />
                月別に旬の魚を表示するUIを生成します。
              </div>
            </div>
          </div>
          <CopyablePrompt
            label="PROMPT EXAMPLE"
            text={`長崎県茂木で獲れる魚の旬カレンダーアプリを作ってください。
1月〜12月をタブで切り替えると、その月に旬の魚がカード形式で一覧表示されます。
各カードには魚の名前、長崎での呼び名、一言コメントを表示してください。`}
          />
        </div>

        <div className="slide-step-divider">↓</div>

        {/* Step 02 */}
        <div className="slide-step-row">
          <div className="slide-step-row-info">
            <div className="slide-step-num">02</div>
            <div>
              <div className="slide-step-title">魚の詳細カードを追加する</div>
              <div className="slide-step-desc">
                生成されたUIに対して、追加の指示を重ねていきます。<br />
                <em className="gold">→ 「会話を重ねる」ことでアプリが育つ体験</em>
              </div>
            </div>
          </div>
          <CopyablePrompt
            label="PROMPT EXAMPLE"
            text={`魚のカードをクリックしたら、詳細画面が表示されるようにしてください。
詳細画面には、おすすめの食べ方、豆知識、旬の時期を表示してください。
デザインはシンプルで見やすくしてください。`}
          />
        </div>

        <div className="slide-step-divider">↓</div>

        {/* Step 03 */}
        <div className="slide-step-row">
          <div className="slide-step-row-info">
            <div className="slide-step-num">03</div>
            <div>
              <div className="slide-step-title">AIチャット機能を組み込む（API連携）<span style={{ fontSize: '12px', color: 'var(--camp-coral)', marginLeft: '8px', fontWeight: 500 }}>※ オプション</span></div>
              <div className="slide-step-desc">
                応用編として挑戦したい方向け。うまくいかない場合もあるので、<br />
                余裕がある方だけ試してみてください。
              </div>
            </div>
          </div>
          <CopyablePrompt
            label="PROMPT EXAMPLE"
            text={`詳細画面の下部に「この魚についてAIに聞く」チャット機能を追加してください。
ユーザーが自由に質問を入力すると、OpenAIのAPIを活用してAIが回答を返すようにしてください。
APIキーはこちらで提供するので、そちらを活用してください。`}
          />
        </div>
      </FadeSection>

      {/* ===== SLIDE 3.5: TIPS ===== */}
      <FadeSection className="slide slide-compact">
        <div className="slide-card coral">
          <div className="slide-card-label">POINT</div>
          <div className="slide-card-title">プロンプトのコツ</div>
          <div className="slide-card-body">
            <em>具体的に伝える</em>ほど、良いものが生まれます。<br /><br />
            <span className="text-coral">✕</span> 「いい感じのアプリ作って」<br /><br />
            <span className="text-teal">◯</span> 「長崎の魚の旬を検索できるアプリ。月を選ぶと、その時期に美味しい魚のカード一覧が表示される」<br /><br />
            <div className="slide-card-divider" />
            <em>会話を重ねる</em>ことも大切。<br /><br />
            一度で完璧にならなくても、<br />
            「ここをこう変えて」「こういう機能を足して」<br />
            と追加の指示を出していけばOK。
          </div>
        </div>
      </FadeSection>

      {/* ===== APPENDIX: AIとの壁打ち方法 ===== */}
      <FadeSection className="slide slide-compact">
        <Accordion title="📖 参考：AIとの壁打ち方法" id="appendix-ai-kabeuchi">
          <div style={{ width: '100%', marginTop: '8px' }}>
            <iframe
              src="/uni.pdf#navpanes=0&scrollbar=0"
              width="100%"
              height="600"
              style={{
                border: 'none',
                borderRadius: '8px',
                background: 'white',
              }}
              title="AIとの壁打ち方法"
            />
          </div>
        </Accordion>

        <Accordion title="🎯 AI壁打ちで解像度を上げる" id="appendix-ai-resolution">
          <div style={{ width: '100%', marginTop: '8px' }}>
            <img
              src="/mvp.webp"
              alt="AI壁打ちで解像度を上げる"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </div>
        </Accordion>
      </FadeSection>

      {/* ===== SLIDE 4: GOAL & NEXT ===== */}
      <FadeSection className="slide">
        <div className="slide-tag">DEFINITION OF DONE</div>
        <div className="slide-title">ゴール</div>
        <div className="slide-subtitle">レク1が終わるまでに、以下を体験しましょう。</div>

        <div className="slide-stack">
          <div>
            <TaskCheckbox id="day2-v0-login" label="v0にログインし、プロンプトを入力できた" />
            <TaskCheckbox id="day2-v0-ui" label="AIが生成したUIを確認し、修正の指示を出せた" />
            <TaskCheckbox id="day2-v0-api" label="（オプション）API連携（チャット機能）を試せた" />

            <div className="slide-callout" style={{ marginTop: '32px' }}>
              <div className="slide-callout-icon">🎯</div>
              <div className="slide-callout-text">
                全部できなくても大丈夫。<br />
                <strong>「AIと対話してアプリを作る」感覚を掴む</strong>ことが最も大切です。
              </div>
            </div>
          </div>

          <div className="slide-card teal">
            <div className="slide-card-label">NEXT — AFTER LUNCH</div>
            <div className="slide-card-title">午後のレク2でやること</div>
            <div className="slide-card-body" style={{ lineHeight: 2 }}>
              午前はみんなで同じテーマで練習しました。<br /><br />
              午後からは<em>自分たちで課題とターゲットを設定</em>し、<br />
              事業開発フレームワークで整理したうえで、<br />
              チームでのVibeコーディングに入ります。<br /><br />
              <span className="slide-card-sub-note">
                ペルソナ → VPC → マイクロジャーニー<br />
                → チーム議論 → Vibeコーディング
              </span>
            </div>
          </div>

          <div className="slide-timeline">
            <div className="slide-timeline-label">TIMELINE</div>
            <div className="slide-progress-bar">
              <div className="slide-progress-seg done" />
              <div className="slide-progress-seg done" />
              <div className="slide-progress-seg current" />
              <div className="slide-progress-seg" />
              <div className="slide-progress-seg" />
              <div className="slide-progress-seg" />
            </div>
            <div className="slide-progress-labels">
              <span>DAY1 観光</span>
              <span>FW</span>
              <span className="text-coral">レク1 ←今</span>
              <span>レク2</span>
              <span>BBQ</span>
              <span>DAY3 発表</span>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== SLIDE 5: LEVEL UP (vertical stack) ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">LEVEL UP</div>
        <div className="slide-title">より精度を上げるには？</div>
        <div className="slide-subtitle">基本が掴めたら、次のステップへ。<em>インプットの質</em>がアウトプットの質を決めます。</div>

        {/* Tip cards — vertical */}
        <div className="slide-tips-grid">
          <div className="slide-tip-card">
            <div className="slide-tip-icon">🔍</div>
            <div className="slide-tip-title">リサーチしてから指示を出す</div>
            <div className="slide-tip-desc">
              「なんとなく」と「調べてから」では結果が大違い。<br />
              茂木で獲れる魚の種類・旬・地元の呼び名を調べてからプロンプトに含めると、精度が格段に上がる。
            </div>
          </div>
          <div className="slide-tip-card">
            <div className="slide-tip-icon">📷</div>
            <div className="slide-tip-title">写真を撮って挿入する</div>
            <div className="slide-tip-desc">
              フィールドワークで撮った写真をアプリに組み込むと、オリジナリティと説得力が生まれる。<br />
              v0に画像をアップロードして「この写真を使って」と指示するだけ。
            </div>
          </div>
          <div className="slide-tip-card">
            <div className="slide-tip-icon">✏️</div>
            <div className="slide-tip-title">デザインを洗練させる</div>
            <div className="slide-tip-desc">
              最初のデザインで満足しなくてOK。<br />
              追加の指示で磨き上げていくのがVibeコーディングの醍醐味。
            </div>
          </div>
          <div className="slide-tip-card">
            <div className="slide-tip-icon">🗣️</div>
            <div className="slide-tip-title">地元の人の声を入れる</div>
            <div className="slide-tip-desc">
              「漁師さんがこう言っていた」「地元の方はこう感じている」<br />
              ――その一次情報がアプリに深みを与える。
            </div>
          </div>
          <div className="slide-tip-card">
            <div className="slide-tip-icon">💬</div>
            <div className="slide-tip-title">AIと壁打ちする</div>
            <div className="slide-tip-desc">
              アイデアが漠然としていてもOK。AIに相談しながら考えを整理すれば、こだわりが自然と形になる。<br />
              完成形が見えなくても、会話を重ねれば見えてくる。
            </div>
          </div>
        </div>

        {/* BEFORE / AFTER — vertical (BEFORE on top, AFTER below) */}
        <div className="slide-compare">
          <div className="slide-compare-side">
            <div className="slide-prompt-box">
              <div className="slide-prompt-label">BEFORE</div>
              長崎の魚のアプリを作って
            </div>
          </div>
          <div className="slide-compare-arrow">↓</div>
          <div className="slide-compare-side">
            <div className="slide-prompt-box gold-border">
              <div className="slide-prompt-label gold">AFTER</div>
              茂木漁港で2月に水揚げされる主な魚はブリ、ヒラメ、アンコウです。<br />
              地元では「ブリ」を「ワカナ」とも呼びます。<br />
              この情報をもとに、旬カレンダーアプリを作ってください。
            </div>
          </div>
        </div>

        {/* Voice highlight — full width */}
        <div className="slide-voice-box">
          <div className="slide-voice-label">旅 × 音声 × VIBE CODING</div>
          <div className="slide-voice-title">
            あなたの声が、最強のインプットになる。
          </div>
          <div className="slide-voice-body">
            歩きながら感じたこと、地元の方と話して思ったこと。<br />
            それを<em>音声メモで録っておく</em>だけで、
            他の誰にも作れない<em>あなただけのプロダクト</em>の素材になります。<br /><br />
            <span className="slide-voice-highlight">
              ネットの情報ではなく、自分の体験から生まれたインプットだから、
              できあがるプロダクトにもオリジナリティが宿る。
            </span>
          </div>
        </div>
      </FadeSection>

      {/* ===== APPENDIX: RESEARCH WITH PERPLEXITY ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">APPENDIX</div>
        <div className="slide-title">Perplexityでリサーチ</div>
        <div className="slide-subtitle">
          AI検索ツールを使えば、調べものが圧倒的に速くなります。
        </div>

        <Accordion title="🔍 Perplexity AI の使い方" id="appendix-perplexity">
          <div className="slide-card teal" style={{ marginTop: '0' }}>
            <div className="slide-card-label">TOOL</div>
            <div className="slide-card-title">Perplexity AI とは？</div>
            <div className="slide-card-body">
              AIが情報を要約してくれる検索エンジン。<br />
              Google検索のように使えて、出典付きで回答が返ってきます。<br /><br />
              <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer" className="slide-link teal">perplexity.ai →</a>
            </div>
          </div>

          <div className="slide-howto" style={{ marginTop: '24px' }}>
            <div className="slide-features-label">HOW TO USE</div>

            <div className="slide-step">
              <div className="slide-step-num">01</div>
              <div className="slide-step-content">
                <div className="slide-step-title">Perplexityにアクセス</div>
                <div className="slide-step-desc">
                  <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer" className="slide-link teal">perplexity.ai</a> にアクセス。<br />
                  アカウント登録なしでも使えます。
                </div>
              </div>
            </div>

            <div className="slide-step">
              <div className="slide-step-num">02</div>
              <div className="slide-step-content">
                <div className="slide-step-title">日本語で質問する</div>
                <div className="slide-step-desc">
                  検索バーに、調べたいことをそのまま日本語で入力。<br />
                  キーワードではなく、文章で聞くのがコツです。
                </div>
              </div>
            </div>

            <div className="slide-step">
              <div className="slide-step-num">03</div>
              <div className="slide-step-content">
                <div className="slide-step-title">回答をプロンプトに活用</div>
                <div className="slide-step-desc">
                  返ってきた情報をコピーして、v0のプロンプトに貼り付ける。<br />
                  <em className="gold">裏付けのあるデータ</em>が入ると、AIの生成精度が上がります。
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <div className="slide-features-label">EXAMPLE</div>

            <CopyablePrompt
              label="PERPLEXITY に聞く"
              text={`長崎県茂木地区で水揚げされる魚の種類を教えてください。
特に2月に旬を迎える魚と、地元での呼び名があれば知りたいです。`}
            />

            <div className="slide-response-box">
              <div className="slide-response-label">PERPLEXITY の回答（例）</div>
              <div className="slide-response-body">
                茂木漁港では年間を通じて多様な魚が水揚げされます。2月の主な旬の魚は：<br />
                ・ブリ（地元名：ワカナ）- 脂がのった冬の味覚<br />
                ・ヒラメ - 白身の最高峰、刺身が絶品<br />
                ・アンコウ - 鍋料理で人気<br />
                ・イカ（地元名：ミズイカ）- 透明で甘い<br />
                <span className="slide-response-source">出典: 長崎市水産振興課...</span>
              </div>
            </div>

            <div className="slide-arrow-down">↓ この情報をそのままv0に</div>

            <CopyablePrompt
              label="V0 に指示する"
              labelClass="gold"
              boxClass="gold-border"
              text={`以下の情報をもとに、茂木の旬カレンダーアプリを作ってください。

【2月の旬の魚】
・ブリ（地元名：ワカナ）- 脂がのった冬の味覚
・ヒラメ - 白身の最高峰、刺身が絶品
・アンコウ - 鍋料理で人気
・イカ（地元名：ミズイカ）- 透明で甘い`}
            />

            <div className="slide-callout" style={{ marginTop: '24px' }}>
              <div className="slide-callout-icon">💡</div>
              <div className="slide-callout-text">
                <strong>リサーチ → プロンプト</strong> の流れを覚えると、<br />
                Vibeコーディングの精度が一気に上がります。<br />
                どんどん活用しましょう。
              </div>
            </div>
          </div>
        </Accordion>
      </FadeSection>

      {/* ===== LUNCH — 12:00 ===== */}
      <FadeSection className="slide slide-flow" style={{ minHeight: 'auto', paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="lunch-badge">
            <span className="lunch-badge-icon">🍴</span>
            <span className="lunch-badge-text">LUNCH — 12:00</span>
          </div>
          <div className="slide-title" style={{ fontSize: 'clamp(28px, 5vw, 36px)', marginTop: '16px' }}>昼食</div>
          <div className="slide-subtitle" style={{ marginBottom: 0 }}>
            午前のレクチャーおつかれさまでした。<br />
            しっかり食べて、午後のチーム開発に備えましょう。
          </div>
        </div>
      </FadeSection>

      {/* ===== LECTURE 2: VALUE DESIGN ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">LECTURE 2 — 13:00</div>
        <div className="slide-title">作る前に、設計する。</div>
        <div className="slide-subtitle">
          いいプロダクトは、いい技術ではなく<em>いい価値設計</em>から生まれる。
        </div>

        <div>
          <div className="slide-quote-box">
            <div className="slide-quote-text">
              &ldquo;顧客が本当に欲しいものを学ばなければならない。顧客が言うことでも、我々が欲しいと思うものでもなく。&rdquo;
            </div>
            <div className="slide-quote-author">— Eric Ries『The Lean Startup』著者</div>
          </div>
          <div className="slide-quote-box">
            <div className="slide-quote-text">
              &ldquo;事実はビルの中にはない。外に出ろ。&rdquo;
            </div>
            <div className="slide-quote-author">— Steve Blank, Customer Development提唱者</div>
          </div>
          <div className="slide-quote-box">
            <div className="slide-quote-text">
              &ldquo;劣ったプロダクトでも、優れた価値提案とビジネスモデルがあれば勝てる。&rdquo;
            </div>
            <div className="slide-quote-author">— Alexander Osterwalder, Value Proposition Canvas考案者</div>
          </div>

          <div className="slide-card coral" style={{ marginTop: '32px' }}>
            <div className="slide-card-label">KEY MESSAGE</div>
            <div className="slide-card-title">
              作れることは午前に体験しました。<br />
              午後は「何を作るべきか」を考えます。
            </div>
            <div className="slide-card-body">
              Vibeコーディングで素早くプロダクトが作れる時代です。<br />
              だからこそ、<em>誰のために、何を解決するのか</em>を先に設計することが決定的に重要になります。<br /><br />
              これはスタートアップの世界で確立された方法論です。<br />
              Lean Startup、Customer Development、Value Proposition Design ――<br />
              世界中の起業家やCoca-Cola、MasterCard、LEGOなどの大企業でも使われています。
            </div>
          </div>

          <div className="slide-callout" style={{ marginTop: '24px' }}>
            <div className="slide-callout-icon">📚</div>
            <div className="slide-callout-text">
              <strong>今日使うフレームワークの出典</strong><br />
              Value Proposition Canvas — Alexander Osterwalder &amp; Yves Pigneur（Thinkers50 世界トップ5）<br />
              Lean Startup — Eric Ries / Steve Blank（Harvard Business School採用）<br />
              Customer Development — Steve Blank（Stanford大学で教鞭）
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== 3 FRAMEWORKS ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">FRAMEWORKS</div>
        <div className="slide-title">3つのフレームワーク</div>
        <div className="slide-subtitle">
          軽量だけど本質をつく。今回のワークショップで使う3つのツールを紹介します。
        </div>

        <div className="slide-cols-3">
          <div className="slide-card teal">
            <div className="slide-card-label">STEP 1</div>
            <div className="slide-card-title">ターゲットペルソナ</div>
            <div className="slide-card-body">
              <em>誰のためのプロダクトか？</em><br />
              ターゲットとなる人物像を具体的に定めます。
            </div>
            <div className="slide-img-placeholder">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="24" r="16" stroke="#2D9B8E" strokeWidth="1.5" fill="none" />
                <path d="M36 68c0-13.3 10.7-24 24-24s24 10.7 24 24" stroke="#2D9B8E" strokeWidth="1.5" fill="none" />
                <line x1="88" y1="20" x2="112" y2="20" stroke="#8B7338" strokeWidth="1" />
                <line x1="88" y1="28" x2="106" y2="28" stroke="#8B7338" strokeWidth="1" />
                <line x1="88" y1="36" x2="110" y2="36" stroke="#8B7338" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="slide-card coral">
            <div className="slide-card-label">STEP 2</div>
            <div className="slide-card-title">VPC</div>
            <div className="slide-card-body">
              <em>顧客の課題と提供価値を構造化する。</em><br />
              ターゲットの「やりたいこと」「痛み」「嬉しさ」と、プロダクトの「機能」「痛みの解消」「嬉しさの創出」をマッピング。
            </div>
            <div className="slide-img-placeholder">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="48" height="64" rx="2" stroke="#D4553E" strokeWidth="1.5" fill="none" />
                <circle cx="88" cy="40" r="30" stroke="#D4553E" strokeWidth="1.5" fill="none" />
                <line x1="12" y1="24" x2="44" y2="24" stroke="#8B7338" strokeWidth="1" />
                <line x1="12" y1="36" x2="40" y2="36" stroke="#8B7338" strokeWidth="1" />
                <line x1="12" y1="48" x2="44" y2="48" stroke="#8B7338" strokeWidth="1" />
                <line x1="72" y1="32" x2="104" y2="32" stroke="#8B7338" strokeWidth="1" />
                <line x1="72" y1="44" x2="100" y2="44" stroke="#8B7338" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="slide-card gold">
            <div className="slide-card-label">STEP 3</div>
            <div className="slide-card-title">マイクロジャーニー</div>
            <div className="slide-card-body">
              <em>ユーザーの体験を時系列で設計する。</em><br />
              プロダクトに出会い、使い、価値を感じるまでの流れを描きます。画面設計の土台に。
            </div>
            <div className="slide-img-placeholder">
              <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="40" r="6" stroke="#C8A44E" strokeWidth="1.5" fill="none" />
                <circle cx="48" cy="40" r="6" stroke="#C8A44E" strokeWidth="1.5" fill="none" />
                <circle cx="80" cy="40" r="6" stroke="#C8A44E" strokeWidth="1.5" fill="none" />
                <circle cx="108" cy="40" r="6" stroke="#C8A44E" strokeWidth="1.5" fill="none" />
                <line x1="22" y1="40" x2="42" y2="40" stroke="#8B7338" strokeWidth="1" />
                <line x1="54" y1="40" x2="74" y2="40" stroke="#8B7338" strokeWidth="1" />
                <line x1="86" y1="40" x2="102" y2="40" stroke="#8B7338" strokeWidth="1" />
                <path d="M10 56h12v8H10z M42 56h12v8H42z M74 56h12v8H74z M102 56h12v8H102z" stroke="#8B7338" strokeWidth="0.75" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        <div className="slide-col-insight">
          <div className="slide-col-insight-title">この3つで何ができるか</div>
          <div className="slide-card-body">
            ペルソナで<em>「誰のために」</em>を決め、<br />
            VPCで<em>「何を提供するか」</em>を整理し、<br />
            マイクロジャーニーで<em>「どう届けるか」</em>を設計する。<br /><br />
            この3ステップを経てからVibeコーディングに入ると、<br />
            プロダクトの方向性がブレず、圧倒的に精度の高いプロンプトが書けます。
          </div>
        </div>

        <div className="slide-timeline" style={{ marginTop: '40px' }}>
          <div className="slide-timeline-label">TIMELINE</div>
          <div className="slide-progress-bar">
            <div className="slide-progress-seg done" />
            <div className="slide-progress-seg done" />
            <div className="slide-progress-seg done" />
            <div className="slide-progress-seg current" />
            <div className="slide-progress-seg" />
            <div className="slide-progress-seg" />
          </div>
          <div className="slide-progress-labels">
            <span>DAY1 観光</span>
            <span>FW</span>
            <span>レク1</span>
            <span className="text-coral">レク2 ←今</span>
            <span>BBQ</span>
            <span>DAY3 発表</span>
          </div>
        </div>
      </FadeSection>

      {/* ===== AFTERNOON FLOW ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">PROCESS FLOW</div>
        <div className="slide-title">午後の流れ</div>
        <div className="slide-subtitle">チームで議論し、フレームワークを埋め、Vibeコーディングに入りましょう。</div>

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '14px', color: 'var(--camp-text-dim)', marginBottom: '12px' }}>
            フレームワークの記入・チーム議論にはこのアプリを活用してください
          </div>
          <a
            href="https://nagasaki-vibe-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="vibe-app-btn"
            style={{ fontSize: '17px', padding: '18px 40px' }}
          >
            <span className="vibe-app-btn-icon">✨</span>
            <span className="vibe-app-btn-text">価値を考えるアプリ</span>
            <span className="vibe-app-btn-arrow">→</span>
          </a>
        </div>

        <div className="slide-step">
          <div className="slide-step-num">01</div>
          <div className="slide-step-content">
            <div className="slide-step-title">チームで議論する</div>
            <div className="slide-step-desc">
              DAY1の観光・DAY2朝のフィールドワークで見聞きしたことをチームで共有します。<br />
              長崎の<em className="gold">課題と魅力</em>を洗い出しましょう。
            </div>
          </div>
        </div>

        <div className="slide-arrow-down">↓</div>

        <div className="slide-step">
          <div className="slide-step-num">02</div>
          <div className="slide-step-content">
            <div className="slide-step-title">ペルソナ → ジャーニー → VPCを埋める</div>
            <div className="slide-step-desc">
              AIツールを使いながら、3つのフレームワークを順番に埋めていきましょう。<br />
              音声入力で話しながら進めてもOKです。
            </div>
          </div>
        </div>

        <div className="slide-arrow-down">↓</div>

        <div className="slide-step">
          <div className="slide-step-num">03</div>
          <div className="slide-step-content">
            <div className="slide-step-title">ミッション＆目標を定める</div>
            <div className="slide-step-desc">
              フレームワークの結果から、チームとして<em className="gold">「誰の、何を解決するか」</em>を決めましょう。<br />
              大きな方向性は3つあります：
            </div>
            <div className="slide-direction-box">
              <span className="text-teal">🟢 課題をプラスに変える</span> — 長崎の困りごとをテクノロジーで解決する<br />
              <em className="gold">🟡 良いところをさらに伸ばす</em> — 長崎の魅力をもっと多くの人に届ける<br />
              <span className="text-coral">🔴 全く新しい価値を加える</span> — まだ誰もやっていないアプローチを試す
            </div>
          </div>
        </div>

        <div className="slide-arrow-down">↓</div>

        <div className="slide-step">
          <div className="slide-step-num">04</div>
          <div className="slide-step-content">
            <div className="slide-step-title">Vibeコーディングで形にする</div>
            <div className="slide-step-desc">
              v0を使って、プロダクトのプロトタイプを作りましょう。<br />
              LP、広報ツール、ミニアプリ、チャットボットなど、形は自由です。<br />
              できればチーム内で別々のプロダクトにチャレンジしてみてください。
            </div>
          </div>
        </div>

        <div className="slide-card teal" style={{ marginTop: '24px' }}>
          <div className="slide-card-label">INPUT</div>
          <div className="slide-card-title">DAY1・2で溜めた素材をフル活用しましょう</div>
          <div className="slide-card-body">
            観光中の写真、音声メモ、フィールドワークでの気づき、地元の方から聞いた話 ——<br />
            すべてがVibeコーディングのプロンプトの種になります。<br />
            遠慮なくAIに投げ込んでみましょう。
          </div>
        </div>

        {/* チーム開発の運用ルール */}
        <div className="slide-card gold" style={{ marginTop: '24px' }}>
          <div className="slide-card-label">TEAM DEV RULES</div>
          <div className="slide-card-title">チーム開発の進め方</div>
          <div className="slide-card-body" style={{ lineHeight: 2.2 }}>
            <em>オンライン参加の方</em> — 個別開発で進めてください。<br />
            <em>質問・相談</em> — spark / minta へ気軽にどうぞ（リアルでもDiscordでもOK）。<br />
            <em>18:20まで自由作業</em> — 宿泊施設での開発、外出しての取材など自由です。<br /><br />
            応用編の他ツール（DB連携、API連携など）も必要に応じてお話しできます。
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
          <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="vibe-app-btn" style={{ margin: 0, fontSize: '13px', padding: '10px 20px' }}>
            <span className="vibe-app-btn-text">Claude</span>
            <span className="vibe-app-btn-arrow">→</span>
          </a>
          <a href="https://www.createanything.com/" target="_blank" rel="noopener noreferrer" className="vibe-app-btn" style={{ margin: 0, fontSize: '13px', padding: '10px 20px' }}>
            <span className="vibe-app-btn-text">Anything</span>
            <span className="vibe-app-btn-arrow">→</span>
          </a>
        </div>
      </FadeSection>

      {/* ===== APPENDIX SECTION (Accordion) ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">APPENDIX</div>
        <div className="slide-title">付録：もっと深く知りたい方へ</div>
        <div className="slide-subtitle">クリックして展開してください。余裕がある方、挑戦したい方向けの情報です。</div>

        <Accordion title="📚 APPENDIX 1: DB連携とAPI連携" id="appendix-db-api">
          <div className="slide-step">
            <div className="slide-step-num icon">🗄️</div>
            <div className="slide-step-content">
              <div className="slide-step-title">データベース連携（Supabase）</div>
              <div className="slide-step-desc">
                v0で生成したアプリにデータの永続化を追加したい場合に使います。<br /><br />
                <em className="gold">Supabase</em>（無料プランあり）はPostgreSQLベースのBaaSで、テーブル作成からCRUD操作まで、v0への指示で完結します。<br />
                <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="slide-link teal">supabase.com →</a>
              </div>
              <CopyablePrompt
                label="PROMPT EXAMPLE"
                text={`Supabaseをデータベースとして使い、ユーザーが魚の感想を投稿できる機能を追加してください。
投稿にはユーザー名、魚の名前、感想テキスト、日付を含めてください。
Supabaseの接続情報は環境変数から読み込むようにしてください。`}
              />
            </div>
          </div>

          <div className="slide-step">
            <div className="slide-step-num icon">🤖</div>
            <div className="slide-step-content">
              <div className="slide-step-title">API連携（OpenAI APIによるチャット機能）</div>
              <div className="slide-step-desc">
                プロダクトにAIチャット機能を追加して、ユーザーの質問に自動で答えられるようにします。<br />
                APIキーを環境変数に設定し、v0に「このAPIを使って」と指示するだけです。
              </div>
              <CopyablePrompt
                label="PROMPT EXAMPLE"
                text={`OpenAI APIを使って、茂木の魚や水産業について質問できるチャット機能を追加してください。
システムプロンプトに「茂木の水産業の専門家として回答してください」と設定してください。
APIキーは環境変数 OPENAI_API_KEY から読み込んでください。`}
              />
            </div>
          </div>
        </Accordion>

        <Accordion title="💬 APPENDIX 2: AIとの壁打ちの進め方" id="appendix-ai-mentoring">
          <div className="slide-card coral" style={{ marginBottom: '28px' }}>
            <div className="slide-card-label">WHY</div>
            <div className="slide-card-title">なぜAI壁打ちが有効なのか</div>
            <div className="slide-card-body">
              仕様を固めるとき、一人で考えていると行き詰まります。<br />
              チームメンバーもそれぞれのプロダクトに集中しています。<br /><br />
              そんなとき、<em>AIに壁打ち相手になってもらいましょう。</em><br /><br />
              AIは24時間いつでも対応してくれる<em>最強の壁打ち相手</em>です。
            </div>
          </div>

          <div className="slide-step">
            <div className="slide-step-num icon">🎙️</div>
            <div className="slide-step-content">
              <div className="slide-step-title">音声データをそのまま投げ込む</div>
              <div className="slide-step-desc">
                DAY1やDAY2の朝に録った音声メモの文字起こしをそのままAIに渡して、<br />
                「ここから課題とアイデアを整理して」と指示しましょう。<br /><br />
                <em className="gold">あなたの生の体験が、AIとの壁打ちの最高の素材になります。</em>
              </div>
            </div>
          </div>

          <div className="slide-step">
            <div className="slide-step-num icon">💬</div>
            <div className="slide-step-content">
              <div className="slide-step-title">壁打ちのステップ</div>
              <div className="slide-step-desc" style={{ lineHeight: 2.2 }}>
                <em className="gold">1. 情報を渡す</em> — 音声メモ、写真の説明、気づきをAIに共有<br />
                <em className="gold">2. 整理してもらう</em> — 課題、ターゲット、アイデアの候補を出してもらう<br />
                <em className="gold">3. 深掘りする</em> — 「もう少し詳しく」「別の角度は？」と対話を重ねる<br />
                <em className="gold">4. 方針を決める</em> — 最終的にはあなたが判断し、仕様を固める<br />
                <em className="gold">5. 実装に移す</em> — 固まった仕様をv0に渡して、Vibeコーディング開始
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="⚖️ APPENDIX 3: AIと人の対話のバランス" id="appendix-column">
          <div className="slide-cols">
            <div className="slide-card teal">
              <div className="slide-card-label">AI に任せること</div>
              <div className="slide-card-title" style={{ fontSize: '16px' }}>過去の情報・データ整理・既知の事実</div>
              <div className="slide-card-body">
                リサーチ、構造化、コード生成、壁打ち<br />
                「調べればわかること」はAIに聞きましょう
              </div>
            </div>
            <div className="slide-card coral">
              <div className="slide-card-label">人と対話すべきこと</div>
              <div className="slide-card-title" style={{ fontSize: '16px' }}>未来のビジョン・意志・価値観・判断</div>
              <div className="slide-card-body">
                体験の共有、感情の交換、意思決定、合意形成<br />
                「人間にしかわからない感覚」はチームで話しましょう
              </div>
            </div>
          </div>

          <div className="slide-card gold" style={{ marginTop: '20px' }}>
            <div className="slide-card-body" style={{ fontSize: '15px', lineHeight: 2 }}>
              実際に調べればわかるようなことは、AIにお願いしましょう。<br />
              人間にしかわからない感覚を見極めたうえで、チーム内で対話しましょう。<br /><br />
              <em>AIと人の対話をするバランスを自分たちで作っていく。</em><br />
              それがこのワークショップの醍醐味です。
            </div>
          </div>

          <div className="slide-voice-box" style={{ marginTop: '28px' }}>
            <div className="slide-voice-label">旅 × 音声 × VIBE CODING</div>
            <div className="slide-voice-title">
              歩いて、聞いて、感じて、話して、作る。
            </div>
            <div className="slide-voice-body">
              このサイクルの中で、AIは最高のアシスタントになります。<br />
              でも主役はあなた自身です。あなたの体験と、チームとの対話が、<br />
              世界にひとつだけのプロダクトを生み出します。
            </div>
          </div>
        </Accordion>
      </FadeSection>

      {/* ===== BBQ — 18:20〜 ===== */}
      <FadeSection className="slide slide-flow">
        <div className="slide-tag">BBQ — 18:20</div>
        <div className="slide-title">BBQ</div>
        <div className="slide-subtitle">
          開発おつかれさまでした！<em>美味しいご飯を食べながら、交流を楽しみましょう。</em>
        </div>

        <div className="slide-stack">
          <div className="slide-card coral">
            <div className="slide-card-label">DINNER</div>
            <div className="slide-card-title">一番は、思いっきり楽しむこと！</div>
            <div className="slide-card-body">
              今日一日、フィールドワークからレクチャー、チーム開発とお疲れさまでした。<br /><br />
              美味しいBBQを囲みながら、チームメンバーや他の参加者と<em>自由に語り合いましょう</em>。<br /><br />
              何気ない会話の中にも、課題解決のヒントやアプリのアイデアが見つかるかもしれません。<br />
              でもまずは、食べて飲んで、<em>楽しむこと</em>が一番大事です！
            </div>
          </div>

          <div className="slide-card teal">
            <div className="slide-card-label">HINT</div>
            <div className="slide-card-title">交流の中にヒントがある</div>
            <div className="slide-card-body">
              地元の方との会話、他チームのアイデア、参加者それぞれの経験 ——<br />
              リラックスした雰囲気だからこそ聞ける話があります。<br /><br />
              もし何か気づいたことがあれば、忘れないうちにメモしておきましょう。
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ===== NIGHT SESSION ===== */}
      <FadeSection className="slide slide-flow slide-last">
        <div className="slide-tag">NIGHT SESSION — 20:00〜</div>
        <div className="slide-title">夜のオープンセッション</div>
        <div className="slide-subtitle">
          <em>参加は任意</em>です。リラックスしながら、<em>お互いの知見を持ち寄る時間</em>にしましょう。<br />
          <em>spark/minta</em>が壁打ち・応用編のお話をします。
        </div>

        <div className="slide-card gold" style={{ marginBottom: '32px' }}>
          <div className="slide-card-label">ABOUT</div>
          <div className="slide-card-title">それぞれの得意を持ち寄って、対話する夜。</div>
          <div className="slide-card-body">
            今日一日で、フレームワーク、Vibeコーディング、チームでの議論と、たくさんのことに取り組みました。<br /><br />
            この時間は、<em>もう少し踏み込んだ対話</em>をしたい方のためのオープンな場です。<br />
            みなさんそれぞれ異なるバックグラウンドや専門性をお持ちなので、<br />
            お互いの視点を交換するだけでも、プロダクトの解像度がぐっと上がるはずです。<br /><br />
            気軽にどうぞ。途中参加・途中退出、まったく問題ありません。
          </div>
        </div>

        <div className="slide-cols-3">
          <div className="slide-card teal">
            <div className="slide-card-label">TOPIC 1</div>
            <div className="slide-card-title">🛠️ 技術まわりの相談</div>
            <div className="slide-card-body">
              v0の使い方、API連携、DB設計など、<br />
              技術的に気になっていることを<em>気軽に話しましょう</em>。<br /><br />
              詳しい方も、これから学びたい方も、<br />
              一緒に手を動かしながら対話できる時間です。
            </div>
          </div>

          <div className="slide-card coral">
            <div className="slide-card-label">TOPIC 2</div>
            <div className="slide-card-title">💬 プロダクトの壁打ち</div>
            <div className="slide-card-body">
              今日作ったプロダクトや、明日の発表に向けた方向性について、<br />
              <em>お互いにフィードバック</em>し合いましょう。<br /><br />
              違う視点からの一言が、<br />
              思わぬブレイクスルーにつながることがあります。
            </div>
          </div>

          <div className="slide-card" style={{ borderColor: 'var(--camp-gold-dim)' }}>
            <div className="slide-card-label">TOPIC 3</div>
            <div className="slide-card-title">🍵 ゆるく語る</div>
            <div className="slide-card-body">
              プロダクトの話に限らず、<br />
              <em>長崎のこと、仕事のこと、興味のあること</em>、<br />
              なんでもOKです。<br /><br />
              リラックスした会話から、<br />
              いいアイデアが生まれることもあります。
            </div>
          </div>
        </div>

        <div className="slide-callout" style={{ marginTop: '40px' }}>
          <div className="slide-callout-icon">🌙</div>
          <div className="slide-callout-text">
            <strong>参加は任意です。</strong>無理のない範囲で、来たいときに来てください。<br />
            チーム開発を続けるもよし、ゆっくり休むもよし。<br />
            明日のDAY3に向けて、自分のペースで過ごしてください。
          </div>
        </div>
      </FadeSection>

      {/* ===== DAY2 COMPLETION ===== */}
      <FadeSection className="slide slide-flow" style={{ textAlign: 'center', minHeight: 'auto' }}>
        <CompletionButton dayKey="day2-complete" imageSrc="/DAY2.png" />
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
