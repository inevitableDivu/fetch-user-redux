import React from 'react'
import { SingleUser } from '../app/state/initialUserState'

function UserCard({ data, isLoading }: { data?: SingleUser, isLoading: boolean }) {
    return (
        <div className='rounded-lg px-10 py-6 bg-gray-700 min-h-[144px]'>
            {
                isLoading ? <div className='text-3xl font-semibold'>Loading...</div> : (
                    <>
                        <div className='text-3xl font-semibold mb-8'>{data ? `${data.first_name} ${data.last_name}` : 'Name'}</div>
                        <div className='text-lg'>{data ? data.email : 'User Info'}</div>
                    </>
                )
            }
        </div>
    )
}

export default UserCard