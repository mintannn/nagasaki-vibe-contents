'use client'

import { useEffect, useRef } from 'react'

interface Fish {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  wobbleOffset: number
  wobbleSpeed: number
  direction: 1 | -1
}

export function FishBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let fishes: Fish[] = []

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    function createFishes() {
      const count = Math.max(4, Math.floor(window.innerWidth / 100))
      fishes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        size: 8 + Math.random() * 14,
        speed: 0.3 + Math.random() * 0.6,
        opacity: 0.04 + Math.random() * 0.08,
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02,
        direction: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    function drawFish(f: Fish, time: number) {
      const wobble = Math.sin(time * f.wobbleSpeed + f.wobbleOffset) * 15
      const x = f.x
      const y = f.y + wobble

      ctx!.save()
      ctx!.translate(x, y)
      ctx!.scale(f.direction, 1)
      ctx!.globalAlpha = f.opacity

      // Body
      ctx!.beginPath()
      ctx!.moveTo(f.size, 0)
      ctx!.quadraticCurveTo(f.size * 0.5, -f.size * 0.45, -f.size * 0.3, 0)
      ctx!.quadraticCurveTo(f.size * 0.5, f.size * 0.45, f.size, 0)
      ctx!.fillStyle = '#C8A44E'
      ctx!.fill()

      // Tail
      ctx!.beginPath()
      ctx!.moveTo(-f.size * 0.3, 0)
      const tailWag = Math.sin(time * 0.05 + f.wobbleOffset) * f.size * 0.2
      ctx!.lineTo(-f.size * 0.8, -f.size * 0.35 + tailWag)
      ctx!.lineTo(-f.size * 0.8, f.size * 0.35 + tailWag)
      ctx!.closePath()
      ctx!.fillStyle = '#C8A44E'
      ctx!.fill()

      ctx!.restore()
    }

    function animate(time: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      for (const f of fishes) {
        f.x += f.speed * f.direction
        if (f.direction === 1 && f.x > canvas!.width + f.size * 2) {
          f.x = -f.size * 2
          f.y = Math.random() * canvas!.height
        }
        if (f.direction === -1 && f.x < -f.size * 2) {
          f.x = canvas!.width + f.size * 2
          f.y = Math.random() * canvas!.height
        }
        drawFish(f, time)
      }

      animId = requestAnimationFrame(animate)
    }

    resize()
    createFishes()
    animId = requestAnimationFrame(animate)

    window.addEventListener('resize', () => {
      resize()
      createFishes()
    })

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
