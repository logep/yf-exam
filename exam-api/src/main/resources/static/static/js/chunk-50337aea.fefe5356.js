(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50337aea"],{3200:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"d",(function(){return n})),a.d(e,"f",(function(){return s})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return l})),a.d(e,"e",(function(){return u}));var i=a("b775");function r(t){return Object(i["b"])("/exam/api/paper/paper/create-paper",t)}function n(t){return Object(i["b"])("/exam/api/paper/paper/paper-detail",t)}function s(t){return Object(i["b"])("/exam/api/paper/paper/qu-detail",t)}function c(t){return Object(i["b"])("/exam/api/paper/paper/fill-answer",t)}function l(t){return Object(i["b"])("/exam/api/paper/paper/hand-exam",t)}function u(t){return Object(i["b"])("/exam/api/paper/paper/paper-result",t)}},6066:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return n})),a.d(e,"c",(function(){return s}));var i=a("b775");function r(t,e){return Object(i["b"])("/exam/api/paper/paper/paging",{current:1,size:5,params:{userId:t,examId:e}})}function n(t){return Object(i["b"])("/exam/api/paper/paper-capture/list",{paperId:t})}function s(t){return Object(i["b"])("/exam/api/paper/paper/review-paper",t)}},"84fb":function(t,e,a){},c990:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("h2",{staticClass:"text-center"},[t._v("开发人员入职培训考试")]),a("p",{staticClass:"text-center",staticStyle:{color:"#666"}},[t._v(t._s(t.paperData.createTime))]),a("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:24}},[a("el-col",{staticClass:"text-center",attrs:{span:8}},[t._v(" 考生姓名：张三 ")]),a("el-col",{staticClass:"text-center",attrs:{span:8}},[t._v(" 考试用时："+t._s(t.paperData.userTime)+"分钟 ")]),a("el-col",{staticClass:"text-center",attrs:{span:8}},[t._v(" 考试得分："+t._s(t.paperData.userScore)+" ")])],1),a("el-card",{staticStyle:{"margin-top":"20px"}},[a("el-button",{staticStyle:{width:"100%"},on:{click:t.handlerShow}},[t._v("显示隐藏客观题")]),t._l(t.paperData.quList,(function(e){return t.hiddenQu&&4!==e.quType?t._e():a("div",{staticClass:"qu-content"},[a("p",[t._v(t._s(e.sort+1)+"."+t._s(e.content)+"（"+t._s(e.score)+"分）")]),1===e.quType||3===e.quType?a("div",[a("el-radio-group",{model:{value:t.radioValues[e.id],callback:function(a){t.$set(t.radioValues,e.id,a)},expression:"radioValues[item.id]"}},t._l(e.answerList,(function(e){return a("el-radio",{attrs:{label:e.id}},[t._v(t._s(e.abc)+"."+t._s(e.content))])})),1),a("el-row",{attrs:{gutter:24}},[a("el-col",{staticStyle:{color:"#24da70"},attrs:{span:12}},[t._v(" 正确答案："+t._s(t.radioRights[e.id])+" ")]),e.answered?t._e():a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果：未答 ")]),e.answered&&!e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myRadio[e.id])+" ")]):t._e(),e.answered&&e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#24da70"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myRadio[e.id])+" ")]):t._e()],1)],1):t._e(),4===e.quType?a("div",[a("el-row",{attrs:{gutter:24}},[a("el-col",{staticStyle:{"line-height":"50px"},attrs:{span:24}},[t._v(" 考生回答："+t._s(e.answer)+" ")]),a("el-col",{staticStyle:{"line-height":"50px"},attrs:{span:24}},[t._v(" 给定分值："),a("el-input-number",{attrs:{size:"small",min:0,max:e.score,label:"描述文字"},model:{value:e.actualScore,callback:function(a){t.$set(e,"actualScore",a)},expression:"item.actualScore"}})],1)],1)],1):t._e(),2===e.quType?a("div",[a("el-checkbox-group",{model:{value:t.multiValues[e.id],callback:function(a){t.$set(t.multiValues,e.id,a)},expression:"multiValues[item.id]"}},t._l(e.answerList,(function(e){return a("el-checkbox",{attrs:{label:e.id}},[t._v(t._s(e.abc)+"."+t._s(e.content))])})),1),a("el-row",{attrs:{gutter:24}},[a("el-col",{staticStyle:{color:"#24da70"},attrs:{span:12}},[t._v(" 正确答案："+t._s(t.multiRights[e.id].join(","))+" ")]),e.answered?t._e():a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果：未答 ")]),e.answered&&!e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#ff0000"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myMulti[e.id].join(","))+" ")]):t._e(),e.answered&&e.isRight?a("el-col",{staticStyle:{"text-align":"right",color:"#24da70"},attrs:{span:12}},[t._v(" 答题结果："+t._s(t.myMulti[e.id].join(","))+" ")]):t._e()],1)],1):t._e()])}))],2),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("提交阅卷")])],1)],1)},r=[],n=(a("ac6a"),a("3200")),s=a("6066"),c=a("5c96"),l={data:function(){return{paperId:"",paperData:{quList:[]},radioValues:{},multiValues:{},radioRights:{},multiRights:{},myRadio:{},myMulti:{},hiddenQu:!0}},created:function(){var t=this.$route.params.paperId;"undefined"!==typeof t&&(this.paperId=t,this.fetchData(t))},methods:{fetchData:function(t){var e=this,a={id:t};Object(n["e"])(a).then((function(t){e.paperData=t.data,e.paperData.quList.forEach((function(t){var a="",i="",r="",n=[],s=[],c=[];t.answerList.forEach((function(e){e.checked&&(1===t.quType||3===t.quType?(a=e.id,r=e.abc):(n.push(e.id),c.push(e.abc))),e.isRight&&(1===t.quType||3===t.quType?i=e.abc:s.push(e.abc))})),e.multiValues[t.id]=n,e.radioValues[t.id]=a,e.radioRights[t.id]=i,e.multiRights[t.id]=s,e.myRadio[t.id]=r,e.myMulti[t.id]=c})),console.log(e.multiValues),console.log(e.radioValues)}))},handlerShow:function(){this.hiddenQu=!this.hiddenQu},submitForm:function(){var t=this,e=c["Loading"].service({text:"拼命加载中",background:"rgba(0, 0, 0, 0.7)"});Object(s["c"])(this.paperData).then((function(){t.$notify({title:"成功",message:"阅卷成功！",type:"success",duration:2e3}),t.$router.push({name:"ReviewPaper",params:{examId:t.paperData.examId}}),e.close()}))}}},u=l,o=(a("d289"),a("2877")),p=Object(o["a"])(u,i,r,!1,null,"606b582c",null);e["default"]=p.exports},d289:function(t,e,a){"use strict";var i=a("84fb"),r=a.n(i);r.a}}]);