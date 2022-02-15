<template>
	<div class="row text-center">
		<div class="card col-3">
			<ul>
				<li>{{ item.title || item.name }}</li>
				<li>{{ item.original_title || original_name }}</li>
				<li>{{ item.original_language }}</li>
				<li>{{ item.vote_average }}</li>
			</ul>
		</div>
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
