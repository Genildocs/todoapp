import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const LoadContainer = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
`;

export const LoadMotion = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  background-color: black;
  border-radius: 50%;
`;
