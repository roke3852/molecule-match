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
| `extraction-sim/` | 萃取分子模擬器 |
| `cupping/` | 杯測教室 |
| `smell-training/` | 嗅覺練習日誌 |
| `yoshi-combos/` | 耀西連招手冊 |
| `mtx-sim/` | 小台指期模擬器 |
| `eink-notes/` | 元太法說會筆記 |

## 新增 App
1. 建一個新資料夾，例如 `my-app/`，把 App 的 `index.html` 放進去
2. 在根目錄 `index.html` 的 `APPS` 清單加一行

## 分子消消樂
每次更新 `molecule/index.html` 時，請把 `<meta name="app-version">` 的內容改成新的版本號，主畫面 App 才會自動抓到新版。
