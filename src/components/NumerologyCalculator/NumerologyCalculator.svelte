<script lang="ts">
  import Header from "./Header.svelte";
  import Calculator from "./Calculator.svelte";
  import NumberGrid from "./NumberGrid.svelte";
</script>

<main
  class="flex overflow-hidden flex-col items-center pt-2 font-bold whitespace-nowrap"
>
  <Header />
  <section
    class="flex relative flex-col items-center self-stretch px-20 w-full max-md:px-5 max-md:py-24 max-md:max-w-full"
  >
    <Calculator />
  </section>
  <NumberGrid />
</main>
