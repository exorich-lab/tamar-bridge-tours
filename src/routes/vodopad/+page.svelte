<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { waterfalls } from '$lib/data';
</script>

<Seo
	title="Водопад Махунцети Батуми — как добраться"
	description="Водопад Махунцети и мост царицы Тамары. Водопады рядом с Батуми, Мирвети, как доехать, экскурсии."
	path="/vodopad"
	image="/images/waterfall.jpg"
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
	<span class="badge">Водопад</span>
	<h1 class="section-title mt-3">Водопад Махунцети</h1>
	<p class="section-lead">
		Один из самых посещаемых водопадов рядом с Батуми. Пара к мосту царицы Тамары — «водопад тамара»
		в запросах часто про это же место.
	</p>

	<img
		src="/images/waterfall.jpg"
		alt="Водопад Махунцети"
		class="mt-8 aspect-[21/9] w-full rounded-3xl object-cover"
		loading="eager"
	/>

	<div class="mt-10 grid gap-4 md:grid-cols-3">
		<div class="card p-5">
			<p class="text-xs text-slate-500">От Батуми</p>
			<p class="mt-1 text-xl font-bold text-white">~30–35 км</p>
		</div>
		<div class="card p-5">
			<p class="text-xs text-slate-500">От моста</p>
			<p class="mt-1 text-xl font-bold text-white">через дорогу</p>
		</div>
		<div class="card p-5">
			<p class="text-xs text-slate-500">На месте</p>
			<p class="mt-1 text-xl font-bold text-white">тропа + фото</p>
		</div>
	</div>

	<h2 class="mt-14 text-xl font-bold text-white">Водопады Аджарии (комбо)</h2>
	<div class="mt-6 grid gap-4 sm:grid-cols-2">
		{#each waterfalls as w (w.name)}
			<div class="card p-5">
				<p class="font-semibold text-white">{w.name}</p>
				<p class="mt-1 text-sm text-sky-300/80">{w.near}</p>
				<p class="mt-2 text-sm text-slate-400">{w.note}</p>
			</div>
		{/each}
	</div>

	<a href="/zakaz" class="btn-primary mt-10">Экскурсия на водопады</a>
</section>
