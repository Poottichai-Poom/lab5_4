document.getElementById('addBtn').addEventListener('click', function () {
  const input = document.getElementById('friendInput');
  const name = input.value.trim();

  if (name !== '') {
    addFriend(name);
    input.value = ''; // clear input
  }
});

function addFriend(name) {
  const list = document.getElementById('friendList');

  const li = document.createElement('li');
  li.className = 'friend';

  const span = document.createElement('span');
  span.textContent = name;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'x';
  removeBtn.className = 'remove-btn';
  removeBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(removeBtn);
  list.appendChild(li);
}
