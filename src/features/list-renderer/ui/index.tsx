import React from 'react';

interface ListRendererParams<T> {
  data: T[];
  rendererItem: (item: T) => React.ReactNode;
  className?: string;
}

export const ListRenderer = <T,>({data, rendererItem, className}: ListRendererParams<T>) => {
  return (
    <div className={className}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {rendererItem(item)}
        </React.Fragment>
      ))}
    </div>
  )
}
