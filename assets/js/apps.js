(function () {
  function filterCards(keyword, tab) {
    var lower = (keyword || '').trim().toLowerCase();
    var cards = document.querySelectorAll('.app-card');
    cards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').toLowerCase();
      var matchKeyword = !lower || tags.indexOf(lower) !== -1;
      var matchTab = true;
      if (tab === 'mine') matchTab = tags.indexOf('我的') !== -1;
      if (tab === 'shared') matchTab = tags.indexOf('共享') !== -1;
      card.style.display = matchKeyword && matchTab ? '' : 'none';
    });
  }

  var searchInput = document.getElementById('appSearch');
  var activeTab = 'all';
  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      filterCards(e.target.value, activeTab);
    });
  }

  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      btn.classList.add('active');
      activeTab = btn.getAttribute('data-tab');
      filterCards(searchInput ? searchInput.value : '', activeTab);
    });
  });

  // 初始化过滤
  filterCards('', 'all');
})();


