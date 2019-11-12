import React from 'react';

const NewTodoForm = ({
onChange,
draft,
onSumbit
}) => ( < div className='todo' >
<input type = 'text'
onChange = {
    onChange
}
value = {
    draft
}
/>  <button onClick = {
onSumbit
} > add </button>  </div > )

export default NewTodoForm
