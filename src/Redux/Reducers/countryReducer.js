const initialCountryData = {
    loading: false,
  country: [],
  error: ''
}
export const countryReducer = (state = initialCountryData, action) => {
    switch (action.type) {
        case 'GET_COUNTRY_DATA':
          return {
            ...state,
            loading: true
          }
        case 'GET_COUNTRY_DATA_SUCCESS':
          return {
            loading: false,
            country: action.payload,
            error: ''
        }
        case 'GET_COUNTRY_DATA_FAILURE':
          return {
            loading: false,
            country: [],
            error: action.payload
          }
        default:
          return state;
      }
    }; 