// Decorative night sky: nebula clouds, sparkle stars, shooting stars, drifting fireflies.
// All inline SVG / CSS, no extra assets.

const GOLD = '#E8B448'
const GOLD_LIGHT = '#F2C969'
const WARM_WHITE = '#FFF6D6'

function Sparkle({ size = 14, x, y, delay = 0, color = GOLD_LIGHT, opacity = 0.85 }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      style={{
        position: 'absolute', left: x, top: y,
        color,
        opacity,
        filter: `drop-shadow(0 0 ${size * 0.6}px ${color})`,
        animation: `twinkle 4.5s ease-in-out ${delay}s infinite`,
      }}
      aria-hidden="true"
    >
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="currentColor"/>
    </svg>
  )
}

function TinyStar({ x, y, size = 3, delay = 0, color = WARM_WHITE, opacity = 0.7 }) {
  return (
    <span style={{
      position: 'absolute', left: x, top: y,
      width: size, height: size, borderRadius: '50%',
      background: color,
      boxShadow: `0 0 ${size * 2}px ${color}`,
      opacity,
      animation: `twinkleSoft 3.5s ease-in-out ${delay}s infinite`,
    }} aria-hidden="true" />
  )
}

function Crescent({ x, y, size = 90 }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', left: x, top: y,
      width: size, height: size,
      animation: 'moonFloat 11s ease-in-out infinite, moonGlow 5.5s ease-in-out infinite',
      willChange: 'transform, filter',
    }}>
      <svg
        width={size} height={size} viewBox="0 0 60 60"
        style={{
          width: '100%', height: '100%',
          opacity: 0.95,
          animation: 'moonRock 14s ease-in-out infinite',
        }}
      >
        <defs>
          <radialGradient id="moonGlow" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF4D6" />
            <stop offset="65%" stopColor={GOLD_LIGHT} />
            <stop offset="100%" stopColor={GOLD} />
          </radialGradient>
        </defs>
        <path d="M40,8 A24,24 0 1 0 40,52 A18,22 0 1 1 40,8 Z" fill="url(#moonGlow)"/>
      </svg>
    </div>
  )
}

// Soft glowing nebula blob for depth
function Nebula({ x, y, w, h, color, opacity = 0.18 }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute',
      left: x, top: y,
      width: w, height: h,
      background: `radial-gradient(ellipse, ${color} 0%, transparent 65%)`,
      opacity,
      filter: 'blur(20px)',
      pointerEvents: 'none',
    }} />
  )
}

// A shooting star streaks diagonally with a gold tail
function ShootingStar({ top, left, length = 220, angle = -22, delay = 0, duration = 7 }) {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute',
      left, top,
      transform: `rotate(${angle}deg)`,
      transformOrigin: 'left center',
      width: length,
      height: 2,
      pointerEvents: 'none',
    }}>
      <div style={{
        width: '100%', height: '100%',
        background: `linear-gradient(90deg, transparent 0%, rgba(232,180,72,0.0) 10%, rgba(232,180,72,0.6) 65%, ${WARM_WHITE} 100%)`,
        borderRadius: 2,
        filter: 'drop-shadow(0 0 6px rgba(232,180,72,0.8))',
        animation: `streak ${duration}s ease-in ${delay}s infinite`,
        opacity: 0,
      }} />
    </div>
  )
}

// Drifting gold firefly that floats upward slowly
function Firefly({ x, y, size = 4, delay = 0, duration = 14 }) {
  return (
    <span aria-hidden="true" style={{
      position: 'absolute',
      left: x, bottom: y,
      width: size, height: size, borderRadius: '50%',
      background: GOLD_LIGHT,
      boxShadow: `0 0 ${size * 4}px ${GOLD_LIGHT}, 0 0 ${size * 1.5}px ${WARM_WHITE}`,
      animation: `drift ${duration}s linear ${delay}s infinite, pulse 2.4s ease-in-out ${delay}s infinite`,
      opacity: 0,
    }} />
  )
}

function SkyDecor() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      pointerEvents: 'none', overflow: 'hidden',
    }}>
      {/* Depth: soft nebula clouds in the background */}
      <Nebula x="-10%" y="-10%" w="50rem" h="40rem" color="rgba(122,88,184,0.7)" opacity={0.15} />
      <Nebula x="55%"  y="-5%"  w="44rem" h="32rem" color="rgba(99,143,200,0.6)" opacity={0.13} />
      <Nebula x="20%"  y="35%"  w="60rem" h="40rem" color="rgba(60,90,160,0.55)" opacity={0.10} />

      {/* The moon */}
      <Crescent x="78%" y="9%" size={92} />

      {/* Big sparkle stars (golden, twinkling) */}
      <Sparkle size={28} x="11%" y="13%" delay={0} />
      <Sparkle size={18} x="32%" y="9%"  delay={1.6} />
      <Sparkle size={22} x="62%" y="17%" delay={0.8} />
      <Sparkle size={16} x="88%" y="32%" delay={2.4} />
      <Sparkle size={20} x="20%" y="38%" delay={1.2} />
      <Sparkle size={14} x="48%" y="23%" delay={3.0} />
      <Sparkle size={24} x="73%" y="44%" delay={2.0} />
      <Sparkle size={16} x="6%"  y="56%" delay={1.4} />
      <Sparkle size={18} x="92%" y="62%" delay={3.4} />
      <Sparkle size={14} x="40%" y="50%" delay={0.4} />
      <Sparkle size={20} x="14%" y="68%" delay={2.6} />
      <Sparkle size={18} x="56%" y="68%" delay={0.6} />
      <Sparkle size={16} x="36%" y="78%" delay={3.2} />

      {/* Many small twinkling stars for depth */}
      {[
        ['7%','22%',3, 0.2],   ['19%','5%',2, 1.0],  ['27%','28%',3, 2.2],
        ['38%','15%',2, 0.6],  ['46%','7%',3, 1.8],  ['54%','29%',2, 2.5],
        ['66%','9%',3, 0.4],   ['80%','22%',2, 3.0], ['96%','12%',3, 1.5],
        ['4%','42%',2, 2.8],   ['16%','51%',3, 0.8], ['26%','62%',2, 1.6],
        ['44%','37%',3, 2.0],  ['58%','55%',2, 0.5], ['68%','35%',3, 3.4],
        ['76%','58%',2, 1.1],  ['86%','48%',3, 2.6], ['94%','75%',2, 0.3],
        ['10%','82%',3, 1.9],  ['22%','74%',2, 2.4], ['33%','66%',3, 0.7],
        ['50%','85%',2, 3.2],  ['64%','78%',3, 1.3], ['78%','82%',2, 2.1],
        ['88%','88%',3, 0.9],  ['2%','68%',2, 2.7],  ['98%','40%',3, 1.7],
      ].map(([x,y,size,d], i) => (
        <TinyStar key={i} x={x} y={y} size={size} delay={d} />
      ))}

      {/* Shooting stars (animated streaks at different positions/times) */}
      <ShootingStar top="14%" left="-12%" length={260} angle={-18} delay={3}  duration={9} />
      <ShootingStar top="42%" left="-12%" length={200} angle={-12} delay={11} duration={11} />
      <ShootingStar top="28%" left="60%"  length={180} angle={-28} delay={7}  duration={10} />

      {/* Drifting gold fireflies — float upward slowly */}
      <Firefly x="10%" y="-30px" size={4} delay={0}  duration={18} />
      <Firefly x="22%" y="-30px" size={3} delay={4}  duration={20} />
      <Firefly x="36%" y="-30px" size={5} delay={8}  duration={22} />
      <Firefly x="52%" y="-30px" size={3} delay={2}  duration={19} />
      <Firefly x="64%" y="-30px" size={4} delay={6}  duration={21} />
      <Firefly x="78%" y="-30px" size={3} delay={10} duration={17} />
      <Firefly x="88%" y="-30px" size={5} delay={12} duration={23} />

      <style>{`
        @keyframes twinkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.45; }
          50%      { transform: scale(1.3) rotate(20deg); opacity: 1; }
        }
        @keyframes twinkleSoft {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1; }
        }
        @keyframes streak {
          0%   { transform: translateX(-100%) scaleX(0.4); opacity: 0; }
          8%   { opacity: 1; }
          22%  { opacity: 1; transform: translateX(180vw) scaleX(1); }
          25%  { opacity: 0; }
          100% { opacity: 0; transform: translateX(180vw) scaleX(1); }
        }
        @keyframes drift {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          8%   { opacity: 0.9; }
          90%  { opacity: 0.7; }
          100% { transform: translateY(-110vh) translateX(40px); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { filter: brightness(0.8); }
          50%      { filter: brightness(1.3); }
        }
        @keyframes moonFloat {
          0%, 100% { transform: translateY(0) translateX(0); }
          50%      { transform: translateY(-14px) translateX(6px); }
        }
        @keyframes moonGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(232,180,72,0.55)); }
          50%      { filter: drop-shadow(0 0 42px rgba(242,201,105,0.95)); }
        }
        @keyframes moonRock {
          0%, 100% { transform: rotate(-3deg); }
          50%      { transform: rotate(3deg); }
        }
      `}</style>
    </div>
  )
}

export default SkyDecor
