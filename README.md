# vue3環境建置
參考文章:https://ithelp.ithome.com.tw/users/20151272/ironman/6829

我是參考文章的day2跟day3去建置的，day2的部分文章沒有提到的選項我是都填否，接下來我不會再對安裝套件或者環境建置多作說明，因為chatgpt都能問得到，看你會不會問而已:)))

# 關於使用chatgpt協助我用vue3傳寫網頁這檔事
我過去曾在總統大選時擔任過外監志工，台灣明明科技水平不算落後，卻依然使用幾十年前的投票方式，我對此感到疑惑，以此為動機我嘗試寫一個線上投票系統，
雖然有學過一陣子的HTML跟CSS，但我排版跟切版的功力還是太菜了，常常在RWD切版時出現預期外的狀況，因為卡關荒廢好幾個月之後，直到最近我嘗試使用chatgpt生成一個大概的版型，再細修CSS的部分變成我要的樣子。

# 初步規劃要有的功能 
連接資料庫、將身分證字號設定為主鍵值、保存登入狀態、紀錄是否完成投票、投票完成將該用戶的資料變成唯讀不可修改，想到什麼之後再加進去。

# 登入介面-初版2024/06/23

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E7%99%BB%E5%85%A5%E4%BB%8B%E9%9D%A2pc.png)

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E7%99%BB%E5%85%A5%E4%BB%8B%E9%9D%A2phone.png)

# 將電子信箱欄位改為身分證字號-2024/06/24
因接下來要連接資料庫需要安裝套件，避免環境崩壞先在此存檔順便推送

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E8%BA%AB%E5%88%86%E8%AD%89%E6%AD%A3%E7%A2%BA%E6%A0%BC%E5%BC%8F.png) 
![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E8%BA%AB%E5%88%86%E8%AD%89%E9%8C%AF%E8%AA%A4%E6%A0%BC%E5%BC%8F.png)

# 完成資料庫連接以及比對資料庫進行登入驗證-2024/06/24

測試資料庫的資料

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E8%B3%87%E6%96%99%E5%BA%AB.png)

非用戶登入
![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E9%9D%9E%E7%94%A8%E6%88%B6%E7%99%BB%E5%85%A5.png)

用戶登入
![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E7%94%A8%E6%88%B6%E7%99%BB%E5%85%A5.png)

# 很重要  請記得啟動後端服務器
![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%95%9F%E5%8B%95%E6%9C%8D%E5%8B%99%E5%99%A8.png)

# 新增投票頁面-2024/06/27
![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/vote_page.png)
![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/vote_page_no_choice.png)

這裡還沒有連接至後端所以點選投票不會有任何動作，之後在下方會再加上顯示目前選取項目的功能，以及點選投票跳出視窗

確定送出投票? 選取項目:xx，按下確認才送出投票。
