"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (!isMobile) {
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }

      const handleMouseEnter = () => setIsHovering(true)
      const handleMouseLeave = () => setIsHovering(false)

      window.addEventListener("mousemove", updateMousePosition)

      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], .cursor-hover')
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        window.removeEventListener("mousemove", updateMousePosition)
        window.removeEventListener("resize", checkMobile)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor - Pink with red gradient */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          background: "linear-gradient(45deg, #E91E63, #F44336)",
          boxShadow: "0 0 20px rgba(233, 30, 99, 0.5)",
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Inner cursor - Red */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        style={{
          background: "#F44336",
          boxShadow: "0 0 10px rgba(244, 67, 54, 0.8)",
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
        }}
      />

      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-40"
        style={{
          background: "radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%)",
          border: "1px solid rgba(233, 30, 99, 0.2)",
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
      />
    </>
  )
}
