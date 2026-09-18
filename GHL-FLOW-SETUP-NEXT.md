# Medical Professional Funnel - GHL Setup Next

## Recommended GoHighLevel flow

1. Main landing page form
   - Capture name, email, phone, practice name, specialty, and main service interest.
   - Redirect to `step-2.html` after successful submission.

2. Step 2 diagnostic form
   - Capture practice type, current inquiry source, booking method, average inquiry volume, and biggest friction.
   - Add or update the same contact record.
   - Move contact into a medical practice review pipeline stage.

3. Booking path
   - Option A: direct calendar after Step 2.
   - Option B: manual review first, then staff sends the correct booking link.

For medical professionals, Option B may be safer if appointment type, provider, location, or patient context needs review before calendar access.

## Suggested pipeline stages

- New practice review request
- Details received
- Needs manual review
- Consultation scheduled
- Proposal / build recommendation
- Closed / archived

## Suggested notifications

- Internal email when Step 1 is submitted
- Internal email or task when Step 2 is submitted
- Optional SMS/email confirmation to the requester
- Calendar confirmation only after booking is complete

## IDs to replace before launch

- Main medical landing form ID
- Step 2 medical diagnostic form ID
- Medical consultation calendar ID

The V3 HTML uses local preview forms. `practice-flow-v3.js` holds the practice brief in browser-tab storage, opens a next-step dialog, and displays a local summary. No calendar iframe or external submission is active. Replace the preview handlers with verified GHL submissions and redirects when the medical-specific IDs are available. Keep the preview notice until that connection is complete.
