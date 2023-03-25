import {RxDashboard} from 'react-icons/rx'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {HiOutlineUser} from 'react-icons/hi'

const NavItems = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: <RxDashboard />,
    },
    {
        name: 'Books',
        path: '/books',
        icon: <BsJournalBookmarkFill />,
    },
    {
        name: 'Students',
        path: '/students',
        icon: <HiOutlineUser />,
    }
]

export default NavItems