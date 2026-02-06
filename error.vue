<template>
  <div
    class="bg-[#0a0a0a] min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-mono"
  >
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#1e40af 1px, transparent 1px);
        background-size: 40px 40px;
      "
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]"
    ></div>

    <div class="relative z-10 text-center px-6">
      <h1
        class="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-white/5 relative"
      >
        {{ error?.status }}
        <span
          class="absolute inset-0 flex items-center justify-center text-blue-500 text-6xl md:text-8xl blur-sm animate-pulse"
        >
          {{ error?.status }}
        </span>
      </h1>

      <div class="mt-[-2rem] space-y-6">
        <h2
          class="text-2xl md:text-4xl font-bold text-white uppercase tracking-widest"
        >
          System Interrupted
        </h2>

        <p class="text-gray-400 max-w-md mx-auto leading-relaxed">
          {{
            error?.message ||
            "The requested sector is inaccessible or has been purged from the database."
          }}
        </p>

        <div class="pt-8 flex justify-center">
          <AppButton @click="handleError" variant="primary">
            REBOOT SYSTEM
          </AppButton>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 w-full px-10 flex justify-between text-[10px] text-white/20 tracking-[0.5em] uppercase"
    >
      <span class="flex items-center gap-2">
        <span class="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
        Critical_Error_Detected
      </span>
      <span>V2.0.26</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "./components/ui/AppButton.vue";

const error = useError();

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 0.8;
    filter: blur(8px);
  }
  50% {
    opacity: 1;
    filter: blur(12px);
  }
}

.animate-pulse {
  animation: pulse 3s infinite ease-in-out;
}

h1 {
  user-select: none;
}
</style>
