import check from '../../assets/check.svg'
import trash from '../../assets/trash.svg'
import rooback from '../../assets/rolb.svg'
import { useDispatch } from 'react-redux'
function TodoItem(props) {
  const { title, status, id } = props
  const dispatch = useDispatch()

  function handleCheck(e) {
    e.preventDefault()
    dispatch({ type: 'TODO_CHECK', payload: { id: id, status: false } })
  }
  function handleRol(e) {
    e.preventDefault()
    dispatch({ type: 'TODO_CHECK', payload: { id: id, status: true } })
  }
  function handleDel(e) {
    e.preventDefault()
    dispatch({ type: 'TODO_DELETE', payload: id })
  }
  return (
    <div className='flex items-center justify-between bg-[#15101C] p-[22px] mb-4 rounded-lg'>

      <p className={`${status ? 'text-[#9E78CF]' : 'text-[#78CFB0] line-through'}`}>{title}</p>

      <div className=' flex items-center justify-between gap-3'>
        {
          status && (
            <>
              <span onClick={handleCheck} className='cursor-pointer transition-all duration-75 hover:opacity-60'>
                <img src={check} alt="Check img" width={30} />
              </span>
              <span onClick={handleDel} className='cursor-pointer transition-all duration-75 hover:opacity-60'>
                <img src={trash} alt="Check img" width={30} />
              </span>
            </>
          )
        }
        {
          !status && (
            <>
              <span onClick={handleRol} className='cursor-pointer '>
                <img src={rooback} alt="Check img" width={30} />
              </span></>
          )
        }
      </div>
    </div>
  )
}

export default TodoItem