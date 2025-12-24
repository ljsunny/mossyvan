# 🌿 **MossyVan — Community Deal Sharing Platform**

A **Vancouver-based community platform** where users can **discover, share, and discuss deals** from grocery stores, restaurants, and local businesses.
Users upload deals, interact with posts, and browse trending discounts — evolving into a community-powered local deal hub.

Built with **Next.js 15, Supabase, Tailwind, ShadCN, Redis Search (Upstash), Vercel**.

---

## 🚀 **Project Vision**

MossyVan is not just a deal aggregator —
it is a **user-driven platform** similar to Reddit + Yelp + HotDeals, tailored for Vancouver’s local lifestyle.

Long-term goal: **Monetize through business accounts, promotions, and premium visibility features.**

---

# 🔎 **Search Architecture (NEW — Redis Search Integration(PLAN)) - **

MossyVan uses a **hybrid search strategy**:

### **MVP**

* Supabase Full-Text Search (FTS) for simple keyword querying
* Fast implementation
* Zero cost

### **Post-MVP — Upstash Redis Search**

To support advanced functionality:

* ⚡ Ultra-fast search (<1ms)
* 🔍 Auto-complete suggestions
* 🏪 Multi-filter queries (store, category, price range)
* 🔥 Trending search powered by Redis Sorted Sets
* 🔁 Sync with Supabase when new deals are created

### **Why Redis Search?**

* Perfect for community platforms with growing data
* Lightweight, cheap, extremely fast
* Direct integration with Next.js and Vercel
* No complex DevOps like Elasticsearch

### **Redis Index Structure Example**

```
idx:deals
 ├─ title       (TEXT)
 ├─ store       (TAG)
 ├─ category    (TAG)
 ├─ type        (TAG)
 ├─ price       (NUMERIC)
```

### **Example Redis Search Query**

```ts
await redis.ft.search(
  'idx:deals',
  `@title:${query}* | @store:{${query}}`
);
```

---

# 🧩 **Core Platform Features**

### 🔍 Deal Search

* Keyword search
* Full-text search (Supabase)
* High-performance Redis Search (+ autocomplete)

### 🧑‍🤝‍🧑 Community Posts

Users can upload deals with:

* Image
* Price
* Store
* Category
* Type (weekly / always / happy-hour / clearance)

### 🗨 Engagement

* Likes
* Comments
* Favorites
* Share links

### 🧭 Browse Feed

Sort by:

* Popular
* Latest
* Store
* Category

### 🏪 Business Accounts (Monetization)

* Verified business profiles
* Official deal uploads
* Paid promotions (highlighted deals)
* Analytics dashboard

### 🛠 Admin Functions

* Remove inappropriate deals
* Manage users & businesses
* Approve business accounts

---

# 🔐 **User Roles**

| Role         | Description                                                |
| ------------ | ---------------------------------------------------------- |
| **user**     | Regular users; browse & post deals                         |
| **business** | Stores, restaurants; official posts + future paid features |
| **admin**    | Moderation; full control                                   |

---

# 🗄️ **Database Schema (Supabase)**

### `profiles`

```
id              uuid (auth.users.id)
email           text
name            text
avatar_url      text
role            text   // user | business | admin
business_name   text
created_at      timestamp
```

### `deals`

```
id              uuid
user_id         uuid
title           text
store           text
category        text
price           numeric
original_price  numeric
type            text
image_url       text
created_at      timestamp
updated_at      timestamp
```

### Post-MVP tables

* `deal_likes`
* `deal_comments`
* `favorites`

---

# 🧱 **App Structure (Next.js)**

```
mossyvan/
 ├── app/
 │    ├── page.tsx
 │    ├── deals/
 │    ├── post/
 │    ├── auth/
 ├── components/
 ├── lib/
 │    ├── supabase.ts
 │    ├── redis.ts
 ├── public/
 ├── README.md
```

---

# 🚀 **MVP Scope**

### **Included**

* Deal feed
* Deal detail
* User login
* Upload deal (with image)
* Supabase integration
* Deployment to Vercel

### **Post-MVP**

* Redis Search integration
* Likes / comments
* Favorites
* Business account system
* Admin dashboard

---

# 🗺️ **Roadmap**

### Phase 1 — MVP

* Deals feed, upload page, login

### Phase 2 — Engagement

* Likes, comments, favorites

### Phase 3 — Redis Search Upgrade

* Autocomplete
* Advanced filters
* Trending searches

### Phase 4 — Business Accounts / Monetization

* Store profiles
* Paid promotions
* Analytics dashboard

### Phase 5 — Happy Hour + Map

* Happy hour DB
* Map view

---

# 🌱 **Vision**

MossyVan aims to become:

* Vancouver’s #1 local deal discovery platform
* A thriving community-driven ecosystem
* A monetizable local business hub
* Showcase of modern full-stack engineering using Next.js + Supabase + Redis

