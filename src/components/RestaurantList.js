import {useEffect} from 'react';

export const RestaurantList = () => {
export const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

   return <div>RestaurantList</div>;
 };