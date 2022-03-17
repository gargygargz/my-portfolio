// import Typewriter from 'typewriter-effect'
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider'
// import { ComparisonSlider } from 'react-comparison-slider'

import Background1 from '../images/Greg_JT_01-2.jpg'
import Background2 from '../images/Greg_JT_01-1-1.jpg'

export const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className=' intro-text'>
								{/* <div className='col-md-8 col-md-offset-2 intro-text'> */}
								{/* <div className="typewriter">
      <Typewriter
  
       onInit={(typewriter)=> {
        
       typewriter
        
       .typeString("FRONTEND DEVELOPER")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("BACKEND DEVELOPER")
       .start()
       .pauseFor(1000)
       .deleteAll()
       .typeString("ALL AROUND COOL PERSON")
       }}
       />
    </div> */}
								<div className='slider'>
									<ReactCompareSlider
										// boundsPadding={0}
										itemOne={
											<ReactCompareSliderImage
												alt='Image one'
												src={Background1}
											/>
										}
										itemTwo={
											<ReactCompareSliderImage
												alt='Image two'
												src={Background2}
												style={{ transform: 'scale(1.125)' }}
											/>
										}
										position={50}
										// style={{
										//   height: '100vh',
										//   width: '100vw',
										// }}
									/>
									{/* <ComparisonSlider className='intro'
      defaultValue={50}
      itemOne={<div className="bg-red-200"></div>}
      itemTwo={<div className="bg-blue-200"></div>}
      aspectRatio={16 / 9}
      orientation="horizontal"
    /> */}
								</div>
								{/* <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
								<a
									href='https://docs.google.com/document/d/1MsepzkG-IQzSLiXow2lTgjcb8xLpPNtDTAWdAPqe74w/edit#'
									className='btn btn-custom btn-lg page-scroll' target="_blank" rel="noopener noreferrer">
									Resume
								</a>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
