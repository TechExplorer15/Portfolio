from rembg import remove
from PIL import Image

input_path = r"C:\Users\TANMA\.gemini\antigravity\brain\b59cff9e-c632-44b0-b9fa-40b4d07ffa42\media__1784098142622.jpg"
output_path = r"c:\Users\TANMA\OneDrive\Desktop\portfolio\public\images\profile.png"

print("Opening image...")
input_image = Image.open(input_path)

print("Removing background...")
output_image = remove(input_image)

print("Saving image...")
output_image.save(output_path)
print("Done!")
