// To optimize images for your Vercel-hosted React Vite app for better SEO:

// 1. Create an optimized image component

// components/OptimizedImage.jsx
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/**
 * OptimizedImage component that handles:
 * - Lazy loading
 * - Blur effect while loading
 * - Proper alt text for accessibility and SEO
 * - Explicit width/height to prevent layout shifts
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  style = {},
  effect = 'blur'
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      effect={effect}
      className={className}
      style={{ ...style }}
      loading="lazy"
      decoding="async"
      // Prevent layout shifts with aspect ratio
      wrapperClassName="image-wrapper"
      placeholderSrc={getPlaceholderImage(width, height)}
    />
  );
};

// Generate a simple placeholder with correct aspect ratio
const getPlaceholderImage = (width, height) => {
  // Very small placeholder with correct aspect ratio
  // In production, you might want to use a real placeholder system
  return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
};

export default OptimizedImage;

// 2. Install the required package:
// npm install react-lazy-load-image-component

// 3. Usage in your Home.jsx:
// Replace image imports and usage with:

import OptimizedImage from '../components/OptimizedImage';

// Then replace image tags like:
/*
<OptimizedImage
  src={rumimage2}
  alt="Rum Network App Dashboard Screenshot"
  width={300}
  height={600}
  className="app-screenshot"
/>
*/

// 4. For Vercel-specific image optimization:
// Create a next.config.js file in your project root (if using Next.js):

/*
module.exports = {
  images: {
    domains: ['rum-network-website.vercel.app'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  }
};
*/

// 5. If not using Next.js, ensure your images are compressed before importing:
// You can use tools like:
// - Sharp: npm install sharp
// - ImageMagick (CLI)
// - Online services like TinyPNG

// 6. Pre-compression script example (add to package.json scripts):
// This requires sharp to be installed

/*
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'src/assets';
const outputDir = 'src/optimized-assets';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process each image in the input directory
fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);
  
  // Skip if not an image
  if (!file.match(/\.(jpg|jpeg|png|gif)$/i)) return;
  
  // Optimize the image
  sharp(inputPath)
    .resize(1200) // Set a maximum width
    .webp({ quality: 80 }) // Convert to WebP
    .toFile(outputPath.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp'), (err) => {
      if (err) {
        console.error(`Error processing ${file}:`, err);
      } else {
        console.log(`Optimized ${file}`);
      }
    });
});
*/

// 7. Additional SEO improvements for images:
// - Use descriptive file names (e.g., "rum-network-dashboard.jpg" instead of "image1.jpg")
// - Add structured data for images (see prior Schema.org example)
// - Ensure images are responsive (different sizes for different devices)

// 8. For critical images, consider using the "fetchpriority" attribute:
/*
<img 
  src={criticalImage} 
  alt="Critical image" 
  fetchpriority="high" 
  width="300" 
  height="200"
/>
*/