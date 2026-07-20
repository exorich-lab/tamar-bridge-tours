<script lang="ts">
	import { brand } from '$lib/data';

	let {
		title,
		description,
		path = '/',
		image = '/images/hero.jpg'
	}: { title: string; description: string; path?: string; image?: string } = $props();

	const site = 'https://tamar-bridge-tours.vercel.app';
	const fullTitle = $derived(`${title} | ${brand.name}`);
	const url = $derived(`${site}${path}`);
	const ogImage = $derived(image.startsWith('http') ? image : `${site}${image}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="мост царицы тамары, мост тамары батуми, водопад махунцети, мост махунцети, как добраться, экскурсия из батуми, водопады аджарии, арочный мост"
	/>
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="ru_RU" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={ogImage} />
</svelte:head>
