<template>
  <section
    ref="sectionRef"
    class="snap-start relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
  >
    <video
      ref="videoRef"
      :class="[
        'absolute inset-0 w-full h-full object-cover transition-all duration-700',
        variant === 'singular'
          ? 'brightness-[0.45] sepia-[0.1] hue-rotate-[50deg]'
          : 'brightness-50 grayscale-[20%]',
      ]"
      muted
      loop
      playsinline
      preload="auto"
      :src="videoSrc"
    ></video>

    <div v-if="variant" class="absolute inset-0 z-0 pointer-events-none">
      <svg
        v-if="variant === 'bladerush'"
        class="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          stroke="white"
          stroke-width="0.5"
        />
        <line
          x1="25%"
          y1="0"
          x2="75%"
          y2="100%"
          stroke="white"
          stroke-width="0.5"
        />
        <line
          x1="0"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="white"
          stroke-width="0.5"
        />
      </svg>

      <div
        v-if="variant === 'singular'"
        class="absolute inset-0 opacity-[0.04] stalker-grid"
      ></div>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60"
    ></div>

    <div
      v-if="variant === 'bladerush'"
      class="absolute inset-0 bg-radial-vignette"
    ></div>

    <div
      :class="[
        'relative z-10 max-w-4xl px-6 w-full transition-all duration-1000',
        isLeft ? 'text-center lg:text-left' : 'text-center',
      ]"
    >
      <span
        v-if="tag"
        :class="[
          'inline-block px-3 py-1 border font-mono text-xs mb-4 uppercase tracking-wider transition-colors',
          variant === 'singular'
            ? 'bg-green-600/10 border-green-500/40 text-green-500'
            : 'bg-blue-600/20 border-blue-500/50 text-blue-400 rounded-full',
        ]"
      >
        {{ variant === "singular" ? `// ${tag}` : tag }}
      </span>

      <div class="mb-8">
        <h2
          :class="[
            'text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black uppercase leading-[0.85] tracking-tighter transition-colors duration-300',
            {
              'bladerush-text text-[#00a3ff]': variant === 'bladerush',
              'singular-glow text-green-500/80': variant === 'singular',
              'text-[#a66e00]': variant === 'ragnarok',
              'text-white': variant === 'default' || !variant,
            },
          ]"
        >
          {{ title }}
        </h2>
        <div
          v-if="variant === 'singular'"
          class="text-green-500/30 font-mono text-[10px] tracking-[0.4em] mt-2"
        >
          SEC_LEVEL_UNRESTRICTED // 5.1_REPL
        </div>
      </div>

      <p
        class="text-gray-300 text-[15px] md:text-base xl:text-lg leading-relaxed max-w-xl mb-10 mx-auto lg:mx-0 font-medium tracking-wide"
      >
        <slot />
      </p>

      <div
        :class="[
          'relative z-20 flex flex-wrap gap-4 mt-10 w-full',
          'justify-center',
          isLeft ? 'lg:justify-start' : 'lg:justify-center',
        ]"
      >
        <AppButton
          v-for="link in links"
          :key="link.url"
          :to="link.url"
          :variant="
            variant === 'singular' ? 'singular' : link.variant || 'primary'
          "
          class="min-w-[140px]"
        >
          <div class="flex items-center gap-2">
            <span v-if="link.iconType === 'video'" class="text-[10px]">▶</span>
            <span v-if="link.iconType === 'code'" class="text-[10px]">{ }</span>
            {{ link.label }}
          </div>
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from "./ui/AppButton.vue";
import { ref, onMounted } from "vue";

const props = withDefaults(
  defineProps<{
    title: string;
    videoSrc: string;
    tag?: string;
    variant?: "default" | "bladerush" | "singular" | "ragnarok";
    isLeft?: boolean;
    links?: {
      label: string;
      url: string;
      variant?: string;
      iconType: "video" | "code";
    }[];
  }>(),
  {
    tag: "",
    variant: "default",
    isLeft: true,
  },
);

const videoRef = ref<HTMLVideoElement | null>(null);
const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        videoRef.value?.play().catch(() => {});
      } else {
        videoRef.value?.pause();
      }
    },
    { threshold: 0.5 },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<style scoped>
.bladerush-text {
  position: relative;
  color: #00a3ff;
  text-shadow: 0 0 30px rgba(0, 163, 255, 0.4);
}

.bg-radial-vignette {
  background: radial-gradient(
    circle,
    transparent 70%,
    rgba(0, 0, 0, 0.85) 100%
  );
  pointer-events: none;
}

.singular-glow {
  filter: drop-shadow(0 0 12px rgba(34, 197, 94, 0.15));
  animation: signal-flicker 8s infinite;
}

.stalker-grid {
  background-image:
    linear-gradient(rgba(34, 197, 94, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 197, 94, 0.15) 1px, transparent 1px);
  background-size: 50px 50px;
}

@keyframes signal-flicker {
  0%,
  94%,
  96%,
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  95% {
    opacity: 0.8;
    transform: translateX(1px);
  }
  97% {
    opacity: 0.9;
    transform: translateX(-1px);
  }
}
</style>
