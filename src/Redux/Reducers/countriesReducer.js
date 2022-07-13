const initialCountriesData = {
    loading: false,
  countries: [],
  filterdCountries: [],
  error: '',
  favoriteCountries: []
}

export const countriesReducer = (state = initialCountriesData, action) => {
    switch (action.type) {
        case 'GET_ALL_COUNTRIES':
          return {
            ...state,
            loading: true
          }
        case 'GET_ALL_COUNTRIES_SUCCESS':
          return {
            ...state,
            countries: action.payload,
            filterdCountries: action.payload
          }
        case 'GET_ALL_COUNTRIES_FAILURE':
          return {
            ...state,
            error: action.payload
          }
        case 'GET_ALL_FILTERED_COUNTRIES':
          const filterdCountries = state.countries.filter(country => country.name.common.toLowerCase().startsWith(action.payload.toLowerCase()))
          return {
            ...state,
            countries: state.countries,
            filterdCountries: filterdCountries,
          }
        case 'GET_ALL_FAVOURITES_COUNTRIES':
          let country = action.payload.country
          const isDuplicate = state.favoriteCountries.some(
            (value) => value.name.common === country.name.common
          );
          let newArry = [...state.favoriteCountries]
          if (isDuplicate) {
            const deletedIndix = state.favoriteCountries.findIndex(val => val.name.common === country.name.common);
            newArry.splice(deletedIndix, 1)
          } else {
            newArry = [...newArry, country]
          }
          return {
            ...state,
            favoriteCountries: newArry
          }
        case 'DELETE_COUNTRY_FROM_FAVOURITES':
          let name = action.payload
          let newFavouritList = [...state.favoriteCountries]
          const deletedIndx = state.favoriteCountries.findIndex(val => val.name.common === name);
          newFavouritList.splice(deletedIndx, 1)
          return {
            ...state,
            favoriteCountries: newFavouritList
          }
        default:
          return state;
      }
    };
