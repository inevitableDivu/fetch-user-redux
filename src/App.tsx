import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getUserById } from './app/actionTypes/userAction'
import { UserData } from './app/state/initialUserState'
import { RootState } from './app/store'
import Button from './components/Button'
import UserCard from './components/UserCard'

function App() {
    const data: UserData = useSelector((state: RootState) => state.users)
    const dispatch = useDispatch()

    const fetchUser = (userId: number) => {
        getUserById(dispatch, userId)
    }

    useEffect(() => {
        getAllUsers(dispatch, data)
    }, [])
    return (
        <div className='h-screen bg-slate-800 p-10'>
            <div className='text-white'>
                <h2 className='text-3xl font-bold text-center'>User Data</h2>
                <div className='py-5'>
                    <UserCard
                        isLoading={data.isLoading}
                        data={data?.singleUser}
                    />
                </div>
                <div className='grid grid-cols-10 gap-6 mt-5'>
                    {
                        data.totalUser.map((user) => <Button key={user.id} data={user} onClick={fetchUser} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default App