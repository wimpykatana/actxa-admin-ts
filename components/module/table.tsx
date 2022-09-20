import React, { useEffect, useState } from 'react';
import Pagination from './pagination';

interface Props {
  value: {
    tabelHeader: string[];
    tableContent: any;
  };
  name: string;
  headerColor: string;
  showPagging?: boolean;
  showTotalItem?: boolean;
}

const Table = ({
  value,
  name,
  headerColor,
  showPagging = true,
  showTotalItem = false,
}: Props) => {
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(value.tableContent.length);

  useEffect(() => {
    if (value.tableContent.length % 10 !== 0) {
      setTotalPage(value.tableContent.length / 10 + 1);
    } else {
      setTotalPage(value.tableContent.length / 10);
    }
  }, []);

  const pageFowardFunc = () => {
    if (page < value.tableContent.length / 10 - 1) {
      setPage(page + 1);
    }
  };

  const pageBackwardFunc = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const pageJumpTo = (val: number) => {
    setPage(val);
  };

  return (
    <>
      {showTotalItem && (
        <p>
          Showing{' '}
          <span className='font-bold'>
            {page === 0 ? page + 1 : (page + 1) * 10 - 9}-
            {page === 0
              ? value.tableContent.length < 10
                ? value.tableContent.length
                : '10'
              : (page + 1) * 10 > value.tableContent.length
              ? value.tableContent.length
              : (page + 1) * 10}
          </span>{' '}
          of {value.tableContent.length} {name}
        </p>
      )}

      <div className='w-[100%] overflow-hidden'>
        <div className='overflow-x-scroll py-5'>
          <table className='table-actxa border-separate border-spacing-y-1'>
            <thead
              className='text-white'
              style={{ backgroundColor: headerColor }}
            >
              <tr className='border'>
                {value.tabelHeader.map((item, i) => (
                  <th key={`table-${i}`} className='px-1 py-2 min-w-[200px]'>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='border border-separate border-spacing-2'>
              {value.tableContent
                .filter(
                  (x: any, i: number) =>
                    i >= (page === 0 ? page : page * 10) &&
                    i <= (page === 0 ? page + 10 - 1 : (page + 1) * 10 - 1)
                )
                .map((item: any, i: number) => (
                  <tr key={i}>
                    {item.map((value: any, i: number) => (
                      <td key={i} className='text-center py-5'>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {showPagging && (
        <Pagination
          pageFoward={pageFowardFunc}
          pageBackward={pageBackwardFunc}
          pageJump={pageJumpTo}
          totalPage={totalPage}
          currPage={page}
        />
      )}
    </>
  );
};

export default Table;
