<script>
  import { baseData } from '$lib/deck/base-data';
</script>

<span class="pill medium-body font-bold">
  Sprint {baseData.sprintNumber} | {baseData.presentationName}
</span>

<style lang="scss">
  .pill {
    position: fixed;
    top: var(--padding);
    right: var(--padding);
    color: var(--c-highlight);
    background: var(--c-text);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
  }
</style>