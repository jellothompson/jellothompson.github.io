(this["webpackJsonpjellothompson.github.io"]=this["webpackJsonpjellothompson.github.io"]||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),s=a(9),l=a.n(s),c=a(10),m=a(5),A=a(6),d=a(8),u=a(7),h=a(12),v=a(21),p=(a(58),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).url_linkedin="https://www.linkedin.com/in/jello-thompson-9b122a188/",n.url_instagram="https://www.instagram.com/jumbojello",n.url_youtube="https://www.youtube.com/channel/UCgD8IZh42DT8D6mOHv9WSiQ",n}return Object(A.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"social"},i.a.createElement(v.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_linkedin}),i.a.createElement(v.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_instagram}),i.a.createElement(v.SocialIcon,{className:"social-icon",target:"_blank",url:this.url_youtube}))}}]),a}(i.a.Component)),f=function(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))},g=(a(59),a.p+"static/media/logo.8d0a9383.png"),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:!1,shown:!1,fixed:!1,fixed_animation:!1},n.componentWillReceiveProps(e),n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({mobile:t.mobile,shown:t.shown}),this.state.fixed||!t.fixed){e.next=8;break}return this.setState({fixed:!0}),e.next=5,f(100);case 5:this.setState({fixed_animation:!0}),e.next=13;break;case 8:if(!this.state.fixed||t.fixed){e.next=13;break}return this.setState({fixed_animation:!1}),e.next=12,f(500);case 12:this.setState({fixed:!1});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderLink",value:function(e,t){return i.a.createElement(h.Link,{activeClass:"menu-link-active",className:"menu-link",to:e,smooth:!0},t)}},{key:"render",value:function(){var e=this.state.mobile,t=this.state.shown,a=this.state.fixed,n=this.state.fixed_animation,r="menu\n\t\t\t".concat(t?"menu-shown":"","\n\t\t\t").concat(e?"menu-mobile":"","\n\t\t\t").concat(a?"menu-fixed":"","\n\t\t\t").concat(n?"menu-fixed-in":"");return i.a.createElement("div",{className:r},i.a.createElement("a",{href:"https://jellothompson.com"},i.a.createElement("img",{className:"menu-logo",src:g})),i.a.createElement("div",{className:"menu-links"},i.a.createElement(p,null)),i.a.createElement(i.a.Fragment,null," ",!1," "))}}]),a}(i.a.Component),E=(a(60),a.p+"static/media/jt-visuals.554b1516.gif"),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={opacity:100,mobile:e.mobile},n.onLoaded=e.onLoaded,n.onFaded=e.onFaded,n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mobile:t.mobile});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(4200);case 2:this.onLoaded(),t=1;case 4:if(!(t<=15)){e.next=11;break}return this.setState({opacity:(100-100*t/15)/100}),e.next=8,f(500/15);case 8:t++,e.next=4;break;case 11:this.onFaded();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.opacity,t=this.state.mobile;return i.a.createElement("div",{className:"loading",style:{opacity:e}},i.a.createElement("img",{className:"loading-gif ".concat(t?"loading-gif-mobile":""),src:E}))}}]),a}(i.a.Component),y=a.p+"static/media/720HD.f6eb5818.mp4",k=a.p+"static/media/jtpp.0a3dba93.png",O=(a(61),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onSlided=e.onSlided,n.video_main=i.a.createRef(),n.video_1=i.a.createRef(),n.video_2=i.a.createRef(),n.video_3=i.a.createRef(),n.state={mobile:!1,show_one:!1,show_two:!1,show_three:!1,show_main:!1,play:!1,shown:!1},n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({mobile:t.mobile,shown:t.shown});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.video_1.current.currentTime=.065,this.video_2.current.currentTime=.065,this.video_3.current.currentTime=.065,this.video_main.current.currentTime=.065,e.next=6,f(300);case 6:return this.setState({show_one:!0}),e.next=9,f(500);case 9:return this.setState({show_two:!0}),e.next=12,f(600);case 12:return this.setState({show_three:!0}),e.next=15,f(1e3);case 15:this.setState({play:!0}),this.video_main.current.play(),this.setState({show_main:!0}),this.onSlided();case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.mobile;var e=this.state.shown,t=this.state.show_main,a=this.state.show_one,n=this.state.show_two,r=this.state.show_three,o=this.state.play,s="reels-reel reel-main ".concat(t?"reel-main-shown":""),l="reels-reel reel-one ".concat(a?"reel-one-shown":""),c="reels-reel reel-two ".concat(n?"reel-two-shown":""),m="reels-reel reel-three ".concat(r?"reel-three-shown":""),A="reels-overlay ".concat(o?"reels-overlay-none":"");return i.a.createElement("div",{className:"reels"},i.a.createElement("div",{className:l},i.a.createElement("video",{id:"reels-video-1",className:"reels-video",ref:this.video_1,muted:!0,loop:!0,src:y}),i.a.createElement("div",{id:"reels-overlay-one",className:A})),i.a.createElement("div",{className:c},i.a.createElement("video",{id:"reels-video-2",className:"reels-video",ref:this.video_2,muted:!0,loop:!0,src:y}),i.a.createElement("div",{id:"reels-overlay-two",className:A})),i.a.createElement("div",{className:m},i.a.createElement("video",{id:"reels-video-3",className:"reels-video",ref:this.video_3,muted:!0,loop:!0,src:y}),i.a.createElement("div",{id:"reels-overlay-three",className:A})),i.a.createElement("div",{className:s},i.a.createElement("video",{id:"reels-video-main",className:"reels-video",ref:this.video_main,muted:!0,loop:!0,src:y})),i.a.createElement("div",{className:"reels-content ".concat(e?"reels-content-shown":""),style:{backgroundImage:"url(".concat(k,")")}}))}}]),a}(i.a.Component)),x=a(74),N=a(75),j=a(36),S=(a(62),a.p+"static/media/portrait.b38f7668.png"),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement("div",{className:"page-content ".concat(e?"page-content-mobile":"")},i.a.createElement(x.a,{fluid:!0},i.a.createElement(N.a,null,i.a.createElement(j.a,{lg:"3",md:"4",sm:"6",xs:"12",className:"text-center"},i.a.createElement("img",{src:S,className:"aboutme-image"})),i.a.createElement(j.a,{lg:"9",md:"8",sm:"6",xs:"12",className:"aboutme-content"},i.a.createElement("div",{className:"aboutme-title ".concat(e?"aboutme-title-mobile":"")},"About Me"),i.a.createElement("div",{className:"aboutme-summary"},"Howdy, my name is Jello Thompson"),i.a.createElement("div",{className:"aboutme-text py-3"},"I\u2019m an editor, colorist, vfx artist, sound designer, post-production specialist, filmmaker, and more importantly a storyteller. Through editing, piecing together the story, and reining in everyone\u2019s creative vision is my speciality. There are many ways to cut a film, and it is my job to find the best story to tell. My background as an editor has a very heavy visual effects influence as creating those effects and motion graphics is how I ended up becoming an editor. I started my career in post through After Effects, and have been working with AE since 2013. I\u2019m a very technical person and work diligently to know my software in and out. I\u2019m adept across multiple platforms, with a focus in Avid and Premiere Pro. Beyond these two NLE\u2019s, I am well-versed in Pro Tools and DaVinci Resolve and the tools used for post-audio and finishing. Beyond my skills and knowledge in the cutting room, I\u2019m a team player. I collaborate frequently and work to ensure deadlines are met. I\u2019m here to help in any capacity and confident that as a part of your team, we can make some movie magic.")))))}}]),a}(i.a.Component),I=a(29),B=(a(63),a(64),a.p+"static/media/editing.683bbc03.jpg"),M=a.p+"static/media/vfx.b016defd.jpg",R=a.p+"static/media/audio.1c0c88aa.jpg",D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).transition_period=".3s",n.editing_full=84,n.vfx_full=75,n.audio_full=69,n.state={mobile:e.mobile,editing_val:0,vfx_val:0,audio_val:0},n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"handleHover",value:function(e,t){"Editing"==e?this.setState({editing_val:t?this.editing_full:0}):"VFX"==e?this.setState({vfx_val:t?this.vfx_full:0}):"Audio"==e&&this.setState({audio_val:t?this.audio_full:0})}},{key:"renderSection",value:function(e,t,a,n){return i.a.createElement("div",{className:"skills-section",onMouseEnter:this.handleHover.bind(this,e,!0),onMouseLeave:this.handleHover.bind(this,e,!1)},i.a.createElement("div",{className:"skills-section-background",style:{backgroundImage:"url( ".concat(t,")")}}),i.a.createElement("div",{className:"skills-section-content"},i.a.createElement("div",{className:"skills-section-content-circle"},i.a.createElement(I.a,{value:a,text:e,styles:Object(I.b)({textColor:"white",pathColor:"white",trailColor:"transparent",transition:this.transition_period})})),i.a.createElement("div",{className:"skills-section-content-text"},n)))}},{key:"render",value:function(){return this.mobile=this.state.mobile,i.a.createElement("div",{className:"skills"},this.renderSection("VFX",M,this.state.vfx_val,"The integrations are of live action footage and CG elements to create realistic imagery"),this.renderSection("Editing",B,this.state.editing_val,"Both a creative and a technical part of the post-production process of filmmaking"),this.renderSection("Audio",R,this.state.audio_val,"Balancing and adjusting sound sources in a reinforcement of sound"))}}]),a}(i.a.Component),F=a(20),L=a.p+"static/media/watchreel.6a11ad70.jpg",Q=(a(34),a(65),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement(F.Parallax,{bgImage:L,strength:-200,bgClassName:"watchreel-background"},i.a.createElement("div",{className:"page-content ".concat(e?"page-content-mobile":"")},i.a.createElement("div",{className:"watchreel ".concat(e?"watchreel-mobile":"")},i.a.createElement("a",{href:"https://youtu.be/DdUjhy0j3j4",target:"_blank",className:"watchreel-content"},"Watch the Reel",i.a.createElement("img",{src:"data:image/png;base64,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",className:"watchreel-image"})))))}}]),a}(i.a.Component)),q=a(15),T=(a(66),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).skill=e.skill,n.last=e.last,n}return Object(A.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"credits"},this.skill," ",i.a.createElement(i.a.Fragment,null," ",!this.last&&"|"),"\xa0")}}]),a}(i.a.Component)),U=(a(27),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).title=e.title,n.year=e.year,n.credits=e.credits,n}return Object(A.a)(a,[{key:"renderCredits",value:function(){var e,t=[],a=0,n=Object(q.a)(this.credits);try{for(n.s();!(e=n.n()).done;){var r=e.value,o=a+1==this.credits.length;t.push(i.a.createElement(T,{last:o,skill:r})),a++}}catch(s){n.e(s)}finally{n.f()}return t}},{key:"render",value:function(){return i.a.createElement("div",{className:"portfoliocard"},i.a.createElement("div",{className:"portfoliocard-header"},this.title," (",this.year,")"),i.a.createElement("div",{className:"portfoliocard-content"},this.renderCredits()))}}]),a}(i.a.Component)),V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).title=e.title,n.image=e.image,n.description=e.description,n}return Object(A.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"portfoliocard"},i.a.createElement("div",{className:"portfoliocard-image",style:{backgroundImage:"url(".concat(this.image,")")}}),i.a.createElement("div",{className:"collabcard-content"},this.description))}}]),a}(i.a.Component),W=a.p+"static/media/chicagofilmmakers.c3fe5c71.png",H=a.p+"static/media/whoztheboss.d131b671.png",J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile,category:e.category},n.filmography=[{title:"100mg",year:2018,credits:["VFX"]},{title:"USB",year:2018,credits:["Editor","Colorist","Motion Graphics","Re-recording Mixer"]},{title:"Good Mourning",year:2019,credits:["Editor","Colorist","Motion Graphics","Sound Editor","Re-recording Mixer"]},{title:"Six Pack",year:2020,credits:["Editor","Colorist","Motion Graphics"]},{title:"Riverwalk",year:2020,credits:["Editor","Colorist","Motion Graphics","Re-recording Mixer"]},{title:"35",year:2020,credits:["Sound Editor"]},{title:"Dead Man's Hand",year:2020,credits:["Sound Editor"]},{title:"Karen",year:2020,credits:["Sound Editor"]},{title:"Jesse James",year:2020,credits:["Dialogue Editor"]},{title:"Penis Papers",year:2020,credits:["Dialogue Editor"]},{title:"Hellwave",year:2020,credits:["Colorist","VFX","Motion Graphics"]}],n.collabs=[{title:"Chicago Film Makers",image:W,description:"Promos for summer workshops, 38th Reeling Film Festival"},{title:"United Airlines",image:"data:image/png;base64,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",description:"Internal marketing video campaign"},{title:"Who'z the Boss Music Library",image:H,description:"TV & Internet Spots, Album cover design"}],n.filmography.reverse(),n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"renderFilmography",value:function(){var e,t=[],a=Object(q.a)(this.filmography);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(i.a.createElement(j.a,{xl:"4",md:"6",sm:"12"},i.a.createElement(U,{title:n.title,year:n.year,credits:n.credits})))}}catch(r){a.e(r)}finally{a.f()}return t}},{key:"renderCollabs",value:function(){var e,t=[],a=Object(q.a)(this.collabs);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(i.a.createElement(j.a,{xl:"4",lg:"6",md:"12"},i.a.createElement(V,{title:n.title,image:n.image,description:n.description})))}}catch(r){a.e(r)}finally{a.f()}return t}},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"aboutme-title ".concat(e?"aboutme-title-mobile":"")},"Filmography"),i.a.createElement(x.a,{fluid:!0,className:"px-0"},i.a.createElement(N.a,null,this.renderFilmography()),i.a.createElement(N.a,null,this.renderCollabs())))}}]),a}(i.a.Component),P=a(37),G=a.n(P),Y=a(77),z=a(76),K=a(78),X=a.p+"static/media/background.de8e0bd7.png",Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"sendEmail",value:function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,G.a.sendForm("service_owl7xjn","template_w4mhu1e",t.target,"user_nzZKA4wORujISbp6zChkV");case 3:e.sent,alert("Email Sent!");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.mobile;return i.a.createElement(F.Parallax,{bgImage:X,strength:500,bgClassName:"contactme-background"},i.a.createElement("div",{className:"page-content ".concat(e?"page-content-mobile":"")},i.a.createElement(x.a,{fluid:!0,className:"contactme"},i.a.createElement(N.a,null,i.a.createElement(j.a,{xl:3,lg:2,md:1,sm:0}),i.a.createElement(j.a,{xl:6,lg:8,md:10,sm:12},i.a.createElement(Y.a,{bg:""},i.a.createElement(Y.a.Header,null,"Contact Me"),i.a.createElement(Y.a.Body,{className:"contactme-content"},i.a.createElement(Y.a.Text,null,"Send me an email if you want to collaborate, and I'll be happy to respond"),i.a.createElement(z.a,{onSubmit:this.sendEmail.bind(this)},i.a.createElement("input",{type:"hidden",name:"to_name",value:"Jello Thompson"}),i.a.createElement(z.a.Group,{controlId:"from_name"},i.a.createElement(z.a.Label,null," Name "),i.a.createElement(z.a.Control,{name:"from_name",type:"text",placeholder:"John Smith"})),i.a.createElement(z.a.Group,{controlId:"reply_to"},i.a.createElement(z.a.Label,null," Email "),i.a.createElement(z.a.Control,{name:"reply_to",type:"text",placeholder:"example@email.com"})),i.a.createElement(z.a.Group,{controlId:"message"},i.a.createElement(z.a.Label,null,"Message"),i.a.createElement(z.a.Control,{name:"message",as:"textarea",rows:5})),i.a.createElement(K.a,{variant:"dark",type:"submit"},"Send")))))))))}}]),a}(i.a.Component),_=(a(70),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={mobile:e.mobile},n}return Object(A.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"renderLink",value:function(e,t){return i.a.createElement(h.Link,{activeClass:"copyright-menu-link-active",className:"copyright-menu-link",to:e,smooth:!0},t)}},{key:"render",value:function(){this.state.mobile;var e=(new Date).getFullYear();return i.a.createElement("div",{className:"page-content"},i.a.createElement("div",{className:"copyright"},i.a.createElement("div",{className:"copyright-menu"},this.renderLink("aboutme","About Me")," |\xa0",this.renderLink("watch-reel","Reel")," |\xa0",this.renderLink("skills","Skills")," |\xa0",this.renderLink("portfolio","Portfolio")," |\xa0",this.renderLink("contactme","Contact Me")),i.a.createElement("div",{className:"copyright-text"},"Copyright \xa9 ",e," Jello Thompson. All Rights Reserved."),i.a.createElement("div",{className:"copyright-socials"},i.a.createElement(p,null))))}}]),a}(i.a.Component)),$=(a(71),a(72),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={loading:!1,displaying:!1,slided:!1,mobile:!1,menu_fixed:!1},n}return Object(A.a)(a,[{key:"componentDidMount",value:function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this)),window.addEventListener("scroll",this.handleScroll.bind(this)),this.setState({loading:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLoaded",value:function(){this.setState({displaying:!0})}},{key:"handleFaded",value:function(){this.setState({loading:!1})}},{key:"handleSlided",value:function(){this.setState({slided:!0})}},{key:"render",value:function(){var e=this.state.mobile,t=this.state.loading,a=this.state.displaying,n=this.state.slided,r=this.state.menu_fixed;return i.a.createElement("div",{className:"page ".concat(n?"page-white":"")},i.a.createElement(i.a.Fragment,null," ",t&&i.a.createElement(w,{mobile:e,onLoaded:this.handleLoaded.bind(this),onFaded:this.handleFaded.bind(this)})," "),i.a.createElement(i.a.Fragment,null," ",a&&i.a.createElement("div",null,i.a.createElement(b,{mobile:e,shown:n,fixed:r}),i.a.createElement(h.Element,{name:"top"},i.a.createElement(O,{mobile:e,onSlided:this.handleSlided.bind(this),shown:n})),i.a.createElement(h.Element,{name:"aboutme"},i.a.createElement(C,{mobile:e})),i.a.createElement(h.Element,{name:"watch-reel"},i.a.createElement(Q,{mobile:e})),i.a.createElement(h.Element,{name:"skills"},i.a.createElement(D,{mobile:e})),i.a.createElement(h.Element,{name:"portfolio"},i.a.createElement(J,{mobile:e})),i.a.createElement(h.Element,{name:"contactme"},i.a.createElement(Z,{mobile:e})),i.a.createElement(_,{mobile:e}))," "))}},{key:"updateDimensions",value:function(){var e=window.innerWidth;e<=800&&!this.state.mobile?this.setState({mobile:!0}):e>800&&this.state.mobile&&this.setState({mobile:!1})}},{key:"handleScroll",value:function(e){window.scrollY>=window.innerHeight?this.setState({menu_fixed:!0}):this.setState({menu_fixed:!1})}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.2b09204d.chunk.js.map