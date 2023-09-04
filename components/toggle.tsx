'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Toggle() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(Math.random() > 0.5);
  }, []);
  const toggle = () => setEnabled((old) => !old);

  return (
    <div
      onClick={toggle}
      className={cn(
        'flex aspect-[2/1] w-1/4 rounded-full bg-stone-800 p-1',
        enabled ? 'justify-end' : 'justify-start'
      )}
    >
      <motion.div
        className="flex aspect-square h-full flex-row items-center justify-center overflow-clip rounded-full bg-white p-1 text-stone-800"
        layout
      />
    </div>
  );
}

export default Toggle;
