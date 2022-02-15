<template>
	<main class="container">
		<div id="empty-sections" v-if="!movies.lenght & !series.length">
			<h2>Cerca un film o una serie...</h2>
		</div>
		<div v-else>
			<section v-if="movies.length" id="movies-list">
				<h2>Movies</h2>

				<Card v-for="movie in movies" :key="movie.id" :item="movies" />
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
		</div>
	</main>
</template>

<script>
import Card from "../components/Card.vue";
export default {
	name: "Main",
	components: { Card },
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

#empty-sections {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
	height: 100vh;
}
</style>
