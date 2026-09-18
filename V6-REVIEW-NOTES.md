# Medical Experience V6

Date: 2026-09-17
Scope: isolated medical-professional funnel only. Main-site and real-estate files were not changed.

## Changes

- Kept all three hero scenes and the short native scroll track. DOM artwork and the Three.js scene now share one eased progress value instead of independent smoothing.
- Replaced the clipped image wipe with a continuous crossfade. The clinic reaches full opacity before the sticky stage releases; the canvas remains underneath throughout the transition.
- Removed decorative section, chapter, service and project-progress numbers. Internal IDs and data attributes are unchanged.
- Created separate connected-glass and project-folio graphics for the project-details and summary pages. Both use full-image containment, with no repeat of the landing-page photos.
- Reworked the two follow-up pages around aligned, unframed layouts, word-based progress navigation, stronger project-specific content and restrained material-entry motion.
- Added an accessible Website / CRM / Booking diagram. It supports arrow keys, Home and End, and responds to relevant form focus without changing the user's answers.
- Added a required-field readiness indicator and local text-brief download. Nothing is transmitted by either control.
- Preserved existing field names, local storage, edit-and-return behavior, dialog focus restoration and disabled no-JavaScript contact submission.

## Files

Changed: index.html, step-2.html, thank-you.html, START-HERE.html, README-REVIEW.md, GENERATED-ASSETS.md; assets/css/medical-motion-v4.css and medical-offer-v5.css; assets/js/medical-v3.js; assets/src/medical-scene-v4.js and its rebuilt assets/js/medical-scene-v4.bundle.js.

Added: assets/css/medical-flow-v6.css; assets/js/practice-visual-v6.js; assets/images/medical/connected-glass-v6.webp and project-folio-v6.webp; supporting Lucide icons. PNG masters remain in the working folder; delivery uses optimized WebP.

The existing practice-flow-v3.js remains the owner of the form and dialog behavior.

## Verification

- Responsive landing checks at 320, 390, 768, 1440 and 1920px: no horizontal overflow, broken images, duplicate IDs, overflowing text or local page errors.
- Complete form flow at 320, 390, 768, 1024 and 1440px: required fields, stored answers, summary values, edit/restore, clear, dialog Escape/focus and downloaded brief contents passed.
- Ten sampled hero positions per viewport: synchronized progress, monotonic image crossfade, opaque background and completed clinic reveal before sticky release passed. Reverse wheel scrolling passed.
- Canvas-pixel checks verified a nonblank scene and visible rendered movement at all five sizes. Pause, offscreen stop, reduced motion, missing-bundle fallback and WebGL context recovery passed.
- Direct-file preview and short-height framing checks are recorded separately in tmp/medical-v6-final-qa/results.json in the workspace.

Reproducible local checks:

    node review-tools/review-medical-v6.cjs --flow
    node review-tools/review-medical-v6-scene.cjs
    node review-tools/review-medical-v6-final.cjs

## Review

Open index.html from the extracted folder. Scroll forward and backward through all three hero scenes, then complete the practice form. On Project Details, try the workflow tabs and fill the required fields. Review the summary, download the text brief, edit the answers and test Clear this preview.

## Launch Boundary

This is a local design and interaction preview, not a production lead-capture integration. It does not create a CRM contact, send notifications, write a sheet, trigger follow-up or book a consultation. Medical-specific GHL forms, workflow ownership, approved booking routing and live end-to-end submission tests are still required.

Generated graphics are illustrative, not real client evidence. Visual approval remains with MDS. Test real touch devices and the deployed branded host before launch; headless Chromium checks do not certify every browser or GPU.
