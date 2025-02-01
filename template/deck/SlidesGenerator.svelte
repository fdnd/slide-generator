<script>
	import Reveal from "reveal.js";
	import Highlight from "reveal.js/plugin/highlight/highlight";
	import Markdown from "reveal.js/plugin/markdown/markdown";
	import Notes from "reveal.js/plugin/notes/notes";

	import { onMount } from "svelte";
	import { baseData } from "$lib/deck/base-data";
	

	import "reveal.js/dist/reveal.css";

	import { TextSlide, Cover } from "./slides/index.js";

	const slideContent = [
		{
			slideType: Cover,
			transition: "slide", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
			data: {
				classes: "xlarge-heading", // choose large-, or medium-heading if presentation name is too long'
				sprintNr: {
					content: `Sprint ${baseData.sprintNumber}`,
				},
				presentationName: {
					content: baseData.presentationName,
				},
				type: {
					content: "workshop",
				},
				emojis: {
					content: ["🚀", "💪", "="], // max 3 emojis
				}
			}
		},
		{
			slideType: TextSlide,
			transition: "slide", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
			data: {
				title: {
					content: "Sprint 11 - Visuele Hierarchie",
					level: 1,
					classes: "large-heading",
				},
				text: {
					content: "Slide nummer 1.",
					classes: "large-body font-medium",
				},
			},
		},
		{
			slideType: TextSlide,
			transition: "zoom", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
			data: {
				title: {
					content: "Sprint 12 - Visuele Hierarchie",
					level: 1,
				},
				text: {
					content: "Slide nummer 2.",
				},
			},
		},
	];

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
			<svelte:component
				this={slide.slideType}
				data={slide.data}
				transition={slide.transition}
			/>
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
