import React from 'react'
import { SingleUser } from '../app/state/initialUserState'

interface ButtonProps {
    data: SingleUser;
    onClick: (id: number) => void;
}

function Button({ data, onClick }: ButtonProps) {
    return (
        <button className='rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 px-4 py-3' onClick={() => onClick(data.id)}>
            {data.id}
        </button>
    )
}

export default Button