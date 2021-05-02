import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';
export const RestaurantList = () => {
export const RestaurantList = ({loadRestaurants, restaurants}) => {
    
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
       <ul>
          {restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      );
 };
 const mapStateToProps = state => ({
      restaurants: state.restaurants.records,
    });

    const mapDispatchToProps = {loadRestaurants};

 it('displays the restaurants', () => {
    const noop = () => {};
    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];
  
    const {queryByText} = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />,
    );

    expect(queryByText('Sushi Place')).not.toBeNull();
 expect(queryByText('Pizza Place')).not.toBeNull();
  });
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);