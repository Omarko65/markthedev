
import { assets } from '@/assets/assets';
import Image from 'next/image';

export default function Visit() {
  return (
    <button
      type="button"
      className="rounded-4xl hover:scale-[1.04] transition cursor-pointer font-light px-4 py-2 border bg-gray text-white items-center text-sm flex gap-4"
    >
      Visit
      <Image
        loading="eager"
        src={assets.arrow}
        className="size-3 object-cover"
        alt="arrow icon"
      />
    </button>
  );
}
