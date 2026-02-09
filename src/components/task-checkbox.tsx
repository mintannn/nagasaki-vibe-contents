'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface TaskCheckboxProps {
  id: string
  label: string
  storageKey?: string
}

export function TaskCheckbox({ id, label, storageKey }: TaskCheckboxProps) {
  const [checked, setChecked] = useState(false)
  const [showFish, setShowFish] = useState(false)
  const fishRef = useRef<HTMLSpanElement>(null)

  const key = storageKey || `task-${id}`

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key)
      if (saved === 'true') setChecked(true)
    } catch { /* noop */ }
  }, [key])

  const handleChange = useCallback(() => {
    const newValue = !checked
    setChecked(newValue)
    try {
      localStorage.setItem(key, String(newValue))
    } catch { /* noop */ }

    // Show fish animation when checking
    if (newValue) {
      setShowFish(true)
      setTimeout(() => setShowFish(false), 1000)
    }
  }, [checked, key])

  return (
    <label className={`task-checkbox ${checked ? 'task-checkbox-checked' : ''}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        className="task-checkbox-input"
      />
      <span className="task-checkbox-box">
        {checked && '✓'}
      </span>
      <span className="task-checkbox-label">{label}</span>
      {showFish && (
        <span ref={fishRef} className="task-checkbox-fish" aria-hidden="true">
          🐟
        </span>
      )}
    </label>
  )
}
