import React, { useState } from 'react';
import InputText from '../../components/module/inputText';
import { BiSearch } from 'react-icons/bi';

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
      <p>Showing 41-50 of 50 Companies</p>
    </>
  );
};

export default Overview;
