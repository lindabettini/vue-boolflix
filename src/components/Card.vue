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
			<div>Votato: {{ vote }} stelle</div>
			<i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote ? 'fas' : 'far'"></i>
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
		vote() {
			let vote = Math.ceil(this.item.vote_average / 2);
			return vote;
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
