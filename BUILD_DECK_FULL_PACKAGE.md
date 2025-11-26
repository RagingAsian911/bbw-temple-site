# BUILD DECK – FULL PACKAGE  
Buchanan Construction • OracleSignal Holdings LLC • BBW Temple

Owner / Founder: **Charles Buchanan**  
Primary PayPal (ALL PAYMENTS): **charlesbuchanan89@yahoo.com**  
GitHub Owner: **RagingAsian911**  
Primary Online Brand Assets: **BBW Temple • OracleSignal • Buchanan Construction**

---

## 1. DIGITAL ECOSYSTEM OVERVIEW

This build deck describes a ONE-DROP online business system combining:

- **Buchanan Construction** – base business entity
- **OracleSignal Holdings LLC** – digital / automation / IP holding
- **BBW Temple Site** – branded, monetized web property
- **Crypto Oracle Server** – Node/Express API + Workers + triggers
- **Temple Storefront** – PayPal-only monetized products & offerings

The goal is:

> “ONE BUSINESS, ONE BUTTON, ONE DEPLOY.”  
> All assets routed through a single, controlled structure and trust.

---

## 2. CORE DOMAINS & ONLINE PROPERTIES

**Primary Domains**

- `oraclesignal.site` – Oracle / automation / vault system  
- `bbwtemplesite.org.uk` – BBW Temple branded site  
- `chuckiescheeze4buc.com` – additional brand funnel / traffic  
- Any new domains should route into these as the core pillars.

**Primary GitHub Repos (under `RagingAsian911`)**

- `bbw-temple-site` – live site front-end (this repo)  
- `crypto-oracle-server` – backend oracle / API logic  
- `express-hello-world` – base Node/Express starter (can be reused)  

---

## 3. PAYMENT & MONETIZATION LAYER

**NO STRIPE. PAYPAL ONLY.**  

Global business receiver:

- **PayPal:** `charlesbuchanan89@yahoo.com`

All buttons (Buy Now, Offerings, Access, Membership) must point to this PayPal.

**Example Product Mapping (as used in BBW Temple index.html):**

1. **AI Signal Tracker**  
   - Price: **$39 one-time**  
   - Purpose: Signal feed / crypto prediction engine  
   - PayPal item_name: `AI Signal Tracker`

2. **Oracle Merch Pack**  
   - Price: **$59 one-time**  
   - Purpose: Branded physical/print-on-demand merch  
   - PayPal item_name: `Oracle Merch Pack`

3. **Affiliate Vault Access**  
   - Price: **$97 one-time**  
   - Purpose: Tools, links, signals, affiliate access  
   - PayPal item_name: `Affiliate Vault Access`

4. **Temple Offering**  
   - Price: **$11.11** (or variable later)  
   - Purpose: Custom payment / offering / donation  
   - PayPal item_name: `Temple Offering`

> Every monetized page must use this PayPal and item names consistently.

---

## 4. PHASED BUSINESS BUILD – 4 PHASES

### Phase 1 – Digital Assets & Deploy

**Goal:** Get all web properties and code online, behind Cloudflare / GitHub.

Key elements:

- Domains registered and pointing to Cloudflare
- Site code in `bbw-temple-site`
- API / Workers in `crypto-oracle-server`
- Cloudflare Workers, Pages, and/or Render configured
- Standardized CI/CD via GitHub Actions

**Outputs:**

- Live BBW Temple site (PayPal monetized)
- OracleSignal Workers or API endpoint
- Logs + health checks wired to audit endpoints

---

### Phase 2 – Simple Business Structure

**Goal:** Funnel all money into one properly structured business.

- Legal business entity:  
  - **Buchanan Construction** (existing)  
  - Optionally **OracleSignal Holdings LLC** as holding company
- EIN obtained (already done historically)
- Business banking opened
- PayPal → business bank connection  
- All platform payouts → holding account (or Buchanan Construction)

**Rule:**  
> NEVER receive business payments into random personal accounts once the structure is set.

---

### Phase 3 – Trust (Beginner Structure)

**Goal:** Put ownership of the business into a trust for protection and planning.

High-level (not legal advice):

1. Choose trust type with an attorney:
   - **Revocable** (more flexible)
   - **Irrevocable** (stronger protection, less flexible)
2. Draft and sign trust agreement.
3. Assign membership interest of LLC / business to trust via assignment document.
4. Bank + platforms updated to reflect trust / holding structure where appropriate.

Main move:

> “Assignment of LLC Membership Interest”  
> From you (Grantor) → To your Trust.

---

### Phase 4 – Governance, Compliance, and Security

**Goal:** Avoid chaos. Keep books clean. Lock access down.

- Governance:
  - Written resolutions for big decisions
  - Operating Agreement for LLC
- Accounting:
  - Classes: OracleSignal, BBW Temple, Other brands
  - CPA cadence: monthly / quarterly / annually
- Security:
  - Password manager for all logins
  - 2FA on: email, GitHub, PayPal, Cloudflare, etc.

---

## 5. AUTOMATION & CI/CD WORKFLOWS

Key workflows in this system:

1. **OracleSignal Trigger**

   - Runs on `push` to `main`
   - Sends a signed payload to `https://oraclesignal.site/api/trigger`
   - Carries metadata: source=github, action=push, payout_target, index_url

2. **Canary Ramp-Up Deploy (Cloudflare Workers)**

   - Uses `wrangler`
   - Deploys canary environment first
   - Steps traffic 5% → 20% → 50% → 100%
   - Rolls back if health check or latency fails

3. **One Drop – One-Click Deploy**

   - Build/test code (Node 20)
   - Secret scan (gitleaks)
   - Optional deploy to:
     - Render
     - Cloudflare Pages
     - SSH + PM2 server
   - Sends audit events to LOG_API with HMAC signatures.

4. **Static Deploy (GitHub Pages)**

   - For BBW Temple frontend
   - Uses `index.html` and related assets
   - Publishes to GitHub Pages or equivalent static hosting.

---

## 6. BBW TEMPLE FRONTEND – ONE FILE BUSINESS

The main `index.html` in `bbw-temple-site`:

- Brand: BBW Temple • OracleSignal Vault
- Products: AI Signal Tracker, Oracle Merch Pack, Affiliate Vault Access
- PayPal-only monetization wired to `charlesbuchanan89@yahoo.com`
- Clean, simple sections:
  - Hero / intro
  - Product cards
  - Buy Now buttons
  - Footer with ownership & brand info

You can:

- Deploy as-is for immediate money flow.
- Later extend to:
  - `checkout.html`
  - `vault.html`
  - `products.json` for dynamic cart
  - Affiliate cookies and tracking

---

## 7. TRUST / OWNERSHIP NOTES (NON-LAWYER SUMMARY)

- The business should be:
  1. Operated by **Buchanan Construction** (or OracleSignal Holdings LLC)
  2. Owned by your **Trust** (after proper assignment of interest)
- You remain in control as:
  - Manager
  - Trustee
  - Primary decision-maker

Legal docs should be drafted and executed with:

- An attorney (trust + LLC)
- A CPA (tax treatment and filings)

---

## 8. NEXT ACTIONS CHECKLIST

**Technical:**

- [ ] Commit monetized `index.html` into `bbw-temple-site` repo root
- [ ] Confirm GitHub Actions deploy flow works
- [ ] Point `bbwtemplesite.org.uk` to the deployed host
- [ ] Test each PayPal button (small test payments)

**Business:**

- [ ] Confirm all PayPal payouts land in preferred account
- [ ] Keep simple ledger of income & expenses
- [ ] Use one bank account for all business deposits

**Trust / Legal (with professionals):**

- [ ] Finalize trust type and draft
- [ ] Execute assignment of interest
- [ ] Update documents and keep copies in a secure vault

---

This build deck is meant to live inside the repo as your **master map** of the business system.