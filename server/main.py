import requests
from bs4 import BeautifulSoup
import MySQLdb
from urllib.request import urlopen
from urllib.parse import quote_plus
conn = MySQLdb.connect(
    user="root",
    passwd="9972486",
    host="localhost",
    db="test",
    charset="utf8",
    use_unicode=True
)
cursor = conn.cursor()
cursor.execute("set names utf8")
url = "https://www.animal.go.kr/front/awtis/protection/protectionList.do?totalCount=5653&pageSize=10&menuNo=1000000060&&page="

# def delete():
#     sql="delete from crawldata_test"
#     cursor.execute(sql)
#     conn.commit()
def updateImgToDB(min, max):
    for i in range(min, max):
        sql = "UPDATE CrawlData SET img=%s WHERE id=%s"
        val = ("img"+str(i)+".jpg", i)
        cursor.execute(sql, val)
        conn.commit()
    conn.close()


def crawl(startPage, endPage):
    n = 1
    for i in range(startPage, endPage):
        url_ = url + str(i)
        webpage = requests.get(url_)
        soup = BeautifulSoup(webpage.content, "html.parser")
        dataList = soup.find_all(attrs={'class':'txt'})

        imgList = soup.find_all(attrs={'class':'thumbnail'})
        for img in imgList:
            print(n)
            imgUrl = "https://www.animal.go.kr/" + img.find('a')['href']
            imgname = 'img' + str(n) + '.jpg'
            print(imgname)
            with urlopen(imgUrl) as f:
                with open('../client/public/images/'+imgname, 'wb') as h:
                    i = f.read()
                    h.write(i)
            n += 1

        crawlList = []
        for data in dataList:
            data1 = data.find_all('dd')
            crawlList = []
            for d in data1:
                crawlList.append(d.string)
            print(crawlList[1], crawlList[2], crawlList[3], crawlList[4])
            sql = "INSERT INTO CrawlData VALUES(NULL, %s, NULL, %s, %s, %s, NULL, NULL)"
            val = (crawlList[1], crawlList[2], crawlList[3], crawlList[4])
            cursor.execute(sql, val)
            conn.commit()
    #conn.close()

#crawl(1,2);
updateImgToDB(1,101);