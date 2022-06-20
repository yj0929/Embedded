import re
import requests
from bs4 import BeautifulSoup
import paho.mqtt.client as mqtt

mqtt = mqtt.Client()
mqtt.connect("localhost",1883)

url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B5%B0%EC%82%B0+%EB%82%A0%EC%94%A8&oquery=%EA%B5%B0%EC%82%B0+%EB%82%98%EC%94%A8&tqi=hrtXRdprvh8ssNSkM%2BCssssstw8-277625"
headers = {"User-Agent":"mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/102.0.5005.63 safari/537.36"}

res = requests.get(url, headers=headers)
soup = BeautifulSoup(res.text, "lxml")

temp = soup.find("span", attrs={"class":"num"}).get_text()
cast = soup.find("p", attrs={"class":"summary"}).get_text()
humidity = soup.find("dl", attrs={"class":"summary_list"}).get_text() # 습도

print(temp)
print(cast)
print(humidity)

mqtt.publish("weather/temp", temp)
mqtt.publish("weather/cast", cast)
mqtt.publish("weather/humidity", humidity)