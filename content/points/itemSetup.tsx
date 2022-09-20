import React from 'react';
import Table from '../../components/module/table';

const tableVal = {
  tabelHeader: ['No', 'System Generated Items', 'Points Awarded By', ''],
  tableContent: [
    ['1', 'Monthly Topic', 'System', ''],
    ['2', 'Syncing Status ', 'System', '+'],
  ],
};

const tableValDua = {
  tabelHeader: ['No', 'User Created Items', 'Points Awarded By', ''],
  tableContent: [
    ['1', 'Monthly Topic', 'System', '+'],
    ['2', 'Syncing Status ', 'System', ''],
  ],
};

const ItemSetup = () => {
  return (
    <>
      <div>Item Setup</div>

      <div className='flex gap-5'>
        <div className='w-6/12'>
          <Table
            value={tableVal}
            name='points'
            headerColor={'#EFA13B'}
            showPagging={false}
          />
        </div>
        <div className='w-6/12'>
          <Table
            value={tableValDua}
            name='points'
            headerColor={'#002245'}
            showPagging={false}
          />
        </div>
      </div>
    </>
  );
};

export default ItemSetup;
