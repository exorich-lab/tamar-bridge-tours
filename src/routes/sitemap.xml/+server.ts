import type { RequestHandler } from './$types';

const pages = ['', '/most', '/vodopad', '/kak-dobratsya', '/galereya', '/ekskursii', '/zakaz'];
const site = 'https://tamar-bridge-tours.vercel.app';

export const GET: RequestHandler = async () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${site}${p || '/'}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p === '' ? '1.0' : '0.8'}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'max-age=3600' }
	});
};
