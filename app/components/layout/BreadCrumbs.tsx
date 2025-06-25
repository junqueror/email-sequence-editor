import clsx from 'clsx';
import React from 'react';
import type { FC } from 'react';
import ChevronRightIcon from '~/assets/icons/ChevronRight.svg?react';

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
        <div className="flex gap-4" key={ `breadcrumb-${idx}`} >
          { (idx >= 1) && <ChevronRightIcon className="mt-1 size-4"/> }
          { child }
        </div>
      )) }
    </div>
  );
};

export default BreadCrumbs;

export type { BreadCrumbsProps };
