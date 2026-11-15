"""Create smaller, pixel-identical WebP copies of the hero and navbar PNGs.

Requires Pillow with WebP support: python -m pip install Pillow
Run from any directory: python scripts/optimize-images.py
Original PNGs are retained. No resizing or lossy compression is applied.
"""

from io import BytesIO
import json
from pathlib import Path
import re

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]


def main():
    hero_source = (ROOT / "src/components/Hero.jsx").read_text(encoding="utf-8")
    # Recognize both extensions so reruns work after the JSX uses WebP files.
    hero_names = set(re.findall(r"/img/hero-banner/([\w-]+)\.(?:png|webp)", hero_source))
    sources = [ROOT / "public/img/hero-banner" / f"{name}.png" for name in sorted(hero_names)]
    sources.append(ROOT / "public/img/navbar/NavBar.png")
    results = []

    for source in sources:
        with Image.open(source) as original:
            pixels = original.convert("RGBA")
            encoded = BytesIO()
            pixels.save(encoded, format="WEBP", lossless=True, method=6, exact=True)
            data = encoded.getvalue()

        if len(data) >= source.stat().st_size:
            continue

        with Image.open(BytesIO(data)) as decoded:
            if decoded.size != pixels.size or decoded.convert("RGBA").tobytes() != pixels.tobytes():
                raise ValueError(f"Lossless verification failed for {source}")

        destination = source.with_suffix(".webp")
        destination.write_bytes(data)
        results.append({
            "source": "/" + source.relative_to(ROOT / "public").as_posix(),
            "optimized": "/" + destination.relative_to(ROOT / "public").as_posix(),
            "width": pixels.width,
            "height": pixels.height,
            "original_bytes": source.stat().st_size,
            "optimized_bytes": len(data),
        })

    print(json.dumps({
        "images": results,
        "original_bytes": sum(item["original_bytes"] for item in results),
        "optimized_bytes": sum(item["optimized_bytes"] for item in results),
    }, indent=2))


if __name__ == "__main__":
    main()
