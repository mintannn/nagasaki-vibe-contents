'use client'

import { useState, useCallback, ReactNode } from 'react'

interface AccordionProps {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  id?: string
}

export function Accordion({ title, children, defaultOpen = false, id }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <div className={`accordion ${isOpen ? 'accordion-open' : ''}`} id={id}>
      <button
        className="accordion-header"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={id ? `${id}-content` : undefined}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon" aria-hidden="true">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      <div
        className="accordion-content"
        id={id ? `${id}-content` : undefined}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  )
}
