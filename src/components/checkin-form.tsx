'use client'

import { useState, useEffect } from 'react'

interface CheckinData {
  name: string
  lpUrl?: string
  comment?: string
  checkedInAt: string
}

const STORAGE_KEY = 'camp-checkin'

export function CheckinForm() {
  const [name, setName] = useState('')
  const [lpUrl, setLpUrl] = useState('')
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState<'idle' | 'success'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [savedName, setSavedName] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const data: CheckinData = JSON.parse(saved)
        setSavedName(data.name)
        setStatus('success')
      } catch {
        // ignore
      }
    }
  }, [])

  function handleSubmit() {
    if (!name.trim()) {
      setErrorMsg('お名前を入力してください')
      return
    }
    setErrorMsg('')

    const data: CheckinData = {
      name: name.trim(),
      lpUrl: lpUrl.trim() || undefined,
      comment: comment.trim() || undefined,
      checkedInAt: new Date().toISOString(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    setSavedName(data.name)
    setStatus('success')
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
            ようこそ、{savedName}さん！
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
      />

      <label className="camp-form-label">自己紹介LPのURL</label>
      <input
        type="url"
        className="camp-form-input"
        placeholder="https://v0.dev/..."
        value={lpUrl}
        onChange={(e) => setLpUrl(e.target.value)}
      />

      <label className="camp-form-label">ひとこと（任意）</label>
      <input
        type="text"
        className="camp-form-input"
        placeholder="意気込みなど"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {errorMsg && (
        <div style={{ color: '#D4553E', fontSize: '12px', marginTop: '10px' }}>
          {errorMsg}
        </div>
      )}

      <button
        className="camp-form-btn"
        onClick={handleSubmit}
      >
        チェックイン
      </button>
    </div>
  )
}
