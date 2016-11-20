export default {
	// 根据歌曲id查找歌
    getSongById: '/Server/Song',
    // 获取默认歌单
    // getDefaultSongList: 'http://localhost:8080/Server/Recommend',
    getDefaultSongList: '/Server/Recommend',
    // 根据歌曲id获取评论
    getComments: '/Server/Comments',
    // 添加好友
    addFriend: '/Server/Add_friends',
    // 获取好友的收藏
    getFriendCollections: '/Server/Get_friend_list',
    // 添加歌曲到收藏夹
    addToCollections: '/Server/Addto_List'
}
