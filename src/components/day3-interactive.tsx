'use client'

import { useEffect, useRef, useCallback } from 'react'

// ── Confetti ──
const COLORS = ['#C8A44E', '#D4553E', '#2D9B8E', '#F0EBE0', '#FFD700', '#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#FB923C']

interface Particle {
  x: number; y: number; w: number; h: number; c: string
  vx: number; vy: number; r: number; rs: number
  o: number; d: number; wb: number; ws: number
}

function createParticle(ox?: number, oy?: number): Particle {
  return {
    x: ox ?? Math.random() * window.innerWidth,
    y: oy ?? -20,
    w: 5 + Math.random() * 7,
    h: 3 + Math.random() * 9,
    c: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: (Math.random() - 0.5) * 8,
    vy: oy !== undefined ? -(2 + Math.random() * 6) : (2 + Math.random() * 4),
    r: Math.random() * 360,
    rs: (Math.random() - 0.5) * 14,
    o: 1,
    d: 0.003 + Math.random() * 0.003,
    wb: Math.random() * Math.PI * 2,
    ws: 0.03 + Math.random() * 0.05,
  }
}

export function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
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
    const ps = particlesRef.current
    particlesRef.current = ps.filter(p => p.o > 0 && p.y < canvas.height + 50)
    for (const p of particlesRef.current) {
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
    }
    if (particlesRef.current.length > 0) {
      animRef.current = requestAnimationFrame(animate)
    }
  }, [])

  const fire = useCallback((count: number, ox?: number, oy?: number) => {
    for (let i = 0; i < count; i++) particlesRef.current.push(createParticle(ox, oy))
    if (!animRef.current) animate()
  }, [animate])

  // expose fire methods on window
  useEffect(() => {
    (window as unknown as Record<string, unknown>).__fireConfetti = () => {
      fire(120)
      setTimeout(() => fire(80), 250)
      setTimeout(() => fire(60), 500)
    };
    (window as unknown as Record<string, unknown>).__fireFinale = () => {
      fire(200)
      setTimeout(() => fire(150), 250)
      setTimeout(() => fire(100), 500)
      setTimeout(() => fire(80), 800)
      try {
        const audio = new Audio('/tousen.mp3')
        audio.play()
      } catch { /* noop */ }
    }
    return () => {
      delete (window as unknown as Record<string, unknown>).__fireConfetti
      delete (window as unknown as Record<string, unknown>).__fireFinale
    }
  }, [fire, animate])

  return <canvas ref={canvasRef} className="d3-confetti-canvas" />
}

// ── Fanfare ──
function playFanfare() {
  try {
    const ac = new AudioContext()
    const now = ac.currentTime
    const notes = [261.63, 329.63, 392, 523.25, 659.25]
    notes.forEach((f, i) => {
      const o = ac.createOscillator()
      const g = ac.createGain()
      o.type = i < 3 ? 'triangle' : 'sine'
      o.frequency.setValueAtTime(f, now)
      g.gain.setValueAtTime(0, now)
      g.gain.linearRampToValueAtTime(0.12, now + 0.05)
      g.gain.exponentialRampToValueAtTime(0.001, now + 2.5)
      o.connect(g); g.connect(ac.destination)
      o.start(now + i * 0.08); o.stop(now + 3)
    })
    setTimeout(() => {
      const n2 = ac.currentTime;
      [392, 493.88, 587.33, 783.99].forEach((f, i) => {
        const o = ac.createOscillator()
        const g = ac.createGain()
        o.type = 'triangle'
        o.frequency.setValueAtTime(f, n2)
        g.gain.setValueAtTime(0, n2)
        g.gain.linearRampToValueAtTime(0.1, n2 + 0.05)
        g.gain.exponentialRampToValueAtTime(0.001, n2 + 3)
        o.connect(g); g.connect(ac.destination)
        o.start(n2 + i * 0.06); o.stop(n2 + 3.5)
      })
    }, 600)
  } catch {
    // Audio not supported
  }
}

// ── Confetti Button ──
export function ConfettiButton() {
  return (
    <button
      className="d3-confetti-btn"
      onClick={() => (window as unknown as Record<string, unknown> & { __fireConfetti?: () => void }).__fireConfetti?.()}
    >
      🎉 共有会スタート！
    </button>
  )
}

// ── Finale Button ──
export function FinaleButton() {
  return (
    <button
      className="d3-finale-btn"
      onClick={() => (window as unknown as Record<string, unknown> & { __fireFinale?: () => void }).__fireFinale?.()}
    >
      🎊 おつかれさまでした！
    </button>
  )
}

// ── Editable Team Name ──
export function TeamCard({ id, label, defaultName }: { id: string; label: string; defaultName: string }) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(id)
      if (saved && spanRef.current) spanRef.current.textContent = saved
    } catch { /* noop */ }
  }, [id])

  const toggle = () => {
    const el = spanRef.current
    const btn = btnRef.current
    if (!el || !btn) return
    if (el.contentEditable === 'true') {
      el.contentEditable = 'false'
      btn.textContent = '✎'
      el.style.borderBottomColor = 'transparent'
      try { localStorage.setItem(id, el.textContent || defaultName) } catch { /* noop */ }
    } else {
      el.contentEditable = 'true'
      btn.textContent = '✓'
      el.focus()
      const r = document.createRange()
      r.selectNodeContents(el)
      const s = window.getSelection()
      s?.removeAllRanges()
      s?.addRange(r)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const el = spanRef.current
      const btn = btnRef.current
      if (!el || !btn) return
      el.contentEditable = 'false'
      btn.textContent = '✎'
      el.style.borderBottomColor = 'transparent'
      try { localStorage.setItem(id, el.textContent || defaultName) } catch { /* noop */ }
    }
  }

  return (
    <div className="d3-team-card">
      <div className="d3-team-label">{label}</div>
      <div className="d3-team-name">
        <span ref={spanRef} className="d3-team-name-text" onKeyDown={handleKeyDown}>
          {defaultName}
        </span>
        <button ref={btnRef} className="d3-edit-btn" onClick={toggle} title="チーム名を編集">✎</button>
      </div>
    </div>
  )
}
