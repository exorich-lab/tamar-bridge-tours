<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { brand, howTo, place } from '$lib/data';
</script>

<Seo
	title="Мост царицы Тамары Батуми — как добраться"
	description="Как добраться до моста царицы Тамары и водопада Махунцети из Батуми: машина, маршрутка 77, экскурсия. Время в пути, советы."
	path="/kak-dobratsya"
	image="/images/road.jpg"
/>

<section class="mx-auto max-w-3xl px-4 py-14 sm:px-6">
	<span class="badge">Логистика</span>
	<h1 class="section-title mt-3">Как добраться из Батуми</h1>
	<p class="section-lead">
		{place.distance}, в пути {place.driveTime}. {place.coordsNote}.
	</p>

	<img src="/images/road.jpg" alt="Дорога в Махунцети" class="mt-8 aspect-[16/10] w-full rounded-3xl object-cover" loading="eager" />

	<div class="mt-10 space-y-4">
		{#each howTo as h, i (h.title)}
			<div class="card p-6">
				<p class="text-xs font-bold text-sky-300">Вариант {i + 1}</p>
				<h2 class="mt-1 text-lg font-semibold text-white">{h.title}</h2>
				<p class="mt-3 text-sm leading-relaxed text-slate-400">{h.text}</p>
				<p class="mt-3 font-semibold text-sky-300">{h.price}</p>
			</div>
		{/each}
	</div>

	<div class="mt-8 card p-6 text-sm text-slate-400">
		<p>
			<strong class="text-white">Ориентир на месте:</strong> у трассы часто торгуют мёдом/вареньем и
			много машин. Слева — водопад Махунцети, справа — арочный мост царицы Тамары (или наоборот по
			направлению — смотрите указатели).
		</p>
	</div>

	<a href="/zakaz" class="btn-primary mt-10">Заказать трансфер</a>
	<p class="mt-4 text-sm text-slate-500">
		WhatsApp:
		<a href="https://wa.me/{brand.whatsapp}" class="text-sky-300" target="_blank" rel="noopener noreferrer"
			>{brand.phone}</a
		>
	</p>
</section>
