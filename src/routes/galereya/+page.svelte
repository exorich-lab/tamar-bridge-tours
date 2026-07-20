<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { gallery } from '$lib/data';

	let active = $state<string | null>(null);
</script>

<Seo
	title="Мост царицы Тамары фото — галерея"
	description="Фото моста царицы Тамары и водопада Махунцети. Галерея выезда из Батуми."
	path="/galereya"
	image="/images/hero.jpg"
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
	<span class="badge">Галерея</span>
	<h1 class="section-title mt-3">Мост и водопад — фото</h1>
	<p class="section-lead">Небольшая галерея маршрута. Нажмите на фото, чтобы увеличить.</p>

	<div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
		{#each gallery as g (g.src)}
			<button
				type="button"
				class="group overflow-hidden rounded-2xl text-left"
				onclick={() => (active = g.src)}
			>
				<img
					src={g.src}
					alt={g.alt}
					class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
					loading="lazy"
				/>
				<p class="mt-2 line-clamp-2 text-xs text-slate-400">{g.alt}</p>
			</button>
		{/each}
	</div>

	{#if active}
		<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
		<div
			class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
			onclick={() => (active = null)}
			role="presentation"
		>
			<img src={active} alt="" class="max-h-[90vh] max-w-full rounded-xl object-contain" />
		</div>
	{/if}

	<a href="/zakaz" class="btn-primary mt-12">Хочу туда — заказать выезд</a>
</section>
