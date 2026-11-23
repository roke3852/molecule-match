# Roke 的 App

網址：https://roke3852.github.io/molecule-match/

根目錄的 `index.html` 是 App 目錄頁，每個 App 放在自己的資料夾：

| 資料夾 | App |
|---|---|
| `molecule/` | 分子消消樂 |
| `coffee-expo/` | 2026 台灣咖啡展 逛展地圖 |
| `fukuoka-trip/` | 福岡 5大2小 8天7夜 |
| `spelling/` | 拼字消消樂 |
| `molecule-reactions/` | 分子反應圖鑑 |
| `ball-stick/` | 分子球棍組裝（球棍模型組裝遊戲＋教學模式） |
| `abc-chain/` | ABC 串珠項鍊（用字母珠子串英文單字，公主找項鍊的英文故事） |
| `extraction-sim/` | 手沖咖啡實驗室（開場畫面＋登入、咖啡店生涯模式、咖啡比賽、萃取模擬器＋教學） |
| `coffee-lab-plan/` | 咖啡實驗室商業化路線圖 |
| `brew-notes/` | 沖煮筆記（紀錄＋養豆＋甜蜜點分析） |
| `cupping/` | 杯測教室 |
| `bean-hunter/` | 咖啡尋豆師（尋豆師模擬遊戲） |
| `smell-training/` | 嗅覺練習日誌 |
| `yoshi-combos/` | 耀西連招手冊 |
| `mtx-sim/` | 小台指期模擬器 |
| `eink-notes/` | 元太法說會筆記 |
| `cat-food/` | 毛毛的飲食過敏紀錄 |
| `coffee-recall/` | 咖啡記憶卡（每日抽卡複習咖啡知識） |
| `blackcup/` | 黑杯聽音（咖啡界黑暗面文字遊戲，選錯就 BAD END） |
| `outfit/` | 穿搭試衣間（身形設定、多人衣櫃、試穿、商店預算） |

## 新增 App
1. 建一個新資料夾，例如 `my-app/`，把 App 的 `index.html` 放進去
2. 在根目錄 `index.html` 的 `APPS` 清單加一行（含 `cat`、`ver`、`updated`）

## 更新 App 時
在根目錄 `index.html` 的 `APPS` 清單把該 App 的 `ver` 往上加、`updated` 改成更新的日期和時間（格式 `2026-11-14 10:57`，台灣時間）、`note` 寫這次改了什麼。
版本號一變，目錄頁會在該 App 顯示「新版」紅標與更新說明，頂端也會有新版提示；打開 App 後就會消失。

## 目錄頁功能
- 分頁：「全部 App」與「⭐ 我的最愛」，點 ☆／★ 加入或移除最愛
- 分類：咖啡／學習／投資／旅行／遊戲／生活，上方標籤可篩選；看「全部分類」時依分類分組。分類清單在 `index.html` 的 `CATS`，每個 App 用 `cat` 指定
- 排序：預設／最近使用／最常使用／最近更新／名稱／自訂順序；隨時按「調整順序」就會切成自訂順序，每張卡片出現 置頂／上移／下移／置底（在同一分類裡移動）
- 「↻ 更新」按鈕：繞過快取重抓目錄頁和每個 App，重新載入後顯示哪些 App 有新版
- 最愛、排序、使用紀錄都存在各自手機的瀏覽器裡

## 分子消消樂
每次更新 `molecule/index.html` 時，請把 `<meta name="app-version">` 的內容改成新的版本號，主畫面 App 才會自動抓到新版。

## 離線使用
根目錄的 `sw.js` 會把所有 App 存到手機，沒網路也能開。新增或改檔後，執行 `node build/gen-sw.js .` 重建清單（版本號會更新，手機下次連網時自動換新）。

## 配方資料庫（沖煮筆記）
沖煮筆記的「配方資料庫」來自手沖咖啡實驗室。實驗室的配方有更新時，執行 `python3 build/gen-recipes.py` 匯出 `build/recipes.json`，再把它嵌進 `brew-notes/index.html` 裡 `/*RLIB*/…/*END*/` 之間。
