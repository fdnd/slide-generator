<script>
  import SlidesGenerator from '$lib/deck/SlidesGenerator.svelte'
</script>

<svelte:head>
  <title>Sprint <%= sprintNumber %> - <%= presentationNiceName %></title>
</svelte:head>

<SlidesGenerator />
