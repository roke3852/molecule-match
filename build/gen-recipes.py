# 從手沖咖啡實驗室匯出配方資料庫 → build/recipes.json（沖煮筆記內嵌用）
import threading,functools,http.server,socketserver,time,json,sys,os
root=os.path.abspath(os.path.join(os.path.dirname(__file__),'..'))
H=type('H',(http.server.SimpleHTTPRequestHandler,),{'log_message':lambda *a:None})
srv=socketserver.ThreadingTCPServer(('127.0.0.1',8810),functools.partial(H,directory=os.path.dirname(root)))
threading.Thread(target=srv.serve_forever,daemon=True).start()
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page()
    pg.goto('http://127.0.0.1:8810/'+os.path.basename(root)+'/extraction-sim/');time.sleep(2)
    lib=pg.evaluate("window.__RECIPE_LIB()")
srv.shutdown()
json.dump(lib,open(os.path.join(root,'build','recipes.json'),'w'),ensure_ascii=False,separators=(',',':'))
print(len(lib),'recipes')
