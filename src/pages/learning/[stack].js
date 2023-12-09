import Image from 'next/image';
import stacks from '../../data/stacks.json';

export default function Stack({ stack, stackKey }) {
	return (
		<div className='h-full flex flex-col'>
			<div className='header flex bg-slate-200 p-4 rounded-2xl'>
				<div className='flex mr-4 justify-center items-center'>
					<Image src={stack.logo} alt='' width={200} height={200} />
				</div>
				<div className='flex font-bold text-sm'>{stack.info}</div>
			</div>
			<hr className='my-4' />

			<div className='chat flex-col h-full overflow-scroll'>
				<div className='flex flex-row bg-slate-100 p-4'>
					<div className='w-[30px] relative mr-4'>
						<Image src='/logo-open-ai.png' width={30} height={30} alt='' />
					</div>
					<div className='w-full'></div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = Object.keys(stacks).map((key) => ({ params: { stack: key } }));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	return {
		props: {
			stack: stacks[params.stack],
			stackKey: params.stack,
		},
	};
}
