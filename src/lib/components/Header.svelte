<script lang="ts">
	import { page } from '$app/state';
	import { brand, nav } from '$lib/data';
	let open = $state(false);
	const path = $derived(page.url.pathname);
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
		<a href="/" class="flex items-center gap-2" onclick={() => (open = false)}>
			<span
				class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-emerald-700 text-sm font-bold text-white"
				>M</span
			>
			<span class="leading-tight">
				<span class="block text-sm font-semibold text-white">{brand.name}</span>
				<span class="block text-[11px] text-sky-300/80">из {brand.city}</span>
			</span>
		</a>
		<nav class="hidden items-center gap-0.5 lg:flex">
			{#each nav as item (item.href)}
				<a
					href={item.href}
					class="rounded-full px-2.5 py-1.5 text-sm transition {path === item.href
						? 'bg-white/10 text-white'
						: 'text-slate-300 hover:bg-white/5 hover:text-white'}">{item.label}</a
				>
			{/each}
		</nav>
		<div class="flex items-center gap-2">
			<a href="/zakaz" class="hidden rounded-full bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 sm:inline-flex"
				>Заказать выезд</a
			>
			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
				aria-label="Меню"
				onclick={() => (open = !open)}>{open ? '✕' : '☰'}</button
			>
		</div>
	</div>
	{#if open}
		<div class="border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden">
			<nav class="flex flex-col gap-1">
				{#each nav as item (item.href)}
					<a href={item.href} class="rounded-xl px-3 py-3 text-slate-200" onclick={() => (open = false)}
						>{item.label}</a
					>
				{/each}
			</nav>
		</div>
	{/if}
</header>
