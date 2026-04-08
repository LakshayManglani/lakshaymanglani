<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

const route = useRoute();

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation');

const pageElement = useTemplateRef<HTMLElement>('page');

onMounted(() => {
  const container = pageElement.value;
  if (!container) return;

  // Handle hash on load
  const handleHash = () => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);

    nextTick(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const top =
        el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop;

      container.scrollTo({ top: top - 100 });
    });
  };

  handleHash();

  // Handle anchor clicks
  const clickHandler = (e: Event) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    if (!link) return;

    const id = link.getAttribute('href')?.slice(1);
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();

    const top =
      el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop;

    container.scrollTo({
      top: top - 130,
      behavior: 'smooth',
    });
  };

  container.addEventListener('click', clickHandler);

  onUnmounted(() => {
    container.removeEventListener('click', clickHandler);
  });
});

watch(
  () => route.path,
  async () => {
    if (!pageElement.value) return;

    pageElement.value.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
);
</script>

<template>
  <div class="relative isolate max-w-dvw max-h-dvh h-dvh w-dvw overflow-hidden">
    <AppBackground />

    <div ref="page" class="absolute inset-0 overflow-y-auto scroll-smooth">
      <UContainer>
        <UPage>
          <template #left>
            <UPageAside>
              <UContentNavigation highlight :navigation="navigation" />
            </UPageAside>
          </template>

          <UMain>
            <slot />
          </UMain>
        </UPage>
      </UContainer>
      <AppFooter />
    </div>

    <AppHeader
      :links="[
        {
          label: 'Home',
          to: '/',
        },
        {
          label: 'Projects',
          to: '/projects',
        },
      ]"
    />
    <AppNavbar />
  </div>
</template>
