export const Image = ({ title, description, tech, deployed, githubFrontend, githubBackend, smallImage }) => {
	return (
		<div className='portfolio-item'>
			<div className='hover-bg'>
				{' '}
				{/* <a href={largeImage} title={title} data-lightbox-gallery='gallery1'> */}
				<div className='hover-text'>
					<h4>{title}</h4>
					<h6>{description}</h6>
					<h6>{tech}</h6>
					<a className='deployed-link' target="_blank" rel="noopener noreferrer" href={deployed}>
            [ Deployed ]
          </a>{' '}
					<a className='github-link' target="_blank" rel="noopener noreferrer" href={githubFrontend}>
            [ GitHub Frontend ]
          </a>{' '}
					<a className='github-link' target="_blank" rel="noopener noreferrer" href={githubBackend}>
            [ GitHub Backend ]
          </a>{' '}
				</div>
				<img src={smallImage} className='img-responsive' alt={title} />{' '}
				{/* </a>{' '} */}
			</div>
		</div>
	)
}
