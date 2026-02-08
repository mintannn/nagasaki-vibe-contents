'use client'

import { useState } from 'react'
import { submitCheckin } from '@/app/actions/checkin-actions'

export function CheckinForm() {
  const [name, setName] = useState('')
  const [lpUrl, setLpUrl] = useState('')
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit() {
    if (!name.trim()) {
      setErrorMsg('お名前を入力してください')
      setStatus('error')
      return
    }
    setStatus('submitting')
    setErrorMsg('')

    const result = await submitCheckin({
      name,
      lpUrl: lpUrl || undefined,
      comment: comment || undefined,
    })

    if (result.success) {
      setStatus('success')
    } else {
      setErrorMsg(result.error || 'エラーが発生しました')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="camp-checkin-form">
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>✓</div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#C8A44E', marginBottom: '4px' }}>
            チェックイン完了
          </div>
          <div style={{ fontSize: '13px', color: '#C8C4BC' }}>
            ようこそ、{name}さん！
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="camp-checkin-form">
      <label className="camp-form-label">お名前</label>
      <input
        type="text"
        className="camp-form-input"
        placeholder="表示名を入力"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={status === 'submitting'}
      />

      <label className="camp-form-label">自己紹介LPのURL</label>
      <input
        type="url"
        className="camp-form-input"
        placeholder="https://v0.dev/..."
        value={lpUrl}
        onChange={(e) => setLpUrl(e.target.value)}
        disabled={status === 'submitting'}
      />

      <label className="camp-form-label">ひとこと（任意）</label>
      <input
        type="text"
        className="camp-form-input"
        placeholder="意気込みなど"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={status === 'submitting'}
      />

      {status === 'error' && errorMsg && (
        <div style={{ color: '#D4553E', fontSize: '12px', marginTop: '10px' }}>
          {errorMsg}
        </div>
      )}

      <button
        className="camp-form-btn"
        onClick={handleSubmit}
        disabled={status === 'submitting'}
        style={{ opacity: status === 'submitting' ? 0.6 : 1 }}
      >
        {status === 'submitting' ? '送信中...' : 'チェックイン'}
      </button>
    </div>
  )
}
