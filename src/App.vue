<template>
	<div id="app">
		<Header placeholder="Cerca un film..." @searched="searchMovie" />
		<Main :movies="movies" />
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
			apiKey: "9165cfcc7a4de7472e23d49699f35185",
		};
	},
	methods: {
		searchMovie(query) {
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
		},
	},
};
</script>

<style lang="scss"></style>
