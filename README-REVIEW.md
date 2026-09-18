# MDS Medical: Custom Medical Experience, V7

Open index.html for the redesigned landing page, or START-HERE.html for all three pages.

## Design

MDS blue (#1659d6), medical teal (#08776f), pale mint (#e2f3ef), white, and neutral charcoal (#202b30). Blue identifies actions and systems; teal identifies medical accents.
The hero combines a generated architectural background with a real-time Three.js glass medical cross. A moving light trace, pointer-responsive rotation and scroll-separated layers lead into a synchronized clinic crossfade that completes before the sticky stage releases. Three chapter controls and a motion toggle accompany native scrolling. Reduced-motion preferences disable the pinned animation and render a static frame. The original generated hero remains the fallback when WebGL is unavailable.

The owner-focused offer covers websites and funnels, GoHighLevel CRM, booking and follow-up automation, plus optional social content and video editing. Three distinct new visuals replace the repeated consultation image. The three hero scenes now use a shorter native scroll track. Step 2 and the summary now have distinct generated glass artworks, unnumbered navigation and aligned editorial layouts. An interactive practice blueprint follows form focus, and the summary exports a local text brief.

V7 adds a moving service-text ribbon, staggered heading reveals, scroll-linked photo movement and slow glass-art animation. Motion pauses offscreen and respects reduced-motion settings. The ribbon and follow-up pages have dedicated pause controls.

## Main files

- index.html: landing page
- step-2.html: practice questionnaire and native next-step dialog
- thank-you.html: local practice brief summary
- assets/css/medical-v3.css: shared responsive styles
- assets/js/medical-v3.js: scene, tabs, navigation, reveals
- assets/js/practice-flow-v3.js: local forms, browser-tab state and dialog
- assets/css/medical-motion-v4.css: layered hero and workflow motion styles
- assets/css/medical-offer-v5.css: niche-specific landing layouts and shorter hero track
- assets/css/medical-flow-v6.css: coordinated Step 2 and project-summary layout
- assets/src/medical-scene-v4.js: editable Three.js scene source
- assets/js/medical-scene-v4.bundle.js: self-contained browser bundle and embedded background
- assets/js/medical-motion-v4.js: patient-record transitions and connected-workflow signals
- assets/images/medical/*-v5.webp: clinic entrance, front-desk and clinician-content images
- assets/js/practice-visual-v6.js: workflow tabs, form readiness, brief download and reduced-motion-aware reveals
- assets/images/medical/*-v6.webp: connected glass and project folio artwork
- assets/css/medical-expression-v7.css: consolidated active color roles and image/text presentation
- assets/js/medical-expression-v7.js: native scroll-linked images, text entrances, ticker and artwork motion
- assets/icons/: Lucide icons and license

Earlier source files remain in the working folder for reference. The V7 ZIP includes active pages, assets and editable scene source, with index.html at the archive root. Previous V3, V4, V5 and V6 ZIPs are preserved separately.

## Preview behavior

No server is needed to view the HTML. Keep the assets directory beside the pages. Google Fonts use an internet connection, with local font fallbacks when unavailable.

The forms are a local preview. They do not create a CRM contact, send a notification, or book an appointment. Answers are held in sessionStorage when available. The page explains this before submission. Main form -> practice details -> next-step dialog -> summary remains the review path. The legacy step-2.html?review=complete route also opens the next-step state.

## Review checklist

1. Open the main page and scroll through the hero. Try all three chapter controls and pause/enable motion.
2. Select each patient-journey stage. Keyboard users can use arrow keys, Home and End.
3. On mobile, open the menu, follow an anchor and close with Escape.
4. Complete both forms and check the next-step dialog. Escape returns focus to the opener.
5. Continue to the summary and verify the practice, project priority and contact information. Test Download project brief, Edit brief and Clear this preview.
6. Check the service ticker and its pause button. Scroll past each editorial photo and try the motion control in the project-page header.
7. Enable reduced motion: headings and photos stay static, the ticker becomes wrapped text and decorative animation stops.

## Launch work still needed

Connect new medical-specific GoHighLevel forms, contact updates, notification routing and the approved booking process. Update the preview copy only when submissions are real. The generated physician image is representative artwork, not a named MDS clinician, client or testimonial.

See V7-REVIEW-NOTES.md for the latest scope and verification, earlier version notes for historical checks, and GENERATED-ASSETS.md for image provenance.
