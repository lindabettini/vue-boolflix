<template>
	<header>
		<h1>BOOLFLIX</h1>
		<input type="text" name="search" v-model.trim="queryField" :placeholder="placeholder || 'Scrivi qui...'" @keyup.enter="$emit('searched', queryField)" />
		<button type="button" @click="$emit('searched', queryField)">Cerca</button>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: ["placeholder"],
	data() {
		return {
			queryField: "",
		};
	},
};
</script>

<style lang="scss" scoped></style>
