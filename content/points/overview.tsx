import React, { useState } from 'react'
import InputText from '../../components/module/inputText'
import { BiSearch } from 'react-icons/bi'

const Overview = () => {
  const [serachValue, setSearchValue] = useState<string>()
  return (
    <>
        <div>
            <InputText icon={<BiSearch />} type={'text'} value={serachValue} onChangeHandle={setSearchValue}/>
            {serachValue}
        </div>
    </>
  )
}

export default Overview
