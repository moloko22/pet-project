import React, { useMemo } from 'react';
import Cell from '../Cell/Cell';

import styles from '../../Table.module.scss';

const TableHeader = ({ columns }) => {
  const renderHeaderCells = useMemo(() => {
    return columns.map((col, index) => {
      const { title, isSortable, className, isSticky, width } = col;
      const leftStickyPosition = isSticky
        ? `${index === 0 ? 0 : width}px`
        : null;

      return (
        <Cell
          key={title}
          className={className}
          isSticky={isSticky}
          style={{
            minWidth: `${width}px`,
            maxWidth: `${width}px`,
            left: leftStickyPosition,
          }}
        >
          {typeof title === 'function' ? title() : title}
          {isSortable ? '&' : null}
        </Cell>
      );
    });
  }, [columns]);

  return <div className={styles.tableRow}>{renderHeaderCells}</div>;
};

export default TableHeader;
