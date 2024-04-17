import { useRef } from 'react'
import plus from '../../assets/Plus.svg'
import { useDispatch, } from 'react-redux'

function Form() {
  const name = useRef(null)
  const dispatch = useDispatch()
  function handleSave(e) {
    e.preventDefault()
    if (name.current.value.length > 3) {
      const todo = {
        id: Date.now(),
        name: name.current.value,
        status: true
      }
      dispatch({ type: 'TODO_ADD', payload: todo })
      name.current.value = null
    }
  }
  return (
    <div className='flex items-center gap justify-between mb-8'>

      <input ref={name} className='w-[381px] p-[9px] bg-transparent border-1 border border-[#3E1671] text-white rounded-lg  focus:outline-none' type="text" placeholder='Add a new task' />
      <button onClick={handleSave} className='w-[40px] bg-[#9E78CF] rounded-lg p-[9px]'>
        <img src={plus} alt="Plus icon" width={22} height={22} />
      </button>
    </div>
  )
}

export default Form