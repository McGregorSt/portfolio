(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{15:function(e,t,n){e.exports=n(31)},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),r=n.n(i),s=n(5),l=(n(20),n(3)),c=n(4),d=n(7),u=n(6),p=(n(21),{1:"#edae49",2:"#d1495b",3:"#00798c",4:"#9db063",5:"#ccc"}),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={slided:!1},e.onMouseOverHandler=function(t){t.preventDefault(),e.setState({slided:!0})},e.onMouseOutHandler=function(){e.setState({slided:!1})},e.randomColor=function(e,t){var n=Math.floor(Math.random()*(e-t))+t;return p[n]},e}return Object(c.a)(n,[{key:"render",value:function(){var e;return e=this.state.slided?o.a.createElement("main",null,this.props.main):o.a.createElement("h3",null,this.props.title),o.a.createElement(s.b,{to:this.props.link,target:"_blank",className:"Project project-".concat(this.props.id),style:{backgroundColor:"".concat(this.randomColor(6,1))},onMouseEnter:this.onMouseOverHandler,onPointerLeave:this.onMouseOutHandler},e)}}]),n}(a.Component),h=(n(27),[{title:"FX holder",descreption:"This app is a holder for your FX transactions. You can add\n                transactions, delete them and see summary of it all. After you\n                put a rate, your transactions will be recalculated into PLN.\n                It's SPA built with React and Redux, styled with css modules.",link:"/fx_holder",slided:!1},{title:"Management Web Reports",descreption:"It's a single-page application for generating reports with\n                summary for every day income volumes and others (e.g.\n                volume of active clients, volume of assets, volume of\n                accounts). App was built with React, styled in CSS and is\n                responsive.",link:"/management-web-reports",slided:!1},{title:"Burger Builder",descreption:"Application for composing your favourite burger. Built with\n                React, styled in CSS using media queries. This app is a part of\n                tutorial",link:"/burger_builder",slided:!1},{title:"Colour Game",descreption:"Game rules: click colour square which at least has one the same colour naighbour (not diagonnaly) and collect as much points as possible. Clicked squares disappear, all above them move down and missing ones are newly generated. App was built with React and Redux",link:"/colour_game",slided:!1},{title:"Polluted Cities",descreption:"Built with ES6, web app for searching top ten most polluted cities in provided country. Data are provided from public API https://docs.openaq.org/ and cities descriptions come from Wikipedia API.",link:"/polluted_cities/",slided:!1},{title:"Marilyn",descreption:"Web app based on React and Redux. This app gives you 9 most recently uploaded pictures of Marilyn Monroe from Flickr (Flickr API). It was styled with CSS modules and it is responsive",link:"/marilyn",slided:!1},{title:"Web design",descreption:"Web development based on provided designs. This page is retina ready with its 2x graphics, with some features made alive with jQuery. There is a video modal built on iframe with overlay. Page is RWD.",link:"/newOne",slided:!1},{title:"PokeDex",descreption:"It's a collection of Pokemons. You can find your favourite one and check his abilities and skills. App is based on external API and was built in React.",link:"/pokedex",slided:!1}]),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=h.map((function(t,n,a){return o.a.createElement(m,{title:t.title,main:t.descreption,link:t.link,key:n,onMouseOver:function(t){return e.onMouseOverHandler(t,n,a)},onMouseOut:function(){return e.onMouseOutHandler()},slided:t.slided,id:n+1,style:{backgroundColor:"#abe"}})}));return o.a.createElement("div",{className:"Projects"},o.a.createElement("h2",{className:"portfolio__header"},"My projects:"),o.a.createElement("div",{className:"Portfolio"},t))}}]),n}(a.Component),v=(n(28),function(e){var t=e.icon;e.scale;return o.a.createElement("div",{className:"ContactMethod",style:{backgroundImage:"url(".concat(t,")")}})}),g=(n(29),function(){return o.a.createElement("div",{className:"Contact"},o.a.createElement("h1",null,"Contact me:"),[{link:"mailto: stasiak.gregor@gmail.com",icon:"./gm.png",text:"EmailMe"},{link:"https://www.linkedin.com/in/grzegorz-stasiak",icon:"./in.png",text:"LinkedIn"}].map((function(e,t){return o.a.createElement("a",{href:e.link,key:t,target:"_blank",className:"Contact---icon",rel:"noopener noreferrer"},o.a.createElement(v,{icon:e.icon}))})))});n(30);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=o.a.createElement(s.a,null,o.a.createElement(b,null));r.a.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.aaba18ab.chunk.js.map