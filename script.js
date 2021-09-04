if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {

      // Registro funcionou :)

      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      
      // resgistro falhou :(
        
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}