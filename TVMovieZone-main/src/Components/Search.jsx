import React,{useEffect, useMemo} from 'react'
import { setSearchText ,setdummyText,clearSearchText} from '../Redux/createSlice/serchSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useRef } from 'react'
import { debounce } from 'lodash'
export const Search = () => {
  const inputRef=useRef()
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  const dispatch=useDispatch()
    const searchText=useSelector((state)=>state.searchText.searchText)
    const dummy=useSelector((state)=>state.searchText.dummy)
    
    const handleSumbit=(e)=>{
      e.preventDefault()
     dispatch(setdummyText())
     
    }
    const handleChange=(e)=>{
      dispatch(setSearchText(e.target.value))
    }
    
  return (

    <div>
      <form onSubmit={handleSumbit}>
        <div className='relative'>
      <input className='border rounded-lg  w-96 h-8 text-center'placeholder='Search' ref={inputRef} 
    onChange={handleChange} value={searchText}/>
    <button type='submit' className='absolute right-1 top'>🔍</button>
    </div></form></div>
    
  )
}
