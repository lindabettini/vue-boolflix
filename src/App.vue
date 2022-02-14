<template>
	<div id="app">
		<Header placeholder="Cerca un film..." @searched="searchUserRequest" />
		<Main :movies="movies" :series="series" />
	</div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main";

export default {
	name: "App",
	components: {
		Header,
		Main,
	},
	data() {
		return {
			movies: [],
			series: [],
			apiKey: "9165cfcc7a4de7472e23d49699f35185",
		};
	},
	methods: {
		searchUserRequest(query) {
			const config = {
				params: {
					api_key: this.apiKey,
					query: query,
					language: "it-IT",
				},
			};

			axios.get(`https://api.themoviedb.org/3/search/movie`, config).then((res) => {
				this.movies = res.data.results;
			});

			axios.get(`https://api.themoviedb.org/3/search/tv`, config).then((res) => {
				this.series = res.data.results;
			});
		},
	},
};
</script>

<style lang="scss"></style>
