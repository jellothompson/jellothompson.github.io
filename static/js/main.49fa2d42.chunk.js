(this["webpackJsonpjellothompson.github.io"]=this["webpackJsonpjellothompson.github.io"]||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(18),l=a.n(o),r=a(9),s=a.n(r),c=a(12),m=a(5),u=a(6),d=a(8),h=a(7),v=a(13),b=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},p=(a(50),a.p+"static/media/jt-visuals.ef64d056.gif"),f=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={opacity:100,mobile:e.mobile},n.onLoaded=e.onLoaded,n.onFaded=e.onFaded,n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mobile:t.mobile});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(442);case 2:this.onLoaded(),t=1;case 4:if(!(t<=15)){e.next=11;break}return this.setState({opacity:(100-100*t/15)/100}),e.next=8,b(500/15);case 8:t++,e.next=4;break;case 11:this.onFaded();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.opacity,t=this.state.mobile;return i.a.createElement("div",{className:"loading",style:{opacity:e}},i.a.createElement("img",{className:"loading-gif ".concat(t?"loading-gif-mobile":""),src:p}))}}]),a}(i.a.Component),g=a.p+"static/media/720HD.3addc38c.mp4",E=(a(51),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSlided=e.onSlided,n.video_1=i.a.createRef(),n.video_2=i.a.createRef(),n.video_3=i.a.createRef(),n.state={mobile:!1,show_one:!1,show_two:!1,show_three:!1,play:!1},n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mobile:t.mobile});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(300);case 2:return this.setState({show_one:!0}),e.next=5,b(500);case 5:return this.setState({show_two:!0}),e.next=8,b(600);case 8:return this.setState({show_three:!0}),e.next=11,b(900);case 11:this.setState({play:!0}),this.video_1.current.play(),this.video_2.current.play(),this.video_3.current.play(),this.onSlided();case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.show_one,t=this.state.show_two,a=this.state.show_three,n=this.state.play,o="reels-reel reel-one ".concat(e?"reel-one-shown":""),l="reels-reel reel-two ".concat(t?"reel-two-shown":""),r="reels-reel reel-three ".concat(a?"reel-three-shown":""),s="reels-overlay ".concat(n?"reels-overlay-none":"");return i.a.createElement("div",{className:"reels"},i.a.createElement("div",{className:o},i.a.createElement("video",{id:"reels-video-1",className:"reels-video",ref:this.video_1,muted:!0,loop:!0,src:g}),i.a.createElement("div",{id:"reels-overlay-one",className:s})),i.a.createElement("div",{className:l},i.a.createElement("video",{id:"reels-video-2",className:"reels-video",ref:this.video_2,muted:!0,loop:!0,src:g}),i.a.createElement("div",{id:"reels-overlay-two",className:s})),i.a.createElement("div",{className:r},i.a.createElement("video",{id:"reels-video-3",className:"reels-video",ref:this.video_3,muted:!0,loop:!0,src:g}),i.a.createElement("div",{id:"reels-overlay-three",className:s})))}}]),a}(i.a.Component)),y=a(71),k=a(72),w=a(32),j=a(20),N=(a(57),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).url_linkedin="https://www.linkedin.com/in/jello-thompson-9b122a188/",n.url_instagram="https://www.instagram.com/jumbojello",n.url_youtube="https://www.youtube.com/channel/UCgD8IZh42DT8D6mOHv9WSiQ",n}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"social"},i.a.createElement(j.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_linkedin}),i.a.createElement(j.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_instagram}),i.a.createElement(j.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_youtube}))}}]),a}(i.a.Component)),O=(a(58),a.p+"static/media/portrait.b38f7668.png"),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement("div",{className:"page-content ".concat(e?"page-content-mobile":"")},i.a.createElement(y.a,{fluid:!0},i.a.createElement(k.a,null,i.a.createElement(w.a,{lg:"3",md:"4",sm:"6",xs:"12",className:"text-center"},i.a.createElement("img",{src:O,className:"aboutme-image"}),i.a.createElement("div",{className:"aboutme-social"},i.a.createElement(N,null))),i.a.createElement(w.a,{lg:"9",md:"8",sm:"6",xs:"12",className:"aboutme-content"},i.a.createElement("div",{className:"aboutme-title"},"About Me"),i.a.createElement("div",{className:"aboutme-summary"},"Hello! I'm a Post-Production aficionado"),i.a.createElement("div",{className:"aboutme-text py-3"},"...and editor, though I would consider myself a storyteller more than a filmmaker. My strengths are in my ability in finding a story to tell in the art of the cut. I am very technical, and well versed with Adobe Premiere, After Effects, DaVinci Resolve, Avid Media Composer, and Pro Tools. Every day, I am constantly learning new techniques and skills to better improve as an editor and storyteller. My experience involves extends beyond the visual edit, but designing motion graphics, color grading, and sound design.")))))}}]),a}(i.a.Component),S=a(19),x=(a(59),a.p+"static/media/design.9d9c2733.jpg"),C=a.p+"static/media/motion.e5cbed6d.jpg",L=a.p+"static/media/videographer.ec64cd54.jpg",M=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).transition_period=".3s",n.motion_full=84,n.video_full=75,n.design_full=69,n.state={mobile:e.mobile,motion_val:0,video_val:0,design_val:0},n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"handleHover",value:function(e,t){"Motion"==e?this.setState({motion_val:t?this.motion_full:0}):"Video"==e?this.setState({video_val:t?this.video_full:0}):"Design"==e&&this.setState({design_val:t?this.design_full:0})}},{key:"renderSection",value:function(e,t,a,n){return i.a.createElement("div",{className:"skills-section",onMouseEnter:this.handleHover.bind(this,e,!0),onMouseLeave:this.handleHover.bind(this,e,!1)},i.a.createElement("div",{className:"skills-section-background",style:{backgroundImage:"url( ".concat(t,")")}}),i.a.createElement("div",{className:"skills-section-content"},i.a.createElement("div",{className:"skills-section-content-circle"},i.a.createElement(S.a,{value:a,text:e,styles:Object(S.b)({textColor:"white",pathColor:"white",trailColor:"transparent",transition:this.transition_period})})),i.a.createElement("div",{className:"skills-section-content-text"},n)))}},{key:"render",value:function(){return this.mobile=this.state.mobile,i.a.createElement("div",{className:"skills"},this.renderSection("Motion",C,this.state.motion_val,"The art of making stuff move, be it a puppet via strings or a car by steering wheel"),this.renderSection("Video",L,this.state.video_val,"The movement of pixels on a screen, and the camera that captures them."),this.renderSection("Design",x,this.state.design_val,"You know what Joseph's really good at. Me neither"))}}]),a}(i.a.Component),D=a(14),I=(a(60),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).title=e.title,n.image=e.image,n.description=e.description,n}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"portfoliocard"},i.a.createElement("img",{className:"portfoliocard-banner",src:"/portfolio/".concat(this.image),alt:this.title}),i.a.createElement("div",{className:"portfoliocard-contents"},i.a.createElement("div",{className:"portfoliocard-contents-title"},this.title)))}}]),a}(i.a.Component)),R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile,category:e.category},n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"render",value:function(){return i.a.createElement("div",{className:"page-content"},i.a.createElement(D.XMasonry,null,i.a.createElement(D.XBlock,null,i.a.createElement(I,{title:"Adobe X Terminator Dark Fate Trailer Remix",image:"adobe-x-terminator-dark-fate-trailer-remix.jpg"})),i.a.createElement(D.XBlock,null,i.a.createElement(I,{title:"100mg, Ghost Scene",image:"100mg-ghost-scene.jpeg"})),i.a.createElement(D.XBlock,null,i.a.createElement(I,{title:"Good Mourning",image:"good-mourning.webp"}))))}}]),a}(i.a.Component),P=(a(61),a(33)),W=a(74),F=a(73),T=a(75),A=a.p+"static/media/background.de8e0bd7.png",H=(a(64),a(65),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement(P.Parallax,{bgImage:A,strength:500,bgClassName:"contactme-background"},i.a.createElement("div",{className:"page-content ".concat(e?"page-content-mobile":"")},i.a.createElement(y.a,{fluid:!0,className:"contactme"},i.a.createElement(k.a,null,i.a.createElement(w.a,{xl:3,lg:2,md:1,sm:0}),i.a.createElement(w.a,{xl:6,lg:8,md:10,sm:12},i.a.createElement(W.a,{className:"bg"},i.a.createElement(W.a.Header,null,"Contact Me"),i.a.createElement(W.a.Body,{className:"contactme-content"},i.a.createElement(W.a.Text,null,"Send me an email about any business deals you want me to manage, I am very good at business dealings and such. No need to worry about your business"),i.a.createElement(F.a,null,i.a.createElement(F.a.Group,{controlId:"user_name"},i.a.createElement(F.a.Label,null," Name "),i.a.createElement(F.a.Control,{type:"text",placeholder:"John Smith"})),i.a.createElement(F.a.Group,{controlId:"email"},i.a.createElement(F.a.Label,null," Email "),i.a.createElement(F.a.Control,{type:"text",placeholder:"example@email.com"})),i.a.createElement(F.a.Group,{controlId:"message"},i.a.createElement(F.a.Label,null,"Message"),i.a.createElement(F.a.Control,{as:"textarea",rows:5}))),i.a.createElement(T.a,{variant:"dark"},"Send"))))))))}}]),a}(i.a.Component)),B=(a(67),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"renderLink",value:function(e,t){return i.a.createElement(v.Link,{activeClass:"copyright-menu-link-active",className:"copyright-menu-link",to:e,smooth:!0},t)}},{key:"render",value:function(){this.state.mobile;var e=(new Date).getFullYear();return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"copyright"},i.a.createElement("div",{className:"copyright-menu"},this.renderLink("reels","Reel")," |\xa0",this.renderLink("aboutme","About Me")," |\xa0",this.renderLink("skills","Skills")," |\xa0",this.renderLink("portfolio","Portfolio")," |\xa0",this.renderLink("contactme","Contact Me")),i.a.createElement("div",{className:"copyright-text"},"Copyright \xa9 ",e," Jello Thompson. All Rights Reserved."),i.a.createElement("div",{className:"copyright-socials"},i.a.createElement(N,null))))}}]),a}(i.a.Component)),G=(a(68),a(69),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,displaying:!1,slided:!1,mobile:!1},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this)),window.addEventListener("scroll",this.handleScroll.bind(this)),this.setState({loading:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLoaded",value:function(){this.setState({displaying:!0})}},{key:"handleFaded",value:function(){this.setState({loading:!1})}},{key:"handleSlided",value:function(){this.setState({slided:!0})}},{key:"render",value:function(){var e=this.state.mobile,t=this.state.loading,a=this.state.displaying,n=this.state.slided;return i.a.createElement("div",{className:"page ".concat(n?"page-white":"")},i.a.createElement(i.a.Fragment,null," ",t&&i.a.createElement(f,{mobile:e,onLoaded:this.handleLoaded.bind(this),onFaded:this.handleFaded.bind(this)})," "),i.a.createElement(i.a.Fragment,null," ",a&&i.a.createElement("div",null,i.a.createElement(v.Element,{name:"reels"},i.a.createElement(E,{mobile:e,onSlided:this.handleSlided.bind(this)})),i.a.createElement(v.Element,{name:"aboutme"},i.a.createElement(_,{mobile:e})),i.a.createElement(v.Element,{name:"skills"},i.a.createElement(M,{mobile:e})),i.a.createElement(v.Element,{name:"portfolio"},i.a.createElement(R,{mobile:e})),i.a.createElement(v.Element,{name:"contactme"},i.a.createElement(H,{mobile:e})),i.a.createElement(B,{mobile:e}))," "))}},{key:"updateDimensions",value:function(){var e=window.innerWidth;e<=800&&!this.state.mobile?this.setState({mobile:!0}):e>800&&this.state.mobile&&this.setState({mobile:!1})}},{key:"handleScroll",value:function(e){e.preventDefault()}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.49fa2d42.chunk.js.map