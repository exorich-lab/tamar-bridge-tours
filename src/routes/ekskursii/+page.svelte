<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { tours } from '$lib/data';
</script>

<Seo
	title="Экскурсии на мост царицы Тамары из Батуми"
	description="Экскурсии Батуми: мост Тамары, водопад Махунцети, водопады Аджарии. Цены, длительность, заказ."
	path="/ekskursii"
	image="/images/tourists.jpg"
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
	<span class="badge">Туры</span>
	<h1 class="section-title mt-3">Экскурсии из Батуми</h1>
	<p class="section-lead">
		Форматы «под ключ» — для гостей и для сдачи авто с водителем. Цены ориентировочные, за авто.
	</p>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each tours as t (t.id)}
			<article class="card flex flex-col p-6">
				<p class="text-xs text-slate-500">{t.duration}</p>
				<h2 class="mt-1 text-xl font-semibold text-white">{t.name}</h2>
				<p class="mt-3 flex-1 text-sm text-slate-400">{t.description}</p>
				<ul class="mt-4 space-y-1 text-sm text-slate-400">
					{#each t.includes as inc (inc)}
						<li>✓ {inc}</li>
					{/each}
				</ul>
				<p class="mt-6 text-2xl font-bold text-sky-300">от {t.priceFrom} ₾</p>
				<a href="/zakaz?tour={t.slug}" class="btn-primary mt-4">Заказать</a>
			</article>
		{/each}
	</div>
</section>
