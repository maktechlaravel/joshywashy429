import fitz
import os

src = r"C:\Users\wasif\Downloads\joshywashy429-attachments (1)"
out = r"D:\Laravel_Projects\2026 Project\2nd Quatar\joshywashy429\public"

# Black Canyon brochure - extract all pages
doc = fitz.open(os.path.join(src, "BlackCanyonTower_Brochure.pdf"))
for i in range(len(doc)):
    pix = doc[i].get_pixmap(matrix=fitz.Matrix(2, 2))
    path = os.path.join(out, f"Black_Canyon_Tower_p{i+1}.jpg")
    pix.save(path)
    print("BCT", i + 1, pix.width, pix.height)
doc.close()

# Foster leslie - extract key pages (site + elevations)
doc = fitz.open(os.path.join(src, "34 FOSTER ST leslie.pdf"))
for i in range(min(len(doc), 5)):
    pix = doc[i].get_pixmap(matrix=fitz.Matrix(1.4, 1.4))
    path = os.path.join(out, f"Harbourview_Foster_p{i+1}.jpg")
    pix.save(path)
    print("Foster", i + 1, pix.width, pix.height)
doc.close()

# Lauzon development
doc = fitz.open(os.path.join(src, "lauzon development.pdf"))
pix = doc[0].get_pixmap(matrix=fitz.Matrix(1.8, 1.8))
pix.save(os.path.join(out, "Mikhail_Plaza_lauzon_dev.jpg"))
print("Lauzon", pix.width, pix.height)
doc.close()

# Download CIBC exteriors locally so cards don't break
import urllib.request
base = "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/CIBC%20Building/"
for name, dest in [
    ("main.jpg", "CIBC_Building_main.jpg"),
    ("CIBC%201.jpg", "CIBC_Building_1.jpg"),
    ("CIBC%202.jpg", "CIBC_Building_2.jpg"),
    ("CIBC%203.jpg", "CIBC_Building_3.jpg"),
    ("100-ouellette.jpg", "CIBC_100_Ouellette.jpg"),
]:
    try:
        urllib.request.urlretrieve(base + name, os.path.join(out, dest))
        print("DL", dest)
    except Exception as e:
        print("FAIL", dest, e)

obase = "https://www.mikhailholdings.com/realestate.mikhailholdings.com/upl/fm/Commercial%20Retail%20Space/Ouellette%20Commercial%20Centre/"
for name, dest in [
    ("ouellette.jpg", "Ouellette_Commercial_main.jpg"),
    ("ouellette1.jpg", "Ouellette_Commercial_1.jpg"),
]:
    try:
        urllib.request.urlretrieve(obase + name, os.path.join(out, dest))
        print("DL", dest)
    except Exception as e:
        print("FAIL", dest, e)

print("done")
