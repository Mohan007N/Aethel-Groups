import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, Cloud, Globe, Smartphone, GraduationCap } from 'lucide-react'
import './HeroVisual.css'

const floatingCards = [
  { icon: <Code2 size={16} />, label: 'Custom Software', x: '8%', y: '12%', delay: 0 },
  { icon: <Brain size={16} />, label: 'Artificial Intelligence', x: '62%', y: '5%', delay: 0.2 },
  { icon: <Cloud size={16} />, label: 'Cloud Solutions', x: '72%', y: '55%', delay: 0.4 },
  { icon: <Globe size={16} />, label: 'Web Applications', x: '5%', y: '65%', delay: 0.6 },
  { icon: <Smartphone size={16} />, label: 'Mobile Apps', x: '55%', y: '82%', delay: 0.8 },
  { icon: <GraduationCap size={16} />, label: 'Academic Projects', x: '15%', y: '42%', delay: 1 },
]

const nodes = [
  { x: 200, y: 180 }, // center
  { x: 80, y: 80 },
  { x: 320, y: 60 },
  { x: 350, y: 240 },
  { x: 60, y: 280 },
  { x: 280, y: 340 },
  { x: 140, y: 350 },
]

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 2], [3, 5], [4, 6], [2, 3],
]

export default function HeroVisual() {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePos({ x: x * 12, y: y * 12 })
    }
    const el = containerRef.current
    if (el) el.addEventListener('mousemove', handleMouse)
    return () => { if (el) el.removeEventListener('mousemove', handleMouse) }
  }, [])

  return (
    <div className="hero-visual" ref={containerRef}>
      {/* Network SVG */}
      <svg className="hero-visual__network" viewBox="0 0 400 400" fill="none">
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x} y1={nodes[from].y}
            x2={nodes[to].x} y2={nodes[to].y}
            stroke="#DBEAFE"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.8 }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x} cy={node.y}
            r={i === 0 ? 8 : 4}
            fill={i === 0 ? '#2563EB' : '#93C5FD'}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
          />
        ))}
        {/* Pulsing ring on center node */}
        <motion.circle
          cx={nodes[0].x} cy={nodes[0].y} r={8}
          fill="none" stroke="#2563EB" strokeWidth="2"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
      </svg>

      {/* Floating Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={card.label}
          className="hero-visual__card"
          style={{
            left: card.x,
            top: card.y,
            transform: `translate(${mousePos.x * (i % 2 === 0 ? 1 : -0.7)}px, ${mousePos.y * (i % 2 === 0 ? -0.7 : 1)}px)`,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5 + card.delay * 0.5, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="hero-visual__card-inner"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: card.delay,
            }}
          >
            <span className="hero-visual__card-icon">{card.icon}</span>
            <span className="hero-visual__card-label">{card.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {/* Decorative elements */}
      <div className="hero-visual__ring hero-visual__ring--1" />
      <div className="hero-visual__ring hero-visual__ring--2" />
    </div>
  )
}
