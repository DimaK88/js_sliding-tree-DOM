'use strict';

const items = document.querySelectorAll('li > ul');

items.forEach((ul) => {
  const li = ul.parentElement;
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.textContent = '';
  li.prepend(span);

  span.addEventListener('click', () => {
    const nestedUl = li.querySelector('ul');

    if (nestedUl) {
      nestedUl.style.display =
        nestedUl.style.display === 'none' ? 'block' : 'none';
    }
  });
});
