import requests
from lxml import html
from bs4 import BeautifulSoup
import pandas as pd

courses = pd.read_csv('courseCodes.txt', sep="\n", header=None).values
courses = courses.reshape(-1)

# try, catch to skip broken coursecodes
def getCourseData(code):
    page = requests.get('https://courses.aalto.fi/course/' + code)
    soup = BeautifulSoup(page.content, 'html.parser')
    title = soup.h1.string
    links = soup.findAll('a')
    # oodiLink = links[6]['href']
    # myCoLink = links[7]['href']
    oodiLink = 'https://oodi.aalto.fi/a/opintjakstied.jsp?Kieli=6&html=1&Tunniste=' + code
    myCoLink = 'https://mycourses.aalto.fi/course/search.php?search=' + code
    paragraphs = soup.findAll('p')
    description = paragraphs[1].string.replace(';', ',')
    return [title, description, oodiLink, myCoLink]