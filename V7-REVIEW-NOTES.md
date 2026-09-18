# V7: Color and Visible Motion

Date: 2026-09-17
Scope: the isolated medical funnel only. Existing three-scene timing, forms, field names, local storage, links and medical offer remain intact.

## Design changes

- Kept MDS blue as the primary action color. Replaced mixed gray-green and blue-gray surfaces with deliberate white, neutral charcoal, pale blue and pale medical mint sections.
- Unified secondary text and labels for stronger contrast. Active service labels remain blue; medical accents remain teal.
- Added a full-width service-text ribbon between the workflow and services sections. Its duplicate visual track is hidden from assistive technology; the section has one accessible service description.
- Added staggered word reveals to selected headings without changing the heading hierarchy or text.
- Added clipped photo entrances and scroll-linked image movement to the front-desk, clinic-concept and content-production images. The original layout dimensions remain reserved.
- Added slow movement to the distinct glass artwork on each follow-up page.
- Added ticker and project-page pause controls. Project-page controls sit in the header, not over form content.

## Files

Updated: index.html, step-2.html, thank-you.html, assets/js/practice-visual-v6.js, README-REVIEW.md and START-HERE.html.

Added: assets/css/medical-expression-v7.css and assets/js/medical-expression-v7.js. The existing scene bundle did not need rebuilding. Existing generated image files were reused; no new photographic identities were created.

Workspace QA tools: review-medical-v7.cjs, review-medical-v7-motion.cjs, review-medical-v7-color.cjs and package-medical-v7.ps1 under review-tools.

## Verification

- Landing layout at 320, 390, 768, 1440 and 1920px: no horizontal overflow, broken images, duplicate IDs or overflowing text.
- Complete form flow at 320, 390, 768, 1024 and 1440px: required fields, dialog focus/Escape, stored summary, editing, clearing and brief download passed.
- Motion checks at 320, 390, 768 and 1440px: ticker changes position, pauses on request and stops offscreen; both follow-up artworks move and pause; native scrolling changes image transforms and rendered pixels.
- Representative image pixel differences ranged from 24,386 to 97,867 changed pixels across those viewports.
- Reduced motion changes the ticker to wrapped static text and removes image/heading/artwork movement. No-JavaScript layout remains readable and contact submission stays disabled.
- Targeted secondary-label and surface contrast samples across the three pages passed 4.5:1 or higher. This is a targeted contrast check, not a full accessibility certification.
- Desktop 3D regression: nonblank moving canvas, all sampled crossfade positions, reverse scroll, pause and offscreen stop passed.
- Screenshots reviewed on desktop and phone sizes. Local-file motion checks passed; no server is needed to open the HTML.

## How to review

Open index.html, scroll through the original three-scene hero, then continue past the front-desk image and the service ticker. Try the ticker pause button. Scroll through the clinic concept and content image. Complete the practice form, then try the header motion control on Project Details and the summary.

## Boundaries

The lead form is still a local preview. CRM creation, notifications, pipeline/sheet logging, follow-up and booking require approved live GHL integration and end-to-end production checks. Generated imagery remains illustrative. Test the deployed version on real touch devices and target browsers before launch.
