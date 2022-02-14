<template>
	<main>
		<section id="movies-list">
			<h2>Movies</h2>
			<ul>
				<li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
			</ul>
		</section>
		<section id="series-list">
			<h2>Series</h2>
			<ul>
				<li v-for="serie in series" :key="serie.id">{{ serie.name }}</li>
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
