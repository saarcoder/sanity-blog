<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  :global(body) {
    background-image: radial-gradient(
        circle at 10% 20%,
        rgba(231, 51, 6, 0.3),
        rgba(112, 13, 6, 0.3) 34%,
        transparent
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(209, 233, 76, 0.3),
        rgba(223, 57, 15, 0.5) 70%,
        transparent
      ),
      radial-gradient(
        circle at 20% 50%,
        rgba(243, 242, 12, 0.6),
        rgba(204, 38, 9, 0.4) 22%,
        transparent
      ),
      linear-gradient(45deg, orange, yellow, lightcoral);
    height: 100vh;
  }
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
