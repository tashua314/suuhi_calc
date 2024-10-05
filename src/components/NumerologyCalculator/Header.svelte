<script lang="ts">

  let menuItems = [
    {
      text: "数秘術ってなに？",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6ac2dee186f24c34620b1e7b19bc23d6e699c67acd47ddd4219a27542c79edb?placeholderIfAbsent=true&apiKey=27592baa8e894860bd2275d751f0b74a",
    },
    { text: "計算する" },
    { text: "調べる" },
  ];
</script>

<header
  class="relative flex flex-col items-center px-2.5 py-5 w-full h-[800px] max-md:mt-10 max-md:mb-2.5"
>
  <img
    src="/background.png"
    alt="背景画像"
    class="absolute inset-0 w-full h-full object-cover z-0"
  />
  <h1
    class="relative z-10 mt-48 w-full text-6xl text-center text-fuchsia-300 max-md:text-4xl"
  >
    かんたん数秘術計算機
  </h1>
  <div
    class="relative z-10 mt-52 inline-flex items-center justify-start flex-wrap gap-2.5 pl-6 pr-64 py-5 text-4xl text-indigo-900 rounded-xl bg-fuchsia-100 bg-opacity-80 shadow-[-5px_-5px_15px_rgba(255,255,255,0.8)] max-md:mt-10 max-md:mb-2.5"
  >
    <nav class="w-auto">
      <ul class="flex items-center">
        {#each menuItems as item, index}
          <li class="flex items-center">
            {#if item.icon}
              <img
                src="{item.icon}"
                alt="{item.text} アイコン"
                class="w-[41px] aspect-square object-contain"
              />
            {/if}
            <span class="mx-2">{item.text}</span>
            {#if index < menuItems.length - 1}
              <span class="mx-2 text-white">|</span>
            {/if}
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>
