'use client'

import { useCallback, useRef, useEffect } from 'react'

interface CompletionButtonProps {
  label?: string
  dayKey?: string
}

const FISH_EMOJIS = ['🐟', '🐠', '🐡', '🦈', '🐋', '🐳', '🦐', '🦑', '🦀', '🐙']

interface FishParticle {
  x: number
  y: number
  vx: number
  vy: number
  emoji: string
  rotation: number
  rotationSpeed: number
  opacity: number
  scale: number
}

export function CompletionButton({ label = 'できた！', dayKey = 'day-complete' }: CompletionButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<FishParticle[]>([])
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current = particlesRef.current.filter(p => p.opacity > 0 && p.y < canvas.height + 50)

    for (const p of particlesRef.current) {
      p.x += p.vx
      p.vy += 0.08
      p.y += p.vy
      p.rotation += p.rotationSpeed
      p.opacity -= 0.008

      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)
      ctx.globalAlpha = Math.max(0, p.opacity)
      ctx.font = `${32 * p.scale}px serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(p.emoji, 0, 0)
      ctx.restore()
    }

    if (particlesRef.current.length > 0) {
      animRef.current = requestAnimationFrame(animate)
    }
  }, [])

  const fireFishConfetti = useCallback((originX: number, originY: number) => {
    const count = 30
    for (let i = 0; i < count; i++) {
      particlesRef.current.push({
        x: originX + (Math.random() - 0.5) * 100,
        y: originY,
        vx: (Math.random() - 0.5) * 12,
        vy: -(4 + Math.random() * 8),
        emoji: FISH_EMOJIS[Math.floor(Math.random() * FISH_EMOJIS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        opacity: 1,
        scale: 0.8 + Math.random() * 0.6,
      })
    }
    if (!animRef.current) {
      animate()
    }
  }, [animate])

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top

    fireFishConfetti(centerX, centerY)

    // Mark as completed in localStorage
    try {
      localStorage.setItem(dayKey, 'completed')
    } catch { /* noop */ }
  }, [dayKey, fireFishConfetti])

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <button className="completion-button" onClick={handleClick}>
        🐟 {label}
      </button>
    </>
  )
}
