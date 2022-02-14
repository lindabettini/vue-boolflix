<template>
	<div id="app">
		<Header />
		<Main />
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
			query: "games",
		};
	},
	methods: {
		searchMovie() {
			const config = {
				params: {
					apiKey: this.apiKey,
					query: this.query,
					language: "it-IT",
				},
			};

			axios.get(`https://api.themoviedb.org/3/search/movies`, config).then((res) => {
				this.movies = res.data.results;
			});
		},
	},
};
</script>

<style lang="scss"></style>
