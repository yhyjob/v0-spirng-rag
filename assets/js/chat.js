(function () {
  function qs(selector, scope) { return (scope || document).querySelector(selector); }
  function qsa(selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); }

  function appendMessage(role, text) {
    var body = qs('#chatBody');
    if (!body || !text) return;
    var wrap = document.createElement('div');
    wrap.className = 'msg ' + role;

    var avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = role === 'user' ? '🙂' : '🤖';

    var bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;

    if (role === 'user') {
      wrap.appendChild(avatar);
      wrap.appendChild(bubble);
    } else {
      wrap.appendChild(avatar);
      wrap.appendChild(bubble);
    }

    body.appendChild(wrap);
    body.scrollTop = body.scrollHeight;
  }

  function handleSend() {
    var input = qs('#msgInput');
    if (!input) return;
    var value = (input.value || '').trim();
    if (!value) return;
    appendMessage('user', value);
    input.value = '';

    // 简单占位回复（可在接入后端后替换）
    setTimeout(function () {
      appendMessage('bot', '收到：' + value);
    }, 300);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var sendBtn = qs('#sendBtn');
    var input = qs('#msgInput');
    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (input) {
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSend();
        }
      });
    }

    // 会话列表切换激活与标题同步
    var title = qs('.chat-header .title');
    var items = qsa('.thread-item');
    items.forEach(function (li) {
      li.addEventListener('click', function () {
        items.forEach(function (n) { n.classList.remove('active'); });
        li.classList.add('active');
        var name = li.querySelector('.name');
        if (title && name) title.textContent = name.textContent;
      });
    });
  });
})();


