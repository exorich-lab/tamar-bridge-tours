<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { place } from '$lib/data';
</script>

<Seo
	title="Мост царицы Тамары в Махунцети — история и фото"
	description="Арочный мост царицы Тамары Батуми: история, эпоха Тамары, как выглядит, рядом водопад Махунцети."
	path="/most"
	image="/images/hero.jpg"
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
	<span class="badge">Достопримечательность</span>
	<h1 class="section-title mt-3">Мост царицы Тамары</h1>
	<p class="section-lead">{place.bridgeName}. {place.region}.</p>

	<div class="mt-10 grid gap-6 lg:grid-cols-2">
		<img src="/images/hero.jpg" alt="Мост царицы Тамары" class="aspect-[4/3] w-full rounded-3xl object-cover" loading="eager" />
		<img src="/images/bridge-detail.jpg" alt="Кладка моста" class="aspect-[4/3] w-full rounded-3xl object-cover" loading="lazy" />
	</div>

	<div class="mt-10 grid gap-4 md:grid-cols-2">
		<div class="card p-6">
			<h2 class="font-semibold text-white">История</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-400">{place.history}</p>
		</div>
		<div class="card p-6">
			<h2 class="font-semibold text-white">Сколько лет мосту?</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-400">
				Около 800+ лет: связывают с правлением царицы Тамары (конец XII — начало XIII века). Живой
				символ средневековой Аджарии — один из самых фотографируемых мостов у Батуми.
			</p>
		</div>
		<div class="card p-6">
			<h2 class="font-semibold text-white">Что рядом</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-400">
				Через дорогу — водопад Махунцети. Часто в запросы добавляют «винодельня» и другие остановки
				по пути из Батуми — комбинируем по желанию.
			</p>
		</div>
		<div class="card p-6">
			<h2 class="font-semibold text-white">Советы для фото</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-400">
				Лучший свет — утро и «золотой час». Снимайте арку с берега реки и с дорожного уровня. Не
				стойте на проезжей части.
			</p>
		</div>
	</div>

	<a href="/zakaz" class="btn-primary mt-10">Поехать с водителем</a>
</section>
