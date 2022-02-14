<template>
	<main>
		<section v-if="movies.length" id="movies-list">
			<h2>Movies</h2>
			<ul>
				<li class="card" v-for="movie in movies" :key="movie.id">
					<div>{{ movie.title }}</div>
					<div>{{ movie.original_title }}</div>
					<div>{{ movie.original_language }}</div>
					<div>{{ movie.vote_average }}</div>
				</li>
			</ul>
		</section>
		<section v-if="series.length" id="series-list">
			<h2>Series</h2>
			<ul>
				<li class="card" v-for="serie in series" :key="serie.id">
					<div>{{ serie.name }}</div>
					<div>{{ serie.original_name }}</div>
					<div>{{ serie.original_language }}</div>
					<div>{{ serie.vote_average }}</div>
				</li>
			</ul>
		</section>
	</main>
</template>

<script>
export default {
	name: "Main",
	props: ["movies", "series"],
};
</script>

<style lang="scss" scoped></style>
