'use client'

import { useState } from 'react'
import styles from './Card3D.module.css'

export default function Card3D() {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen((prev) => !prev)

  const coverClass = `${styles.cover} ${open ? styles.coverOpen : ''}`

  return (
    <div className={styles.scene}>
      <div className={styles.card} onClick={handleToggle}>
        <div className={styles.insideRight}>
          <div className="flex h-full flex-col items-center justify-center bg-white p-3 md:p-8">
            <p className="text-base md:text-xl text-center leading-relaxed md:hidden" style={{ color: '#c8a830', fontFamily: "'Limelight', cursive" }}>
              Admiro que siempre te has encargado de las cosas importantes...
              queriéndome tal como soy y ayudándome a ver en quién me puedo
              convertir al mismo tiempo. Me ayudaste a entender algunas cosas,
              siempre confiando en que las resolveré por mi cuenta.
            </p>
            <p className="text-base md:text-xl text-center leading-relaxed md:hidden mt-4" style={{ color: '#c8a830', fontFamily: "'Limelight', cursive" }}>
              Gracias por darme un buen comienzo, teniendo fe en que
              aterrizaré en mi propio lugar, sobre mis propios pies. Eres el
              mejor papá que podría tener. Y siempre te querré por eso. ¡Feliz
              Día del Padre!
            </p>
            <p className="hidden md:block text-lg md:text-xl text-center leading-relaxed" style={{ color: '#c8a830', fontFamily: "'Limelight', cursive" }}>
              Gracias por darme un buen comienzo, teniendo fe en que
              aterrizaré en mi propio lugar, sobre mis propios pies. Eres el
              mejor papá que podría tener. Y siempre te querré por eso. ¡Feliz
              Día del Padre!
            </p>
          </div>
        </div>

        <div className={coverClass}>
          <div className={styles.coverFront}>
            <div className="flex h-full w-full flex-col items-center justify-center bg-black p-6 md:p-10">
              <div className="flex flex-col items-center leading-none">
                <div className="flex items-baseline">
                  <span className="text-6xl md:text-8xl font-black" style={{ color: '#d97a30' }}>D</span>
                  <span className="text-6xl md:text-8xl font-black" style={{ color: '#f0c040' }}>A</span>
                  <span className="text-6xl md:text-8xl font-black" style={{ color: '#4060e0' }}>D</span>
                  <span className="text-3xl md:text-5xl font-black" style={{ color: '#f0c040', marginLeft: '-0.1em' }}>,</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 mt-1 md:mt-2">
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#60a0f0' }}>Y</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#f0c040' }}>O</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#50b070' }}>U</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#d97a30' }}>&apos;R</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#60a0f0' }}>E</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#d97a30' }}>T</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#50b070' }}>H</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#d97a30' }}>E</span>
                  <span className="text-lg md:text-2xl font-bold" style={{ color: '#f0c040', marginLeft: '-0.2em' }}>&apos;</span>
                </div>
                <div className="flex items-center mt-1 md:mt-3">
                  <span className="text-5xl md:text-7xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>G</span>
                  <span className="text-5xl md:text-7xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.</span>
                  <span className="text-5xl md:text-7xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>O</span>
                  <span className="text-5xl md:text-7xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.</span>
                  <span className="text-5xl md:text-7xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A</span>
                  <span className="text-5xl md:text-7xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>.</span>
                  <span className="text-5xl md:text-7xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>T</span>
                  <span className="text-3xl md:text-5xl font-black" style={{ color: '#c8a830', background: 'repeating-linear-gradient(45deg, #c8a830, #c8a830 2px, #d4b840 2px, #d4b840 4px)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '-0.1em' }}>.</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 mt-2 md:mt-4">
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#f0c040' }}>f</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#50b070' }}>o</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#d97a30' }}>r</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#4060e0' }}>R</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#d97a30' }}>E</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#60a0f0' }}>A</span>
                  <span className="text-2xl md:text-4xl font-bold" style={{ color: '#f0c040' }}>L</span>
                  <span className="text-lg md:text-2xl font-bold" style={{ color: '#f0c040', marginLeft: '-0.2em' }}>.</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-white/40 mt-6 md:mt-8 tracking-widest uppercase">
                Click to open
              </p>
            </div>
          </div>
          <div className={styles.coverBack}>
            <div className="hidden md:flex h-full w-full flex-col items-center justify-center bg-white p-4 md:p-8">
              <p className="text-lg md:text-xl text-center leading-relaxed" style={{ color: '#c8a830', fontFamily: "'Limelight', cursive" }}>
                Admiro que siempre te has encargado de las cosas importantes...
                queriéndome tal como soy y ayudándome a ver en quién me puedo
                convertir al mismo tiempo. Me ayudaste a entender algunas
                cosas, siempre confiando en que las resolveré por mi cuenta.
              </p>
            </div>
          </div>
        </div>

        {open && <div className={styles.crease} />}
      </div>

      <div
        className={styles.shadow}
        style={{
          opacity: open ? 0.15 : 0.3,
          background: open
            ? 'radial-gradient(ellipse, rgba(0,0,0,0.3), transparent)'
            : 'radial-gradient(ellipse, rgba(0,0,0,0.4), transparent)',
        }}
      />
    </div>
  )
}
