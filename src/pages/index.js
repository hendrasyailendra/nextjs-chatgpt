import Image from 'next/image';
import Link from 'next/link';
import stacks from '../data/stacks.json';
export default function Home() {
	const renderStacks = () => {
		return Object.keys(stacks).map((stackKey) => {
			const stack = stacks[stackKey];
			return (
				<Link
					key={stack.href}
					href={stack.href}
					className='w-20 h-20 relative border-2 border-solid m-2 rounded-xl'
				>
					<Image
						fill
						src={stack.logo}
						alt=''
						className='object-color:cover p-2'
					/>
				</Link>
			);
		});
	};

	return (
		<div className='h-full flex justify-center items-center flex-col'>
			<div>What do you need to know</div>
			<div className='flex'>{renderStacks()}</div>
		</div>
	);
}
