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
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 p-8">
            <p className="text-2xl text-red-800 text-center font-bold mb-3">
              Love you, Dad!
            </p>
            <p className="text-lg text-red-700 text-center">
              From your favorite child
            </p>
          </div>
        </div>

        <div className={coverClass}>
          <div className={styles.coverFront}>
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-500 via-orange-400 to-red-500 p-8">
              <div className="text-center">
                <div className="text-7xl mb-6">🎁</div>
                <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
                  Happy Father&apos;s Day
                </h2>
                <p className="text-sm text-white/60 mt-6 tracking-widest uppercase">
                  Click to open
                </p>
              </div>
            </div>
          </div>
          <div className={styles.coverBack}>
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 p-8">
              <div className="text-5xl mb-4">❤️</div>
              <p className="text-lg text-red-800 text-center font-medium leading-relaxed">
                Thanks for always being there, Dad
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