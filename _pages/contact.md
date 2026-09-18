---
permalink: /contact/
title: "Contact"
description: "Get in touch about fractional CISO work, a security assessment, or an engineering project. Northeast Ohio and remote."
tagline: "Tell me what's going on and I'll tell you whether I can help."
---

Email me at [contact@weyandt.tech](mailto:contact@weyandt.tech) or use the form. It comes to me either way.

If what you need is outside what I do, I'll say so and try to point you to someone who does it.

<form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xqkvlaqr" method="post" data-thanks="/thanks/">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Your name</label>
    <input type="text" name="name" id="full-name" autocomplete="name" required>

    <label for="email-address">Email address</label>
    <input type="email" name="_replyto" id="email-address" autocomplete="email" required>

    <label for="tel">Phone number (optional)</label>
    <input type="tel" name="tel" id="tel" autocomplete="tel">

    <label for="org-type">What kind of organization? (optional)</label>
    <select name="organization_type" id="org-type">
      <option value="">Choose one</option>
      <option>Medical practice or vendor</option>
      <option>Law, accounting, or insurance firm</option>
      <option>School or district</option>
      <option>Other small business</option>
    </select>

    <label for="message">What’s going on?</label>
    <textarea rows="6" name="message" id="message" required></textarea>
    <p class="form-hint">A sentence or two is plenty. Please don’t put passwords, patient or client data, or details of an active security incident in this form.</p>

    <input type="hidden" name="_subject" value="Contact form submission">
    <!-- Honoured by Formspree on paid plans only. With JavaScript, site.js submits
         with fetch and redirects to /thanks/ itself, so this is the no-JS fallback. -->
    <input type="hidden" name="_next" value="https://weyandt.tech/thanks/">
    <p class="form-gotcha" aria-hidden="true">
      <label for="company-website">Leave this field empty</label>
      <input type="text" name="_gotcha" id="company-website" tabindex="-1" autocomplete="off">
    </p>
  </fieldset>
  <input type="submit" value="Send message">
</form>
