(this["webpackJsonpjellothompson.github.io"]=this["webpackJsonpjellothompson.github.io"]||[]).push([[0],{32:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(18),o=a.n(r),l=a(9),s=a.n(l),c=a(10),m=a(5),d=a(6),u=a(8),h=a(7),v=a(13),f=a(21),p=(a(57),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).url_linkedin="https://www.linkedin.com/in/jello-thompson-9b122a188/",n.url_instagram="https://www.instagram.com/jumbojello",n.url_youtube="https://www.youtube.com/channel/UCgD8IZh42DT8D6mOHv9WSiQ",n}return Object(d.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"social"},i.a.createElement(f.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_linkedin}),i.a.createElement(f.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_instagram}),i.a.createElement(f.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_youtube}))}}]),a}(i.a.Component)),b=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},E=(a(58),a.p+"static/media/logo.8d0a9383.png"),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:!1,shown:!1,fixed:!1,fixed_animation:!1},n.componentWillReceiveProps(e),n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({mobile:t.mobile,shown:t.shown}),this.state.fixed||!t.fixed){e.next=8;break}return this.setState({fixed:!0}),e.next=5,b(100);case 5:this.setState({fixed_animation:!0}),e.next=13;break;case 8:if(!this.state.fixed||t.fixed){e.next=13;break}return this.setState({fixed_animation:!1}),e.next=12,b(500);case 12:this.setState({fixed:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderLink",value:function(e,t){return i.a.createElement(v.Link,{activeClass:"menu-link-active",className:"menu-link",to:e,smooth:!0},t)}},{key:"render",value:function(){var e=this.state.mobile,t=this.state.shown,a=this.state.fixed,n=this.state.fixed_animation,r="menu\n\t\t\t".concat(t?"menu-shown":"","\n\t\t\t").concat(e?"menu-mobile":"","\n\t\t\t").concat(a?"menu-fixed":"","\n\t\t\t").concat(n?"menu-fixed-in":"");return i.a.createElement("div",{className:r},i.a.createElement("a",{href:"https://jellothompson.com"},i.a.createElement("img",{className:"menu-logo",src:E})),i.a.createElement("div",{className:"menu-links"},i.a.createElement(p,null)),i.a.createElement(i.a.Fragment,null," ",!1," "))}}]),a}(i.a.Component),g=(a(59),a.p+"static/media/jt-visuals.554b1516.gif"),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={opacity:100,mobile:e.mobile},n.onLoaded=e.onLoaded,n.onFaded=e.onFaded,n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mobile:t.mobile});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(442);case 2:this.onLoaded(),t=1;case 4:if(!(t<=15)){e.next=11;break}return this.setState({opacity:(100-100*t/15)/100}),e.next=8,b(500/15);case 8:t++,e.next=4;break;case 11:this.onFaded();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.opacity,t=this.state.mobile;return i.a.createElement("div",{className:"loading",style:{opacity:e}},i.a.createElement("img",{className:"loading-gif ".concat(t?"loading-gif-mobile":""),src:g}))}}]),a}(i.a.Component),w=a.p+"static/media/720HD.db7fe52b.mp4",j=(a(60),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSlided=e.onSlided,n.video_main=i.a.createRef(),n.video_1=i.a.createRef(),n.video_2=i.a.createRef(),n.video_3=i.a.createRef(),n.state={mobile:!1,show_one:!1,show_two:!1,show_three:!1,show_main:!1,play:!1},n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mobile:t.mobile});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.video_1.current.currentTime=.065,this.video_2.current.currentTime=.065,this.video_3.current.currentTime=.065,this.video_main.current.currentTime=.065,e.next=6,b(300);case 6:return this.setState({show_one:!0}),e.next=9,b(500);case 9:return this.setState({show_two:!0}),e.next=12,b(600);case 12:return this.setState({show_three:!0}),e.next=15,b(1e3);case 15:this.setState({play:!0}),this.video_main.current.play(),this.setState({show_main:!0}),this.onSlided();case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.show_main,t=this.state.show_one,a=this.state.show_two,n=this.state.show_three,r=this.state.play,o="reels-reel reel-main ".concat(e?"reel-main-shown":""),l="reels-reel reel-one ".concat(t?"reel-one-shown":""),s="reels-reel reel-two ".concat(a?"reel-two-shown":""),c="reels-reel reel-three ".concat(n?"reel-three-shown":""),m="reels-overlay ".concat(r?"reels-overlay-none":"");return i.a.createElement("div",{className:"reels"},i.a.createElement("div",{className:l},i.a.createElement("video",{id:"reels-video-1",className:"reels-video",ref:this.video_1,muted:!0,loop:!0,src:w}),i.a.createElement("div",{id:"reels-overlay-one",className:m})),i.a.createElement("div",{className:s},i.a.createElement("video",{id:"reels-video-2",className:"reels-video",ref:this.video_2,muted:!0,loop:!0,src:w}),i.a.createElement("div",{id:"reels-overlay-two",className:m})),i.a.createElement("div",{className:c},i.a.createElement("video",{id:"reels-video-3",className:"reels-video",ref:this.video_3,muted:!0,loop:!0,src:w}),i.a.createElement("div",{id:"reels-overlay-three",className:m})),i.a.createElement("div",{className:o},i.a.createElement("video",{id:"reels-video-main",className:"reels-video",ref:this.video_main,muted:!0,loop:!0,src:w})),i.a.createElement("div",{className:"reels-content"},"test"))}}]),a}(i.a.Component)),x=a(73),_=a(74),O=a(34),S=(a(61),a.p+"static/media/portrait.b38f7668.png"),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement("div",{className:"page-content ".concat(e?"page-content-mobile":"")},i.a.createElement(x.a,{fluid:!0},i.a.createElement(_.a,null,i.a.createElement(O.a,{lg:"3",md:"4",sm:"6",xs:"12",className:"text-center"},i.a.createElement("img",{src:S,className:"aboutme-image"})),i.a.createElement(O.a,{lg:"9",md:"8",sm:"6",xs:"12",className:"aboutme-content"},i.a.createElement("div",{className:"aboutme-title"},"About Me"),i.a.createElement("div",{className:"aboutme-summary"},"Hello! I'm a Post-Production aficionado"),i.a.createElement("div",{className:"aboutme-text py-3"},"...and editor, though I would consider myself a storyteller more than a filmmaker. My strengths are in my ability in finding a story to tell in the art of the cut. I am very technical, and well versed with Adobe Premiere, After Effects, DaVinci Resolve, Avid Media Composer, and Pro Tools. Every day, I am constantly learning new techniques and skills to better improve as an editor and storyteller. My experience involves extends beyond the visual edit, but designing motion graphics, color grading, and sound design.")))))}}]),a}(i.a.Component),C=a(19),M=(a(62),a.p+"static/media/editing.2611c882.jpg"),R=a.p+"static/media/vfx.a95b721c.jpg",L=a.p+"static/media/audio.7c3d3e61.jpg",F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).transition_period=".3s",n.editing_full=84,n.vfx_full=75,n.audio_full=69,n.state={mobile:e.mobile,editing_val:0,vfx_val:0,audio_val:0},n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"handleHover",value:function(e,t){"Editing"==e?this.setState({editing_val:t?this.editing_full:0}):"VFX"==e?this.setState({vfx_val:t?this.vfx_full:0}):"Audio"==e&&this.setState({audio_val:t?this.audio_full:0})}},{key:"renderSection",value:function(e,t,a,n){return i.a.createElement("div",{className:"skills-section",onMouseEnter:this.handleHover.bind(this,e,!0),onMouseLeave:this.handleHover.bind(this,e,!1)},i.a.createElement("div",{className:"skills-section-background",style:{backgroundImage:"url( ".concat(t,")")}}),i.a.createElement("div",{className:"skills-section-content"},i.a.createElement("div",{className:"skills-section-content-circle"},i.a.createElement(C.a,{value:a,text:e,styles:Object(C.b)({textColor:"white",pathColor:"white",trailColor:"transparent",transition:this.transition_period})})),i.a.createElement("div",{className:"skills-section-content-text"},n)))}},{key:"render",value:function(){return this.mobile=this.state.mobile,i.a.createElement("div",{className:"skills"},this.renderSection("VFX",R,this.state.vfx_val,"The integrations are of live action footage and CG elements to create realistic imagery"),this.renderSection("Editing",M,this.state.editing_val,"Both a creative and a technical part of the post-production process of filmmaking"),this.renderSection("Audio",L,this.state.audio_val,"Balancing and adjusting sound sources in a reinforcement of sound"))}}]),a}(i.a.Component),P=a(20),D=(a(63),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).skill=e.skill,n.first=e.first,n}return Object(d.a)(a,[{key:"render",value:function(){return console.log(this.first),i.a.createElement("div",{className:"credits"},i.a.createElement(i.a.Fragment,null," ",!this.first&&"| "),this.skill,"\xa0")}}]),a}(i.a.Component)),I=(a(32),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).title=e.title,n.year=e.year,n.credits=e.credits,n}return Object(d.a)(a,[{key:"renderCredits",value:function(){var e,t=[],a=!0,n=Object(P.a)(this.credits);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(i.a.createElement(D,{first:a,skill:r})),1==a&&(a=!1)}}catch(o){n.e(o)}finally{n.f()}return t}},{key:"render",value:function(){return i.a.createElement("div",{className:"portfoliocard"},i.a.createElement("div",{className:"portfoliocard-header"},this.title," (",this.year,")"),i.a.createElement("div",{className:"portfoliocard-content"},this.renderCredits()))}}]),a}(i.a.Component)),W=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile,category:e.category},n.filmography=[{title:"100mg",year:2018,credits:["VFX"]},{title:"USB",year:2018,credits:["Editor","Colorist","Motion Graphics","Re-recording Mixer"]},{title:"Good Mourning",year:2019,credits:["Editor","Colorist","Motion Graphics","Sound Editor","Re-recording Mixer"]},{title:"Six Pack",year:2020,credits:["Editor","Colorist","Motion Graphics"]},{title:"Riverwalk",year:2020,credits:["Editor","Colorist","Motion Graphics","Re-recording Mixer"]},{title:"35",year:2020,credits:["Sound Editor"]},{title:"Dead Man's Hand",year:2020,credits:["Sound Editor"]},{title:"Karen",year:2020,credits:["Sound Editor"]},{title:"Jesse James",year:2020,credits:["Dialogue Editor"]},{title:"Penis Papers",year:2020,credits:["Dialogue Editor"]},{title:"Hellwave",year:2020,credits:["Colorist","VFX","Motion Graphics"]}],n.filmography.reverse(),n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"renderFilmography",value:function(){var e,t=[],a=Object(P.a)(this.filmography);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(i.a.createElement(O.a,{xl:"4",lg:"6",sm:"12"},i.a.createElement(I,{title:n.title,year:n.year,credits:n.credits})))}}catch(r){a.e(r)}finally{a.f()}return t}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"aboutme-title"},"Filmography"),i.a.createElement(x.a,{fluid:!0},i.a.createElement(_.a,null,this.renderFilmography())))}}]),a}(i.a.Component),T=a(35),G=a.n(T),H=a(36),A=a(76),J=a(75),B=a(77),V=a.p+"static/media/background.de8e0bd7.png",X=(a(66),a(67),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"sendEmail",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,G.a.sendForm("service_owl7xjn","template_w4mhu1e",t.target,"user_nzZKA4wORujISbp6zChkV");case 3:e.sent,alert("Email Sent!");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement(H.Parallax,{bgImage:V,strength:1e3,bgClassName:"contactme-background"},i.a.createElement("div",{className:"page-content ".concat(e?"page-content-mobile":"")},i.a.createElement(x.a,{fluid:!0,className:"contactme"},i.a.createElement(_.a,null,i.a.createElement(O.a,{xl:3,lg:2,md:1,sm:0}),i.a.createElement(O.a,{xl:6,lg:8,md:10,sm:12},i.a.createElement(A.a,{bg:""},i.a.createElement(A.a.Header,null,"Contact Me"),i.a.createElement(A.a.Body,{className:"contactme-content"},i.a.createElement(A.a.Text,null,"Send me an email if you want to collaborate, and I'll be happy to respond"),i.a.createElement(J.a,{onSubmit:this.sendEmail.bind(this)},i.a.createElement("input",{type:"hidden",name:"to_name",value:"Jello Thompson"}),i.a.createElement(J.a.Group,{controlId:"from_name"},i.a.createElement(J.a.Label,null," Name "),i.a.createElement(J.a.Control,{name:"from_name",type:"text",placeholder:"John Smith"})),i.a.createElement(J.a.Group,{controlId:"reply_to"},i.a.createElement(J.a.Label,null," Email "),i.a.createElement(J.a.Control,{name:"reply_to",type:"text",placeholder:"example@email.com"})),i.a.createElement(J.a.Group,{controlId:"message"},i.a.createElement(J.a.Label,null,"Message"),i.a.createElement(J.a.Control,{name:"message",as:"textarea",rows:5})),i.a.createElement(B.a,{variant:"dark",type:"submit"},"Send")))))))))}}]),a}(i.a.Component)),z=(a(69),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(d.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"renderLink",value:function(e,t){return i.a.createElement(v.Link,{activeClass:"copyright-menu-link-active",className:"copyright-menu-link",to:e,smooth:!0},t)}},{key:"render",value:function(){this.state.mobile;var e=(new Date).getFullYear();return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"copyright"},i.a.createElement("div",{className:"copyright-menu"},this.renderLink("reels","Reel")," |\xa0",this.renderLink("aboutme","About Me")," |\xa0",this.renderLink("skills","Skills")," |\xa0",this.renderLink("portfolio","Portfolio")," |\xa0",this.renderLink("contactme","Contact Me")),i.a.createElement("div",{className:"copyright-text"},"Copyright \xa9 ",e," Jello Thompson. All Rights Reserved."),i.a.createElement("div",{className:"copyright-socials"},i.a.createElement(p,null))))}}]),a}(i.a.Component)),K=(a(70),a(71),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,displaying:!1,slided:!1,mobile:!1,menu_fixed:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this)),window.addEventListener("scroll",this.handleScroll.bind(this)),this.setState({loading:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLoaded",value:function(){this.setState({displaying:!0})}},{key:"handleFaded",value:function(){this.setState({loading:!1})}},{key:"handleSlided",value:function(){this.setState({slided:!0})}},{key:"render",value:function(){var e=this.state.mobile,t=this.state.loading,a=this.state.displaying,n=this.state.slided,r=this.state.menu_fixed;return i.a.createElement("div",{className:"page ".concat(n?"page-white":"")},i.a.createElement(i.a.Fragment,null," ",t&&i.a.createElement(k,{mobile:e,onLoaded:this.handleLoaded.bind(this),onFaded:this.handleFaded.bind(this)})," "),i.a.createElement(i.a.Fragment,null," ",a&&i.a.createElement("div",null,i.a.createElement(y,{mobile:e,shown:n,fixed:r}),i.a.createElement(v.Element,{name:"reels"},i.a.createElement(j,{mobile:e,onSlided:this.handleSlided.bind(this)})),i.a.createElement(v.Element,{name:"aboutme"},i.a.createElement(N,{mobile:e})),i.a.createElement(v.Element,{name:"skills"},i.a.createElement(F,{mobile:e})),i.a.createElement(v.Element,{name:"portfolio"},i.a.createElement(W,{mobile:e})),i.a.createElement(v.Element,{name:"contactme"},i.a.createElement(X,{mobile:e})),i.a.createElement(z,{mobile:e}))," "))}},{key:"updateDimensions",value:function(){var e=window.innerWidth;e<=800&&!this.state.mobile?this.setState({mobile:!0}):e>800&&this.state.mobile&&this.setState({mobile:!1})}},{key:"handleScroll",value:function(e){window.scrollY>=window.innerHeight?this.setState({menu_fixed:!0}):this.setState({menu_fixed:!1})}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.23b9142e.chunk.js.map