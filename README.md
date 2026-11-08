# Jhon Ordoñez — Personal Website

A lightweight, responsive static portfolio. No build step is required: GitHub Pages can serve the files in this repository directly.

## Local preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## GitHub Pages deployment

1. Create a new GitHub repository (for example, `personal-website`) and push this folder.
2. In GitHub: **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. Before changing Namecheap DNS, add the purchased domain under **Settings → Pages → Custom domain**. GitHub recommends this order to avoid a domain-takeover risk.
4. In Namecheap’s **Advanced DNS** panel, add these records (replace `YOUR-USERNAME`):

   | Type | Host | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `YOUR-USERNAME.github.io` |

5. Once GitHub reports that DNS is checked, enable **Enforce HTTPS**. Keep the optional GitHub domain-verification TXT record if you add one. Do not use wildcard DNS records for the Pages domain.

Portraits are stored in `assets/images/`. The page links directly to email and LinkedIn; update those contact links in `index.html` if needed.
