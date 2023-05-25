// Função para exibir o pop-up de resposta
function showResponsePopup() {
    document.getElementById('response-popup').style.display = 'flex';
  }
  
  // Função para fechar o pop-up de resposta
  function closeResponsePopup() {
    document.getElementById('response-popup').style.display = 'none';
  }
  
  // Função para reproduzir/pausar a música da playlist
  function toggleMusic() {
    var audio = document.getElementById('playlist-audio');
    var playButton = document.getElementById('play-button');
  
    if (audio.paused) {
      audio.play();
      playButton.innerHTML = 'Pausar Música';
    } else {
      audio.pause();
      playButton.innerHTML = 'Reproduzir Música';
    }
  }
  
  // Evento de clique no botão "Clique aqui se me ama!!"
  document.getElementById('love-button').addEventListener('click', function() {
    showResponsePopup();
  });
  
  // Evento de clique no botão "Fechar" do pop-up
  document.getElementById('close-popup-button').addEventListener('click', function() {
    closeResponsePopup();
  });
  
  // Evento de clique fora do pop-up para fechá-lo
  document.getElementById('response-popup').addEventListener('click', function(event) {
    if (event.target === this) {
      closeResponsePopup();
    }
  });
  
  // Evento listener para o botão de reproduzir/pausar música
  document.getElementById('play-button').addEventListener('click', toggleMusic);
  