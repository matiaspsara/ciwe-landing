import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { statSync } from 'fs';
import { join, extname, basename } from 'path';

// Max dimension per use case — images are never displayed larger than these
const JOBS = [
  { dir: 'public/photos',         maxWidth: 1600, quality: 82 },
  { dir: 'public/photos/flavors', maxWidth: 900,  quality: 82 },
];

for (const { dir, maxWidth, quality } of JOBS) {
  const files = await readdir(dir);
  const images = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f) && !f.startsWith('logo'));

  for (const file of images) {
    const src = join(dir, file);
    const dest = join(dir, basename(file, extname(file)) + '.webp');

    const before = statSync(src).size;
    await sharp(src)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(dest + '.tmp');

    // Replace original only if the new file is smaller
    const after = statSync(dest + '.tmp').size;
    await (await import('fs/promises')).rename(dest + '.tmp', dest);
    if (src !== dest) {
      try { await unlink(src); } catch {}
    }

    const saved = ((1 - after / before) * 100).toFixed(0);
    console.log(`✓ ${file.padEnd(45)} ${(before/1024).toFixed(0).padStart(6)}KB → ${(after/1024).toFixed(0).padStart(6)}KB  (-${saved}%)`);
  }
}
