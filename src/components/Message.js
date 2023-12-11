import Image from 'next/image';
export default function Message() {
	return (
		<div className='flex flex-row bg-slate-100 p-4'>
			<div className='w-[30px] relative mr-4'>
				<Image src='/logo-open-ai.png' width={30} height={30} alt='' />
			</div>
			<div className='w-full'></div>
		</div>
	);
}
