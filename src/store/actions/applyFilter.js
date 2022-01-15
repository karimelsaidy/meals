const applyFilter = filters => {
  return {
    type: 'SET_FILTER',
    payload: {
      isGlutenFree: filters.isGlutenFree,
      isVegan: filters.isVegan,
      isVegetarian: filters.isVegetarian,
      isLactoseFree: filters.isLactoseFree,
    },
  };
};

export default applyFilter;