import { useState } from "react"
import { AuthContext } from '@/contexts'

export function AuthProvider() {
    const [email, setEmail] = useState('')
    
    return (
        <div>providers</div>
    )
}