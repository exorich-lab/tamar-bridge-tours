<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import { brand, tours } from '$lib/data';

	const pre = $derived(page.url.searchParams.get('tour') ?? '');

	let name = $state('');
	let phone = $state('');
	let date = $state('');
	let people = $state('2');
	let tour = $state('');
	let comment = $state('');
	let sent = $state(false);

	$effect(() => {
		if (pre && !tour) tour = pre;
	});

	function submit(e: Event) {
		e.preventDefault();
		const tourName = tours.find((t) => t.slug === tour)?.name ?? (tour || 'мост + водопад');
		const text = encodeURIComponent(
			`Заказ выезда — Махунцети / мост Тамары\nТур: ${tourName}\nИмя: ${name}\nТел: ${phone}\nДата: ${date}\nЧеловек: ${people}\nКомментарий: ${comment || '—'} (отель в Батуми)`
		);
		sent = true;
		window.open(`https://wa.me/${brand.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
	}
</script>

<Seo
	title="Заказать выезд на мост Тамары"
	description="Заказать трансфер или экскурсию: мост царицы Тамары, водопад Махунцети из Батуми. WhatsApp."
	path="/zakaz"
	image="/images/tourists.jpg"
/>

<section class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
	<div class="grid gap-10 lg:grid-cols-2">
		<div>
			<span class="badge">Заявка</span>
			<h1 class="section-title mt-3">Заказать выезд</h1>
			<p class="section-lead">
				Забираем в Батуми, везём на мост и водопад. Укажите дату — ответим в WhatsApp.
			</p>
			<img
				src="/images/tourists.jpg"
				alt=""
				class="mt-8 hidden aspect-[16/10] w-full rounded-3xl object-cover lg:block"
				loading="lazy"
			/>
		</div>

		<form class="card p-6 sm:p-8" onsubmit={submit}>
			<div class="grid gap-4 sm:grid-cols-2">
				<label class="block">
					<span class="text-xs text-slate-400">Имя</span>
					<input
						class="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5 text-white outline-none ring-sky-400/40 focus:ring-2"
						bind:value={name}
						required
					/>
				</label>
				<label class="block">
					<span class="text-xs text-slate-400">Телефон</span>
					<input
						class="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5 text-white outline-none ring-sky-400/40 focus:ring-2"
						bind:value={phone}
						required
						type="tel"
					/>
				</label>
				<label class="block">
					<span class="text-xs text-slate-400">Дата</span>
					<input
						class="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5 text-white outline-none ring-sky-400/40 focus:ring-2"
						bind:value={date}
						required
						type="date"
					/>
				</label>
				<label class="block">
					<span class="text-xs text-slate-400">Человек</span>
					<select
						class="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5 text-white outline-none ring-sky-400/40 focus:ring-2"
						bind:value={people}
					>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5–7</option>
					</select>
				</label>
				<label class="block sm:col-span-2">
					<span class="text-xs text-slate-400">Формат</span>
					<select
						class="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5 text-white outline-none ring-sky-400/40 focus:ring-2"
						bind:value={tour}
					>
						<option value="">Мост + водопад</option>
						{#each tours as t (t.id)}
							<option value={t.slug}>{t.name} — от {t.priceFrom} ₾</option>
						{/each}
					</select>
				</label>
				<label class="block sm:col-span-2">
					<span class="text-xs text-slate-400">Отель / комментарий</span>
					<textarea
						class="mt-1 min-h-[80px] w-full rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2.5 text-white outline-none ring-sky-400/40 focus:ring-2"
						bind:value={comment}
						placeholder="Отель в Батуми, время выезда…"
					></textarea>
				</label>
			</div>
			<button type="submit" class="btn-primary mt-6 w-full">Отправить в WhatsApp</button>
			{#if sent}
				<p class="mt-3 text-center text-sm text-emerald-400">Сообщение готово — подтвердите в WhatsApp.</p>
			{/if}
		</form>
	</div>
</section>
