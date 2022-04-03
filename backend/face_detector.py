import cv2
#from random import randrange

#Pre Trained Data
anpr = cv2.CascadeClassifier('anpr.xml')

#Select the required image / webcam if you need
webcam = cv2.VideoCapture(0)

while True:
    successful_frame_read, frame = webcam.read()
    grayscaled_img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    face_coordinates = anpr.detectMultiScale(grayscaled_img)
    for (x, y, w, h) in face_coordinates:
        cv2.rectangle(frame,  (x, y), (x+w, y+h) , (255, 0, 0), 2)
    cv2.imshow('num_plate', frame)
    key = cv2.waitKey(1)
    if key== 81 or key==113:
        break

print("Code Complete")
