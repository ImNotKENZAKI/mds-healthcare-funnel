# Medical V3 Review Notes

## What changed

- Replaced the V2 stethoscope layout with a generated glass-cross pavilion and a scroll-driven scan reveal into a clinic scene.
- Added hero chapter navigation, motion control, keyboard-operated patient-journey tabs, a mobile menu and scroll reveals.
- Reworked the page hierarchy into editorial sections, a practice-website example, workflow connections and representative care imagery.
- Restyled both downstream pages and carried the practice brief through the local form flow.
- Replaced the custom next-step modal with a native dialog, including Escape close and focus return.
- Added new generated hero and care images; converted the three delivery images to WebP, approximately 421 KB combined.

## Files changed or added

index.html, step-2.html, thank-you.html, START-HERE.html, README-REVIEW.md,
assets/css/medical-v3.css, assets/js/medical-v3.js,
assets/js/practice-flow-v3.js, assets/icons/, assets/images/medical/*-v3.webp,
GENERATED-ASSETS.md, and this report.

Workspace review utilities: review-tools/prepare-medical-v3.cjs,
review-tools/review-medical-v3.cjs and review-tools/package-medical-v3.ps1.

## Browser verification

Playwright ran against local HTTP using installed Chrome in headless mode.

- Main page checked at 320, 390, 768, 1440 and 1920 pixels wide.
- Step 2 and summary checked at 390, 768 and 1440 pixels wide.
- No horizontal overflow, broken images, duplicate IDs or overflowing text boxes were found in the checked layouts.
- No main-page JavaScript errors or failed local asset requests were detected.
- Hero chapter navigation and motion toggle passed.
- Patient journey tabs passed pointer and keyboard interaction checks.
- Mobile menu opening and Escape close passed.
- Reduced-motion mode used the static scene and direct journey navigation.
- Both forms, next-step dialog, Escape/focus return and cross-page brief persistence passed on local HTTP.
- Desktop, tablet, mobile, reveal-state, dialog and summary screenshots were captured and inspected.
- Final tablet crop and mobile form ordering received a targeted follow-up browser pass.

Screenshots and machine results are in tmp/medical-v3-qa in the workspace, outside the delivery package.

## Limits

The forms remain a local preview. This review does not verify live GoHighLevel contacts,
notifications, calendar availability, CRM routing or production redirects. No external
submissions were sent. Browser storage may be unavailable in restricted contexts; the
preview remains navigable but saved answers may then be absent from the summary.

The new V3 package has root-level index.html and includes only active V3 assets. Existing
V1/V2 files and the previous ZIP remain available separately in the workspace.
