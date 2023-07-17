import * as React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framer/index';

interface MotionOpacityProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const MotionOpacity: React.FC<MotionOpacityProps> = (props) => {
  return (
    <motion.div className={props.className} initial="hidden" animate="visible" exit="hidden" variants={fadeIn}>
      {props.children}
    </motion.div>
  );
};

export default MotionOpacity;
