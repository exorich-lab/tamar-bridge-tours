<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { brand, faq, gallery, howTo, place, tours, waterfalls } from '$lib/data';
</script>

<Seo
	title="Мост царицы Тамары и водопад Махунцети из Батуми"
	description="Мост царицы Тамары Батуми: как добраться, водопад Махунцети, фото, экскурсии. Выезд из Батуми 40–55 мин. Трансфер и туры."
	path="/"
	image="/images/hero.jpg"
/>

<section class="relative min-h-[90vh] overflow-hidden">
	<img
		src="/images/hero.jpg"
		alt="Мост царицы Тамары в Махунцети — Аджария"
		class="absolute inset-0 h-full w-full object-cover"
		fetchpriority="high"
	/>
	<div class="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/45 to-slate-950"></div>
	<div class="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
		<span class="badge w-fit">Выезд из Батуми · {place.driveTime}</span>
		<h1 class="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
			Мост царицы <span class="text-sky-300">Тамары</span>
		</h1>
		<p class="mt-3 max-w-2xl text-lg text-slate-200">
			+ водопад Махунцети · арочный мост · горная Аджария
		</p>
		<p class="mt-4 max-w-xl text-slate-300">
			{place.distance} от Батуми. Две достопримечательности через дорогу — идеальный полдня на
			экскурсию или трансфер с водителем.
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a href="/zakaz" class="btn-primary">Заказать выезд</a>
			<a href="/kak-dobratsya" class="btn-ghost">Как добраться</a>
			<a href="/galereya" class="btn-ghost">Галерея</a>
		</div>
		<div class="mt-10 grid max-w-xl grid-cols-3 gap-3">
			<div class="glass rounded-2xl p-4">
				<p class="text-2xl font-bold text-white">~35 км</p>
				<p class="text-xs text-slate-300">из Батуми</p>
			</div>
			<div class="glass rounded-2xl p-4">
				<p class="text-2xl font-bold text-white">2 в 1</p>
				<p class="text-xs text-slate-300">мост + водопад</p>
			</div>
			<div class="glass rounded-2xl p-4">
				<p class="text-2xl font-bold text-white">XII в.</p>
				<p class="text-xs text-slate-300">эпоха Тамары</p>
			</div>
		</div>
	</div>
</section>

<section class="border-y border-white/5 bg-slate-900/80">
	<div class="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 py-4 sm:px-6">
		{#each ['мост тамары', 'махунцети', 'водопад', 'как добраться', 'экскурсия', 'из батуми', 'аджария'] as tag (tag)}
			<span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
				>{tag}</span
			>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
	<div class="grid gap-10 lg:grid-cols-2">
		<div>
			<h2 class="section-title">Мост + водопад за один стоп</h2>
			<p class="section-lead">{place.history}</p>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href="/most" class="btn-primary">Про мост</a>
				<a href="/vodopad" class="btn-ghost">Про водопад</a>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-3">
			<img src="/images/bridge-detail.jpg" alt="Мост" class="aspect-square rounded-2xl object-cover" loading="lazy" />
			<img src="/images/waterfall.jpg" alt="Водопад" class="aspect-square rounded-2xl object-cover" loading="lazy" />
			<img src="/images/road.jpg" alt="Дорога" class="col-span-2 aspect-[21/9] rounded-2xl object-cover" loading="lazy" />
		</div>
	</div>
</section>

<section class="bg-slate-900/50">
	<div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
		<h2 class="section-title">Как добраться из Батуми</h2>
		<p class="section-lead">Три способа — от бюджетной маршрутки до комфортного трансфера.</p>
		<div class="mt-10 grid gap-4 md:grid-cols-3">
			{#each howTo as h (h.title)}
				<div class="card p-6 {h.highlight ? 'border-sky-400/40 ring-1 ring-sky-400/20' : ''}">
					{#if h.highlight}<span class="badge mb-3">Рекомендуем для аренды</span>{/if}
					<h3 class="text-lg font-semibold text-white">{h.title}</h3>
					<p class="mt-3 text-sm leading-relaxed text-slate-400">{h.text}</p>
					<p class="mt-4 font-semibold text-sky-300">{h.price}</p>
				</div>
			{/each}
		</div>
		<a href="/kak-dobratsya" class="mt-8 inline-block text-sm font-semibold text-sky-300"
			>Подробная инструкция →</a
		>
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<h2 class="section-title">Галерея</h2>
			<p class="section-lead">Мост, водопад, дорога из Батуми — атмосфера маршрута.</p>
		</div>
		<a href="/galereya" class="text-sm font-semibold text-sky-300">Все фото →</a>
	</div>
	<div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
		{#each gallery.slice(0, 6) as g, i (g.src + i)}
			<a href="/galereya" class="group overflow-hidden rounded-2xl">
				<img
					src={g.src}
					alt={g.alt}
					class="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
					loading="lazy"
				/>
			</a>
		{/each}
	</div>
</section>

<section class="border-y border-white/5 bg-slate-900/40">
	<div class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
		<h2 class="section-title">Водопады рядом</h2>
		<p class="section-lead">Не только Махунцети — комбинируем по желанию.</p>
		<div class="mt-10 grid gap-4 sm:grid-cols-2">
			{#each waterfalls as w (w.name)}
				<div class="card p-5">
					<p class="font-semibold text-white">{w.name}</p>
					<p class="mt-1 text-sm text-sky-300/80">{w.near}</p>
					<p class="mt-2 text-sm text-slate-400">{w.note}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
	<h2 class="section-title">Экскурсии и трансфер</h2>
	<p class="section-lead">Форматы для гостей — удобно продавать как выезд на авто с водителем.</p>
	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each tours as t (t.id)}
			<div class="card flex flex-col p-6">
				<p class="text-xs text-slate-500">{t.duration}</p>
				<h3 class="mt-1 text-lg font-semibold text-white">{t.name}</h3>
				<p class="mt-3 flex-1 text-sm text-slate-400">{t.description}</p>
				<ul class="mt-4 space-y-1 text-xs text-slate-400">
					{#each t.includes as inc (inc)}
						<li>✓ {inc}</li>
					{/each}
				</ul>
				<p class="mt-6 text-2xl font-bold text-sky-300">от {t.priceFrom} ₾</p>
				<a href="/zakaz?tour={t.slug}" class="btn-primary mt-4 w-full">Заказать</a>
			</div>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
	<h2 class="section-title text-center">Вопросы</h2>
	<div class="mt-10 space-y-3">
		{#each faq as item (item.q)}
			<details class="card group">
				<summary
					class="cursor-pointer list-none px-5 py-4 font-medium text-white [&::-webkit-details-marker]:hidden"
				>
					<span class="flex items-center justify-between gap-3">
						{item.q}
						<span class="text-sky-300 group-open:rotate-45">+</span>
					</span>
				</summary>
				<p class="border-t border-white/5 px-5 py-4 text-sm text-slate-400">{item.a}</p>
			</details>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
	<div
		class="relative overflow-hidden rounded-3xl border border-sky-400/25 bg-gradient-to-br from-emerald-950 to-slate-900 p-8 sm:p-12"
	>
		<img
			src="/images/tourists.jpg"
			alt=""
			class="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-25"
			loading="lazy"
		/>
		<div class="relative max-w-lg">
			<h2 class="text-3xl font-bold text-white">Готовы к выезду из Батуми?</h2>
			<p class="mt-3 text-slate-300">
				Напишите дату и число человек — закрепим авто и время. Мост царицы Тамары + водопад Махунцети
				за полдня.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a href="/zakaz" class="btn-primary">Оставить заявку</a>
				<a
					href="https://wa.me/{brand.whatsapp}?text=Хочу%20на%20мост%20Тамары%20и%20Махунцети"
					class="btn-ghost"
					target="_blank"
					rel="noopener noreferrer">WhatsApp</a
				>
			</div>
		</div>
	</div>
</section>
