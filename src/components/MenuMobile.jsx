import React from 'react';
import { motion } from 'framer-motion';

export default function MenuMobile({ themeDark }) {
  return (
    <div
      className={`${themeDark}  flex justify-around items-center rounded-lg shadow-lg  mt-8 p-3 gap-3`}
    >
      <motion.button initial={{}} whileHover={{ color: '#3a7bfd', scale: 1.1 }}>
        All
      </motion.button>
      <motion.button whileHover={{ color: '#3a7bfd', scale: 1.1 }}>
        Active
      </motion.button>
      <motion.button whileHover={{ color: '#3a7bfd', scale: 1.1 }}>
        Completed
      </motion.button>
    </div>
  );
}
