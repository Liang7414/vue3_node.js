# 關於使用chatgpt協助我用vue3傳寫網頁這檔事
我過去曾在總統大選時擔任過外監志工，對於台灣明明是在科技方面不算落後的國家，卻依然使用幾十年前的投票方式，我對此感到疑惑，以此為動機我嘗試寫一個線上投票系統，
雖然有學過一陣子的HTML跟CSS，但我排版跟切版的功力還是太菜了，常常在RWD切版時出現預期外的狀況，荒廢好幾個月之後，我嘗試使用chatgpt生成一個大概的版型，再細修CSS的部分變成我要的樣子，目標是寫出線上投票系統。


初步規劃要有的功能有:連接資料庫、將身分證字號設定為主鍵值、保存登入狀態、紀錄是否完成投票、投票完成將該用戶的資料變成唯讀不可修改。

# 登入介面-初版2024/06/23
沒意外之後會先把電子信箱的欄位改成身分證字號的格式
![image](https://github.com/Liang7414/vue3_project/blob/main/%E7%99%BB%E5%85%A5%E4%BB%8B%E9%9D%A2pc.png)
![image](https://github.com/Liang7414/vue3_project/blob/main/%E7%99%BB%E5%85%A5%E4%BB%8B%E9%9D%A2phone.png)

# vue3

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
