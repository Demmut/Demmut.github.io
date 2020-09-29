(this.webpackJsonpDemut=this.webpackJsonpDemut||[]).push([[0],{21:function(e,t,a){e.exports=a(38)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(19),s=a.n(o),r=(a(26),a(27),a(9)),l=a(1),h=(a(28),a(6)),c=a(16);a(29);var d=function(e){var t=e.id,a=e.name,n=e.price,o=e.qty,s=e.updateQty;return i.a.createElement("div",{className:"Cartitem"},i.a.createElement("div",null,a),i.a.createElement("div",null,"$",n),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return s(t,parseInt(o)-1)},disabled:o<1},"-"),i.a.createElement("input",{type:"number",min:"0",value:o,onChange:function(e){s(t,e.target.value)}}),i.a.createElement("button",{onClick:function(){return s(t,parseInt(o)+1)}},"+")),i.a.createElement("div",{className:"totals"},"$",o*n))},m=(a(30),function(e){var t=e.initialItems,a=JSON.parse(window.localStorage.getItem("items")),o=Object(n.useState)(a||t),s=Object(h.a)(o,2),r=s[0],l=s[1];Object(n.useEffect)((function(){window.localStorage.setItem("items",JSON.stringify(r))}),[r]);var m=function(e,t){var a=r.map((function(a){return a.id===e?Object(c.a)(Object(c.a)({},a),{},{qty:t}):a}));l(a)},u=r.reduce((function(e,t){return e+t.qty*t.price}),0).toFixed(2);return i.a.createElement("div",{className:"Shoppingcart"},i.a.createElement("h2",{className:"Cart-title"},"Shopping Cart"),i.a.createElement("hr",null),i.a.createElement("div",{className:"Cartitems"},r.map((function(e){return i.a.createElement(d,Object.assign({key:e.id,updateQty:m},e))}))),i.a.createElement("div",{className:"Sc_Control"},i.a.createElement("button",{className:"clearButton",onClick:function(){window.localStorage.clear();var e=r.map((function(e){return e.qty=0,e}));l(e)}},"Clear"),i.a.createElement("h4",{className:"grandTotal"},"Total: ",u)))}),u=(a(31),a(11)),f=a(12),p=a(8),y=a.n(p),v=function(){function e(){Object(u.a)(this,e),this.x=300,this.y=300,this.speed=50,this.xSpeed=-this.speed,this.ySpeed=0,this.foodX=Math.floor(600*Math.random()/this.speed)*this.speed,this.foodY=Math.floor(600*Math.random()/this.speed)*this.speed,this.tail=[],this.total=0,this.score=0}return Object(f.a)(e,[{key:"show",value:function(e){var t=20;e.fill(10,200,50,150),e.rect(this.x,this.y,this.speed,this.speed),e.fill(10,200,50,t);for(var a=0;a<this.tail.length;a++)t=Math.floor(t+(150-t)/8),e.stroke(50,50,50,t),e.fill(10,200,50,t),e.rect(this.tail[a].x,this.tail[a].y,this.speed,this.speed),e.stroke(10,200,50,50),e.fill(10,200,50,50),e.ellipse(this.tail[a].x+this.speed/10*(Math.floor(7*Math.random())+1),this.tail[a].y+this.speed/10*(Math.floor(7*Math.random())+1),this.speed/5,this.speed/5),e.stroke(50,50,50,t/3);e.fill(200,10,10,150),e.ellipse(this.foodX+this.speed/2,this.foodY+this.speed/2,(this.speed,Math.floor(.9*this.speed)),(this.speed,Math.floor(.8*this.speed)))}},{key:"update",value:function(e){for(var t=0;t<this.tail.length-1;t++)this.tail[t]=this.tail[t+1];this.total>0&&(this.tail[this.total-1]=e.createVector(this.x,this.y,0)),this.x+=this.xSpeed,this.y+=this.ySpeed,this.x=(this.x+600)%600,this.y=(this.y+600)%600}},{key:"move",value:function(e,t){this.xSpeed*e<0||(this.xSpeed=e*this.speed),this.ySpeed*t<0||(this.ySpeed=t*this.speed)}},{key:"workFood",value:function(e,t){var a=!1;if(t.fill(10),t.textAlign(t.CENTER),t.text(Math.floor(this.score),540,540),t.dist(this.x,this.y,this.foodX,this.foodY)<1){for(;!a;){this.foodX=Math.floor(600*Math.random()/this.speed)*this.speed,this.foodY=Math.floor(600*Math.random()/this.speed)*this.speed,a=!0;for(var n=0;n<this.tail.length;n++)t.dist(this.tail[n].x,this.tail[n].y,this.foodX,this.foodY)<1&&(a=!1);t.dist(this.x,this.y,this.foodX,this.foodY)<1&&(a=!1),this.score+=100/e}return this.total++,!0}return!1}},{key:"isDead",value:function(e){for(var t=0;t<this.tail.length;t++)if(e.dist(this.x,this.y,this.tail[t].x,this.tail[t].y)<1)return!0;return!1}}]),e}(),g=function(){var e,t=[],a=0,n=!1,o=0,s=0;function r(){e=new v}return i.a.createElement(y.a,{setup:function(e,t){e.createCanvas(600,600).parent(t),r(),e.frameRate(5),e.textSize(40),e.textAlign(e.CENTER,e.CENTER)},draw:function(i){if(function(e){if(o=0,65===e.keyCode)t[a]=e.createVector(-1,0),a++;else if(68===e.keyCode)t[a]=e.createVector(1,0),a++;else if(87===e.keyCode)t[a]=e.createVector(0,-1),a++;else{if(83!==e.keyCode)return;t[a]=e.createVector(0,1),a++}}(i),s++,o++,i.background(150),i.fill(200,10,10,100),i.stroke(50,50,50),n)return i.fill(10),i.textAlign(i.CENTER),void i.text("Find Deniz ask for 20 Euros. \nWell played!",300,300);void 0!==t[0]&&(e.move(t[0].x,t[0].y),t.shift(),a--,3===o&&(t=[],a=0,o=0)),e.update(i),e.workFood(s,i)&&(s=0),e.isDead(i)&&r(),e.show(i),e.tail.length+2===36e4/e.speed/e.speed&&(n=!0)}})},w=function(){var e,t,a,n,o,s,r,l,h,c;return i.a.createElement(y.a,{setup:function(e,t){e.createCanvas(360,360).parent(t),e.pixelDensity(1)},draw:function(i){100,i.loadPixels(),h=i.map(i.mouseX,0,i.width,-1,1),c=i.map(i.mouseY,0,i.height,-1,1);for(var d=0;d<i.width;d++)for(var m=0;m<i.height;m++){for(t=i.map(d,0,i.width,-2,2),a=i.map(m,0,i.height,-2,2),o=0,0,t,a;o<100&&(s=t*t,r=a*a,!(i.abs(t+a)>16));)n=2*t*a,t=s-r+h,a=n+c,o++;l=i.map(o,0,100,0,1),l=i.map(i.sqrt(l),0,1,0,255),100===o&&(l=0),e=4*(d+m*i.width),i.pixels[e+0]=l,i.pixels[e+1]=l,i.pixels[e+2]=l,i.pixels[e+3]=255}i.updatePixels()}})},E=5*Math.random()-2,b=function(){function e(t){Object(u.a)(this,e),this.x=600*Math.random()*1.5-600*Math.random()*.75,this.y=10*Math.random()-200,this.z=20*Math.random(),this.xspeed=E,this.yspeed=t.map(this.z,0,20,4,20),this.length=t.map(this.z,0,20,10,20),this.explosions=[]}return Object(f.a)(e,[{key:"fall",value:function(e){this.y=this.y+this.yspeed,this.x=this.x+this.xspeed,this.yspeed+=.2,this.y>600&&this.restart(e)}},{key:"show",value:function(e){e.strokeWeight(e.map(this.z,0,20,.6,1)),e.stroke(60,60,255),e.line(this.x,this.y,this.x+E,this.y+this.length)}},{key:"restart",value:function(e){this.x=600*Math.random()*1.5-600*Math.random()*.75,this.y=10*Math.random()-15,this.yspeed=e.map(this.z,0,20,4,20)}}]),e}(),k=function(){var e,t=[],a=[30,30,30],n=0,o=1,s=0,r=!1,l=["Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye, \nCould frame thy fearful symmetry?\n\nIn what distant deeps or skies. \nBurnt the fire of thine eyes?\nOn what wings dare he aspire?\nWhat the hand, dare seize the fire?\n\nAnd what shoulder, & what art,\nCould twist the sinews of thy heart?\nAnd when thy heart began to beat,\nWhat dread hand? & what dread feet?\nWhat the hammer? what the chain,\nIn what furnace was thy brain?\nWhat the anvil? what dread grasp, \nDare its deadly terrors clasp! \nWhen the stars threw down their spears\nAnd water'd heaven with their tears: \nDid he smile his work to see?\nDid he who made the Lamb make thee?\n\nTyger Tyger burning bright, \nIn the forests of the night: \nWhat immortal hand or eye,\nDare frame thy fearful symmetry?\n\nThe Tyger BY WILLIAM BLAKE","It matters not what the clocks say or the attitudes and labors of men. Morning is when I am awake and there is a dawn in me. \nMoral reform is the effort to throw off sleep. Why is it that men give so poor an account of their day if they have not been slumbering? \nThey are not such poor calculators. If they had not been overcome with drowsiness, they would have performed something. \nThe millions are awake enough for physical labor; but only one in a million is awake enough for effective \nintellectual exertion, only one in a hundred millions to a poetic or divine life. \nTo be awake is to be alive. I have never yet met a man who was quite awake. How could I have looked him in the face?\n\nWalden; or, Life in the Woods BY Henry David Thoreau","Let your virtue be too high for the familiarity of names, and if you\nmust speak of it, be not ashamed to stammer about it.\nThen speak and stammer: 'This is my good, this do I love, it pleases me'\nentirely, only this way do I want the good.\nNot as the law of a God do I desire it, not as a human law or a human\nneed do I want it; it shall not be a signpost for me to over-earths and\nparadises.\nAn earthly virtue is what I love: it has little prudence, and least of all\nthe reason and wisdom of everyone.\nBut that bird built its nest beside me: therefore, I love and cherish it -\nnow it sits beside me on its golden eggs.\nThus should you stammer, and praise your virtue.\n\nThus Spoke Zarathustra","Freedom means basically freedom to make mistakes. Freedom to be a damn fool"],h=Math.floor(Math.random()*(l.length-1));return i.a.createElement(y.a,{setup:function(a,n){a.createCanvas(600,600).parent(n),a.textSize(10),a.textAlign(a.CENTER,a.CENTER);for(var i=0;i<1e3;i++)t.push(new b(a));e=500*Math.random(),s=600*Math.random()+600,a.fill(255)},draw:function(i){n++,o++,function(i){i.background(a);for(var o=0;o<1e3;o++)t[o].fall(i),t[o].show(i);n>e&&Math.random()>.01?(e=500*Math.random(),n=0,a[0]*=5,a[1]*=5,a[2]*=5):(a[0]-=(a[0]-30)/15,a[1]-=(a[1]-30)/15,a[2]-=(a[2]-30)/15);r&&i.text(l[h],300,300)}(i),o>s&&(r=!0,h=(h+1)%l.length,o=0,s=600*Math.random()+600)}})},x=[{id:1,name:"Taco Seasoning",price:2.25,qty:0},{id:2,name:"Pinto Beans",price:1.99,qty:0},{id:3,name:"Sour Cream",price:3.5,qty:0},{id:4,name:"Bread",price:.5,qty:0}],S=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(!0),r=Object(h.a)(s,2),l=r[0],c=r[1],d=Object(n.useState)(!0),u=Object(h.a)(d,2),f=u[0],p=u[1];return i.a.createElement("div",{className:"Storage"},i.a.createElement("h1",{className:"Title"},"Storage"),i.a.createElement("p",null,"This store along with the website is built to display my work on front-end components and design patterns. All listed implementations are carefuly carried out to solidify my expertise. Different components were implemented with different frameworks and libraries, but they are all gathered to this website which is written using React.js"),i.a.createElement("div",{className:"Container"},i.a.createElement("div",{className:"displayItem"},i.a.createElement(m,{initialItems:x}),i.a.createElement("br",null),i.a.createElement("span",null,"A shopping cart using client storage")),i.a.createElement("div",{className:"displayItem"},i.a.createElement("div",{className:"Snake"},a?i.a.createElement("button",{onClick:function(){p(!0),c(!0),o(!1),document.getElementsByClassName("Snake")[0].scrollIntoViewIfNeeded()}},"Play Snake"):i.a.createElement(g,null),i.a.createElement("br",null),i.a.createElement("span",null,"Play the game, use 'A','S','D','W' keys to move the snake."))),i.a.createElement("div",{className:"displayItem"},i.a.createElement("div",{className:"Julia"},l?i.a.createElement("button",{onClick:function(){p(!0),o(!0),c(!1),document.getElementsByClassName("Julia")[0].scrollIntoViewIfNeeded()}},"Julia Visualization"):i.a.createElement(w,null),i.a.createElement("br",null),i.a.createElement("span",null,"Mouse position on the image will display the span of this mathematical funtion.",i.a.createElement("br",null)," As in, Image = f(mouseX, mouseY)"))),i.a.createElement("div",{className:"displayItem"},i.a.createElement("div",{className:"Rain"},f?i.a.createElement("button",{onClick:function(){o(!0),c(!0),p(!1),document.getElementsByClassName("Rain")[0].scrollIntoViewIfNeeded()}},"Rain Animation"):i.a.createElement(k,null),i.a.createElement("br",null),i.a.createElement("span",null,"Static rain animation with changing quotes inside. Drops are JS objects with coordinate parameters. Gravity, wind, small scale motion equations applied. And lightning!")))))},C=(a(32),function(){return i.a.createElement("div",{className:"Home"},i.a.createElement("h1",{className:"Title"},"Home"),i.a.createElement("div",{className:"Container"},i.a.createElement("div",{className:"Section"},i.a.createElement("h3",null,"My Current Education: Politechnika Wroc\u0142awska, Computer Science"),i.a.createElement("img",{src:"https://pwr.edu.pl/fcp/YGBUKOQtTKlQhbx08SlkTUhZeUTgtCgg9ACFDC0RDS3xBG1gnBVcoFW8SBDRKHg/_users/code_zAlkeOR5cJRk2WBUqERdeDV0HGG14XR0VG2sEVRNZCiE/budynek_c_13_pwr.jpg",alt:"Pwr C-13"}),i.a.createElement("h4",null,"About the university:"),i.a.createElement("p",null,"Wroc\u0142aw University of Science and Technology was established in 1945, mainly as a result of the involvement of the academic staff of the now-defunct Technical University of Lviv and the Jan Kazimierz University in Lviv, who adapted the destroyed buildings of the German School of Technology - Technische Hochschule."),i.a.createElement("p",null,"Today we continue the tradition of these prominent Polish universities and develop in close cooperation with the leading companies of Lower Silesia. We are one of the largest and best technical universities in the country, one regularly ranked among the best in the national rankings."),i.a.createElement("p",null,"The first rector of the then merged University of Technology and University of Wroc\u0142aw was Professor Stanis\u0142aw Kulczy\u0144ski (1945-1951). Since then, the university has already seen as many as fourteen successors of the eminent academic. Currently, the tertiary institution is governed by Professor Arkadiusz W\xf3js, whose term of office will last until the end of August 2024.")),i.a.createElement("div",{className:"Section"},i.a.createElement("h3",null,"My Previous Education: Bilkent University, Physics"),i.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Central_campus_square.jpg/800px-Central_campus_square.jpg",alt:"Bilkent Center"}),i.a.createElement("h4",null,"About the university:"),i.a.createElement("p",null,"Bilkent University was founded to provide an environment for learning and intellectual growth encompassing the sciences, technology, humanities and the arts, to serve human welfare and foster peace on earth. Education at Bilkent is not simply a means to obtain a vocation, a career. Instead, it endeavors to nurture students in the way of thinking and of learning to learn."),i.a.createElement("p",null,"With its diverse educational programs, scientific and scholarly research endeavors, and artistic and cultural activities, Bilkent University aims to help students/individuals develop themselves as critical, analytical and independent thinkers and life-long learners, so that they may become the competent, creative, broad-minded, ethical and socially responsible leaders of tomorrow, who will contribute to the advancement of humanity."),i.a.createElement("p",null,"The educational philosophy rests on the premise that those who produce new knowledge also have the best potential to impart it. Scholarly research at Bilkent extends across a wide spectrum. From nanoscience and nanotechnology to political science, from electronics to economics, from fine arts to management and industrial engineering, from philosophy to computer engineering, and in many other areas of science, letters and the performing arts, our academic staff and resources provide a uniquely integrated environment."))))}),N=function(){return i.a.createElement(r.a,null,i.a.createElement("div",{className:"Navbar"},i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(r.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(r.b,{to:"Storage"},"Storage"))))),i.a.createElement("div",null,i.a.createElement(l.c,null,i.a.createElement(l.a,{exact:!0,path:"/",component:C}),i.a.createElement(l.a,{exact:!0,path:"/Storage",component:S}))))},M=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("span",null,"Umut Deniz Darendeli"),i.a.createElement("span",null,"uddarendeli@gmail.com"),i.a.createElement("span",null,i.a.createElement("a",{href:"/CV.pdf",download:!0},"Resume")))};var T=function(){return i.a.createElement(r.a,null,i.a.createElement("div",null,i.a.createElement(N,null),i.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cd8bfe52.chunk.js.map