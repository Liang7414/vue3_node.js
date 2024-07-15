# vue3環境建置
參考文章:https://ithelp.ithome.com.tw/users/20151272/ironman/6829

我是參考文章的day2跟day3去建置的，day2的部分文章沒有提到的選項我是都填否，接下來我不會再對安裝套件或者環境建置多作說明，因為chatgpt都能問得到，看你會不會問而已:)))

# 關於使用chatgpt協助我用vue3傳寫網頁這檔事
我過去曾在總統大選時擔任過外監志工，台灣明明科技水平不算落後，卻依然使用幾十年前的投票方式，我對此感到不解，以此為動機我嘗試寫一個線上投票系統，
雖然有學過一陣子的HTML跟CSS，但我排版跟切版的功力還是太菜了，常常在RWD切版花很多的時間，直到最近我嘗試使用chatgpt生成一個大概的版型，再細修變成我要的樣子。

# 製作完的感想
雖然製作這個系統基本的功能確定是可行的，但我發現要實際把投票E化有太多變數要去考量，首先資安是一個很大的難題，還有登入驗證方式要怎麼防止非本人登入，而且資料庫的格式都是要能夠跟戶政資料串接的，至少行政部門要先把各部門的資料庫做整合才有本錢去談E化投票，不過現階段的紙本投票並沒有比網路投票來得更透明，有太多的視野盲區，比較可行的做法是要能夠把紙本投票的流程給優化，人事審核的部分必須要更透明，最重要的必須要提高選票的仿造難度並修改投票的SOP，連製造來源都沒辦法追朔根本就是鼓勵作票跟作弊。

# 功能介紹
此系統可以分為兩個部分，分別為登入介面以及投票頁面，兩個頁面同時都需要讀取MySQL的資料，

登入介面會對比SQL的idNumber、password_以及vote_status(是否完成投票)，藉由以上三個欄位的資訊決定是否有登入權限。

投票頁面會使用cookie讀取登入介面登入的資訊，並用讀取到的資訊找到該用戶的資料，依照送出投票的選項修改vote_choice欄位，送出投票時會將vote_status改為1(此系統設計是該欄位為1就不能登入)，且在投票頁面等待超過設定的時間就會強制登出(不會修改vote_status)。


# 登入介面
手機/平板 

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90_PHONE%E7%99%BB%E5%85%A5.png)

PC端 

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90_PC%E7%99%BB%E5%85%A5.png)

不能登入的三種狀況，從左至右:格式不對、不符合的身分證字號或密碼、已經完成投票(vote_status==1)

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90_3%E7%A8%AE%E4%B8%8D%E8%83%BD%E7%99%BB%E5%85%A5%E7%9A%84%E7%8B%80%E6%B3%81.png)

可以登入的狀況:身份證字號跟密碼皆符合資料庫內的資訊，且尚未完成投票(vote_status==0)

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90_%E5%8F%AF%E4%BB%A5%E7%99%BB%E5%85%A5%E7%9A%84%E7%8B%80%E6%B3%81.png)

# 投票頁面
選取到的項目才會是全彩，其他選項會是灰階

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90_%E6%8A%95%E7%A5%A8%E9%A0%81%E9%9D%A2.png)

時間超過設定時間會強制登出並且要求重新登入

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90_cookie%E9%81%8E%E6%9C%9F.png)

送出投票成功

![image](https://github.com/Liang7414/vue3_project/blob/main/picture_github/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD%E5%AE%8C%E6%88%90_%E9%80%81%E5%87%BA%E6%8A%95%E7%A5%A8.png)


# 更新日誌
登入介面-初版2024/06/23->

將電子信箱欄位改為身分證字號-2024/06/24->

完成資料庫連接以及比對資料庫進行登入驗證-2024/06/24->

新增投票頁面-2024/06/27->

新增保存cookie以及根據vote_status給予登入權限功能-2024/07/01

# bug修正以及優化內容
navbar在手機端點選漢堡按鈕後，切版至電腦端時版型會崩壞(已修正)-2024/07/01




