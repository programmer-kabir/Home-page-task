import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './helpfullTabs.css'
import TabsData from '../../../Hook/TabsData';
import HelpFullTabsCard from './HelpFullTabsCard/HelpFullTabsCard';

const HelpFullTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [tableData] = TabsData()


    const categoryOne = tableData.filter(item => item.category === 'Category 1');
    const categoryTwo = tableData.filter(item => item.category === 'Category 2');
    const categoryThree = tableData.filter(item => item.category === 'Category 3');
    const categoryFour = tableData.filter(item => item.category === 'Category 4');
    const categoryFive = tableData.filter(item => item.category === 'Category 5');


    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Electical</Tab>
                    <Tab>Mecanical</Tab>
                    <Tab>service</Tab>

                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 w-full mt-20'>
                        {
                            categoryOne.map(item => <HelpFullTabsCard key={item.id} item={item}></HelpFullTabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 w-full mt-20'>
                        {
                            categoryTwo.map(item => <HelpFullTabsCard key={item.id} item={item}></HelpFullTabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 w-full mt-20'>
                        {
                            categoryThree.map(item => <HelpFullTabsCard key={item.id} item={item}></HelpFullTabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-4 gap-2 w-full mt-20'>
                        {
                            categoryFour.map(item => <HelpFullTabsCard key={item.id} item={item}></HelpFullTabsCard>)
                        }
                    </div>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default HelpFullTabs;