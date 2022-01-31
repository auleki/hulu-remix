import Image from 'next/image'
import { 
  BadgeCheckIcon, 
  CollectionIcon, 
  HomeIcon, 
  LightningBoltIcon, 
  SearchIcon, 
  UserIcon 
} from '@heroicons/react/outline'
import HeaderItem from "./HeaderItem";
import {useRouter} from "next/router";

export default function Header() {
  const router = useRouter();
  return (
      <header className="flex flex-col sm:flex-row m-5 justify-between items-center" >
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon}/>
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}/>
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
          <HeaderItem title="SEARCH" Icon={SearchIcon}/>
          <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
        </div>
        <Image 
            onClick={() => router.push('/')}
            className="object-contain cursor-pointer transition hover:opacity-80" 
            src="https://links.papareact.com/ua6" 
            height={100} 
            width={200}
        />
      </header>
  )
};