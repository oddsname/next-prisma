import Image from "next/image";

const ProfilePhoto = () => {
    return (
        <div>
            <div className="relative ml-8 w-12 h-12">
                <Image src="/profile.webp" alt="profile" className="rounded-full" fill={true}/>
            </div>
        </div>
    );
}

export default ProfilePhoto