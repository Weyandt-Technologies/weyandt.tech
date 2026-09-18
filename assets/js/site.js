/*
  Site script for weyandt.tech.

  Loaded through `footer_scripts` in _config.yml in place of the theme's
  main.min.js (jQuery plus five plugins, about 120 KB). The only interactive
  parts of this site are the masthead menu and the contact form, and neither
  needs any of that.
*/
(function () {
  'use strict';

  // --- Masthead menu -------------------------------------------------------
  //
  // The theme's greedy nav shows as many links as fit and drops the rest into
  // a menu, which at phone widths leaves a lone "Home" beside the hamburger.
  // This keeps the theme's markup and classes but uses a plain breakpoint: all
  // links inline from 48em up, all of them behind the toggle below that.

  var nav = document.getElementById('site-nav');
  var toggle = nav && nav.querySelector('.greedy-nav__toggle');
  var visible = nav && nav.querySelector('.visible-links');
  var hidden = nav && nav.querySelector('.hidden-links');

  if (toggle && visible && hidden) {
    var narrow = window.matchMedia('(max-width: 47.999em)');

    var closeMenu = function () {
      hidden.classList.add('hidden');
      toggle.classList.remove('close');
      toggle.setAttribute('aria-expanded', 'false');
    };

    var openMenu = function () {
      hidden.classList.remove('hidden');
      toggle.classList.add('close');
      toggle.setAttribute('aria-expanded', 'true');
    };

    var move = function (from, to) {
      while (from.firstElementChild) {
        to.appendChild(from.firstElementChild);
      }
    };

    var layout = function () {
      if (narrow.matches) {
        move(visible, hidden);
        toggle.classList.remove('hidden');
      } else {
        move(hidden, visible);
        toggle.classList.add('hidden');
      }
      closeMenu();
    };

    toggle.addEventListener('click', function () {
      if (hidden.classList.contains('hidden')) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !hidden.classList.contains('hidden')) {
        closeMenu();
        toggle.focus();
      }
    });

    if (narrow.addEventListener) {
      narrow.addEventListener('change', layout);
    } else {
      narrow.addListener(layout);
    }
    layout();
  }

  // --- Contact form ---------------------------------------------------------
  //
  // Formspree honours the `_next` redirect only on paid plans. Submitting with
  // fetch and redirecting here reaches /thanks/ on any plan. If the request
  // fails for any reason, fall through to a normal form post, which still
  // delivers the message (to Formspree's own confirmation page at worst).

  var form = document.getElementById('fs-frm');

  if (form && window.fetch && window.FormData) {
    var button = form.querySelector('[type="submit"]');
    var thanks = form.getAttribute('data-thanks') || '/thanks/';

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (button) {
        button.disabled = true;
      }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          window.location.assign(thanks);
        } else {
          form.submit();
        }
      }).catch(function () {
        form.submit();
      });
    });
  }
})();
