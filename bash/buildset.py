#test.py

#test.py

import sys
import os
import subprocess
from setparse import construct
import time
print('\n')
time.sleep(2)
SET=[]

SET.append(sys.argv[1])
print(SET)
#string of setname passed by set_builder.sh :D-SD01, D-BT01

# open img/D-SD01/D-SD01.txt
f = open(f"img/{SET[0]}/{SET[0]}.txt",'r')
content = f.read().splitlines()
#read text file and split by newline

construct(content,SET[0])
f.close()
#m.close()
#bash = ["mv ",text,"img/" + set_name +"/"]
#subprocess.Popen(bash)

