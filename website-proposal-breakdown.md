# X-prox Telecom Website Implementation Breakdown

Source: `website proposal.pdf`

## Working Assumption

This breakdown assumes:

- The frontend will be built in the current `Next.js 16` + `Tailwind CSS v4` project.
- Backend features can be built either with `Next.js Route Handlers` or a separate `Node.js/Express` service later.
- We should build the UI first with mock data, then connect real backend logic and MySQL.

## Project Goal

Build a multi-page telecom company website for **X-prox Telecom Ltd.** with these purposes:

- Brand marketing
- Service presentation
- Equipment catalog
- Real-time work tracking
- Client login portal
- Contact, credibility, and review showcase

## Main Pages From the Proposal

1. **Home**
   - Company intro
   - Services preview
   - CTA buttons
   - Client login entry

2. **Services**
   - Corporate & Business
   - Apartment & Standard
   - Contractual

3. **Equipment**
   - Routers, switches, OLTs, servers
   - ONUs, cables, accessories
   - Offer section

4. **Track Work**
   - Search by Ticket ID
   - Statuses: `On-site`, `Progressing`, `Revision`, `Success`

5. **Login**
   - Name, phone, email
   - Passcode
   - Forgot passcode flow

6. **Contact & Review**
   - Google Maps
   - Phone/email/contact info
   - Certificates
   - Partner logos
   - Client comments and recommendations
   - Experience gallery

## Suggested Delivery Order

Build in this order so an AI can work safely in small chunks:

1. Project structure and design system
2. Shared layout, navbar, footer
3. Home page
4. Services page
5. Equipment page with mock data
6. Track Work page with mock ticket lookup
7. Login page UI
8. Contact & Review page
9. Data models and MySQL schema
10. API endpoints
11. Auth and client history
12. Testing, polish, deployment prep

## Rules For AI Execution

Use these rules in every prompt:

- Only work on the current step.
- Do not redesign unrelated pages.
- Reuse existing components where possible.
- Keep code compatible with `Next.js 16` and `Tailwind CSS v4`.
- Use mock data until the backend step explicitly asks for real API/database integration.
- After finishing each step, summarize changed files and confirm what remains.

## Step-by-Step AI Plan

### Step 1: Define site structure and visual direction

**Goal**

Create the base information architecture and a consistent telecom brand style.

**Tasks**

- Define routes for all main pages
- Decide layout sections for each page
- Create color tokens, spacing rules, and typography choices
- Add reusable container and section patterns

**Deliverables**

- Global layout
- Design tokens in global styles
- Reusable page shell components

**Prompt for AI**

> Analyze this Next.js project and create the base site structure for an X-prox Telecom marketing website. Add a shared layout system, reusable page container/section patterns, and a clean telecom-focused visual direction using Tailwind CSS v4. Do not build all pages yet. Only prepare the foundation for future pages.

**Done when**

- Global styling is consistent
- Shared layout exists
- Routes can be added cleanly without repeating structure

---

### Step 2: Build the navbar, footer, and shared navigation

**Goal**

Create the reusable navigation and footer used across the full site.

**Tasks**

- Add header with logo/brand name
- Add links to Home, Services, Equipment, Track Work, Login, Contact
- Add mobile menu
- Add footer with address, email, phone, and quick links

**Deliverables**

- Reusable `Navbar`
- Reusable `Footer`
- Responsive navigation behavior

**Prompt for AI**

> Build the shared navigation and footer for the X-prox Telecom website in this Next.js project. Include desktop and mobile navigation, highlight the active route, and keep the UI professional and responsive. Do not build page content beyond what is needed to test navigation.

**Done when**

- Navigation works on desktop and mobile
- Footer is present and reusable
- Links are ready for the remaining pages

---

### Step 3: Build the Home page

**Goal**

Create the marketing landing page described in the proposal.

**Tasks**

- Hero section with company intro
- "Who We Are" section
- Services preview cards
- CTA buttons for quote and equipment
- Login access block

**Deliverables**

- Finished Home page
- Reusable hero and preview card components if needed

**Prompt for AI**

> Build the Home page for X-prox Telecom based on this proposal: company intro, technical credibility, services preview, clear CTA buttons, and a login entry point for clients. Use realistic telecom-oriented copy and a polished responsive layout. Keep data static for now.

**Done when**

- Home page reflects the proposal
- CTAs are visible and meaningful
- Design looks complete on mobile and desktop

---

### Step 4: Build the Services page

**Goal**

Present service categories clearly for different customer types.

**Tasks**

- Create sections/cards for:
  - Corporate & Business
  - Apartment & Standard
  - Contractual
- Add short benefits and use cases
- Add inquiry CTA

**Deliverables**

- Completed Services page
- Optional service-card component

**Prompt for AI**

> Build a Services page for X-prox Telecom with three categories: Corporate & Business, Apartment & Standard, and Contractual. For each category, show a short description, typical features, and a CTA. Keep the design consistent with the existing layout and do not add backend logic.

**Done when**

- All three categories are represented
- Service content is easy to scan
- CTA placement is clear

---

### Step 5: Build the Equipment page with mock data

**Goal**

Create a catalog page for telecom hardware and offers.

**Tasks**

- Create mock dataset for equipment items
- Show categories:
  - Routers
  - Switches
  - OLTs
  - Servers
  - ONUs
  - Cables
  - Accessories
- Add product cards with image, name, spec summary, category
- Add promotional offer section

**Deliverables**

- Equipment listing page
- Mock equipment data file
- Reusable product card component

**Prompt for AI**

> Build the Equipment page for X-prox Telecom using mock data. Include telecom hardware categories, equipment cards, basic specs, and an offer/promotion section. Keep the implementation frontend-only for now and organize the mock data cleanly for later API replacement.

**Done when**

- Equipment data renders from a structured source
- Categories are clear
- Offer section is visible

---

### Step 6: Build the Track Work page with mock ticket search

**Goal**

Implement the client-facing project tracking interface from the proposal.

**Tasks**

- Add Ticket ID input
- Add mock lookup behavior
- Display statuses:
  - On-site
  - Progressing
  - Revision
  - Success
- Show simple project details and last update

**Deliverables**

- Track Work page
- Mock ticket dataset
- Status badge/timeline UI

**Prompt for AI**

> Build the Track Work page for X-prox Telecom. Add a Ticket ID search form and show mock results for project tracking with these statuses: On-site, Progressing, Revision, and Success. Keep the logic frontend-only using mock data, but structure it so it can later connect to an API.

**Done when**

- User can search a mock ticket ID
- Status UI is clear
- Empty and invalid states are handled

---

### Step 7: Build the Login page UI

**Goal**

Create the client login and onboarding interface.

**Tasks**

- Add login form
- Add registration/onboarding form fields:
  - Name
  - Phone
  - Email
  - Passcode
- Add forgot passcode UI state
- Add client portal intro text

**Deliverables**

- Login page UI
- Form validation on the frontend

**Prompt for AI**

> Build a Login page UI for X-prox Telecom with sign-in, onboarding fields, and a forgot passcode flow. Keep it frontend-only for now with client-side validation and clean responsive form design. Do not implement real authentication yet.

**Done when**

- Forms are usable
- Validation feedback is visible
- Forgot passcode flow has a basic UI state

---

### Step 8: Build the Contact & Review page

**Goal**

Create the credibility and conversion page described in the proposal.

**Tasks**

- Add office contact details
- Add map/embed placeholder
- Add certificates section
- Add partner logo section
- Add client reviews/comments
- Add experience gallery

**Deliverables**

- Completed Contact & Review page
- Reusable review card / gallery components if needed

**Prompt for AI**

> Build the Contact & Review page for X-prox Telecom. Include office details, map placeholder, certificates, partner logos, client feedback, and an experience gallery. Use mock content and keep the design consistent with the rest of the site.

**Done when**

- Contact information is easy to find
- Social proof sections are present
- Page feels complete and credible

---

### Step 9: Define the backend data model

**Goal**

Translate the proposal into clear entities for future backend work.

**Suggested tables**

- `clients`
- `project_tickets`
- `project_updates`
- `equipment_items`
- `equipment_categories`
- `service_categories`
- `reviews`
- `partners`
- `certificates`
- `gallery_items`

**Tasks**

- Define fields for each table
- Define relationships
- Decide required enums and statuses
- Document validation rules

**Deliverables**

- Markdown schema notes or SQL schema draft

**Prompt for AI**

> Based on the current X-prox Telecom frontend and proposal, define the backend data model for MySQL. Create a clear schema for clients, project tickets, project updates, equipment, reviews, partners, certificates, and gallery items. Include field names, types, relationships, and status enums.

**Done when**

- Core entities are defined
- Tracking logic has a proper schema
- Equipment and review content can be stored cleanly

---

### Step 10: Build backend APIs

**Goal**

Add API endpoints after the frontend structure is stable.

**Suggested endpoints**

- `GET /api/services`
- `GET /api/equipment`
- `GET /api/equipment/:id`
- `POST /api/track-work`
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/forgot-passcode`
- `GET /api/reviews`
- `GET /api/partners`
- `GET /api/certificates`

**Tasks**

- Create route handlers
- Return mock or DB-backed responses
- Add request validation
- Add error states

**Deliverables**

- API route layer
- Shared types for request/response payloads

**Prompt for AI**

> Implement the first backend API layer for the X-prox Telecom project. Start with typed endpoints for equipment, track work, and contact/review content. Use clean request and response structures, handle validation, and keep the code ready for MySQL integration.

**Done when**

- Endpoints return consistent JSON
- Frontend can replace mock data with API calls
- Validation and error handling exist

---

### Step 11: Connect frontend pages to live APIs and authentication

**Goal**

Replace mock data and wire up real workflows.

**Tasks**

- Replace static equipment data with API calls
- Replace mock ticket lookup with API lookup
- Connect login/register/forgot passcode forms
- Add protected client history page if needed

**Deliverables**

- Integrated frontend and backend
- Working client login flow

**Prompt for AI**

> Connect the existing X-prox Telecom frontend pages to the real API layer. Replace mock data on the Equipment, Track Work, and Login pages with typed data fetching and form submission logic. Keep UI behavior stable and add loading, success, and error states.

**Done when**

- Mock data is removed where APIs exist
- Forms submit correctly
- Error/loading states are handled well

---

### Step 12: Final QA, polish, and deployment prep

**Goal**

Finish the project to a launch-ready state.

**Tasks**

- Review responsive behavior
- Check SEO metadata
- Add loading and empty states
- Optimize images/assets
- Test forms and ticket search
- Add deployment notes and environment variable list

**Deliverables**

- Polished production-ready app
- Deployment checklist

**Prompt for AI**

> Perform final QA and production polish on the X-prox Telecom website. Improve responsiveness, metadata, loading states, accessibility, and code consistency. Then create a short deployment checklist and list all required environment variables.

**Done when**

- Main flows are stable
- UI is responsive
- Project has deployment guidance

## Recommended AI Prompt Sequence

If you want the shortest workflow, instruct AI in this exact order:

1. Step 1
2. Step 2
3. Step 3
4. Step 4
5. Step 5
6. Step 6
7. Step 7
8. Step 8
9. Step 9
10. Step 10
11. Step 11
12. Step 12

## Minimal MVP Scope

If you want a smaller first version, build only:

1. Home
2. Services
3. Equipment with mock data
4. Track Work with mock ticket lookup
5. Contact page

Then add login, backend, and client portal later.

## Notes

- The proposal mentions `Pure ReactJS`, `Tailwind CSS`, `Node.js`, `Express.js`, and `MySQL`.
- Since this repository already uses `Next.js`, it is practical to use `Next.js` for the frontend and decide later whether backend logic stays inside the Next app or moves to a separate Express service.
- The most important custom feature in the proposal is the **Track Work** system. That should be treated as the highest-value feature after the core marketing pages are stable.
