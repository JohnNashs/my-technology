Page({
  data: {
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
    markerImg: 'https://live.zjqq.vip/active/assets/mark_img.jpeg'
  },
  onLoad() {
    const info = wx.getWindowInfo();
    console.log(info);
    
    const width = info.windowWidth;
    const height = info.windowHeight;
    const dpi = info.pixelRatio;
    this.setData({
      width, height,
      renderWidth: width * dpi,
      renderHeight: height * dpi
    });
  },
})