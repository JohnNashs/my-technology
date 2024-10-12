const app = getApp<IAppOption>()
Component({
  options: {
    multipleSlots: true
  },
  data: {
    avatarTextureId: 'white'
  },
  methods: {
    handleReady: function ({detail}) {
      this.scene = detail.value;
      // 该接口已废弃，请授权后，采用 getUserInfo 代替。
      // this.scene.assets.loadAsset({
      //   type: 'texture', assetId: 'avatar', src: app.globalData.avatarUrl
      // }).then(() => this.setData({avatarTextureId: 'avatar'}));
    },
    getUserInfo: function() {
      wx.getUserInfo({
        desc: '获取头像',
        success: (res) => {
          console.log(res.userInfo);
          this.scene.assets.loadAsset({
            type: 'texture', assetId: 'avatar', src: res.userInfo.avatarUrl
          }).then(() => this.setData({avatarTextureId: 'avatar'}));
        }
      })
    },
    handleAssetsProgress: function ({detail}) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function ({detail}) {
      console.log('assets loaded', detail.value);
      wx.showToast({title: '点击屏幕放置'});
      this.scene.event.add('touchstart', () => {
        this.scene.ar.placeHere('setitem', true);
      });
    }
  }
})