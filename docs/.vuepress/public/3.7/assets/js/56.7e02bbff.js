(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{457:function(e,t,r){"use strict";r.r(t);var a=r(58),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"application-architecture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-architecture"}},[e._v("#")]),e._v(" Application architecture")]),e._v(" "),r("p",[e._v("There are two ways to build your application using "),r("em",[e._v("pywebview")]),e._v(":")]),e._v(" "),r("ol",[r("li",[e._v("By running a local web server")]),e._v(" "),r("li",[e._v("Serverless with "),r("em",[e._v("pywebview")]),e._v("'s JS API  or "),r("code",[e._v("window.expose")]),e._v(" and serving local files.")])]),e._v(" "),r("h2",{attrs:{id:"local-web-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#local-web-server"}},[e._v("#")]),e._v(" Local web server")]),e._v(" "),r("p",[e._v("Running a local web server is a traditional way to build your local application. This way everything is served from a local web server and "),r("em",[e._v("pywebview")]),e._v(" points to the URL provided by the server. In this model the server is responsible for both serving static contents and handling API calls. When building an application using a web server, you should protect your API calls against CSRF attacks. See "),r("RouterLink",{attrs:{to:"/guide/security.html"}},[e._v("security")]),e._v(" for more information.")],1),e._v(" "),r("p",[e._v("See an example "),r("a",{attrs:{href:"https://github.com/r0x0r/pywebview/tree/master/examples/flask_app",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flask-based application"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Pros")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("Ability to pack an existing web application as a local one.")]),e._v(" "),r("li",[e._v("Easier debugging with an external browser.")])]),e._v(" "),r("p",[r("strong",[e._v("Cons")])]),e._v(" "),r("ul",[r("li",[e._v("Has to rely on a third party server software for client-server communication.")]),e._v(" "),r("li",[e._v("Security considerations must be taken into account")])]),e._v(" "),r("h2",{attrs:{id:"serverless"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serverless"}},[e._v("#")]),e._v(" Serverless")]),e._v(" "),r("p",[e._v("Another way to build an application is to use "),r("em",[e._v("pywebview")]),e._v("'s provided JS API or "),r("code",[e._v("windows.expose")]),e._v(" and serve static files locally.")]),e._v(" "),r("p",[r("em",[e._v("pywebview")]),e._v(" offers a simple built-in web server that is good enough for serving local files. To use a local web server, set url to a local file and start the application with "),r("code",[e._v("webview.start(http_server=True)")]),e._v(". Note that the built-in HTTP server serves only local files and does not offer any API calls. Refer to "),r("RouterLink",{attrs:{to:"/guide/interdomain.html"}},[e._v("interdomain communication")]),e._v(" for details on how to pass data between Python and Javascript.")],1),e._v(" "),r("p",[e._v("See an example "),r("a",{attrs:{href:"https://github.com/r0x0r/pywebview/tree/master/examples/todos",target:"_blank",rel:"noopener noreferrer"}},[e._v("serverless application"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("Pros")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("No external dependencies")]),e._v(" "),r("li",[e._v("More straightforward architecture")]),e._v(" "),r("li",[e._v("No risk of CSRF attacks")])]),e._v(" "),r("p",[r("strong",[e._v("Cons")])]),e._v(" "),r("ul",[r("li",[e._v("Debugging has to be done inside the application using provided debugging tools")]),e._v(" "),r("li",[e._v("EdgeHTML cannot serve local files.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);