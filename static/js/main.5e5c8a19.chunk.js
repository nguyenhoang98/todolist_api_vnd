(this["webpackJsonptodolist-api-vnd"]=this["webpackJsonptodolist-api-vnd"]||[]).push([[0],{31:function(t,e,a){},32:function(t,e,a){},33:function(t,e,a){},35:function(t,e,a){},36:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){},39:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(11),c=a.n(i),r=(a(31),a(3)),l=a(4),o=a(2),h=a(6),d=a(5),u=(a(32),a(8)),b=(a(33),a(1)),j=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={q:""},n.handleOnChange=n.handleOnChange.bind(Object(o.a)(n)),n.handleOnSearch=n.handleOnSearch.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleOnChange",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState(Object(u.a)({},a,n))}},{key:"handleOnSearch",value:function(t){t.preventDefault(),(0,this.props.changeApiFilterTasks)(this.state)}},{key:"render",value:function(){var t=this.state.q;return Object(b.jsx)("div",{className:"SearchTasks",children:Object(b.jsxs)("form",{onSubmit:this.handleOnSearch,children:[Object(b.jsx)("input",{type:"text",className:"SearchTasks__input",placeholder:"T\xecm Ki\u1ebfm ...",name:"q",value:t,onChange:this.handleOnChange}),Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGiSURBVHgBrZRhTsJQDMfbSfSjO8I8gXgC2AkAE038JDsBegLYCZQTDD+ZaAx6gocnkBuwI/BRY6C2b2XiNsaC/JMlb3vtb21f+xAyip5NE2tOC4ja/Orp5ykgTOmTwuDKj6FEmIIi46Lr9Bl0A6UeeE/zZRgE/rxo20lhx2gUNieikBbkd8+bKA8hnRHQg/VgG7EVn40RjsbvdwqL2dkPOsVpRWPjMd2AlIIj7XYatzlg9MhGRzizP0c62QTLQD946UoWwYU/+ZMyHmJfYx1tg4nEhksytC8H0M7uOwyq2+hAjapoCZMkBmzlgZAA+c9TqKi1NL0i4F4lwFgW0tBVnaInU9dlLiuHa/em6CZUFB5gL1kUAGEBr3YPsScttA1mbRC6suZgwhxQCqwn7HI/mjKo9qzR6ArbzE4KN6urE1BfGdM3DYPL5OSlvk7NaVAyTauRi+mLGztzWfxeDgzlHAbcWz0okWSj/edZAOLgutMIc8A1sKfg0zRiiUYOj+stJdLxm6WQNSjCjopezIBB/Sx0Z+Am6L+AhVDYg1ZQuZh/AGxOw9fFlRZmAAAAAElFTkSuQmCC",className:"SearchTasks__img"})]})})}}]),a}(n.Component),O=(a(35),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={time:""},n.getTime=n.getTime.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getTime(),setInterval(this.getTime,1e3)}},{key:"formatTime",value:function(t){return t<10&&(t="0"+t),t}},{key:"getTime",value:function(){var t=new Date,e=this.formatTime(t.getHours()),a=this.formatTime(t.getMinutes()),n=this.formatTime(t.getSeconds());this.setState({time:e+":"+a+":"+n})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"clock",children:this.state.time})}}]),a}(n.Component)),m=a(14),k=a(10),f=(a(36),a(37),a.p+"static/media/add_plus.e54cd56d.png"),v=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={name:""},n.handleOnchange=n.handleOnchange.bind(Object(o.a)(n)),n.handleOnSubmit=n.handleOnSubmit.bind(Object(o.a)(n)),n.handleOnResetForm=n.handleOnResetForm.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"handleOnchange",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState(Object(u.a)({},a,n))}},{key:"handleOnSubmit",value:function(t){t.preventDefault(),(0,this.props.addTasks)(this.state),this.handleOnResetForm()}},{key:"handleOnResetForm",value:function(){this.setState({name:""})}},{key:"render",value:function(){var t=this.state.name,e=this.props,a=e.handleSortTasks,n=e.sortTasks,s=e.filterTasks,i=e.handleFilterTasks;return Object(b.jsxs)("div",{className:"TaskForm flex",children:[Object(b.jsxs)("div",{className:"TaskForm__input",children:[Object(b.jsx)("form",{onSubmit:this.handleOnSubmit,children:Object(b.jsx)("input",{type:"text",className:"TaskForm__input__action",value:t,onChange:this.handleOnchange,name:"name",placeholder:"Th\xeam C\xf4ng Vi\u1ec7c ..."})}),Object(b.jsx)("img",{src:f,className:"plusImg",onClick:this.handleOnSubmit})]}),Object(b.jsxs)("div",{className:"TaskForm__control flex",children:[Object(b.jsx)("div",{className:"TaskForm__control__sort",children:Object(b.jsxs)("select",{value:n,onChange:a,children:[Object(b.jsx)("option",{value:"default",children:"M\u1eb7c \u0110\u1ecbnh"}),Object(b.jsx)("option",{value:"A",children:"Theo Ch\u1eef C\xe1i"})]})}),Object(b.jsx)("div",{className:"TaskForm__control__filter",children:Object(b.jsxs)("select",{value:s,onChange:i,children:[Object(b.jsx)("option",{value:0,children:"T\u1ea5t C\u1ea3"}),Object(b.jsx)("option",{value:1,children:"Ho\xe0n Th\xe0nh"}),Object(b.jsx)("option",{value:-1,children:"Ch\u01b0a Ho\xe0n Th\xe0nh"})]})})]})]})}}]),a}(n.Component),g=(a(38),a(39),function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={name:"",disabled:!0},n.handleOnchange=n.handleOnchange.bind(Object(o.a)(n)),n.editForm=n.editForm.bind(Object(o.a)(n)),n.handleOnSubmit=n.handleOnSubmit.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.data;this.setState({name:t.name})}},{key:"componentWillReceiveProps",value:function(t){t.data&&this.setState({name:t.data.name})}},{key:"handleOnchange",value:function(t){var e=t.target,a=e.name,n=e.value;this.setState(Object(u.a)({},a,n))}},{key:"editForm",value:function(){this.setState({disabled:!1})}},{key:"handleOnSubmit",value:function(t){t.preventDefault();var e=this.state.name,a=this.props,n=a.updateTask,s=a.data;n({name:e,id:s.id,status:s.status}),this.setState({disabled:!0})}},{key:"render",value:function(){var t=this.props,e=t.data,a=t.handleOnDeleteTask,n=t.handleToggleStatus,s=this.state,i=s.disabled,c=s.name;return Object(b.jsxs)("div",{className:"TaskItem flex",children:[Object(b.jsx)("div",{className:"TaskItem__name",children:Object(b.jsx)("form",{onSubmit:this.handleOnSubmit,children:Object(b.jsx)("span",{onDoubleClick:this.editForm,children:i?Object(b.jsx)("span",{style:{textDecoration:e.status?"line-through":"none",display:"inline-block",width:200},children:e.name}):Object(b.jsx)("input",{type:"text",value:c,name:"name",onChange:this.handleOnchange,style:{width:200,border:"none",outline:"none",borderBottom:"1px solid #333"}})})})}),Object(b.jsxs)("div",{className:"TaskItem__action",children:[Object(b.jsx)("span",{style:{color:e.status?"blue":"red"},onClick:function(){return n(e)},children:Object(b.jsx)("i",{className:"fa fa-check","aria-hidden":"true"})}),Object(b.jsx)("span",{className:"TaskItem__action__close",onClick:function(){return a(e)},children:Object(b.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})]})]})}}]),a}(n.Component)),T=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){return Object(r.a)(this,a),e.call(this,t)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.tasks,a=t.handleOnDeleteTask,n=t.handleToggleStatus,s=t.updateTask;return Object(b.jsx)("div",{className:"TaskListContainer",children:e.map((function(t,e){return Object(b.jsx)(g,{data:t,handleOnDeleteTask:a,handleToggleStatus:n,updateTask:s},e)}))})}}]),a}(n.Component),p=a(25),A=a.n(p),x=a(9),S=(a(16),a(26)),C=a.n(S);var y=function(t,e,a){return C()({url:t,method:e,data:a})},F="https://znm70.sse.codesandbox.io/tasks",D=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={tasks:[],sortTasks:"default",filterTasks:0,selectedID:null},n.addTasks=n.addTasks.bind(Object(o.a)(n)),n.onDeleteTask=n.onDeleteTask.bind(Object(o.a)(n)),n.findindex=n.findindex.bind(Object(o.a)(n)),n.handleToggleStatus=n.handleToggleStatus.bind(Object(o.a)(n)),n.updateTask=n.updateTask.bind(Object(o.a)(n)),n.handleSortTasks=n.handleSortTasks.bind(Object(o.a)(n)),n.handleFilterTasks=n.handleFilterTasks.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.q;y("".concat(F,"?").concat(e),"GET").then((function(e){t.setState({tasks:e.data})})).catch((function(t){console.log(t)}))}},{key:"componentWillReceiveProps",value:function(t){var e=this;if(t){var a=A.a.stringify(t);y("".concat(F,"?").concat(a),"GET").then((function(t){e.setState({tasks:t.data})})).catch((function(t){console.log(t)}))}}},{key:"stringRandom",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"createID",value:function(){return this.stringRandom()+this.stringRandom()+this.stringRandom()+"-"+this.stringRandom()+this.stringRandom()+this.stringRandom()+"-"+this.stringRandom()}},{key:"findindex",value:function(t){return this.state.tasks.findIndex((function(e){return e.id===t}))}},{key:"addTasks",value:function(t){t.id=this.createID(),t.status=!1,y(F,"POST",t);var e=Object(k.a)(this.state.tasks);e.push(t),this.setState({tasks:e}),Object(x.b)("Th\xeam th\xe0nh c\xf4ng !!!")}},{key:"onDeleteTask",value:function(t){var e=this.findindex(t.id);y("".concat(F,"/").concat(t.id),"DELETE");var a=Object(k.a)(this.state.tasks);a.splice(e,1),this.setState({tasks:a}),Object(x.b)("X\xf3a th\xe0nh c\xf4ng !!!")}},{key:"handleToggleStatus",value:function(t){if(this.setState({selectedID:t.id}),this.state.selectedID===t.id){var e=this.findindex(t.id);y("".concat(F,"/").concat(t.id),"PUT",Object(m.a)(Object(m.a)({},t),{},{status:!t.status}));var a=Object(k.a)(this.state.tasks);a[e].status=!a[e].status,this.setState({tasks:a}),Object(x.b)("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng !!!"),this.setState({selectedID:null})}}},{key:"updateTask",value:function(t){var e=this.findindex(t.id);y("".concat(F,"/").concat(t.id),"PUT",t);var a=Object(k.a)(this.state.tasks);a[e]=t,this.setState({tasks:a}),Object(x.b)("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng !!!")}},{key:"handleSortTasks",value:function(t){console.log("Sort"),this.setState({sortTasks:t.target.value})}},{key:"handleFilterTasks",value:function(t){this.setState({filterTasks:Number(t.target.value)})}},{key:"render",value:function(){var t=this.state,e=t.sortTasks,a=t.tasks,n=t.filterTasks;return 0===n&&(a=a.filter((function(t){return t}))),1===n&&(a=a.filter((function(t){return!0===t.status}))),-1===n&&(a=a.filter((function(t){return!1===t.status}))),"A"===e&&(console.log("hello"),a=a.sort((function(t,e){var a=t.name.toLowerCase(),n=e.name.toLowerCase();return a<n?-1:a>n?1:0}))),Object(b.jsxs)("div",{children:[Object(b.jsx)(v,{addTasks:this.addTasks,sortTasks:e,handleSortTasks:this.handleSortTasks,filterTasks:n,handleFilterTasks:this.handleFilterTasks}),Object(b.jsx)(T,{tasks:a,handleOnDeleteTask:this.onDeleteTask,handleToggleStatus:this.handleToggleStatus,updateTask:this.updateTask})]})}}]),a}(n.Component),N=function(t){Object(h.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={q:""},n.changeApiFilterTasks=n.changeApiFilterTasks.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"changeApiFilterTasks",value:function(t){this.setState({q:t.q})}},{key:"render",value:function(){var t=this.state.q;return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(O,{}),Object(b.jsx)(j,{changeApiFilterTasks:this.changeApiFilterTasks}),Object(b.jsx)(D,{q:t}),Object(b.jsx)(x.a,{})]})}}]),a}(n.Component),R=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),R()}},[[71,1,2]]]);
//# sourceMappingURL=main.5e5c8a19.chunk.js.map