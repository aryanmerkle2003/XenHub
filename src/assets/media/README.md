# XEN Media assets - how to replace a placeholder

Save your image with exactly the same file name as the one you want to replace, in the same folder,
and delete the old file. `.jpg`, `.jpeg`, `.png` and `.webp` all work (the extension can differ).
Do not rename folders.

| Folder | File name pattern | Count |
| --- | --- | --- |
| `xen-lab-images/pnq/the-lab/` | `pnq-the-lab-01` ... `06` | 6 |
| `xen-lab-images/pnq/breakout-rooms/` | `pnq-breakout-rooms-01` ... `06` | 6 |
| `xen-lab-images/pnq/activities/` | `pnq-activities-01` ... `06` | 6 |
| `xen-lab-images/pnq/artifacts/` | `pnq-artifacts-01` ... `05` | 5 |
| `xen-lab-images/blr/...` | same four folders, files start with `blr-` instead of `pnq-` | 23 |
| `workshop-videos/` | `xen-workshop-video-01-thumbnail` (Fast Currents, portrait), `xen-workshop-video-02-thumbnail` (XEN Practice Testimonials, landscape) | 2 |
| `virtual-backgrounds/` | `xen-virtual-background-light`, `xen-virtual-background-dark`, `merkle-virtual-background-light`, `merkle-virtual-background-dark` | 4 |

The first photo of The Lab, Breakout Rooms and Activities is what shows on the PNQ / BLR cards on the page.

Logos live in `src/xen-logos/svg` and `src/xen-logos/png` (`<genre>-<default|reversed|white|black>`).
