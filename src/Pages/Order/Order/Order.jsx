import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/UseMenu';
import OrderdBy from '../../../components/OderdBy/OrderdBy';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const{category} =useParams()
    const initialIndex =categories.indexOf(category)
    const[tabIndex, setTabindex] =useState(initialIndex);
    const [menu] =useMenu();
    
    
const dessert = menu.filter(item => item.category === 'dessert')
const soup = menu.filter(item => item.category === 'soup')
const salad = menu.filter(item => item.category === 'salad')
const pizza = menu.filter(item => item.category === 'pizza')
const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                    <title>Bistro Boss | Order Food</title>
                  </Helmet>
            <Cover img={orderCover} title='OUR SHOP'></Cover>
            <div className='text-center mt-12 mb-10 text-gray-800 font-bold hover:text-yellow-600 '>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                 <OrderdBy item={salad}></OrderdBy>
                
                </TabPanel>
                <TabPanel>
                    <OrderdBy item={pizza}></OrderdBy>
                </TabPanel>
                <TabPanel>
                    <OrderdBy item={soup}></OrderdBy>
                </TabPanel>
                <TabPanel> 
                    <OrderdBy item={dessert}></OrderdBy>
                </TabPanel>
                <TabPanel>
                    <OrderdBy item={drinks}></OrderdBy>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Order;





