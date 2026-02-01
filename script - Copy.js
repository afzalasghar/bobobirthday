const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

function openGift(){
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  document.getElementById("music").play();
  createBalloons();
  createConfetti();
  createSparkles();
}

function showMessage(){
  document.getElementById("msg").style.display = "block";
}

/* Balloons */
function createBalloons(){
  for(let i=0;i<20;i++){
    let b=document.createElement("div");
    b.className="balloon";
    b.style.left=Math.random()*100+"%";
    b.style.background=`hsl(${Math.random()*360},70%,70%)`;
    document.body.appendChild(b);
  }
}

/* Confetti */
function createConfetti(){
  for(let i=0;i<100;i++){
    let c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"%";
    document.body.appendChild(c);
  }
}

/* Sparkles */
function createSparkles(){
  let board=document.getElementById("board");
  for(let i=0;i<15;i++){
    let s=document.createElement("div");
    s.className="sparkle";
    board.appendChild(s);
  }
}