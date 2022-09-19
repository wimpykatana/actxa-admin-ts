import React, { useEffect, useState } from 'react';
import Pagination from './pagination';

interface Props {
  value: {
    tabelHeader: string[];
    tableContent: any;
  };
}

const Table = ({ value }: Props) => {
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

  return (
    <>
      <p>
        Showing{' '}
        <span className='font-bold'>
          {page === 0 ? page + 1 : (page + 1) * 10 - 9}-
          {page === 0
            ? '10'
            : (page + 1) * 10 > value.tableContent.length
            ? value.tableContent.length
            : (page + 1) * 10}
        </span>{' '}
        of {value.tableContent.length} Companies
      </p>
      <div className='w-[100%] overflow-hidden'>
        <div className='overflow-x-scroll py-10'>
          <table className='table-actxa styles.table-actxa border-separate border-spacing-y-1'>
            <thead className='bg-[#728493] text-white'>
              <tr className='py-1 border'>
                {value.tabelHeader.map((item, i) => (
                  <th key={`table-${i}`} className='px-5 min-w-[200px]'>
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
                .map((item: any) => (
                  <tr key={item.no}>
                    <td className='text-center py-5'>{item.no}</td>
                    <td className='text-center'>{item.company}</td>
                    <td className='text-center'>{item.total}</td>
                    <td className='text-center'>{item.monthlyTopic}</td>
                    <td className='text-center'>{item.syncingStatus}</td>
                    <td className='text-center'>{item.groupChallenge}</td>
                    <td className='text-center'>{item.individualChallenge}</td>
                    <td className='text-center'>{item.bonusActivityBased}</td>
                    <td className='text-center'>{item.bonusActivityHLS}</td>
                    <td className='text-center'>
                      {item.bonusActivityContentBased1}
                    </td>
                    <td className='text-center'>
                      {item.bonusActivityContentBased2}
                    </td>
                    <td className='text-center'>
                      {item.bonusActivityContentBased3}
                    </td>
                    <td className='text-center'>
                      {item.bonusActivityContentBased4}
                    </td>
                    <td className='text-center'>
                      {item.bonusActivityContentBased5}
                    </td>
                    <td className='text-center'>
                      {item.groupChallengeWinner1}
                    </td>
                    <td className='text-center'>
                      {item.groupChallengeWinner2}
                    </td>
                    <td className='text-center'>
                      {item.groupChallengeWinner3}
                    </td>
                    <td className='text-center'>{item.groupChallengeLeader}</td>
                    <td className='text-center'>{item.preTopicSurvery}</td>
                    <td className='text-center'>{item.postTopicSurvery}</td>
                    <td className='text-center'>{item.updatedOn}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Pagination
        pageFoward={pageFowardFunc}
        pageBackward={pageBackwardFunc}
        totalPage={totalPage}
        currPage={page}
      />
    </>
  );
};

export default Table;
