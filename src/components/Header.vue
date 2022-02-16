<template>
	<header class="row">
		<div class="col-6">
			<h1>BOOLFLIX</h1>
		</div>
		<div class="col-6 text-end">
			<input type="text" name="search" v-model.trim="queryField" :placeholder="placeholder || 'Scrivi qui...'" @keyup.enter="$emit('searched', queryField)" />
			<button type="button" @click="$emit('searched', queryField)">Cerca</button>
		</div>
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

<style lang="scss" scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	background-color: black;
	h1 {
		color: rgb(227, 8, 19);
	}
	input {
		border: 1px solid black;
		border-radius: 10px 0 0 10px;
	}
	button {
		background-color: rgb(227, 8, 19);
		color: black;
		font-weight: 500;
		border-radius: 0 10px 10px 0;
		border: 1px solid black;
	}
}
</style>
