import clsx from 'clsx';
import React from 'react';
import type { FC } from 'react';

interface BreadCrumbsProps {
  children?: React.ReactNode;
  className?: string,
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({
  className = '',
  children,
}) => {
  const childrenArray = React.Children.toArray(children);

  const breadCrumbsClassNames = clsx('flex flex-row gap-4 items-center', className);

  return (
    <div
      className={ breadCrumbsClassNames }
    >
      { childrenArray.map((child, idx) => (
        <>
          { (idx >= 1) && <span className='text-gray-200'>{ ">" }</span> }
          { child }
        </>
      )) }
    </div>
  );
};

export default BreadCrumbs;

export type { BreadCrumbsProps };
