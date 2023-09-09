import React, { useState } from 'react';

export default function Component () {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <button 
      className={hovered ? 'pulse animated' : ''}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
    </button>
  )
}