import sys, fitz, json, os

pdf = sys.argv[1]
doc = fitz.open(pdf)

os.makedirs("branding_assets/images", exist_ok=True)

extracted = []

for i, page in enumerate(doc):
    for img in page.get_images(full=True):
        xref = img[0]
        pix = fitz.Pixmap(doc, xref)
        out = f"branding_assets/images/page{i}_img{xref}.png"
        if pix.alpha:
            pix.save(out)
        else:
            pix.save(out)
        extracted.append(out)

with open("branding_assets/branding_index.json","w") as f:
    json.dump({"images": extracted}, f, indent=2)

print("Branding extracted:", extracted)