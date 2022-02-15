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
			{{ calculateStars() }}
			<i class="fas fa-star"></i>
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
	},
	methods: {
		calculateStars(voteValue) {
			voteValue = this.item.vote_average / 2;
			return voteValue;
		},

		switchStars(voteValue) {
			let stars;
			if (voteValue.value <= 1) {
				stars = 1;
				return stars;
			} else if (voteValue.value >= 1 || voteValue.value <= 2) {
				stars = 2;
				return stars;
			} else if (voteValue.value >= 2 || voteValue.value <= 3) {
				stars = 3;
				return stars;
			} else if (voteValue.value >= 3 || voteValue.value <= 4) {
				stars = 4;
				return stars;
			} else voteValue.value >= 4 || voteValue.value <= 5;
			stars = 5;
			return stars;
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
