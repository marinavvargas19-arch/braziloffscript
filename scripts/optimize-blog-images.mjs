// Run after adding a photo to lib/blog-photos.js. Sharp is provided by Next.js.
import fs from 'node:fs/promises';
import sharp from 'sharp';
import { blogPhotos } from '../lib/blog-photos.js';
await fs.mkdir('public/blog/optimized', { recursive: true });
for (const [key, photo] of Object.entries(blogPhotos)) {
  for (const width of [640, 960, 1600]) {
    await sharp(`public/${photo.file}`).rotate().resize(width).webp({ quality: 82 })
      .toFile(`public/blog/optimized/${key}-${width}.webp`);
  }
}
await sharp('public/lencois-day-3-national-park.jpg').rotate().resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 85 }).toFile('public/blog/brazil-travel-guide-og.jpg');
