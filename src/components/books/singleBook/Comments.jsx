import React from 'react'

function Comments() {
  return (
    <div className=''>
        <CommentNav />
        <AddComment />
        <AllComments />
        <AllComments />
    </div>
  )
}

function CommentNav(){
    return(
        <div className='className=border-t-[1px] border-b-[1px] border-black flex justify-between text-[12px]'>
            <div className='flex gap-4'>
                <p>100 Comments</p>
                <select className='bg-transparent' name="sort" id="">
                    <option value="">Sort by</option>
                </select>
            </div>
            <div>
                <button>login</button>
            </div>
        </div>
    )
}
function AddComment() {
    return(
        <div className='flex items-start w-full gap-4 my-10'>
            <img className='w-[4rem] h-[4rem] rounded-full object-cover' src={require('../../../assets/images/profiles/hamza.jpg')} alt="" />
            <div className='flex flex-col items-end gap-2 '>
                <textarea className='bg-transparent border-b-[1px] border-[#2A2E2E] ' 
                name="" id="" cols="60" rows="2">
                </textarea>
                <div>
                    <button className='text-white bg-[#2A2E2E] text-xs px-3 py-1 '>send</button>
                </div>
            </div>
        </div>
    )
}
function AllComments() {
    return(
        <div className='flex items-start w-full gap-4 my-10 ml-6 text-xs'>
            <img className='w-[3rem] h-[3rem] rounded-full object-cover' src={require('../../../assets/images/profiles/hamza.jpg')} alt="" />
            <div className='flex flex-col gap-2 '>
                <div className='flex gap-8 capitalize'>
                    <p>John Doe</p>
                    <p>8 hours ago</p>
                </div>
                
                <div>
                    <p className='font-medium'>Clean up the spam bots on your commenting platform.</p>
                </div>

                <div className='flex gap-4'>
                    <button>18</button>
                    <button>Reply</button>
                </div>
                
                <div>
                    <button className='text-[#0047FF]'>See oter answer</button>
                </div>
            </div>
        </div>
    )
}

export default Comments
