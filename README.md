# commentshare
https://commentshare.work
## ローカルの起動方法
docker-compose.ymlのあるリポジトリで
```
docker-compose up --build 
```
m1 macを使っている人は

```
docker-compose up --build -f docker-compose.m1.yml
```
バックグラウンドで起動する場合はupに-dオプションを付ける。

`csb` `csf` `csd` `csw`コンテナ`がそれぞれ起動する。(それぞれCommentShare-Back, Front, Database, Webの意味)

コンテナに入るには、
```
docker exec -it csb bash
```
ctrl+p+qで外に出れる。

**localhost:80**にアクセスすると実際の表示を見ることができる。ブラウザの警告が出るが無視して強制的に表示してok

コンテナを止めるときは、
```
docker stop csb csf csd csw
```
   