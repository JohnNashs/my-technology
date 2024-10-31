Component({
  // behaviors: [require('../common/share-behavior').default],
  properties: {
    markerImg: {
      type: String
    },
  },
  data: {
    loaded: false,
    arReady: false
  },
  lifetimes: {
    async attached() {
      console.log('data', this.data)
    }
  },
  methods: {
    handleARTrackerState({detail}) {
      // 事件的值即为`ARTracker`实例
      const tracker = detail.value;
      console.log('ar-tracker', tracker);
      
      // tracker.onTick(() => {
      //   console.log(tracker.arActive());
        
      // })
      // 获取当前状态和错误信息
      const {state, errorMessage} = tracker;
    },
    handleARTrackerSwitch({detail}) {
      console.log('ar-tracker-switch', detail);
      const switchState = detail.value;
      if(switchState) {
        setTimeout(() => {
          wx.showModal({
            title: '提示',
            content: '扫到了一个瑞幸杯子',
            cancelText: '不感兴趣',
            confirmText: '查看信息',
            success (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })  
        }, 500)
                     
      }
    },
    handleReady({
      detail
    }) {
      const xrScene = this.scene = detail.value;
      console.log('xr-scene', xrScene);
    },
    handleAssetsProgress: function ({
      detail
    }) {
      console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function ({
      detail
    }) {
      console.log('assets loaded', detail.value);
      this.setData({
        loaded: true
      });
    },
    handleARReady: function ({
      detail
    }) {
      console.log('arReady', detail);
      this.setData({
        arReady: true
      })
    //   this.selectComponent('#arTracker').on('track', (event) => {
    //     const { isDetected } = event.detail;
    //     if (isDetected) {
    //         console.log('检测到物体');
    //         // 处理检测到物体的逻辑
    //     } else {
    //         console.log('未检测到物体');
    //     }
    // });
    
    },
    handleLog: function ({
      detail
    }) {
      console.log('log', detail.value);
    }
  }
})