export const Image = ({ title, description, tech, deployed, github, largeImage, smallImage }) => {
	return (
		<div className='portfolio-item'>
			<div className='hover-bg'>
				{' '}
				<a href={largeImage} title={title} data-lightbox-gallery='gallery1'>
					<div className='hover-text'>
						<h4>{title}</h4>
						<h5>{description}</h5>
						<h6>{tech}</h6>
						<h6>{deployed}</h6>
						<h6>{github}</h6>
					</div>
					<img src={smallImage} className='img-responsive' alt={title} />{' '}
				</a>{' '}
			</div>
		</div>
	)
}
