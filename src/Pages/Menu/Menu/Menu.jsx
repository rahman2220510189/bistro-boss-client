import {  Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBg from'../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../../Home/PopularMenu/MenuCategory/MenuCategory';
import tdessert from'../../../assets/menu/dessert-bg.jpeg'
import tsalad from'../../../assets/menu/salad-bg.jpg'
import tpizza from'../../../assets/menu/pizza-bg.jpg'
import tsoup from'../../../assets/menu/soup-bg.jpg'
const Menu = () => {
const[menu] = useMenu()
const dessert = menu.filter(item => item.category === 'dessert')
const soup = menu.filter(item => item.category === 'soup')
const salad = menu.filter(item => item.category === 'salad')
const pizza = menu.filter(item => item.category === 'pizza')
const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
           <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover 
     img={menuBg}
     title='our menu'
      
      ></Cover>
      <SectionTitle
      subHeading="don't Miss" 
      heading="Today's offer"
      
      >

      </SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
    
             <MenuCategory items={dessert} title={'desserts'} img={tdessert} bigTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
             <MenuCategory items={pizza} title={'pizza'} img={tpizza} bigTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
             <MenuCategory items={salad} title={'salad'} img={tsalad} bigTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
             <MenuCategory items={soup} title={'soup'} img={tsoup} bigTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
     
        </div> 
    );
};

export default Menu;