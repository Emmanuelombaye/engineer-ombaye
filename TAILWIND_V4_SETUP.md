# Tailwind CSS v4 Setup Guide

## Why This Error Happens

**Tailwind CSS v4 Breaking Change:**
- In Tailwind CSS v4, the PostCSS plugin was moved from the main `tailwindcss` package to a separate `@tailwindcss/postcss` package
- The old `tailwindcss` PostCSS plugin no longer exists in v4
- This is a breaking change to improve modularity and performance

## Solution Steps

### 1. Install Required Packages

```bash
# Install the PostCSS plugin for Tailwind CSS v4
npm install -D @tailwindcss/postcss

# Tailwind CSS v4 is already installed as a dependency
# You should have both packages:
# - tailwindcss@^4.1.18 (main package)
# - @tailwindcss/postcss@^4.1.18 (PostCSS plugin)
```

### 2. Update postcss.config.js

**Correct Configuration:**

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ Use the new plugin
    autoprefixer: {},
  },
};
```

**❌ Wrong (v3 style):**
```javascript
export default {
  plugins: {
    tailwindcss: {},  // ❌ This doesn't exist in v4
    autoprefixer: {},
  },
};
```

### 3. Update CSS Import (src/index.css)

**For Tailwind CSS v4, use:**
```css
@import "tailwindcss";
```

**Alternative (also works in v4):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. tailwind.config.js Changes

**Minimal v4 Config:**
```javascript
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
```

**Note:** In v4, the config file is optional if you're using `@import "tailwindcss"` in CSS. However, keeping it helps with:
- Content paths
- Dark mode configuration
- Custom theme values (if needed)

### 5. Files That Need Restart/Rebuild

After making changes, you must:

1. **Stop the dev server** (Ctrl+C)
2. **Clear cache** (optional but recommended):
   ```bash
   rm -rf node_modules/.vite  # Linux/Mac
   rmdir /s /q node_modules\.vite  # Windows PowerShell
   ```
3. **Restart dev server**:
   ```bash
   npm run dev
   ```

**Important:** The Vite dev server MUST be restarted after PostCSS config changes!

### 6. Verification

After setup, verify it works:

```bash
# Build to check for errors
npm run build

# Should complete successfully with no PostCSS errors
```

## Complete Working Configuration

### postcss.config.js
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
```

### src/index.css
```css
@import "tailwindcss";

/* Your custom styles */
```

### tailwind.config.js
```javascript
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
```

### package.json (relevant parts)
```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "tailwindcss": "^4.1.18",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.23"
  }
}
```

## Troubleshooting

If you still get the error:

1. **Verify packages are installed:**
   ```bash
   npm list @tailwindcss/postcss tailwindcss
   ```

2. **Check for conflicting configs:**
   - Ensure no other PostCSS config files exist
   - Check if `vite.config.ts` has any Tailwind config

3. **Clear all caches:**
   ```bash
   npm run build -- --force
   # Or delete dist and node_modules/.vite
   ```

4. **Verify the plugin name:**
   - Must be exactly `'@tailwindcss/postcss'` (with quotes)
   - Case-sensitive

## Compatibility with Vite + React

This configuration works perfectly with:
- ✅ Vite 7.x
- ✅ React 19
- ✅ TypeScript
- ✅ HMR (Hot Module Replacement)
- ✅ Production builds

The `@tailwindcss/postcss` plugin integrates seamlessly with Vite's PostCSS processing pipeline.
