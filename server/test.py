import requests
import json
import urllib
import os
import shutil
import time
start = time.time()
my_path = os.path.dirname(os.path.realpath(__file__)) + '/images/pet_image/'
info_url = requests.get("http://192.168.0.8:5000/api/crawl/get_crawldata")
text = info_url.text
data =json.loads(text)
print(len(data['data']))
print(my_path)