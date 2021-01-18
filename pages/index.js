import React, { useEffect } from 'react';
import styles from './index.css';

export default ({number = 15, x = 50, y = 50, iteration = 'infinite', targetX = 300, targetY = 500, offset = 100}) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--targetY', `${targetY}px`)
    document.documentElement.style.setProperty('--targetX', `${targetX}px`)
  }, [])

  const getStarConfig = () => {
    const arr = [];
    for(let i = 0;i<number;i++) {
      const radix = Math.random() < .5 ? 1 : -1;
      arr.push({
        top: y + parseInt(Math.random() * offset) * radix,
        left: x + parseInt(Math.random() * offset) * radix,
        rotateZ: parseInt(Math.random() * 5 * radix + 22, 10) / 100 * 45,
        scale: parseInt(Math.random() * 5 * radix + 22, 10) / 100
      })
    }
    return arr;
  }

  return (
    <div>
      {
        getStarConfig().map((item, idx) => (
          <img
            src="//img.alicdn.com/imgextra/i1/O1CN011oV9ry1OAc5wvW5uM_!!6000000001665-2-tps-139-136.png"
            className={styles['star-img']}
            style={{
              top: item.top,
              left: item.left,
              animation: `${styles['starAnimate']} 1.5s ${iteration === 'linear' ? '' : 'cubic-bezier(.66,.01,1,1)'} ${iteration} ${.2 * idx}s`,
              transform: `rotateZ(${item.rotateZ}deg) scale(${item.scale})`
            }}
          />
        ))
      }
    </div>
  );
}
