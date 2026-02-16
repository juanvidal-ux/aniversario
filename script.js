// ===== SENHA DO SITE =====
const SITE_PASSWORD = "02022026";
// =========================

const lock = document.getElementById("lock");
const app = document.getElementById("app");
const pass = document.getElementById("pass");
const unlockBtn = document.getElementById("unlockBtn");
const lockMsg = document.getElementById("lockMsg");

unlockBtn.addEventListener("click", tryUnlock);
pass.addEventListener("keydown", (e) => {
  if (e.key === "Enter") tryUnlock();
});

function tryUnlock(){
  if(pass.value.trim() === SITE_PASSWORD){
    lock.classList.add("hidden");
    app.classList.remove("hidden");
    startMusic();
  } else {
    lockMsg.textContent = "Senha incorreta 😅";
  }
}

// Player
const music = document.getElementById("bgMusic");
const btnPlay = document.getElementById("btnPlay");
const vol = document.getElementById("vol");
const pState = document.getElementById("pState");

music.volume = vol.value / 100;

function startMusic(){
  music.play().catch(()=>{});
}

btnPlay.addEventListener("click", ()=>{
  if(music.paused){
    music.play();
    pState.textContent = "tocando";
    btnPlay.textContent = "❚❚";
  }else{
    music.pause();
    pState.textContent = "pausado";
    btnPlay.textContent = "▶";
  }
});

vol.addEventListener("input", ()=>{
  music.volume = vol.value / 100;
});
