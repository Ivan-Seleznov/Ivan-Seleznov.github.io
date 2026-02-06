<template>
  <main
    @scroll="handleScroll"
    ref="scrollContainer"
    class="snap-y snap-mandatory h-screen overflow-y-scroll scroll-container bg-[#0a0a0a]"
  >
    <ProjectSection
      title="Singular"
      :variant="'singular'"
      video-src="/videos/singular_video.mp4"
      tag="Featured Project"
      :is-left="true"
      :links="[
        {
          label: 'Watch Trailer',
          url: 'https://youtu.be/Q8w7-PrpR_I',
          variant: 'singular',
        },
      ]"
    >
      MMO FPS shooter with survival elements. It is currently being developed on
      <strong class="text-green-500 font-bold">Unreal Engine 5.1</strong>.The
      game has unique gameplay for its genre. The player needs to go out on
      forays, bring out various resources, sell or exchange them, thereby
      improving his arsenal. The game has a slow game pace, to give the player a
      a sense of dangerous atmosphere. The game world also have its own unique
      dangers in the form of various anomalies. At the moment, some mechanics
      are ready, for example, inventory, an advanced player movement system,
      mental health system, equipment, shooting system, dynamic weather system.
    </ProjectSection>

    <ProjectSection
      title="BladeRush"
      video-src="/videos/bladerush_video.mp4"
      :is-left="true"
      :variant="'bladerush'"
      :links="[
        {
          label: 'Build',
          url: 'https://github.com/Ivan-Seleznov/BladeRush/releases/tag/Build',
          variant: 'primary',
        },
        {
          label: 'Source Code',
          iconType: 'code',
          url: 'https://github.com/Ivan-Seleznov/BladeRush',
          variant: 'primary',
        },
        {
          label: 'Video',
          iconType: 'video',
          url: 'https://youtu.be/ur4CMhzi5VY',
          variant: 'secondary',
        },
      ]"
    >
      Multiplayer UE 5 true first person movement-oriented shooter. The game
      features a unique blend of fast paced combat and advanced movement
      mechanics, including sliding, wall running, grappling hook and mantling.
    </ProjectSection>

    <ProjectSection
      title="RAGNAROK"
      :variant="'ragnarok'"
      video-src="/videos/ragnarok_video.mp4"
      :is-left="true"
      :links="[
        {
          label: 'Build',
          url: 'https://github.com/VladyslavLytosh/Ragnarok/releases/tag/Build',
          variant: 'primary',
        },
        {
          label: 'Source Code',
          url: 'https://github.com/VladyslavLytosh/Ragnarok',
          variant: 'primary',
          iconType: 'code',
        },
        {
          label: 'Trailer',
          iconType: 'video',
          url: 'https://youtu.be/pyzRDPoQipQ?si=xT7pKBVcYf32_oUn',
          variant: 'secondary',
        },
      ]"
    >
      Single-player UE 5 top-down 2.5d shooter with the ability to switch
      characters during gameplay. Each character has its own ability set with
      different abilities, such as dash, shooting, melee attack, and so on. The
      game was developed in a small team (3 people) for GGJ 2024.
    </ProjectSection>

    <ProjectSection
      title="FPV Drone Game"
      video-src="/videos/dronegame_video.mp4"
      :is-left="true"
      :links="[
        {
          label: 'Build',
          url: 'https://github.com/Ivan-Seleznov/DroneGame/releases/tag/Build',
          variant: 'primary',
        },
        {
          label: 'Source Code',
          iconType: 'code',
          url: 'https://github.com/Ivan-Seleznov/DroneGame',
          variant: 'primary',
        },
      ]"
    >
      Single player UE 5 game where you control an fpv drone. The core gameplay
      involves strategic flying, precise shooting, and tactical maneuvering. The
      player can collect various pickups and the main goal is to destroy all the
      turrets.
    </ProjectSection>

    <section
      class="snap-start relative h-screen w-full flex items-center justify-center"
    >
      <div
        class="absolute inset-0 opacity-20"
        style="
          background-image: radial-gradient(#1e40af 1px, transparent 1px);
          background-size: 40px 40px;
        "
      ></div>
      <div class="relative z-10 text-center px-6">
        <h2 class="text-4xl font-bold mb-4 text-white">
          Thank you for taking the time to review my portfolio!
        </h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto font-mono">
          Specializing in Unreal Engine C++, Network Replication, and Gameplay
          Systems.
        </p>
        <AppButton
          to="https://github.com/Ivan-Seleznov?tab=repositories"
          variant="primary"
          >VIEW ALL REPOSITORIES</AppButton
        >
      </div>
    </section>

    <div
      :class="[
        'fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-all duration-300 ease-out',
        isAtBottom
          ? 'opacity-0 pointer-events-none translate-y-2'
          : 'opacity-100',
      ]"
    >
      <div
        @click="scrollDown"
        class="animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity text-white"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </div>
  </main>
</template>

<script setup>
import AppButton from "~/components/ui/AppButton.vue";
const isAtBottom = ref(false);

const scrollContainer = ref(null);

const handleScroll = () => {
  if (!scrollContainer.value) return;

  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;

  isAtBottom.value =
    scrollTop + clientHeight >= scrollHeight - clientHeight / 2;
};

const scrollDown = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
}

.font-mono {
  font-family: "JetBrains Mono", monospace;
}

.scroll-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}

strong {
  color: #3b82f6;
  font-weight: 700;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

section .relative.z-10 {
  animation: fadeIn 1s ease forwards;
}
</style>
