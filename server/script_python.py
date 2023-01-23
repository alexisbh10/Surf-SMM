import cv2
import numpy as np
import sys

cap = cv2.VideoCapture("http://localhost:8000/live/STREAM_NAME/index.m3u8")

blancoBajo = np.array([0, 0, 0], np.uint8)
blancoAlto = np.array([179, 50, 255], np.uint8)
nFrames = 0

while True:
	ret, frame = cap.read()
	if ret:
		if(nFrames == 100):
			nFrames = 0
			frameHSV = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
			mask = cv2.inRange(frameHSV, blancoBajo, blancoAlto)
			
			blanco = 0
			negro = 0
			for x in mask:
				for y in x:
					if y == 255: blanco += 1
					else: negro += 1
			if blanco / (blanco + negro) > 0.7: print(True)
			else: print(False)
			sys.stdout.flush()
	#else: break
	nFrames += 1
cap.release()
cv2.destroyAllWindows()
