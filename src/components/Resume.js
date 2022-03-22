// export const Resume = (props) => {
// 	return (
// 		<div id='resume'>
// 			<div className='container'>
// 				<div className='section-title text-center'>
// 					<h2>Resume</h2>
// 				</div>
// 				<div className='row'>
// 					{props.data
// 						? props.data.map((d, i) => (
// 								<div key={`${d.name}-${i}`} className='col-md-4'>
// 									<div className='resume'>
// 										<div className='resume-image'>
// 											{' '}
// 											<img src={d.img} alt='resume' />{' '}
// 										</div>
// 										<div className='resume-content'>
// 											<p>"{d.text}"</p>
// 											<div className='resume-meta'> - {d.name} </div>
// 										</div>
// 									</div>
// 								</div>
// 						  ))
// 						: 'loading'}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
