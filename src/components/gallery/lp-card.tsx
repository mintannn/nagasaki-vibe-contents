'use client'

import { LPPlaceholder } from './lp-placeholder'
import type { ParticipantData } from '@/lib/sheets'

interface LPCardProps {
  participant: ParticipantData
}

export function LPCard({ participant }: LPCardProps) {
  const { nickname, lpUrl } = participant
  const hasUrl = lpUrl && lpUrl.length > 0

  const CardContent = (
    <>
      <div className="lp-card-thumbnail">
        <LPPlaceholder />
      </div>
      <div className="lp-card-body">
        <div className="lp-card-nickname">{nickname}</div>
      </div>
    </>
  )

  if (hasUrl) {
    return (
      <a
        href={lpUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="lp-card"
      >
        {CardContent}
      </a>
    )
  }

  // URLがない場合はリンクなしのカード
  return (
    <div className="lp-card" style={{ cursor: 'default' }}>
      {CardContent}
    </div>
  )
}
