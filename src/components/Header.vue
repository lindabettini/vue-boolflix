<template>
	<header>
		<h1>BOOLFLIX</h1>
		<input type="text" name="search" v-model.trim="query" :placeholder="placeholder || 'Scrivi qui...'" @keyup.enter="$emit('searched', query)" />
		<button type="button" @click="$emit('searched', query)">Cerca</button>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: ["placeholder"],
	data() {
		return {
			query: "",
		};
	},
};
</script>

<style lang="scss" scoped></style>
