import { FC } from 'react';

interface LoaderProps { }

const Loader: FC<LoaderProps> = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="relative">
      <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-yellow-500"></div>
      <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-indigo-500 animate-spin">
      </div>
    </div>
  </div>
);

export default Loader;

