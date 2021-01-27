$(document).ready(function(){
  let stopWatch = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.id = "h3";
  h3.textContent = "00:00:00";

  h3.style.cursor = "pointer";
  h3.style.userSelect = "none";
  h3.style.border = "2px solid black";
  h3.style.borderRadius = "40px";
  h3.style.padding = "0 5px";

  h3.style.width = "fit-content";
  h3.style.height = "fit-content";
  h3.style.position = "fixed";

  h3.style.bottom = "10px";
  h3.style.left = "10px";
  h3.style.zIndex = "10000000";

  h3.style.color = "black";
  h3.style.fontSize = "20px";
  h3.style.backgroundColor = "white";

  const w = h3.style.width;
  const h = h3.style.height;

  document.body.appendChild(h3);

  async function counter() {
    let text = h3.textContent;
    let hr = Number(text.slice(0, 2));
    let min = Number(text.slice(3, 5));
    let sec = Number(text.slice(6, 8));
    sec += 1;
    if (sec == 60) {
      min += 1;
      sec = 00;
    }
    if (min == 60) {
      if (hr == 99) {
        sec = 00;
      } else hr += 1;
      min = 00;
    }
    if (min % 100 < 10) {
      min = "0" + min;
    }
    if (sec % 100 < 10) {
      sec = "0" + sec;
    }
    if (hr % 100 < 10) {
      hr = "0" + hr;
    }

    await (h3.textContent = `${hr}:${min}:${sec}`);
  }

  let cond = 0,
    timerId;
  function toggle() {
    if (cond == 0) {
      cond = 1;
      timerId = setInterval(counter, 1000);
    } else {
      cond = 0;
      clearInterval(timerId);
    }
  }
  function reset() {
    h3.textContent = "00:00:00";
    cond = 0;
    clearInterval(timerId);
  }
  toggle();
  h3.addEventListener("click", toggle);
  h3.addEventListener("dblclick", reset);

//   code to make h3 draggable
//   dragElement(document.getElementById("h3"));
//   function dragElement(elmnt) {
//     var pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;
//     elmnt.onmousedown = dragMouseDown;
//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       // set the element's new position:
//       const vw =
//         window.innerWidth ||
//         document.documentElement.clientWidth ||
//         document.body.clientWidth;
//       const vh =
//         window.innerHeight ||
//         document.documentElement.clientHeight ||
//         document.body.clientHeight;
//       elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//       elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//       elmnt.style.right = vw - (elmnt.style.left + w) + "px";
//       elmnt.style.bottom = vh - (elmnt.style.top + h) + "px";
//       console.log(vw);
//       console.log(vh);
//     }

//     function closeDragElement() {
//       // stop moving when mouse button is released:
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }
  $("#h3").draggable();
})








