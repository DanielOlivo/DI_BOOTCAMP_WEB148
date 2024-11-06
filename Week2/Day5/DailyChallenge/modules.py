import requests
import time

def get_loading_time(url):
    print("Loading url: ", url)
    start_time = time.time()
    try:
        _ = requests.get(url, timeout=(3.0, 10.0))
        end_time = time.time()
        loading_time = end_time - start_time
        print("Time: ", loading_time)
    except requests.exceptions.Timeout:
        print("failed to load ",url)

get_loading_time("https://www.google.com")
get_loading_time("https://www.ynet.co.il")
get_loading_time("https://www.imdb.com")