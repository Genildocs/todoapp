import React from 'react';
import { LoadContainer, LoadMotion } from './LoadStyle';

export default function Load() {
  return (
    <LoadContainer>
      <LoadMotion
        className="load-motion"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.1,
        }}
      ></LoadMotion>
      <LoadMotion
        className="load-motion"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.1,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.2,
        }}
      ></LoadMotion>
      <LoadMotion
        className="load-motion"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.3,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.3,
        }}
      ></LoadMotion>
    </LoadContainer>
  );
}
