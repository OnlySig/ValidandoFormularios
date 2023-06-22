const botaoCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const videoCamera = document.querySelector("[data-video]");

botaoCamera.addEventListener("click", async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoCamera.style.display = "none";
    campoCamera.style.display = "block";

    videoCamera.srcObject = iniciarVideo
})