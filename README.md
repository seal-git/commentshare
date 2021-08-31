# commentshare
https://commentshare.work
## ローカルの起動方法
docker-compose.ymlのあるリポジトリで
```
docker-compose build
docker-compose up
```
バックグラウンドで起動する場合はupに-dオプションを付ける。
`flask` `react` `mysql` `https`コンテナ`がそれぞれ起動する。コンテナに入るには、
```
docker exec -it flask bash
```
ctrl+p+qで外に出れる。

**localhost:80**にアクセスすると実際の表示を見ることができる。ブラウザの警告が出るが無視して強制的に表示してok

コンテナを止めるときは、
```
docker stop flask react mysql https
```
