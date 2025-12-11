import qrcode

url = input("Enter the URL: ").strip()
filePath = "D:\\MyGit\\pizzaStock\\qr_code.png"

qr = qrcode.QRCode()
qr.add_data(url)

img = qr.make_image(url)
img.save(filePath)
