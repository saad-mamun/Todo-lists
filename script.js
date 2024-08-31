document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');

    function createTodoItem(text) {
      const li = document.createElement('li');
      li.className = 'flex items-center justify-between p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition animate__animated   animate__fadeInDown animate__delay-.25s';
      
      const span = document.createElement('span');
      span.textContent = text;
      span.className = 'flex-1';
      
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'px-2 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition ';
      editButton.addEventListener('click', () => {
        const newText = prompt('Edit to-do item:', span.textContent);
        if (newText) {
          span.textContent = newText;
        }
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition ml-2';
      deleteButton.addEventListener('click', () => {
        list.removeChild(li);
      });
  
      li.appendChild(span);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
  
      return li;
    }
  
    // Handle form 
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const todoText = input.value.trim();
      if (todoText) {
        const todoItem = createTodoItem(todoText);
        list.appendChild(todoItem);
        input.value = '';
      }
    });
  });
  