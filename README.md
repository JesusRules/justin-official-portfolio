# Justin Bernard's portfolio

React, Vite, GSAP and React Three Fiber portfolio.

## Run locally

```sh
npm install
npm run dev
```

Use `npm run build` followed by `npm run preview` to assess production performance. The development server has additional tooling overhead.

## Performance changes

- The hero's images decode first. About, Skills and Education then prepare in the background; heavier sections prepare one viewport ahead inside the site's scroll container. Direct menu jumps wait for their destination to be ready before scrolling. Full-height wrappers preserve navigation targets.
- Section contents reveal together after their images/models are ready, using matching background artwork while preparing instead of loading text. About and Projects wait for two complete render frames. Projects also waits for all skybox faces and FBX textures and retains its Canvas on revisits.
- Skills initializes all three rows before revealing them. The middle row starts and resumes moving right. Education and Contact keep their introduction animations paused until the section is reached.
- Menu animation GIFs load when the menu opens. An obsolete preload previously downloaded another unused GIF; together the removed startup GIF requests total 8,427,983 bytes.
- Twenty hero PNGs and the navigation PNG now use lossless WebP copies: 6,057,949 → 4,113,762 bytes (32.1% smaller). Their dimensions, RGBA pixels and transparency are identical. Original PNGs remain available.
- About mounts only the scene for the current screen width and pauses it offscreen or in a hidden tab. Project rendering and skills animations also pause offscreen or in a hidden tab; only the active project environment loads.
- Three.js canvases cap device pixel ratio at 1.5. Contact draws on demand after its camera animation instead of running continuously. See [React Three Fiber's performance guidance](https://r3f.docs.pmnd.rs/advanced/scaling-performance).
- Project camera/movement data uses refs instead of per-frame React state. Temporary vectors are reused and skybox resources are disposed on cleanup.
- Hero pointer work runs at most once per animation frame and stops offscreen. Audio loads on interaction. The unused, blocking external ScrollTrigger script was removed.

Regenerate optimized image copies with `python scripts/optimize-images.py` after installing Pillow with WebP support. The script verifies decoded pixel equality and retains only smaller outputs.

Remaining opportunities: resize oversized images/logos for their actual display size, convert the large project FBX models to optimized GLB after checking animations/materials, and offer a low graphics option without water reflections. Lossless image compression reduces download size, not decoded image memory. Existing transformed GLB files should not be substituted blindly for the animated FBX character.

## Contact email

`412: Gmail_API: Invalid grant. Please reconnect your Gmail account` means the EmailJS Gmail connection needs authorization again. In the [EmailJS dashboard](https://dashboard.emailjs.com/admin), open Email Services, select `service_np61i8q`, reconnect the intended Gmail account, save, and use the service's test-email option. Keep the service ID unchanged; if you create a replacement service, update the ID in `ContactForm.jsx`. [EmailJS connection documentation](https://www.emailjs.com/docs/tutorial/adding-email-service/).

This account issue is separate from React's “Objects are not valid as a React child” crash. The form now displays a string on failure, retains input, prevents duplicate pending submissions and cleans up dismissed modal animations. Provider details remain in the console. Live delivery requires reconnecting Gmail; local verification must mock EmailJS rather than send real emails.

## Verification

Measurements from the first optimization pass on November 15, 2026: local Chrome production preview, fresh browser context at 1706×900, five seconds after page load and before scrolling:

| Measurement | Before | After |
| --- | ---: | ---: |
| Resource body bytes reported by the browser | 22.21 MB | 4.83 MB |
| Resource requests | 138 | 29 |
| Mounted WebGL canvases on the hero | 2 | 0 |
| Initial production JavaScript, gzip (build output) | 486.96 kB | 90.87 kB |

That first pass reduced initial resource bytes by approximately 78%. The subsequent loading-sequence change intentionally prepares upcoming sections after the hero is ready, so five-second totals and mounted Canvas counts now include background preparation and will differ from this historical table. Heavy code remains outside the initial JavaScript bundle; prepared offscreen scenes stop rendering. These are not FPS or real-device load-time benchmarks.

Production build and desktop/mobile browser smoke checks passed, including mocked email failure/success, duplicate prevention, retained input and modal cleanup. WebGL draw-call checks confirmed About stops drawing offscreen and Contact stops drawing after its introduction. No real emails were sent.

The loading-sequence checks additionally delay a hero image, the About model, and a project skybox face to verify priority and visibility gates, check the middle row's first direction, verify project Canvas reuse, and exercise the exact 700px responsive breakpoint under React StrictMode.

Check the production build, navigate through all six sections, open the menu, drag through projects, toggle graphics, and revisit sections. Check About at desktop and mobile widths, and contact on both. Mock a 412 EmailJS response and a successful response to verify retry, retained input, disabled pending sends and dismissed-modal cleanup.

The current dependency tree still produces build warnings about `three-mesh-bvh` expecting `BatchedMesh`, `three-stdlib`'s bundled Lottie eval, and the deferred Three.js chunk size. The build succeeds; dependency upgrades should be handled together and checked against the 3D scenes.
