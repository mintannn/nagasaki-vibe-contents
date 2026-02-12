'use client'

import { useCallback, useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface CompletionButtonProps {
  label?: string
  dayKey?: string
}

const COLORS = ['#C8A44E', '#D4553E', '#2D9B8E', '#F0EBE0', '#FFD700', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#FB923C']
const FISH_EMOJIS = ['🐟', '🐠', '🐡', '🦈', '🐋', '🐳', '🦐', '🦑', '🦀', '🐙']

interface PaperParticle {
  type: 'paper'
  x: number; y: number
  w: number; h: number; c: string
  vx: number; vy: number
  r: number; rs: number
  o: number; d: number
  wb: number; ws: number
}

interface FishParticle {
  type: 'fish'
  x: number; y: number
  vx: number; vy: number
  emoji: string
  rotation: number; rotationSpeed: number
  o: number; scale: number
}

type Particle = PaperParticle | FishParticle

function createPaperParticle(canvasW: number): PaperParticle {
  return {
    type: 'paper',
    x: Math.random() * canvasW,
    y: -(Math.random() * 40),
    w: 5 + Math.random() * 7,
    h: 3 + Math.random() * 9,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: (Math.random() - 0.5) * 8,
    vy: 2 + Math.random() * 4,
    r: Math.random() * 360,
    rs: (Math.random() - 0.5) * 14,
    o: 1,
    d: 0.003 + Math.random() * 0.003,
    wb: Math.random() * Math.PI * 2,
    ws: 0.03 + Math.random() * 0.05,
  }
}

function createFishParticle(ox: number, oy: number): FishParticle {
  return {
    type: 'fish',
    x: ox + (Math.random() - 0.5) * 100,
    y: oy,
    vx: (Math.random() - 0.5) * 12,
    vy: -(4 + Math.random() * 8),
    emoji: FISH_EMOJIS[Math.floor(Math.random() * FISH_EMOJIS.length)],
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.2,
    o: 1,
    scale: 0.8 + Math.random() * 0.6,
  }
}

export function CompletionButton({ label = 'できた！', dayKey = 'day-complete' }: CompletionButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animRef = useRef<number | null>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

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
  }, [mounted])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particlesRef.current = particlesRef.current.filter(p => p.o > 0 && p.y < canvas.height + 50)

    for (const p of particlesRef.current) {
      if (p.type === 'paper') {
        p.wb += p.ws
        p.x += p.vx + Math.sin(p.wb) * 0.5
        p.vy += 0.06
        p.y += p.vy
        p.r += p.rs
        p.o -= p.d
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.r * Math.PI / 180)
        ctx.globalAlpha = Math.max(0, p.o)
        ctx.fillStyle = p.c
        if (Math.random() > 0.4) {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      } else {
        p.x += p.vx
        p.vy += 0.08
        p.y += p.vy
        p.rotation += p.rotationSpeed
        p.o -= 0.008
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.globalAlpha = Math.max(0, p.o)
        ctx.font = `${32 * p.scale}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.emoji, 0, 0)
        ctx.restore()
      }
    }

    if (particlesRef.current.length > 0) {
      animRef.current = requestAnimationFrame(animate)
    } else {
      animRef.current = null
    }
  }, [])

  const startAnim = useCallback(() => {
    if (!animRef.current) {
      animRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  const handleClick = useCallback(() => {
    const cw = window.innerWidth

    for (let i = 0; i < 120; i++) particlesRef.current.push(createPaperParticle(cw))
    startAnim()
    setTimeout(() => {
      for (let i = 0; i < 80; i++) particlesRef.current.push(createPaperParticle(cw))
      startAnim()
    }, 250)
    setTimeout(() => {
      for (let i = 0; i < 60; i++) particlesRef.current.push(createPaperParticle(cw))
      startAnim()
    }, 500)

    const btn = btnRef.current
    if (btn) {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top
      for (let i = 0; i < 30; i++) particlesRef.current.push(createFishParticle(cx, cy))
    }

    try {
      const audio = new Audio('/tousen.mp3')
      audio.play()
    } catch { /* noop */ }

    try {
      localStorage.setItem(dayKey, 'completed')
    } catch { /* noop */ }
  }, [dayKey, startAnim])

  return (
    <>
      {mounted && createPortal(
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />,
        document.body
      )}
      <button ref={btnRef} className="completion-button" onClick={handleClick}>
        🐟 {label}
      </button>
    </>
  )
}
