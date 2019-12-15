import { CountriesActionTypes as ActionTypes } from '../types/ActionTypes';

export const fetchCountries = (searchQuery) => ({
	type: ActionTypes.fetch_countries,
	searchQuery:searchQuery,
});

export const fetchCountriesResult = (hasError, countries) => ({
	type: ActionTypes.fetch_countries_result,
	hasError:hasError,
	countries:countries,
});

export const changeSearchQuery = (searchQuery) => ({
	type: ActionTypes.change_search_query,
	searchQuery,
});