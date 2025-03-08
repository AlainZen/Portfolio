"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const updateMousePosition = (e: MouseEvent) => {
      if (!buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    buttonRef.current.addEventListener("mousemove", updateMousePosition)

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mousemove", updateMousePosition)
      }
    }
  }, [])

  return (
    <Link
      href={href}
      ref={buttonRef}
      className="relative px-6 py-3 font-bold text-gray-200 rounded-lg group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <span
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 transition-all duration-300 ease-out"
          style={{
            clipPath: `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)`,
          }}
        ></span>
      )}
    </Link>
  )
}

export default AnimatedButton

