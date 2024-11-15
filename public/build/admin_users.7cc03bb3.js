/*! For license information please see admin_users.7cc03bb3.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[69],{24068:(e,t,r)=>{"use strict";var n=r(76348),a=r.n(n);const o=JSON.parse('{"base_url":"","routes":{"app_admin_synchronisation":{"tokens":[["text","/admin/parametrage/synchronisation/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_etablissement":{"tokens":[["text","/admin/parametrage/synchronisation/api_etablissement"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_formation":{"tokens":[["text","/admin/parametrage/synchronisation/api_formation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_annee":{"tokens":[["text","/admin/parametrage/synchronisation/api_annee"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_promotion":{"tokens":[["text","/admin/parametrage/synchronisation/api_promotion"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_semestre":{"tokens":[["text","/admin/parametrage/synchronisation/api_semestre"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_etudiant":{"tokens":[["text","/admin/parametrage/synchronisation/api_etudiant"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_preinscription":{"tokens":[["text","/admin/parametrage/synchronisation/api_preinscription"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_admission":{"tokens":[["text","/admin/parametrage/synchronisation/api_admission"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_statut":{"tokens":[["text","/admin/parametrage/synchronisation/api_statut"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_groupe":{"tokens":[["text","/admin/parametrage/synchronisation/api_groupe"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_inscription":{"tokens":[["text","/admin/parametrage/synchronisation/api_inscription"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"api_compte":{"tokens":[["text","/admin/parametrage/synchronisation/api_compte"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_rdv_listing_list":{"tokens":[["text","/admin/rendez-vous/listing/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_rdv_listing_details":{"tokens":[["variable","/","[^/]++","rendezvous",true],["text","/admin/rendez-vous/listing/details"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_rdv_listing_export_excel":{"tokens":[["text","/admin/rendez-vous/listing/export_excel"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_rdv_listing_export_pdf":{"tokens":[["text","/admin/rendez-vous/listing/export_pdf"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_parametrage_users_list":{"tokens":[["text","/admin/parametrage/users/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_parametrage_users_operation":{"tokens":[["variable","/","[^/]++","user",true],["text","/admin/parametrage/users/user_operation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_parametrage_users_all":{"tokens":[["variable","/","[^/]++","type",true],["variable","/","[^/]++","user",true],["text","/admin/parametrage/users/all"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_parametrage_users_sousmodule":{"tokens":[["variable","/","[^/]++","type",true],["variable","/","[^/]++","user",true],["variable","/","[^/]++","sousModule",true],["text","/admin/parametrage/users/sousmodule"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_parametrage_users_module":{"tokens":[["variable","/","[^/]++","type",true],["variable","/","[^/]++","user",true],["variable","/","[^/]++","module",true],["text","/admin/parametrage/users/module"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_admin_parametrage_users_operation_add":{"tokens":[["variable","/","[^/]++","type",true],["variable","/","[^/]++","user",true],["variable","/","[^/]++","operation",true],["text","/admin/parametrage/users/operation"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_parametrage_users_toggle_active":{"tokens":[["variable","/","[^/]++","user",true],["text","/admin/parametrage/users/activer"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_etudiant_rdv_listing_list":{"tokens":[["text","/etudiant/rendez-vous/listing/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_etudiant_rdv_getPatientInfo":{"tokens":[["variable","/","[^/]++","patient",true],["text","/etudiant/rendez-vous/listing/detailpatient"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_etudiant_rdv_listing_new":{"tokens":[["text","/etudiant/rendez-vous/listing/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_etudiant_rdv_listing_details":{"tokens":[["variable","/","[^/]++","rendezvous",true],["text","/etudiant/rendez-vous/listing/details"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_etudiant_rdv_listing_annuler":{"tokens":[["text","/etudiant/rendez-vous/listing/annuler"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_etudiant_rdv_listing_valider":{"tokens":[["text","/etudiant/rendez-vous/listing/valider"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_home":{"tokens":[["text","/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_redirect":{"tokens":[["text","/redirect"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_register_new":{"tokens":[["text","/register/new"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_logout":{"tokens":[["text","/logout"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"forgot_password":{"tokens":[["text","/forgot"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"app_reset_password":{"tokens":[["text","/passwordchange"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');a().setRoutingData(o)},7402:(e,t,r)=>{var n=r(74692);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(){"use strict";o=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",d=i.toStringTag||"@@toStringTag";function p(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{p({},"")}catch(e){p=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof _?t:_,o=Object.create(a.prototype),i=new z(n||[]);return s(o,"_invoke",{value:S(e,r,i)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var m="suspendedStart",f="suspendedYield",g="executing",v="completed",y={};function _(){}function k(){}function x(){}var w={};p(w,c,(function(){return this}));var b=Object.getPrototypeOf,q=b&&b(b(P([])));q&&q!==r&&n.call(q,c)&&(w=q);var L=x.prototype=_.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){p(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,s,i,c){var u=h(e[o],e,s);if("throw"!==u.type){var d=u.arg,p=d.value;return p&&"object"==a(p)&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(p).then((function(e){d.value=e,i(d)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;s(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function S(t,r,n){var a=m;return function(o,s){if(a===g)throw Error("Generator is already running");if(a===v){if("throw"===o)throw s;return{value:e,done:!0}}for(n.method=o,n.arg=s;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===m)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var u=h(t,r,n);if("normal"===u.type){if(a=n.done?v:f,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=v,n.method="throw",n.arg=u.arg)}}}function j(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var s=o.arg;return s?s.done?(r[t.resultName]=s.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return s.next=s}}throw new TypeError(a(t)+" is not iterable")}return k.prototype=x,s(L,"constructor",{value:x,configurable:!0}),s(x,"constructor",{value:k,configurable:!0}),k.displayName=p(x,d,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,p(e,d,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},E(O.prototype),p(O.prototype,u,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var s=new O(l(e,r,n,a),o);return t.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},E(L),p(L,d,"Generator"),p(L,c,(function(){return this})),p(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],i=s.completion;if("root"===s.tryLoc)return a("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),u=n.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return a(s.catchLoc,!0);if(this.prev<s.finallyLoc)return a(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return a(s.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return a(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function s(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}}r(52675),r(89463),r(66412),r(2259),r(78125),r(16280),r(76918),r(28706),r(50113),r(51629),r(23792),r(62062),r(44114),r(94490),r(34782),r(62010),r(4731),r(60479),r(59904),r(84185),r(40875),r(10287),r(26099),r(3362),r(47764),r(23500),r(62953),n(document).ready((function(){var e=null;n("select").select2(),n.fn.dataTable.isDataTable("#list_users")&&n("#list_users").DataTable().clear().destroy();var t=function(){n(".sousModules").map((function(){0===n(this).parent().find(".inputOperation").not(":checked").length&&n(this).find(".inputSousModule").prop("checked",!0)})),n(".modules").map((function(){0===n(this).parent().find(".inputSousModule").not(":checked").length&&n(this).find(".inputModule").prop("checked",!0)})),0===n(".modules").find(".inputModule").not(":checked").length&&n(".tous").prop("checked",!0)},r=n("#list_users").DataTable({lengthMenu:[[10,15,25,50,100,2e13],[10,15,25,50,100,"All"]],order:[[0,"desc"]],ajax:{url:Routing.generate("app_admin_parametrage_users_list"),type:"get",data:function(e){},beforeSend:function(t){e&&e.abort(),e=t}},processing:!0,serverSide:!0,deferRender:!0,responsive:!0,columns:[{name:"u.id",data:"id"},{name:"u.username",data:"username"},{name:"u.nom",data:"nom"},{name:"u.prenom",data:"prenom"},{name:"u.email",data:"email"},{name:"u.roles",data:"roles"},{name:"u.created",data:"created"},{name:"u.enable",data:"enable"},{orderable:!1,searchable:!1,data:"id"}],columnDefs:[{targets:5,render:function(e,t,r,n){var a="";return e.forEach((function(e){"ROLE_ADMIN"==e&&(color="azure"),"ROLE_USER"==e&&(color="green"),"ROLE_SUPERADMIN"==e&&(color="red"),a+='<span class="badge bg-'.concat(color,'  text-white -fg mx-1">').concat(e,"</span>")})),a}},{targets:6,render:function(e,t,r,n){return e?window.moment(e.date).format("YYYY-MM-DD HH:mm:ss"):"NULL"}},{targets:7,render:function(e,t,r,n){return 1==e?'<i class="fa-solid fa-circle-check" style="color: #1fbe8e;"></i>':'<i class="fa-solid fa-ban" style="color: #e70c53;"></i>'}},{targets:8,render:function(e,t,r,n){return'\n                        <div class="dropdown" style="">\n                            <svg class="icon" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                <circle cx="12" cy="5" r="2"></circle>\n                                <circle cx="12" cy="12" r="2"></circle>\n                                <circle cx="12" cy="19" r="2"></circle>\n                            </svg>\n                            <div class="actions dropdown-menu dashboard-dropdown dropdown-menu-center mt-2 py-1">\n                                <a href="#" data-id="'.concat(r.id,'" class="dropdown-item toggleEnable">').concat(1==r.enable?"<i class='fa fa-ban'></i>&nbsp; Dévalider":"<i class='fa fa-circle-check'></i>&nbsp; Valider",'</a>\n                                <a href="#" data-id="').concat(r.id,'" class="dropdown-item privilegeBtn"><i class=\'fa fa-circle-plus\'></i>&nbsp; Privilége</a>\n                            </div>\n                        </div>\n                    ')}}],language:datatablesFrench,initComplete:function(){n("thead .selection").on("click",(function(e){e.stopPropagation()}))}});n("body").on("click",".privilegeBtn",function(){var e=i(o().mark((function e(r){var a,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),a=n(this).attr("data-id"),n(".privilege input:checkbox").prop("checked",!1),e.prev=3,e.next=6,axios.post(Routing.generate("app_admin_parametrage_users_operation",{user:a}));case 6:return s=e.sent,e.next=9,s.data;case 9:e.sent.map((function(e){console.log(e),n(".buttons ."+e.id).prop("checked",!0)})),t(),n(".privilege input:checkbox").attr("data-user",a),n("#privilegeModal").modal("show"),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(3),window.notyf.dismissAll(),console.log(e.t0),e.t0.response&&e.t0.response.data?(i=e.t0.response.data,window.notyf.error(i)):window.notyf.error("Something went wrong!");case 21:case"end":return e.stop()}}),e,this,[[3,16]])})));return function(t){return e.apply(this,arguments)}}()),n(".Collapsable").on("click",(function(){n(this).parent().children().toggle(),n(this).toggle()})),n(".inputSousModule").on("click",i(o().mark((function e(){var r,a,s,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(this).attr("data-user"),s=n(this).attr("data-module"),n(this).is(":checked")?(n(this).parent().parent().find(".inputOperation").prop("checked",!0),r="/admin/parametrage/users/sousmodule/"+s+"/"+a+"/add"):(n(this).parent().parent().find(".inputOperation").prop("checked",!1),r="/admin/parametrage/users/sousmodule/"+s+"/"+a+"/remove"),t(),e.prev=4,e.next=7,axios.post(r);case 7:i=e.sent,i.data,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),c=e.t0.response.data,Toast.fire({icon:"error",title:c});case 15:case"end":return e.stop()}}),e,this,[[4,11]])})))),n(".inputModule").on("click",i(o().mark((function e(){var r,a,s,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(this).attr("data-id"),s=n(this).attr("data-user"),n(this).is(":checked")?(n(this).parent().parent().find("input:checkbox").prop("checked",!0),r="/admin/parametrage/users/module/"+a+"/"+s+"/add"):(n(this).parent().parent().find("input:checkbox").prop("checked",!1),r="/admin/parametrage/users/module/"+a+"/"+s+"/remove"),t(),e.prev=4,e.next=7,axios.post(r);case 7:i=e.sent,i.data,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),c=e.t0.response.data,Toast.fire({icon:"error",title:c});case 15:case"end":return e.stop()}}),e,this,[[4,11]])})))),n(".inputOperation").on("click",i(o().mark((function e(){var r,a,s,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(this).attr("data-user"),s=n(this).attr("data-operation"),r=n(this).is(":checked")?"/admin/parametrage/users/operation/"+s+"/"+a+"/add":"/admin/parametrage/users/operation/"+s+"/"+a+"/remove",t(),e.prev=4,e.next=7,axios.post(r);case 7:i=e.sent,i.data,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),c=e.t0.response.data,Toast.fire({icon:"error",title:c});case 15:case"end":return e.stop()}}),e,this,[[4,11]])})))),n(".tous").on("click",i(o().mark((function e(){var r,a,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n(this).attr("data-user"),n(this).is(":checked")?(n(".tous").parent().parent().find("input:checkbox").prop("checked",!0),r="/admin/parametrage/users/all/"+a+"/add"):(n(".tous").parent().parent().find("input:checkbox").prop("checked",!1),r="/admin/parametrage/users/all/"+a+"/remove"),t(),e.prev=3,e.next=6,axios.post(r);case 6:s=e.sent,s.data,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),i=e.t0.response.data,Toast.fire({icon:"error",title:i});case 14:case"end":return e.stop()}}),e,this,[[3,10]])})))),n("body").on("click",".toggleEnable",function(){var e=i(o().mark((function e(t){var a,s,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a=n(this).attr("data-id"),window.notyf.open({type:"info",message:"En cours..",duration:9e6}),e.next=6,axios.post(Routing.generate("app_parametrage_users_toggle_active",{user:a}));case 6:return s=e.sent,e.next=9,s.data;case 9:e.sent,window.notyf.dismissAll(),window.notyf.open({type:"success",message:"Succés",duration:3e3}),r.ajax.reload(!1),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),window.notyf.dismissAll(),console.log(e.t0),e.t0.response&&e.t0.response.data?(i=e.t0.response.data,window.notyf.error(i)):window.notyf.error("Something went wrong!");case 20:case"end":return e.stop()}}),e,this,[[1,15]])})));return function(t){return e.apply(this,arguments)}}())}))},28706:(e,t,r)=>{"use strict";var n=r(46518),a=r(79039),o=r(34376),s=r(20034),i=r(48981),c=r(26198),u=r(96837),d=r(97040),p=r(1469),l=r(70597),h=r(78227),m=r(77388),f=h("isConcatSpreadable"),g=m>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),v=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)};n({target:"Array",proto:!0,arity:1,forced:!g||!l("concat")},{concat:function(e){var t,r,n,a,o,s=i(this),l=p(s,0),h=0;for(t=-1,n=arguments.length;t<n;t++)if(v(o=-1===t?s:arguments[t]))for(a=c(o),u(h+a),r=0;r<a;r++,h++)r in o&&d(l,h,o[r]);else u(h+1),d(l,h++,o);return l.length=h,l}})},50113:(e,t,r)=>{"use strict";var n=r(46518),a=r(59213).find,o=r(6469),s="find",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),n({target:"Array",proto:!0,forced:i},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},62062:(e,t,r)=>{"use strict";var n=r(46518),a=r(59213).map;n({target:"Array",proto:!0,forced:!r(70597)("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}},e=>{var t=t=>e(e.s=t);e.O(0,[2],(()=>(t(24068),t(7402))));e.O()}]);