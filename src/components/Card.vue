<template>
	<div class="row text-center">
		<ul class="card col-3">
			<li>{{ item.title }}</li>
			<li>{{ item.original_title }}</li>
			<li>{{ item.original_language }}</li>
			<li>{{ item.vote_average }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: ["item"],
};
</script>

<style lang="scss" scoped>
ul {
	list-style-type: none;
}
</style>
