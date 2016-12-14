# See Music

> 使用vue2 vuex axios webpack Electron搭建的跨平台云音乐播放器，网易云音乐接口强力支撑，可随意畅听高品质收费歌曲

项目还在施工中🚧

## Usage

``` bash
# 项目根目录安装依赖
npm install

# 浏览器访问localhost:8000
npm run dev

# 打包编译生成静态资源
npm run build
```

## How to Build an Electron App

**重要！**

第一步：请先将`src/api/address.js`中`fullUrl`设为`true`

第二步：

```bash
# 重要！以下操作均在dist目录下进行
# 安装electron相关依赖
npm run install

# 预览效果
npm run test

# 编译生成可执行文件
npm run build
```

## DevPlan

- ~~播放~~
- ~~暂停~~
- ~~上一首、下一首~~
- ~~随机、单曲循环播放~~
- ~~查询(支持歌名，歌手，歌词，专辑查询)~~
- 页面重构（参照网易云桌面端）
- 歌词显示
- ~~下载歌曲~~
- 高品质音乐支持
- 用户登录/注册
- 收藏歌曲/歌单
- 榜单
- 显示歌曲评论（数据来自网易云音乐）


## BUGs

- 搜索歌名"如果下雨的时候你拖着行李箱子站在屋檐下面那么其实我没有足够的时间找一个好一点的理由抛弃家里面的狗坐上K667次列车到你在的地方找个商店买一把伞然后给我妹妹弹吉他因为她要参加比赛所以我回不去了我也不会给你说我泡面的碗还没洗"，专辑图片不显示（应当显示默认封面）
- 搜索关键词"k好"，点击播放那首歌名超长的歌，左边排版会蹦。。。


## LISENCE

本项目仅供交流学习之用
