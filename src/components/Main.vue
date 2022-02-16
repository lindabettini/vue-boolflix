<template>
	<main class="container">
		<div id="empty-sections" v-if="!movies.lenght & !series.length">
			<h2>Cerca un film o una serie...</h2>
		</div>
		<!-- MOVIES LISTS SECTIONS  -->
		<div v-else>
			<section v-if="movies.length" id="movies-list">
				<h2 class="text-center">Movies</h2>
				<div class="list-section">
					<div class="row text-center justify-content-center">
						<Card v-for="movie in movies" :key="movie.id" :item="movie" />
					</div>
				</div>
			</section>
			<section v-if="series.length" id="series-list" class="list-section">
				<h2 class="text-center">Series</h2>
				<div class="list-section">
					<div class="row text-center">
						<Card v-for="serie in series" :key="serie.id" :item="serie" />
					</div>
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

#empty-sections {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	text-align: center;
	height: 100vh;
	color: rgb(187, 187, 187);
}
</style>
