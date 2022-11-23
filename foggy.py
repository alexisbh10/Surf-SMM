import Image
import glob

# Importing all necessary libraries
import cv2
import os

# Read the video from specified path
cam = cv2.VideoCapture("C:\\Users\\Admin\\PycharmProjects\\project_1\\openCV.mp4")

def slow_horizontal_variance (im):
    width, height = im.size
    if not width or not height: return 0
    vars = []
    pix = im.load()
    for y in range (height):
        row = [pix[x,y] for x in range (width)]
        mean = sum(row)/width
        variance = sum([(x-mean)**2 for x in row])/width
        vars.append(variance)
    return sum(vars)/height

for fn in glob.glob('*.png'):
    im = Image.open (fn).convert('L')
    var = slow_horizontal_variance(im)
    fog = var < 200 

try:
	
	# creating a folder named data
	if not os.path.exists('data'):
		os.makedirs('data')

# if not created then raise error
except OSError:
	print ('Error: Creating directory of data')

# frame
currentframe = 0

while(True):
	
	# reading from frame
	ret,frame = cam.read()

	if ret:
		# if video is still left continue creating images
		name = './data/frame' + str(currentframe) + '.jpg'
		print ('Creating...' + name)

		# writing the extracted images
		cv2.imwrite(name, frame)
        f = open (name,"r")
        slow_horizontal_variance(f)

		# increasing counter so that it will
		# show how many frames are created
		currentframe += 1
	else:
		break

# Release all space and windows once done
cam.release()
cv2.destroyAllWindows()


    