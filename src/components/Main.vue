<template>
	<main>
		<section id="movies-list">
			<h2>Movies</h2>
			<ul>
				<li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
			</ul>
		</section>
		<section id="series-list">
			<ul>
				<li>ciai</li>
			</ul>
		</section>
	</main>
</template>

<script>
export default {
	name: "Main",
	props: ["movies"],
};
</script>

<style lang="scss" scoped></style>
