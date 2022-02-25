// pages/dropdown/dropdown.js
Page({
  data: {
   start: "开始了-默认选项",
   slist: [
    { id: 1, name: "第一类" },
    { id: 1, name: "第二类" },
    { id: 1, name: "第三类" },
    { id: 1, name: "第四类" },
    { id: 1, name: "第五类" },
   ],
   isstart: false,
   openimg: "/img/drop_up.png",
   offimg: "/img/drop_down.png"
  },
  opens: function (e) {
   switch (e.currentTarget.dataset.item) {
    case "1":
     if (this.data.isstart) {
      this.setData({
       isstart: false,
      });
     }
     else {
      this.setData({
       isstart: true,
      });
     }
     break;
   }
  },
  onclicks1: function (e) {
   var index = e.currentTarget.dataset.index;
   let name = this.data.slist[index].name;
   this.setData({
    isstart: false,
    isfinish: false,
    isdates: false,
    start: this.data.slist[index].name,
    finish: "目的地"
   })
  }
 })
 