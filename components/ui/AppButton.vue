<template>
  <component
    :is="isExternal ? 'a' : 'NuxtLink'"
    :href="isExternal ? to : undefined"
    :to="!isExternal ? to : undefined"
    :class="[
      'relative flex sm:inline-flex w-full sm:w-auto group p-[1.5px] overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] cursor-pointer',
      variant === 'singular' ? 'rounded-sm' : 'rounded-full',
    ]"
  >
    <div
      class="gradient-layer opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow"
      :style="{ background: gradientColor }"
    ></div>

    <div
      class="gradient-layer opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-spin-slow blur-md"
      :style="{ background: gradientColor }"
    ></div>

    <div
      :class="[
        'absolute inset-0 border border-white/10 group-hover:border-transparent transition-colors duration-500',
        variant === 'singular' ? 'rounded-sm' : 'rounded-full',
      ]"
    ></div>

    <div
      :class="[
        'relative w-full h-full px-6 py-2.5 sm:py-3 font-bold transition-all duration-300 text-center flex items-center justify-center gap-2 whitespace-nowrap uppercase tracking-wider text-[13px] sm:text-sm',
        variant === 'singular' ? 'rounded-sm font-mono' : 'rounded-full',
        variant === 'primary'
          ? 'bg-white text-black group-hover:bg-[#0a0a0a] group-hover:text-white'
          : '',
        variant === 'secondary'
          ? 'bg-[#0a0a0a] text-white border border-white/5'
          : '',
        variant === 'singular'
          ? 'bg-[#0a0a0a] text-green-500 group-hover:text-white'
          : '',
      ]"
    >
      <span v-if="variant === 'singular'" class="opacity-50 text-[10px]"
        >>></span
      >
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  to: String,
  variant: { type: String, default: "primary" },
  isExternal: { type: Boolean, default: true },
});

const gradientColor = computed(() => {
  if (props.variant === "singular") {
    return "conic-gradient(from 0deg, #22c55e, #052e16, #16a34a, #052e16, #22c55e)";
  }
  return "conic-gradient(from 0deg, #22d3ee, #1e40af, #06b6d4, #1e40af, #22d3ee)";
});
</script>

<style scoped>
.gradient-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 350%;
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin 4s linear infinite;
}
</style>
