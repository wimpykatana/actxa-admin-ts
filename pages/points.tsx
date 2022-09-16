import React from 'react';
import Admin from '../layouts/Admin';
import Page from '../layouts/DashboardPage';
import Tabs from '../components/tabs';
import Overview from '../content/points/overview';
import ItemSetup from '../content/points/itemSetup';
import BadgeSetup from '../content/points/badgeSetup';

const Points = () => {
  return (
    <Admin>
      <Page>
        <Tabs
          tabHeader={['Points Overview', 'Points Item Setup', 'Badge Setup']}
          tabs={[
            <Overview key='overview' />,
            <ItemSetup key='item-setup' />,
            <BadgeSetup key='badge-setup' />,
          ]}
        />
      </Page>
    </Admin>
  );
};

export default Points;
