module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

4. Click **"Commit new file"**

---

#### **FILE 5: .gitignore**

1. Click **"Add file"** → **"Create new file"**
2. Type: `.gitignore` (don't forget the dot at the beginning!)
3. Copy and paste this:
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
