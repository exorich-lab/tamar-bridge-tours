<script lang="ts">
	import { brand, nav } from '$lib/data';
</script>

<footer class="border-t border-white/10 bg-slate-950 text-slate-300">
	<div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
		<div>
			<p class="text-lg font-semibold text-white">{brand.name}</p>
			<p class="mt-2 text-sm text-slate-400">
				Выезд из Батуми: мост царицы Тамары, водопад Махунцети, водопады Аджарии. Трансфер и
				экскурсии — удобно для аренды авто с водителем.
			</p>
		</div>
		<div>
			<p class="text-sm font-semibold uppercase tracking-wider text-sky-300/90">Разделы</p>
			<ul class="mt-3 space-y-2 text-sm">
				{#each nav as item (item.href)}
					<li><a href={item.href} class="hover:text-white">{item.label}</a></li>
				{/each}
			</ul>
		</div>
		<div>
			<p class="text-sm font-semibold uppercase tracking-wider text-sky-300/90">Связь</p>
			<ul class="mt-3 space-y-2 text-sm">
				<li>
					<a href="tel:{brand.phone.replace(/\s/g, '')}" class="hover:text-white">{brand.phone}</a>
				</li>
				<li>
					<a href="https://wa.me/{brand.whatsapp}" class="hover:text-white" target="_blank" rel="noopener noreferrer"
						>WhatsApp</a
					>
				</li>
				<li>{brand.hours}</li>
			</ul>
		</div>
	</div>
	<div class="border-t border-white/5 py-4 text-center text-xs text-slate-500">
		© {new Date().getFullYear()} {brand.nameEn} · Махунцети · Батуми
	</div>
</footer>
