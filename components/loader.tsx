import React from 'react';
import Image from 'next/image';
const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center jusitfy-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Loader" fill src="/logo.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        Genius is thinking...
      </p>
    </div>
  );
};

export default Loader;
