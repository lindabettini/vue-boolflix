<template>
	<main class="container">
		<section v-if="movies.length" id="movies-list">
			<h2>Movies</h2>
			<div class="row text-center">
				<ul class="card col-3" v-for="movie in movies" :key="movie.id">
					<li>{{ movie.title }}</li>
					<li>{{ movie.original_title }}</li>
					<li>{{ movie.original_language }}</li>
					<li>{{ movie.vote_average }}</li>
				</ul>
			</div>
		</section>
		<section v-if="series.length" id="series-list">
			<h2>Series</h2>
			<div class="row text-center">
				<ul class="card col-3" v-for="serie in series" :key="serie.id">
					<li>{{ serie.name }}</li>
					<li>{{ serie.original_name }}</li>
					<li>{{ serie.original_language }}</li>
					<li>{{ serie.vote_average }}</li>
				</ul>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: "Main",
	props: ["movies", "series"],
};
</script>

<style lang="scss" scoped>
ul {
	list-style-type: none;
}

.card {
	border: 2px solid black;
}
</style>
