# molecule-match 專案規則

## us-market（美股大事圖解）：每日導覽改成「一集一集」（2026-11-24 起，Roke 的要求）

導覽員分頁已不再有「每日早報」（daily:1 無 upd）與「今日更新導覽」（upd:1）兩站，改成 T 陣列中 `ep:1` 的「每日導覽」各集。排程更新任務裡凡是要求更新「每日早報」或「今日更新導覽」的步驟，一律改成「新增一集每日導覽」，不要再建立那兩站。

- 每次更新新增一集，加在 T 陣列最後一個 `ep:1` 集之後（依時間先後排列），不改寫、不刪除已有的集（Roke 要求：舊集數一律保留，之後可以回看）。App 上方列最近兩天的集，更早的收在「更早的集數」可展開回看。
- 格式：`{"k":"ep-YYYY-MM-DD-序號","daily":1,"ep":1,"d":"YYYY-MM-DD","day":"M/D","t":"HH:MM","no":當天第幾集,"ic":"🌅"早/"🕛"中午/"🌆"傍晚/"🌙"晚間,"n":"早上：一句標題","sc":"studio","go":["ev","大事id"],"L0":[開場],"seg":[段落],"L1":[收尾],"sum":[3 句重點]}`
- 段落：`{"nk":消息代號,"v":"YYYY-MM-DD HH:MM","t":"一句標題","L":[對白或卡片]}`。段落可加 `"go":["ev","大事id"]`（或 `["cal"]`、`["dash"]`、`["signals"]`、`["ix"]`），播放到該段時畫面上方會顯示那張大事卡的重點數字與圖表（2026-11-25 起，Roke 的要求：上方要顯示正在講的資訊，不是固定的圖）；沒寫 go 時依 index.html 的 NKGO 對照表（jensen、ant、fed、usd、good、hbs、tariff、fcn、nsf、sea-rule、cal、dash、signals、plan），再沒有就用該集的 go。新的 nk 或要指到當天新卡片時，請在段落直接寫 go。導覽播放時點畫面任何空白處都會跳下一句。同一件事固定用同一個 nk（如 us-close、tw-close、jensen、ant、fed、dash、signals、usd、good、hbs、cal）；v 是該消息最後更新時間。App 會記住使用者看過的 nk＋v，看過且 v 沒變的段落下一集自動略過。有新進展才用新 v；沒更新但重要的（如 cal）可沿用舊 v 再放；絕不把沒更新的舊消息改成新 v。
- 每集只講上一集之後新的或有更新的消息，3–6 段，最後一段放 cal；早上那集要有 us-close，傍晚那集要有 tw-close；儀表板分數變了要有 dash。全集最多一張「！」重點卡片、一個 `{q:...,more:1}` 選項題。
- 英文版 us-market/en/index.html 同步新增同 k、同 nk/v 的英文集（card 標題不加「！」）。
- TODAY 裡導覽員那項寫「導覽員：新增每日導覽第 N 集」；🆕 今日更新清單的「看每日導覽下一集」按鈕會自動接到下一集。
- 測試：播放清單是 `TS.L`（tourStart(i) 後連續 tourTap()／點選項到出現 `.tw-end`）；清空 localStorage 後依序看完各集，確認後一集相同 nk＋v 的段落出現「略過 N 則」卡片。
- 名詞解釋（2026-11-25 起，Roke 的要求）：導覽員對白打完字後會自動把 GL 裡的名詞加底線、點了跳解釋。寫每日導覽時，對白裡出現的公司、人名、機構、代號與專有名詞（含台股籌碼用語），GL 沒有的一律補進 GL（含常見別名），不要只補大事卡片裡的。
- 傍晚那次寫完前再查一次最新美股期貨、台指期夜盤與重點個股盤前，避免用到過時的盤前數字。

## us-market：Claude App 版（AI 分析按鈕）（2026-11-26 起，Roke 的要求）

- 每張大事卡與名人觀點下方有「🤖 AI 分析」按鈕（用 Claude Artifact 的 `sample` 能力），只有在 Claude App 版 https://claude.ai/artifact/RwoQxNPNwLLUQkoSwvLcWk 才能用；GitHub Pages 版按了會顯示「只能在 Claude App 裡的版本使用」並附連結。
- 每次更新 us-market/index.html（含排程更新）推上 GitHub 之後，也要同步更新這個 Artifact：先用 Artifact 工具 `action:"read"`、`url` 為上面網址讀一次，再用 `url` 加 `file_path: us-market/index.html`、`files: {"en/index.html": "us-market/en/index.html"}` 發布（不要傳 capabilities，沿用 sample）。不要另外新建 Artifact。
- 新增的大事卡、觀點不用另外寫 AI 內容；AI 分析由使用者按按鈕時即時產生，結果存在使用者瀏覽器裡（卡片 upd 變了會提示重新分析）。

## extraction-sim（手沖咖啡實驗室）：Claude App 版（手法比較 AI 分析）（2026-11-26 起）

- 手法設計 ⑤ 手法比較的「🤖 AI 分析」用 Claude Artifact 的 `sample` 能力，只有 Claude App 版 https://claude.ai/artifact/R6hnnAbRcCx5UppvcLw9Jc 能用；GitHub Pages 版改成提供「複製給 Claude 的提示詞」與連結。
- 每次更新 extraction-sim/index.html 推上 GitHub 後，也要同步這個 Artifact（slug c3272f19-6d0e-4ec7-aea8-6d7685acbc5d）：用 publish_files 發布 extraction-sim/index.html 為 index.html（base_version 先用 get_artifact 取得），不要另外新建，也不要改掉已宣告的 sample。
