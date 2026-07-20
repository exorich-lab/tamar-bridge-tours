<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { brand, place } from '$lib/data';

	let { children } = $props();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'TouristTrip',
		name: place.title,
		description: brand.tagline,
		touristType: 'Day trip from Batumi',
		provider: {
			'@type': 'LocalBusiness',
			name: brand.name,
			telephone: brand.phone,
			address: { '@type': 'PostalAddress', addressLocality: 'Batumi', addressCountry: 'GE' }
		},
		image: 'https://tamar-bridge-tours.vercel.app/images/hero.jpg',
		url: 'https://tamar-bridge-tours.vercel.app'
	};
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="icon" href="/icons/favicon-32.png" type="image/png" sizes="32x32" />
	<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
	<link rel="manifest" href="/site.webmanifest" />
	<meta name="theme-color" content="#0f172a" />
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1 pt-16">
		{@render children()}
	</main>
	<Footer />
</div>
