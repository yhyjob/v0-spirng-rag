(function(){
  function filter(keyword){
    var lower = (keyword||'').trim().toLowerCase();
    var cards = document.querySelectorAll('.model-card');
    cards.forEach(function(card){
      var tags = (card.getAttribute('data-tags')||'').toLowerCase();
      var ok = !lower || tags.indexOf(lower) !== -1;
      card.style.display = ok ? '' : 'none';
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var input = document.getElementById('modelSearch');
    if (input){ input.addEventListener('input', function(e){ filter(e.target.value); }); }
    filter('');
  });
})();


