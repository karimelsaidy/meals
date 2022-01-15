import {meals} from '../../data/data';

const initialState = {
  meals: meals,
  filterdMeals: meals,
  favMeals: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE-FAV':
      const isMealExist = state.favMeals.some(
        meal => meal.id === action.payload.id,
      );
      if (isMealExist) {
        const newFavMealArr = state.favMeals.filter(
          meal => meal.id !== action.payload.id,
        );
        return {...state, favMeals: newFavMealArr};
      } else {
        const newFavMeal = state.meals.find(
          meal => meal.id === action.payload.id,
        );
        return {...state, favMeals: state.favMeals.concat([newFavMeal])};
      }
    case 'SET_FILTER':
      const appliedFilters = action.payload;
      console.log(appliedFilters);
      const newFilterdMeals = state.meals.filter(meal => {
        console.log(meal.isVegan, meal.isGlutenFree,meal.isVegetarian, meal.isLactoseFree,"yadwy");
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.isVegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false;
        }
        return true;
      });
      console.log(newFilterdMeals,"newFilter");
      return {...state, filterdMeals: newFilterdMeals};

    default:
      return state;
  }
};

export default mealsReducer;
