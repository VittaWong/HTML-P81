function insertAfter(newElement,targetElement){ //自定义函数
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement){
        parent.appendChild(newElement);
    } else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addLoadEvent(func){          //自定义函数,方便调用函数
    var oldonload = window.onload;
    if (typeof window.onload != "function"){
        window.onload =func;
    } else {
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    if (elem.movement){
        clearTimeout(elem.movement);
    }
    if (!elem.style.left){
        elem.style.left = "0px";
    }
    if (!elem.style.top){
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos- final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

function vitta(){
    var slideshow = document.getElementById("slideshow");
    if(!document.getElementById("slideshow")) return false;
    function func(){
        setTimeout(function(){moveElement("slideshow",-102,0,15)},2000);
        setTimeout(function(){moveElement("slideshow",-204,0,15)},4000);
        setTimeout(function(){moveElement("slideshow",0,0,15)},6000);
    };
    func();
    setInterval(func,6000);
}

function vitta2() {
    if(!document.getElementsByClassName("index-banner-nav")) return false;
    if(!document.getElementById("header-slider-slideshow")) return false;
    var slideshow = document.getElementById("header-slider-slideshow");
    var bannernav = document.getElementsByClassName("index-banner-nav");
    var links = bannernav[0].getElementsByTagName("a");
    links[0].onclick = function(){moveElement("header-slider-slideshow",0,0,15);}
    links[1].onclick = function(){moveElement("header-slider-slideshow",0,-220,15);}
    links[2].onclick = function(){moveElement("header-slider-slideshow",0,-440,15);}
    links[3].onclick = function(){moveElement("header-slider-slideshow",0,-660,15);}
    links[4].onclick = function(){moveElement("header-slider-slideshow",0,-880,15);}
    links[5].onclick = function(){moveElement("header-slider-slideshow",0,-1100,15);}
    links[6].onclick = function(){moveElement("header-slider-slideshow",0,-1320,15);}
    //for(var i=0; i < links.length-1; i++) {
    //    links[i].onclick = function () {
    //        moveElement("header-slider-slideshow", 0, (-220)*i, 15);
    //        alert(i);
    //    }
    //}
}
function vitta3(){
    if(!document.getElementById("side-slideshow")) return false;
    var slideshow = document.getElementById("side-slideshow");
    var preview = document.getElementById("side-preview");
    function func(){
        setTimeout(function(){moveElement("side-preview",0,-138,15)},3000);
        setTimeout(function(){moveElement("side-preview",0,-276,15)},6000);
        setTimeout(function(){moveElement("side-preview",0,0,15)},9000);
    }
    func();
    setInterval(func,9000);
}

addLoadEvent(vitta);
addLoadEvent(vitta2);
addLoadEvent(vitta3);

//显示悬浮层
function showInform(){
    document.getElementById("aboutus").style.display='block';
}
//隐藏悬浮层
function hiddenInform(event){
    var informDiv = document.getElementById("aboutus");
    var x=event.clientX;
    var y=event.clientY;
    var divx1 = informDiv.offsetLeft;
    var divy1 = informDiv.offsetTop;
    var divx2 = informDiv.offsetLeft + informDiv.offsetWidth;
    var divy2 = informDiv.offsetTop + informDiv.offsetHeight;
    if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
        document.getElementById('inform').style.display='none';
    }

}