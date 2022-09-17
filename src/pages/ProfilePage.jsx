import React from 'react';
import CoverImg from '../components/CoverImg';
import ProfileImg from "../components/ProfileImg"
function ProfilePage() {
    return (
        <>
            <div className='w-full'>
                <CoverImg />
            </div>
            <div className="profileImg">
                <ProfileImg />
            </div>
        </>
    )
}

export default ProfilePage;