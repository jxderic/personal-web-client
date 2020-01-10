###
 # @Descripttion: 
 # @version: 
 # @Author: jinxiaodong
 # @Date: 2020-01-09 23:34:33
 # @LastEditors  : jinxiaodong
 # @LastEditTime : 2020-01-09 23:54:10
 ###
#!/bin/bash 
WORK_PATH='/eric/personal-web'
cd $WORK_PATH
echo "先清除老代码"
git reset --hard origin/master
git clean -f
echo "拉取新代码"
git pull origin master
echo "打包admin"
cd admin
npm config set registry https://registry.npm.taobao.org
npm install
npm run build
echo "开始执行构建后端项目:back为docker镜像名称 1.0为版本号"
docker build -t font:1.0 .
echo "停止旧容器 并删除旧容器"
docker stop font-container
docker rm font-container
echo "启动新容器"
docker container run -p 80:80 --name font-container -d font:1.0