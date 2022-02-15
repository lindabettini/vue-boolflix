<template>
	<ul class="col-3">
		<li>
			<h4>{{ item.title || item.name }}</h4>
		</li>
		<li>
			<h6>{{ item.original_title || item.original_name }}</h6>
		</li>
		<li>
			<img v-if="flags.includes(item.original_language)" :src="flagSrc" :alt="item.original_language" />
			<span v-else>{{ item.original_language }}</span>
		</li>
		<li>
			{{ calculateStars }}
			<i v-for="(star, index) in calculateStars" :key="index" class="fas fa-star"></i>
		</li>
	</ul>
</template>

<script>
export default {
	name: "Card",
	props: ["item"],
	data() {
		return {
			flags: ["it", "en"],
		};
	},
	computed: {
		flagSrc() {
			return require(`../assets/img/${this.item.original_language}.png`);
		},
		calculateStars() {
			let toPrint;
			toPrint = this.item.vote_average;
			toPrint = toPrint / 2;
			toPrint = Math.ceil(toPrint);
			return toPrint;
		},
	},
};
</script>

<style lang="scss" scoped>
ul {
	list-style-type: none;
}

img {
	height: 20px;
	widows: auto;
}
</style>
