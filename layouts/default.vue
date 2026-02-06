<template>
  <div class="bg-[#0a0a0a] min-h-screen">
    <nav
      class="fixed top-0 w-full z-[200] bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 h-16"
    >
      <div
        class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative z-[210]"
      >
        <div
          class="flex items-center gap-1 uppercase tracking-tighter cursor-default select-none"
        >
          <div
            class="flex items-baseline text-[clamp(15px,4.5vw,20px)] w-full justify-center lg:justify-start"
          >
            <span class="font-black text-white">Ivan</span>
            <span class="font-light text-white/40 ml-1">Seleznov</span>

            <span class="mx-1.5 text-white/20 font-thin self-center">|</span>

            <span class="font-black text-[#e1ff01] tracking-wider">Game</span>

            <span
              class="ml-1 text-[clamp(9px,2.5vw,11px)] font-mono text-white/30 tracking-tight"
            >
              Portfolio
            </span>
          </div>
        </div>

        <div class="hidden md:flex gap-8 font-mono text-sm text-white/70">
          <a
            href="https://github.com/Ivan-Seleznov"
            target="_blank"
            class="hover:text-blue-400 transition-colors"
            >GitHub</a
          >
          <a
            href="http://www.linkedin.com/in/ivan-seleznov"
            target="_blank"
            class="hover:text-blue-400 transition-colors"
            >LinkedIn</a
          >
        </div>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        >
          <span
            :class="[
              'w-6 h-0.5 bg-white transition-all duration-300',
              isMenuOpen ? 'rotate-45 translate-y-2' : '',
            ]"
          ></span>
          <span
            :class="[
              'w-6 h-0.5 bg-white transition-opacity duration-300',
              isMenuOpen ? 'opacity-0' : '',
            ]"
          ></span>
          <span
            :class="[
              'w-6 h-0.5 bg-white transition-all duration-300',
              isMenuOpen ? '-rotate-45 -translate-y-2' : '',
            ]"
          ></span>
        </button>
      </div>

      <transition name="menu-fade">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 z-[150] md:hidden w-screen h-screen flex flex-col"
        >
          <div
            class="absolute inset-0 bg-black/90 backdrop-blur-[20px] pointer-events-none"
          ></div>

          <div
            class="absolute inset-0 opacity-[0.05] scanlines pointer-events-none"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 pointer-events-none"
          ></div>

          <div class="relative z-20 flex-1 flex flex-col pt-32 px-10">
            <div
              class="flex flex-col gap-10 font-mono text-4xl uppercase tracking-widest text-white"
            >
              <a
                href="https://github.com/Ivan-Seleznov"
                target="_blank"
                @click="isMenuOpen = false"
                class="flex items-baseline gap-4 group"
              >
                <span class="text-xs text-blue-500 font-bold">01</span>
                <span class="group-active:text-blue-400 transition-colors"
                  >GitHub</span
                >
              </a>
              <a
                href="http://www.linkedin.com/in/ivan-seleznov"
                target="_blank"
                @click="isMenuOpen = false"
                class="flex items-baseline gap-4 group"
              >
                <span class="text-xs text-blue-500 font-bold">02</span>
                <span class="group-active:text-blue-400 transition-colors"
                  >LinkedIn</span
                >
              </a>
            </div>

            <div
              class="mt-auto pb-10 border-t border-white/5 pt-6 flex justify-between text-[10px] text-white/40 tracking-[0.4em] font-mono"
            >
              <span class="flex items-center gap-2">
                <span
                  class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"
                ></span>
                SYSTEM_ACTIVE
              </span>
              <span>V2.0.26</span>
            </div>
          </div>
        </div>
      </transition>
    </nav>

    <slot />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const isMenuOpen = ref(false);

watch(isMenuOpen, (val) => {
  if (process.client) {
    const html = document.documentElement;
    const body = document.body;

    if (val) {
      html.style.setProperty("overflow", "hidden", "important");
      body.style.setProperty("overflow", "hidden", "important");
      html.style.setProperty("touch-action", "none", "important");
    } else {
      html.style.removeProperty("overflow");
      body.style.removeProperty("overflow");
      html.style.removeProperty("touch-action");
    }
  }
});
</script>

<style scoped>
.backdrop-blur-\[20px\] {
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.scanlines {
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%
  );
  background-size: 100% 4px;
}
</style>
