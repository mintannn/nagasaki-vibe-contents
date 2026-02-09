'use client'

import { useState, useCallback } from 'react'

interface CopyButtonProps {
  text: string
  className?: string
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className={`copy-button ${copied ? 'copied' : ''} ${className}`}
      title={copied ? 'コピーしました！' : 'クリップボードにコピー'}
      aria-label={copied ? 'コピーしました' : 'コピーする'}
    >
      {copied ? '✓' : '📋'}
      <span className="copy-button-text">{copied ? 'コピー完了' : 'コピー'}</span>
    </button>
  )
}
