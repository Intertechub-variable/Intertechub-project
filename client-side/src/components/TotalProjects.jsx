import { motion } from "framer-motion";
import { Trash, Star } from "lucide-react";
import { useProductStore } from "../context/useProductStore";




const TotalProjects = () => {
	const { deleteProduct,allProjects } = useProductStore();
    console.log(allProjects)
	return (
		<motion.div
			className='bg-slate-200 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<table className=' min-w-full divide-y divide-gray-700'>
				<thead className='bg-gray-200'>
					<tr>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
						>
							Project
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
						>
							Target Amount
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
						>
							Raised Amount
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
						>
							Is Approved
						</th>
						<th
							scope='col'
							className='px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider'
						>
							Action
						</th>
					</tr>
				</thead>

				<tbody className='bg-slate-200 divide-y divide-gray-700'>
					{allProjects?.map((product) => (
						<tr key={product._id} className='hover:bg-gray-400'>
							<td className='px-6 py-4 '>
								<div className='flex flex-col items-center'>
									<div className='flex-shrink-0 h-10 w-10'>
										<img
											className='h-10 object-cover'
											src={product.image}
											alt={product.title}
										/>
									</div>
									<div className='ml-4'>
										<div className='text-sm font-medium text-black' >{product.title}</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-black'>${product?.target_amount.toFixed(2)}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='text-sm text-black'>${product?.current_amount.toFixed(2)}</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
                                {product.isApproved ? 'Yes':'No'}
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() =>{
                                     deleteProduct(product._id)
                                     window.location.reload()
                                     }
                                    }
									className='text-red-400 hover:text-red-300'
								>
									<Trash className='h-5 w-5' />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</motion.div>
	);
};
export default TotalProjects;