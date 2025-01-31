<script>
  export let data = {
    title: {
      content: '',
      level: 1, // to do make this dynamic somehow?
      classes: 'large-heading'
    },
    text: {
      content: '',
      classes: 'large-body font-medium'
    }
  };
  export let transition;
</script>

<section class="text-slide" data-transition={transition}>
  <h1 class={data.title.classes}>{@html data.title.content}</h1>
  <div class="text {data.text.classes}">{@html data.text.content}</div>
</section>

<style lang="scss">
  .text-slide {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
