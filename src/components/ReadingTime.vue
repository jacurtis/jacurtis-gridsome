<template>
	<div class="reading-time">
		{{ coffees }} {{ readingMins }} min read
	</div>
</template>

<script>
const readingTime = require('reading-time')
export default {
	props: {
		content: String
	},
	computed: {
		readingMins: function() {
			const time = Math.round(readingTime(this.content)['minutes'])
			return (time || 1)
		},
		coffees: function() {
			let cups = Math.ceil(this.readingMins / 5)
			if (cups > 5) {
				return (new Array(5).fill('☕️').join('')) + (new Array(cups-5).fill('🥯').join(''));
			} else {
				return new Array(cups || 1).fill('☕️').join('')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.reading-time {
		display: inline-flex;
	}
</style>