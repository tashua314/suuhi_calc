<script lang="ts">
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled: boolean = false;
  export let onClick: () => void = () => {};
</script>

<!-- Start of Selection -->
<button
  type={type}
  disabled={disabled}
  on:click={onClick}
  class="px-4 py-2 mt-4 shadow-[5px_5px_15px_rgba(0,0,0,0.8)]
         {type === 'button' ? 'btn variant-filled-primary hover:variant-ghost-primary' : ''}
         {type === 'submit' ? 'btn variant-filled-tertiary hover:variant-ghost-tertiary' : ''}
         {type === 'reset' ? 'btn variant-filled-error hover:variant-ghost-error' : ''}
         disabled:bg-gray-400"
>
  <slot></slot>
</button>
<!-- End of Selection -->