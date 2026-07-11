import fitz
import os
import shutil

src = r"C:\Users\wasif\Downloads\joshywashy429-attachments (1)"
out = r"D:\Laravel_Projects\2026 Project\2nd Quatar\joshywashy429\public"

jobs = [
    ("BlackCanyonTower_Brochure.pdf", "Black_Canyon_Tower_hero.jpg", 0, 2.0),
    ("june plaza design.pdf", "Mikhail_Plaza_june_design.jpg", 0, 2.0),
    ("lauzon development.pdf", "Mikhail_Plaza_lauzon_dev.jpg", 0, 2.0),
    ("34 Foster St..pdf", "Harbourview_Foster_site.jpg", 0, 2.0),
    ("34 FOSTER ST leslie.pdf", "Harbourview_Foster_leslie.jpg", 0, 1.5),
    ("Potential new build provincial landmark.pdf", "Provincial_Landmark_map.jpg", 0, 2.0),
    ("RioCan Centre Windsor - Site Plan.pdf", "RioCan_Centre_Site_Plan_preview.jpg", 0, 1.5),
    ("Walker Towne Centre - Site Plan.pdf", "Walker_Towne_Site_Plan_preview.jpg", 0, 1.5),
]

for pdf, name, page, zoom in jobs:
    path = os.path.join(src, pdf)
    if not os.path.exists(path):
        print("MISSING", pdf)
        continue
    doc = fitz.open(path)
    pix = doc[page].get_pixmap(matrix=fitz.Matrix(zoom, zoom))
    dest = os.path.join(out, name)
    pix.save(dest)
    print(f"Saved {name} ({pix.width}x{pix.height}) pages={len(doc)}")
    doc.close()

# Copy key attachment images into public with clean names
shutil.copy2(
    os.path.join(src, "2D75B5EB-6044-47B3-92FE-E4E9A6FBCD8E.jpeg"),
    os.path.join(out, "Harbourview_Foster_building.jpg"),
)
shutil.copy2(
    os.path.join(src, "F5C33BA7-E1B2-4991-AFA8-25AE7DFC81F7.jpeg"),
    os.path.join(out, "RioCan_Centre_Aerial.jpg"),
)
shutil.copy2(
    os.path.join(src, "5E7D4D15-A8BD-42C6-BD8B-E2E464F44509.png"),
    os.path.join(out, "Walker_Towne_Site_Plan.png"),
)

# Copy PDFs into public/docs
docs = os.path.join(out, "docs")
os.makedirs(docs, exist_ok=True)
pdf_map = {
    "(19-33) Windsor Sear Redemise - IFC - ARCH.pdf": "Windsor-Sear-Redemise-IFC-ARCH.pdf",
    "34 FOSTER ST leslie.pdf": "34-Foster-ST-leslie.pdf",
    "34 Foster St..pdf": "34-Foster-St.pdf",
    "BlackCanyonTower_Brochure.pdf": "BlackCanyonTower_Brochure.pdf",
    "hgsplan.pdf": "hgsplan.pdf",
    "hgsplan2.pdf": "hgsplan2.pdf",
    "june plaza design.pdf": "june-plaza-design.pdf",
    "lauzon development.pdf": "lauzon-development.pdf",
    "Potential new build provincial landmark.pdf": "provincial-landmark.pdf",
    "RioCan Centre Windsor - Site Plan.pdf": "RioCan-Centre-Windsor-Site-Plan.pdf",
    "spa elevation plans.pdf": "spa-elevation-plans.pdf",
    "Walker Towne Centre - Site Plan.pdf": "Walker-Towne-Centre-Site-Plan.pdf",
}
for src_name, dest_name in pdf_map.items():
    shutil.copy2(os.path.join(src, src_name), os.path.join(docs, dest_name))
    print("DOC", dest_name)

mh = r"D:\Laravel_Projects\2026 Project\2nd Quatar\joshywashy429\public\mh-website-extract\MH Website"
mh_out = os.path.join(out, "mh-assets")
os.makedirs(mh_out, exist_ok=True)
for f in os.listdir(mh):
    if f.startswith("."):
        continue
    shutil.copy2(os.path.join(mh, f), os.path.join(mh_out, f))
print("MH assets copied:", len(os.listdir(mh_out)))
