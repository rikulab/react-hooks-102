import React, { useState } from 'react'

const EventForm = ({ state, dispatch }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const addEvent = e => {
      e.preventDefault()
      
      dispatch({
        type: 'CREATE_EVENT',
        title,
        body
      })
    
      setTitle('')
      setBody('')
    }
  
    console.log({state})
  
    const deleteAllEvents = e => {
      e.preventDefault()
      const result = window.confirm('全てのイベントを削除してもいいですか?')
      if (result) dispatch( {type: 'DELETE_ALL_EVENTS'})
    }
  
    const unCreatable = title === '' || body === ''
    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
              <div className="form-group">
                <label htmlfor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlfor="formEventTitle">ボディー</label>
                <textarea className="form-control" id="formEventTitle" value={body} onChange={e => setBody(e.target.value)} />
              </div>

              <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベント作成</button>
              <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベント削除</button>
            </form>
        </>
    )
}

export default EventForm;
