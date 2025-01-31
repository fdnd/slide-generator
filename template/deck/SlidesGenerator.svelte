<script>
	import { onMount } from "svelte";

	import Reveal from "reveal.js";
	import Highlight from "reveal.js/plugin/highlight/highlight";
	import Markdown from "reveal.js/plugin/markdown/markdown";
	import Notes from "reveal.js/plugin/notes/notes";

	import "reveal.js/dist/reveal.css";
	
	import { TextSlide } from "./slides/index.js";


const slideContent = [
	{
		slideType: TextSlide,
		transition: 'slide', // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
		data: {
			title: {
				content: "Sprint <%= sprintNumber %> - <%= presentationNiceName %>",
				level: 1,
			},
			text: {
				content: "Slide nummer 1.",
			}
		}
	},
	{
		slideType: TextSlide,
		transition: 'zoom', // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
		data: {
			title: {
				content: "Sprint <%= sprintNumber %> - <%= presentationNiceName %>",
				level: 1,
			},
			text: {
				content: "Slide nummer 2.",
			}
		}
	},
]



	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: "ease",
			autoAnimateDuration: 1,
			hash: true,
			// controls: false,
			// progress: false
		});

		deck.initialize();
	});
</script>

<div class="reveal">
	<div class="slides">
		{#each slideContent as slide}
				<svelte:component this={slide.slideType} data={slide.data} transition={slide.transition} />
		{/each}
	</div>
</div>

<style>
	.slides {
		width: 100% !important;
		height: 100% !important;
		inset: 0 !important;
		transform: none !important;
	}
	:global(.reveal.center .slides section) {
		min-height: 100vh !important;
	}
</style>
