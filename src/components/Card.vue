<template>
	<div class="card-container m-3 p-0" :style="{ backgroundImage: `url(${posterPath})` }">
		<ul class="col-3 p-3">
			<li>
				<h2>{{ item.title || item.name }}</h2>
			</li>
			<li>
				<h6>{{ item.original_title || item.original_name }}</h6>
			</li>
			<li>
				<img v-if="flags.includes(item.original_language)" :src="flagSrc" :alt="item.original_language" />
				<span v-else>{{ item.original_language }}</span>
			</li>
			<li>
				<i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote ? 'fas' : 'far'"></i>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: ["item"],
	data() {
		return {
			flags: ["it", "en"],
			images: {
				baseUri: "https://image.tmdb.org/t/p/w342",
				placeholder: "http://www.altavod.com/assets/images/poster-placeholder.png",
			},
		};
	},
	computed: {
		flagSrc() {
			return require(`../assets/img/${this.item.original_language}.png`);
		},
		vote() {
			let vote = Math.ceil(this.item.vote_average / 2);
			return vote;
		},
		posterPath() {
			if (!this.item.poster_path) return this.images.placeholder;
			return this.images.baseUri + this.item.poster_path;
		},
	},
};
</script>

<style lang="scss" scoped>
.card-container {
	width: 342px;
	height: 500px;
	color: white;
	cursor: pointer;
}

ul {
	list-style-type: none;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	li {
		margin: 5px;
	}
}

img {
	height: 20px;
	widows: auto;
}
</style>
