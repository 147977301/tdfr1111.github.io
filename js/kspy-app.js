(function () {
  'use strict';
  var P = 'kspy';
  var CHAIN_SVGS = {"trc20": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"36\" height=\"36\" aria-hidden=\"true\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#EF0027\"/><path d=\"M23.1 23.3l8.1 1.4-4.7 6.9-3.4-8.3zm1.3 1.1l2.1 5.1 1.1-4.1-3.2-1zm4.1 1.2l-.9 3.4 2.4-3.1-1.5-.3z\" fill=\"#FFFFFF\"/></svg>", "erc20": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"36\" height=\"36\" aria-hidden=\"true\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#627EEA\"/><path d=\"M27 21.8v3.85l3.25 1.45L27 21.8z\" fill=\"#FFFFFF\" fill-opacity=\"0.72\"/><path d=\"M27 21.8l-3.25 5.3 3.25-1.45V21.8z\" fill=\"#FFFFFF\"/><path d=\"M27 29.55v2.65l3.25-4.5L27 29.55z\" fill=\"#FFFFFF\" fill-opacity=\"0.72\"/><path d=\"M27 32.2v-2.65l-3.25-1.85L27 32.2z\" fill=\"#FFFFFF\"/><path d=\"M27 28.95l3.25-1.85L27 25.65v3.3z\" fill=\"#FFFFFF\" fill-opacity=\"0.45\"/><path d=\"M23.75 27.1L27 28.95v-3.3l-3.25 1.45z\" fill=\"#FFFFFF\" fill-opacity=\"0.82\"/></svg>", "bep20": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"36\" height=\"36\" aria-hidden=\"true\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#F3BA2F\"/><path d=\"M27 22.7l1.85 1.85-1.85 1.85-1.85-1.85L27 22.7zm-4.3 4.3l1.45-1.45 1.45 1.45-1.45 1.45L22.7 27zm8.6 0l-1.45 1.45-1.45-1.45 1.45-1.45L31.3 27zM27 31.3l-1.85-1.85L27 27.6l1.85 1.85L27 31.3zm0-5.45l1.15 1.15L27 28.15 25.85 27 27 25.85z\" fill=\"#FFFFFF\"/></svg>", "solana": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"36\" height=\"36\" aria-hidden=\"true\"><defs><linearGradient id=\"solGrad_2e4bcf\" x1=\"20\" y1=\"20\" x2=\"34\" y2=\"34\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0%\" stop-color=\"#00FFA3\"/><stop offset=\"100%\" stop-color=\"#DC1FFF\"/></linearGradient></defs><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#F8FAFC\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#111827\"/><path d=\"M23.5 29.2c.1-.1.25-.15.4-.15h6.8c.25 0 .38.3.2.48l-1.3 1.32c-.1.1-.25.15-.4.15h-6.8c-.25 0-.38-.3-.2-.48l1.3-1.32zm0-5.4c.1-.1.25-.15.4-.15h6.8c.25 0 .38.3.2.48l-1.3 1.32c-.1.1-.25.15-.4.15h-6.8c-.25 0-.38-.3-.2-.48l1.3-1.32zm6.1 2.7c-.1-.1-.25-.15-.4-.15h-6.8c-.25 0-.38.3-.2.48l1.3 1.32c.1.1.25.15.4.15h6.8c.25 0 .38-.3.2-.48l1.3-1.32z\" fill=\"url(#solGrad_2e4bcf)\"/></svg>"};
  var CD_SEC = 720;
  var PRIMARY = '#C2410C';
  var LS_KEY = 'kspy_orders_v1';

  function toast(msg, kind) {
    var box = document.getElementById(P + '-toast');
    if (!box) { box = document.createElement('div'); box.id = P + '-toast'; box.className = P + '-toast'; document.body.appendChild(box); }
    var el = document.createElement('div');
    el.className = P + '-titem ' + (kind || 'info');
    el.textContent = msg;
    box.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 3000);
  }

  // Mobile menu toggle + outside click + Escape
  var mbtn = document.getElementById(P + '-mbtn');
  var mmenu = document.getElementById(P + '-mmenu');
  function closeMenu() {
    if (mmenu) mmenu.classList.remove('open');
    if (mbtn) { mbtn.setAttribute('aria-expanded', 'false'); mbtn.textContent = '☰'; }
  }
  if (mbtn && mmenu) {
    mbtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var op = mmenu.classList.toggle('open');
      mbtn.setAttribute('aria-expanded', op ? 'true' : 'false');
      mbtn.textContent = op ? '×' : '☰';
    });
    document.addEventListener('click', function (e) {
      if (mmenu.classList.contains('open') && !mmenu.contains(e.target) && e.target !== mbtn) closeMenu();
    });
  }

  // Modal helpers
  function openModal(id) {
    var m = document.getElementById(id);
    if (m) m.classList.add('open');
    closeMenu();
  }
  function closeAllModals() {
    document.querySelectorAll('.' + P + '-mbg.open').forEach(function (el) { el.classList.remove('open'); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeMenu(); closeAllModals(); }
  });
  document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () { openModal(btn.getAttribute('data-open-modal')); });
  });
  document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
    btn.addEventListener('click', closeAllModals);
  });
  document.querySelectorAll('.' + P + '-mbg').forEach(function (bg) {
    bg.addEventListener('click', function (e) { if (e.target === bg) closeAllModals(); });
  });

  // Category filter on homepage (intercepts <a> click for smooth client-side filtering)
  var catBtns = document.querySelectorAll('[data-cat-filter]');
  var cards = document.querySelectorAll('[data-sku-cat]');
  if (catBtns.length && cards.length) {
    catBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var target = btn.getAttribute('data-cat-filter');
        catBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        cards.forEach(function (c) {
          c.style.display = (target === 'all' || c.getAttribute('data-sku-cat') === target) ? '' : 'none';
        });
      });
    });
  }

  // localStorage order persistence
  function loadOrders() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } catch (e) { return []; }
  }
  function saveOrder(ord) {
    try {
      var list = loadOrders();
      list.unshift(ord);
      localStorage.setItem(LS_KEY, JSON.stringify(list.slice(0, 50)));
    } catch (e) {}
  }

  // Order lookup form
  var qForm = document.getElementById(P + '-qform');
  if (qForm) {
    qForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var oid = (document.getElementById(P + '-qid').value || '').trim().toUpperCase();
      var em = (document.getElementById(P + '-qemail').value || '').trim().toLowerCase();
      var res = document.getElementById(P + '-qres');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
        res.className = P + '-qres err';
        res.textContent = '请输入正确的下单电子邮箱格式。';
        toast('邮箱格式不正确', 'err');
        return;
      }
      var hit = loadOrders().find(function (o) {
        return String(o.orderId || '').toUpperCase() === oid && String(o.email || '').toLowerCase() === em;
      });
      if (!hit) {
        res.className = P + '-qres err';
        res.textContent = '未查询到该订单号，请核对订单编号与下单邮箱是否一致。';
        toast('未查询到匹配订单', 'err');
        return;
      }
      res.className = P + '-qres ok';
      res.innerHTML = '<strong>订单编号：' + hit.orderId + '</strong> <span class="' + P + '-ok">' + hit.status + '</span>' +
        '<div>商品：' + hit.productName + ' × ' + hit.qty + '</div>' +
        '<div>应付总额：$' + Number(hit.total).toFixed(2) + ' USD（' + hit.chain + '）</div>' +
        '<div>收件邮箱：' + hit.email + '</div>';
    });
  }

  // After-sales ticket form
  var tForm = document.getElementById(P + '-tform');
  if (tForm) {
    tForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var em = (document.getElementById(P + '-temail').value || '').trim();
      var desc = (document.getElementById(P + '-tdesc').value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) || desc.length < 6) {
        toast('请填写有效邮箱并简要描述具体异常情况', 'err');
        return;
      }
      toast('售后工单已登记，核验后将回复至您的邮箱', 'ok');
      tForm.reset();
      closeAllModals();
    });
  }

  // Detail page checkout + dual-column payment modal
  var chainWrap = document.getElementById(P + '-chains');
  var wallets = window.__KS_WALLETS__ || [];
  var selectedChain = wallets[0] || null;
  if (chainWrap && wallets.length) {
    wallets.forEach(function (w, idx) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = P + '-chain' + (idx === 0 ? ' active' : '');
      b.innerHTML = (CHAIN_SVGS[w.key] || '') + '<span>' + w.label + '</span>';
      b.addEventListener('click', function () {
        selectedChain = w;
        chainWrap.querySelectorAll('.' + P + '-chain').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
      });
      chainWrap.appendChild(b);
    });
  }

  var qtyInp = document.getElementById(P + '-qty');
  var totEl = document.getElementById(P + '-tot');
  var buyBtn = document.getElementById(P + '-buybtn');
  var unitPrice = buyBtn ? parseFloat(buyBtn.getAttribute('data-price') || '0') : 0;
  function syncTotal() {
    if (!qtyInp || !totEl) return;
    var q = Math.max(1, Math.min(99, parseInt(qtyInp.value || '1', 10) || 1));
    qtyInp.value = q;
    totEl.textContent = '$' + (unitPrice * q).toFixed(2) + ' USD';
  }
  var qDec = document.getElementById(P + '-qdec');
  var qInc = document.getElementById(P + '-qinc');
  if (qDec) qDec.addEventListener('click', function () { qtyInp.value = Math.max(1, (parseInt(qtyInp.value, 10) || 1) - 1); syncTotal(); });
  if (qInc) qInc.addEventListener('click', function () { qtyInp.value = Math.min(99, (parseInt(qtyInp.value, 10) || 1) + 1); syncTotal(); });
  if (qtyInp) qtyInp.addEventListener('input', syncTotal);

  var cdTimer = null;
  function openPaymentModal(ord, chainObj) {
    document.getElementById(P + '-p-name').textContent = ord.productName + ' × ' + ord.qty;
    document.getElementById(P + '-p-email').textContent = ord.email;
    document.getElementById(P + '-p-id').textContent = ord.orderId;
    document.getElementById(P + '-p-chain').textContent = chainObj.label;
    document.getElementById(P + '-p-tot').textContent = '$' + ord.total.toFixed(2) + ' USD';
    document.getElementById(P + '-p-addr').textContent = chainObj.addr;
    document.getElementById(P + '-p-guide1').textContent = '请使用支持 ' + chainObj.label + ' 的钱包扫码支付，请核对转账网络';
    document.getElementById(P + '-p-guide2').textContent = '付款完成后自动发卡至上方收件邮箱';
    var _ct1 = document.getElementById(P + '-p-cdtitle'); if (_ct1) _ct1.textContent = '请在规定时间内完成支付';
    var _ct2 = document.getElementById(P + '-p-cdsub'); if (_ct2) _ct2.textContent = '订单将在倒计时结束后自动取消';

    var qrHost = document.getElementById(P + '-p-qr');
    qrHost.innerHTML = '';
    var cv = document.createElement('canvas');
    qrHost.appendChild(cv);
    try {
      if (typeof window['drawKsPayQr'] === 'function') {
        window['drawKsPayQr'](cv, chainObj.addr, chainObj.label, PRIMARY);
      }
    } catch (e) {}

    var left = CD_SEC;
    var cdEl = document.getElementById(P + '-p-cd');
    if (cdTimer) clearInterval(cdTimer);
    function tick() {
      var mm = String(Math.floor(left / 60)).padStart(2, '0');
      var ss = String(left % 60).padStart(2, '0');
      cdEl.textContent = mm + ':' + ss;
      if (left <= 0) { clearInterval(cdTimer); cdEl.textContent = '00:00'; }
      left--;
    }
    tick();
    cdTimer = setInterval(tick, 1000);
    openModal(P + '-paymodal');
  }

  var copyBtn = document.getElementById(P + '-copybtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var addr = (document.getElementById(P + '-p-addr').textContent || '').trim();
      if (navigator.clipboard && addr) {
        navigator.clipboard.writeText(addr).then(function () {
          copyBtn.textContent = '已复制 ✓';
          toast('收款地址已复制', 'ok');
          setTimeout(function () { copyBtn.textContent = '一键复制地址'; }, 2000);
        });
      }
    });
  }

  if (buyBtn) {
    buyBtn.addEventListener('click', function () {
      var em = (document.getElementById(P + '-email').value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
        toast('请填写正确的收货电子邮箱', 'err');
        document.getElementById(P + '-email').focus();
        return;
      }
      if (!selectedChain) return;
      var q = Math.max(1, parseInt(qtyInp.value || '1', 10) || 1);
      var origTxt = buyBtn.textContent;
      buyBtn.disabled = true;
      buyBtn.textContent = '订单已生成，正在调起支付...';
      setTimeout(function () {
        buyBtn.disabled = false;
        buyBtn.textContent = origTxt;
        var oid = 'KS' + String(Date.now()).slice(-8);
        var ord = {
          orderId: oid,
          email: em,
          productName: buyBtn.getAttribute('data-name') || '',
          qty: q,
          total: Number((unitPrice * q).toFixed(2)),
          chain: selectedChain.label,
          status: '待支付',
          createdAt: new Date().toISOString()
        };
        saveOrder(ord);
        toast('订单 ' + oid + ' 已生成', 'ok');
        openPaymentModal(ord, selectedChain);
      }, 700);
    });
  }
})();
