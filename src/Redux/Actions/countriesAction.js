import axios from "axios"

// get all countries
export const getAllCountries = () => {
    return {
        type: 'GET_ALL_COUNTRIES',
      }
    }
    const getAllCountriesSuccess = (data) => {
        return {
            type: 'GET_ALL_COUNTRIES_SUCCESS',
            payload: data
          }
        }
        const getAllCountriesFailure = (err) => {
            return {
                type: 'GET_ALL_COUNTRIES_FAILURE',
                payload: err
            }
        }
        export const fetchDataForCountries = () => {
        return (dispatch) => {
            dispatch(getAllCountries)
            axios.get(`https://restcountries.com/v3.1/all`)
              .then((res) => {
                const data = res.data
                dispatch(getAllCountriesSuccess(data))
              })
              .catch((err) => {
                const errorMsg = err.message
                dispatch(getAllCountriesFailure(errorMsg))
              })
            }

        }
        // filter countries
        export const getAllFilteredCountries = (value) => {
            return {
                type: 'GET_ALL_FILTERED_COUNTRIES',
                payload: value
              };
            };
            export const getAllFavouritesCountries = (index, country) => {   
                return {
                    type: 'GET_ALL_FAVOURITES_COUNTRIES',
                    payload: { index: index, country: country }
                  };
                };
                // delete favourit country[]
                export const deleteCountryFromFavourites = (name) => {
                  return {
                    type: 'DELETE_COUNTRY_FROM_FAVOURITES',
                    payload: name
                  }
                } 