import axios from "axios"

// get all countries
export const getCountryData = () => {
    return {
        type: 'GET_COUNTRY_DATA',
      };
    };
    const getCountryDataSuccess = (data) => {
        return {
            type: 'GET_COUNTRY_DATA_SUCCESS',
            payload: data
          };
        }
        const getCountryDataFailure = (err) => {
            return {
                type: 'GET_COUNTRY_DATA_FAILURE',
                payload: err
              };
            };
            export const fetchData = (name) => {
                return (dispatch) => {
                    dispatch(getCountryData)
                    axios.get(`https://restcountries.com/v3.1/name/${name}`)
                      .then((res) => {
                        const data = res.data
                        dispatch(getCountryDataSuccess(data))
                      })
                      .catch((err) => {
                        const errorMsg = err.message
                        dispatch(getCountryDataFailure(errorMsg))
                      });
                    }
                }                