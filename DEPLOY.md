# Deploying pointfivestudio.in on Cloudflare Pages

This site is a **static export**: `npm run build` writes plain HTML, CSS and JS to `out/`.
Cloudflare Pages builds it from GitHub on every push to `main` and serves it from its global network.
The free plan allows commercial sites and has no bandwidth limit for static files.

You'll do this once:

1. [Create the Cloudflare Pages project](#1-create-the-pages-project) (about 5 minutes)
2. [Add pointfivestudio.in to Cloudflare](#2-add-pointfivestudioin-to-cloudflare) (5 minutes)
3. [Point GoDaddy at Cloudflare](#3-change-the-nameservers-at-godaddy) (5 minutes, then wait for DNS)
4. [Connect the domain to the site](#4-connect-the-domain-to-the-site) (2 minutes)
5. [Send www to the main domain](#5-redirect-www-to-pointfivestudioin) (2 minutes)
6. [Final checks and Google](#6-final-checks)

> **Why move the domain's DNS to Cloudflare?** Cloudflare Pages can only serve a *root* domain
> (`pointfivestudio.in`, without `www`) if Cloudflare manages that domain's DNS. The domain itself stays
> registered with GoDaddy and you keep renewing it there. Only the nameservers change.

---

## 1. Create the Pages project

1. Sign up or log in at **dash.cloudflare.com** (the free plan is enough).
2. In the left sidebar open **Workers & Pages** (in newer dashboards it sits under **Compute**).
3. Click **Create application**. Choose the **Pages** option. If you only see Workers templates, click
   **"Looking to deploy Pages? Get started"** at the bottom. Then choose **Import an existing Git repository**.
4. Click **Connect GitHub**. Sign in, and when GitHub asks which repositories Cloudflare may access, choose
   **Only select repositories → pointfive-studio** → **Install & Authorize**.
5. Back in Cloudflare, select **pointfive-studio** → **Begin setup**.
6. Fill in the build settings:

   | Setting | Value |
   | --- | --- |
   | Project name | `pointfive-studio` (this gives you `pointfive-studio.pages.dev`) |
   | Production branch | `main` |
   | Framework preset | **Next.js (Static HTML Export)** |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | *(leave empty)* |

   Under **Environment variables (advanced)**, add `NODE_VERSION` = `22`. The repo's `.node-version` file
   says the same; this is a belt-and-braces backup.
7. Click **Save and Deploy**. The first build takes 1–2 minutes. When it says **Success**, open
   `https://pointfive-studio.pages.dev` and check the site.

From now on, every push to `main` redeploys the site automatically. Pushes to other branches get their
own preview link.

## 2. Add pointfivestudio.in to Cloudflare

1. Go back to your Cloudflare **Account home** and click **Add a domain** (older dashboards say
   **Add a site**).
2. Enter `pointfivestudio.in`, keep **Quick scan for DNS records** selected and click **Continue**.
3. Choose the **Free** plan → **Continue**.
4. Cloudflare shows the DNS records it copied from GoDaddy. Before continuing, **delete these if you see them**,
   because they point at GoDaddy's "parked" page and would clash with the website:
   - an **A** record for `pointfivestudio.in` (or `@`) pointing at a GoDaddy IP address
   - a **CNAME** record for `www`
   - any record labelled *Parked* or *WebsiteBuilder*

   **Keep** any **MX** or **TXT** records (email and verification). Your email address is on Gmail, so you
   probably have none, but keep them if they're there.
5. Click **Continue to activation**. Cloudflare now shows **two nameservers**, something like
   `ada.ns.cloudflare.com` and `kip.ns.cloudflare.com`. **Copy both exactly.** Yours will have different
   names.

## 3. Change the nameservers at GoDaddy

1. Log in at **godaddy.com** → your profile icon → **My Products**.
2. Find **pointfivestudio.in** and open it (or click **DNS** next to it).
3. **DNSSEC:** in the domain's settings, check that **DNSSEC** is **off**. It usually is. If it's on,
   turn it off first, or the domain will stop working during the switch.
4. Open the **Nameservers** tab → **Change Nameservers**.
5. Choose **I'll use my own nameservers**. Paste the two Cloudflare nameservers, one per box, and delete
   any extra boxes.
6. Click **Save**, then confirm the warning (**Continue** / "Yes, I consent").
7. Back in Cloudflare, click **Check nameservers now**.

The switch usually takes **15 minutes to a few hours** (rarely up to 24). Cloudflare emails you when
`pointfivestudio.in` is **Active**. While you wait, GoDaddy may still show its parked page. That's normal.

## 4. Connect the domain to the site

Once the domain shows **Active** in Cloudflare:

1. **Workers & Pages** → **pointfive-studio** → **Custom domains** tab → **Set up a custom domain**.
2. Enter `pointfivestudio.in` → **Continue** → **Activate domain**.
   Cloudflare adds the DNS record for you (a CNAME pointing at `pointfive-studio.pages.dev`).
3. Repeat for `www.pointfivestudio.in`.
4. Both should show **Active** within a few minutes. HTTPS certificates are issued automatically. If one
   still says "Verifying" after 15 minutes, go back to step 2.4 and make sure no old A/CNAME records
   remain for `@` or `www` in **DNS → Records**.

## 5. Redirect www to pointfivestudio.in

The site should live at one address. Search engines prefer that, and the site's canonical URL is
`https://pointfivestudio.in`.

1. In Cloudflare, open the **pointfivestudio.in** domain → **Rules** → **Overview** → **Create rule** →
   **Redirect Rule**. If templates are offered, pick **"Redirect from WWW to root"** and check the values
   below.
2. Set it up as:
   - **Rule name:** `www to root`
   - **If incoming requests match… Custom filter expression:** Field `Hostname`, Operator `equals`,
     Value `www.pointfivestudio.in`
   - **Then… URL redirect:** Type **Dynamic**, Expression
     `concat("https://pointfivestudio.in", http.request.uri.path)`, Status code **301**,
     tick **Preserve query string**
3. **Deploy**.

Also turn on **SSL/TLS → Edge Certificates → Always Use HTTPS** if it isn't already on.

## 6. Final checks

- [ ] `https://pointfivestudio.in` loads the site with a padlock.
- [ ] `http://pointfivestudio.in` and `https://www.pointfivestudio.in` both end up at `https://pointfivestudio.in`.
- [ ] The **Email us** buttons open an email to hellopointfivestudio@gmail.com, and the Instagram link
      opens @pointfivestudio.in.
- [ ] *Later, when you have a WhatsApp Business number:* in `src/content/site.ts` set `whatsapp.number`
      and change `whatsapp.enabled` to `true`, then commit and push. The buttons switch to WhatsApp.
- [ ] Sharing the link on WhatsApp shows the preview image. WhatsApp caches previews, so if it shows an
      old one, test with `https://pointfivestudio.in/?v=1`.

### Tell Google about the site

1. Open **search.google.com/search-console** → **Add property** → **Domain** → `pointfivestudio.in`.
2. Google gives you a **TXT** record. In Cloudflare: **DNS → Records → Add record** → Type `TXT`,
   Name `@`, Content: paste the value → **Save**. Back in Search Console, click **Verify**.
3. In Search Console, go to **Sitemaps** → enter `sitemap.xml` → **Submit**.
4. Set up (or update) your **Google Business Profile** with the website link. For "near me" searches in
   Gurgaon and Mumbai, it matters as much as the website itself.

---

### Updating the site later

Edit `src/content/site.ts` (or anything else), then:

```bash
git add -A
git commit -m "Update prices"
git push
```

Cloudflare rebuilds and the change is live in about a minute. If a deploy ever breaks something, go to
**Workers & Pages → pointfive-studio → Deployments**, open the last good one and click **Rollback**.

### If a build fails

Open the failed deployment in Cloudflare and read the log. The usual causes are a typo in `site.ts` (a
missing comma or quote), or a different Node version. Run `npm run build` on your computer first: if it
works locally, it will work on Cloudflare.
