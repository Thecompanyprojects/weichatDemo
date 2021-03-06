Page({
  data: {
  list: [{
    id: 'view',
    name: '视图容器',
    open: true,
    pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
  }, {
    id: 'content',
    name: '基础内容',
    open: false,
    pages: ['text', 'icon', 'progress', 'rich-text']
  }, {
    id: 'form',
    name: '表单组件',
    open: false,
    pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']
  }, {
    id: 'nav',
    name: '导航',
    open: false,
    pages: ['navigator']
  }, {
    id: 'media',
    name: '媒体组件',
    open: false,
    pages: ['image', 'audio', 'video', 'camera']
  }, {
    id: 'map',
    name: '地图',
    pages: ['map']
  }, {
    id: 'canvas',
    name: '画布',
    pages: ['canvas']
  }, {
    id: 'open',
    name: '开放能力',
    pages: ['ad', 'open-data', 'web-view']
  }]
},

/**
 * 收缩核心代码
 */
kindToggle(e) {
  const id = e.currentTarget.id
  const list = this.data.list
  for (let i = 0, len = list.length; i < len; ++i) {
    if (list[i].id === id) {
      list[i].open = !list[i].open
    } else {
      list[i].open = false
    }
  }

  /**
   * key和value名称一样时，可以省略
   *
   * list:list=>list
   */
  this.setData({
    list
  })
}
})