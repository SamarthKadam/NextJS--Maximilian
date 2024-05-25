'use client'
import FormSubmit from '@/components/form-submit';
import {useFormState} from 'react-dom'

export default function PostForm({action}) {
const[state,formaction]=useFormState(action,{})

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formaction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit></FormSubmit>
        </p>
        {state.errors&&<ul className='form-errors'>{state.errors.map((item)=><li key={item}>{item}</li>)}</ul>}
      </form>
    </>
  );
}
