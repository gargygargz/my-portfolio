import { TextLoop } from "react-text-loop-next"

export const Skills = (props) => {
	return (
		<div id='services' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>Skillz</h2>
					<p>fullstackDeveloper = () => {<span><TextLoop interval={2000} children={['JavaScript', 'React.js', 'HTML', 'CSS', 'Bootstrap', 'Python', 'Express.js', 'Node.js', 'MongoDB', 'Mongoose', 'Django', 'SQL']} /></span>}</p>
				</div>
				<div className='row'>
					{props.data
						? props.data.map((d, i) => (
								<div key={`${d.name}-${i}`} className='col-md-4'>
									{' '}
									<i className={d.icon}></i>
									<div className='service-desc'>
										<h3>{d.name}</h3>
										<p>{d.text}</p>
									</div>
								</div>
						  ))
						: 'loading'}
				</div>
			</div>
		</div>
	)
}
