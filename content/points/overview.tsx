import React, { useState } from 'react';
import InputText from '../../components/module/inputText';
import Table from '../../components/module/table';
import { BiSearch } from 'react-icons/bi';

const tableVal = {
  tabelHeader: [
    'No',
    'Company',
    'Total',
    'Mothly Topic',
    'Syncing Status',
    'Group Challenge',
    'Individual Challenge',
    'Bonus Activity - Activity Based',
    'Bonus Activity - HLS',
    'Bonus Activity - Content Based : Manual Points 01',
    'Bonus Activity - Content Based : Manual Points 02',
    'Bonus Activity - Content Based : Manual Points 03',
    'Bonus Activity - Content Based : Manual Points 04',
    'Bonus Activity - Content Based : Manual Points 05',
    'Group Challenge Winner: 1st',
    'Group Challenge Winner: 2nd',
    'Group Challenge Winner: 3rd',
    'Group Challenge Leader',
    'Pre-Topic Survery',
    'Post-Topic Survery',
    'Updated On',
  ],
  tableContent: [
    [
      1,
      'BDCC International Group',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      2,
      'Bell Group',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      3,
      'BJC Group',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      4,
      'Channel X Pte Ltd',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      5,
      'Fidelity International Informative Services Inc',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      6,
      'MCII Group',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      7,
      'Sandboss Pte Ltd',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      8,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      9,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      10,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      11,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      12,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      13,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      14,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      15,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      16,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      17,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      18,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      19,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      20,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      21,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      22,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      23,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      24,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      25,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      26,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      27,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      28,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      29,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      30,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      31,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      32,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
    [
      33,
      'Lorem Ipsum',
      195,
      10,
      10,
      50,
      20,
      15,
      '-',
      5,
      5,
      '-',
      '-',
      '-',
      30,
      20,
      10,
      10,
      5,
      5,
      '08 Jan 2022',
    ],
  ],
};

const Overview = () => {
  const [serachValue, setSearchValue] = useState<string>();
  return (
    <>
      <div className='mb-5'>
        <InputText
          icon={<BiSearch />}
          type={'text'}
          value={serachValue}
          onChangeHandle={setSearchValue}
        />
      </div>
      <Table
        value={tableVal}
        name={'Companies'}
        headerColor={'#728493'}
        showTotalItem={true}
      />
    </>
  );
};

export default Overview;
