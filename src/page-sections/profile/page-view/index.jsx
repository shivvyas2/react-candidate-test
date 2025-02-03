import { useState } from 'react'; 
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext'; 

import Layout from '../Layout';
import Overview from '../overview/index';
import Projects from '../projects/Projects';
import Activity from '../activity/Activity';
import Campaigns from '../campaigns/Campaigns';
import Documents from '../documents/Documents';
import Connections from '../connections/Connections';
import UserDetails from '../user-details/UserDetails';

export default function ProfilePageView() {
  const [tabValue, setTabValue] = useState('1');

  const handleTabChange = (_, value) => setTabValue(value);

  return (
    <div className="pt-2 pb-4">
      <TabContext value={tabValue}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="1">
            <Overview />
          </TabPanel>

          <TabPanel value="2">
            <Projects />
          </TabPanel>

          <TabPanel value="3">
            <Campaigns />
          </TabPanel>

          <TabPanel value="4">
            <Documents />
          </TabPanel>

          <TabPanel value="5">
            <Connections />
          </TabPanel>

          <TabPanel value="6">
            <Activity />
          </TabPanel>

          <TabPanel value="7">
            <UserDetails />
          </TabPanel>
        </Layout>
      </TabContext>
    </div>
  );
}