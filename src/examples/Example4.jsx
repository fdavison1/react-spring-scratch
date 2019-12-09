
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'

function Card() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(2000px) rotateX(${flipped ? 720 : 0}deg)`,
    config: { mass: 7, tension: 350, friction: 90 }
  })
  return (
    <div className='unicorn'  onClick={() => set(state => !state)}>
      <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} ><div className='span'>Too dope for you</div></a.div>
      <a.div class="c front"style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(720deg)`) }}><div className='span'>NPH on a unicorn, your argument is invalid</div></a.div>
    </div>
  )
}

export default Card