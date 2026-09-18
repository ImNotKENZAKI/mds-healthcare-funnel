# Medical V5: Offer, Visuals and Funnel Alignment

## Scope

The landing page now addresses clinic owners, practice managers and medical professionals looking for an MDS project. The offer is websites and funnels, GoHighLevel CRM, booking and follow-up automation, with optional social content and video editing. This aligns with service descriptions inspected in the existing MDS main-site source under mary-digi-v140-hero2-founder-appointment-fix. That main site was not edited.

No pricing, conversion guarantees, case-study results or compliance certifications were invented. Illustrative scenes and the website concept are identified as such.

## Graphics and Content

- Three new generated visuals: clinic entrance, front-desk coordination and clinician-led content creation.
- Removed the repeated doctor consultation image from the landing page.
- Distinct editorial layouts for the practice problem, website deliverables, CRM workflow and content services.
- Concrete deliverables and owner-focused calls to action replace abstract patient-facing brand copy.
- The CRM offer is described as a business inquiry workflow, not an electronic medical records system.

## Hero

All three scenes are retained, as clarified by the user. The desktop hero track is 145svh, previously 195svh; mobile is 140svh, previously 183svh. This reduces the animated scrolling distance by roughly half at representative viewports. Native scrolling is preserved. A wheel or touch gesture can vary by device; this is not a forced one-gesture scroll lock.

## Step 2 and Summary

Both pages now share a 1120px maximum content grid, header, progress strip, typography, spacing and responsive treatment. Step 2 uses a compact practice summary alongside aligned contact/workflow fields. On tablet and phone, the summary moves above the form and the oversized image panel is removed.

The summary page uses a structured project brief with practice, priority, contact and current workflow details. Edit and clear-preview actions remain available. The complete-state dialog retains Escape dismissal and focus restoration.

New fields: project priority in Step 1; project lead and work email in Step 2. Fields persist locally when storage is available, including when returning to edit Step 1. The contact form submit button stays disabled without JavaScript, so its local-preview interception must initialize before submission.

## Modified Files

- index.html, step-2.html, thank-you.html and START-HERE.html
- assets/js/medical-v3.js and assets/js/practice-flow-v3.js
- README-REVIEW.md and GENERATED-ASSETS.md

New files: assets/css/medical-offer-v5.css, assets/css/medical-flow-v5.css and three assets/images/medical/*-v5.webp images. PNG originals remain in the authoring workspace. Existing 3D source and bundle are unchanged.

## Local Review

The review scripts are review-tools/review-medical-v5.cjs and review-tools/review-medical-v4.cjs. Evidence is written to tmp/medical-v5-qa and tmp/medical-v4-qa respectively. The latter continues to exercise the live 3D canvas, chapter transitions, pause and fallback paths against the current landing page.

Completed V5 browser checks: landing page at 320, 390, 768, 1440 and 1920px; Step 2 and summary at 320, 390, 768, 1024 and 1440px. No horizontal overflow, broken images, duplicate IDs or overflowing tested text controls were found. Checks also cover the shorter hero distance, native chapter controls, reduced motion, menu Escape, keyboard tabs, exact Step 2 column alignment and the sidebar image ratio. The local flow passed contact/project persistence, dialog Escape/focus return, editing both steps, summary values and clearing the stored preview. With JavaScript disabled, the contact form submit control remains disabled.

The 3D regression run also passed at 320, 390, 768, 1440 and 1920px: nonblank canvas, changing rendered pixels, separated middle-scene layers, pause and offscreen suspension. Reduced-motion static rendering, missing-bundle image fallback and WebGL context loss/restoration passed with the shorter hero track.

Open index.html, move through all three hero scenes, inspect each service and complete the local project brief. On the summary page, test Edit brief and Clear this preview. Test keyboard navigation, Escape, reduced motion and the mobile menu.

## Before Launch

The forms are still local previews. No lead is sent to MDS, no CRM contact is created and no consultation is booked. Real client acquisition requires the agreed medical-specific form endpoint/GHL IDs, consent and routing setup, notification handling and end-to-end production testing. Do not send patient or medical information through this project brief. Review real-device performance before launch.

Earlier V3 and V4 ZIP archives are preserved. The V5 archive contains active dependencies at the root, including editable 3D source and licensing, and excludes unused earlier images and authoring PNGs.
