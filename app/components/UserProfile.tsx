import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
  return (
    <div className="hidden md:flex gap-3 items-center cursor-pointer transition group">
      Nouman Ejaz
      <span className="overflow-hidden rounded-full">
        <Image
          src="https://media.licdn.com/dms/image/D4D03AQGTaZpt5Mozow/profile-displayphoto-shrink_800_800/0/1696796309575?e=2147483647&v=beta&t=jChWR6-tTbXdirrNZnSc5958O6GLY1gicpElxhuaL8o"
          alt="User Image"
          height={50}
          width={50}
          className="rounded-full min-h-[36px] min-w-[36px] h-[36px] w-[36px] group-hover:scale-150 origin-top transition"
        />
      </span>
    </div>
  );
};

export default UserProfile;
