# Asset Manifest

The current image files are temporary production placeholders derived from the approved mockup. They preserve layout, crop behavior, and aspect ratios until final brand artwork and photography are supplied.

| Current filename | Used in | Replace? | Recommended final filename |
| --- | --- | --- | --- |
| `public/images/brand-emblem-updated.png` | Header and homepage hero brand mark via `siteAssets.logo` | Yes, with final transparent brand emblem if supplied | `brand-emblem.png` |
| `public/images/hero-horse-woman.png` | Homepage hero image via `siteAssets.photos.hero` | Yes, with real One More Stride hero photography | `hero-horse-woman.png` |
| `public/images/about-horse.png` | About page split image via `siteAssets.photos.about` | Yes, with real horse portrait photography | `about-horse.png` |
| `public/images/support-horse.png` | Dark donation/support band via `siteAssets.photos.donation` | Yes, with real rescue/support photography | `support-horse.png` |
| `public/images/ways-horse-woman.png` | Ways to Help page image via `siteAssets.photos.waysToHelp` | Yes, with real volunteer/support photography | `ways-horse-woman.png` |
| `public/images/horse-breeze.png` | `Breeze` horse card and detail page | Yes, with real horse photo | `horse-breeze.png` or final slug-based filename |
| `public/images/horse-ollie.png` | `Ollie` horse card and detail page | Yes, with real horse photo | `horse-ollie.png` or final slug-based filename |
| `public/images/horse-daisy.png` | `Daisy` horse card and detail page | Yes, with real horse photo | `horse-daisy.png` or final slug-based filename |
| `public/images/horse-finn.png` | `Finn` horse card and detail page | Yes, with real horse photo | `horse-finn.png` or final slug-based filename |
| `public/images/botanical-left.png` | Homepage pillars decorative left foliage via `siteAssets.botanical.left` | Yes, with final transparent botanical artwork if supplied | `botanical-left.png` |
| `public/images/botanical-right.png` | Homepage pillars decorative right foliage via `siteAssets.botanical.right` | Yes, with final transparent botanical artwork if supplied | `botanical-right.png` |
| `public/images/botanical-contact.png` | Contact page decorative foliage via `siteAssets.botanical.contact` | Yes, with final transparent botanical artwork if supplied | `botanical-contact.png` |
| `public/horseshoe-plain.png` | Brand accent/dividers and selected buttons | Yes, with final transparent horseshoe artwork if supplied | `horseshoe-plain.png` |
| `public/rescue-horse-hand.png` | Homepage Rescue pillar icon | Yes, with final transparent rescue icon if supplied | `rescue-horse-hand.png` |
| `public/rehabilitate-horse-leaf.png` | Homepage Rehabilitate pillar icon | Yes, with final transparent rehabilitate icon if supplied | `rehabilitate-horse-leaf.png` |
| `public/train-jumping-horse.png` | Homepage Train pillar icon | Yes, with final transparent training icon if supplied | `train-jumping-horse.png` |
| `public/hoof-ripple-make-difference.png` | Donation band Make a Difference icon | Yes, with final transparent impact icon if supplied | `hoof-ripple-make-difference.png` |
| `public/donate-hands-heart-horse.png` | Donation band Donate Today icon | Yes, with final transparent donation icon if supplied | `donate-hands-heart-horse.png` |
| `public/schedule-visit-calendar.png` | Donation band Visit & Volunteer icon | Yes, with final transparent visit icon if supplied | `schedule-visit-calendar.png` |

Asset paths are centralized in `data/assets.ts` and `data/horses.ts`. Decorative images use empty alt text and `aria-hidden` where appropriate. Content photos have descriptive alt text.
