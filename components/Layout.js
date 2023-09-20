import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';


export default function Layout({ children }) {
  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col max-w-6xl  w-full mx-auto">
        {children}
      </div>
    </div>
  );
}
