import React from 'react'

import Lottie from 'react-lottie-player'

export default function Animation({lottieJson}: any) {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
    />
  )
}