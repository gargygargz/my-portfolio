import { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from '@emailjs/browser'
init('6lo5SioRiqiCfXzrh')

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
	const [{ name, email, message }, setState] = useState(initialState)

	const handleChange = (e) => {
	  const { name, value } = e.target
	  setState((prevState) => ({ ...prevState, [name]: value }))
	}
	const clearState = () => setState({ ...initialState })

	const handleSubmit = (e) => {
	  e.preventDefault()
	  console.log(name, email, message)
	  emailjs
	    .sendForm(
	      'gmail_service', 'contact_form', e.target, '6lo5SioRiqiCfXzrh'
        // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
	    )
	    .then(
	      (result) => {
	        console.log(result.text)
          alert('Email sent successfully!')
	        clearState()
	      },
	      (error) => {
	        console.log(error.text)
          alert('Email failed to send, please try again!')
	      }
	    )
      e.target.reset()
	}
	return (
		<div>
			<div id='contact'>
				<div className='container'>
					<div className='col-md-8'>
						<div className='row'>
							<div className='section-title'>
								<h2>Contact.</h2>
								<p>
									Holla at me. Send me an email if you'd like to get in touch or check out my GitHub / LinkedIn links below.
								</p>
							</div>
							<form name='sentMessage' validate onSubmit={handleSubmit}>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='text'
												id='name'
												name='name'
												className='form-control'
												placeholder='Full Name'
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='email'
												id='email'
												name='email'
												className='form-control'
												placeholder='Email Address'
												required
												onChange={handleChange}
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
								</div>
								<div className='form-group'>
									<textarea
										name='message'
										id='message'
										className='form-control'
										rows='4'
										placeholder='Message'
										required
										onChange={handleChange}></textarea>
									<p className='help-block text-danger'></p>
								</div>
								<div id='success'></div>
								<button type='submit' className='btn btn-custom btn-lg'>
									Send Message
								</button>
							</form>
						</div>
					</div>
					<div className='col-md-3 col-md-offset-1 contact-info'>
						<div className='contact-item'>
							<h3>Contact Info</h3>
							<p>
								<span>
									<i className='fa fa-map-marker'></i> Location
								</span>
								{props.data ? props.data.address : 'loading'}
							</p>
						</div>
						{/* <div className='contact-item'>
							<p>
								<span>
									<i className='fa fa-phone'></i> Phone
								</span>{' '}
								{props.data ? props.data.phone : 'loading'}
							</p>
						</div> */}
						<div className='contact-item'>
							<p>
								<span>
									<i className='fa fa-envelope-o'></i> Email
								</span>{' '}
								{props.data ? props.data.email : 'loading'}
							</p>
						</div>
					</div>
					<div className='col-md-12'>
						<div className='row'>
							<div className='social'>
								<ul>
									<li>
										<a target="_blank" rel="noopener noreferrer" href={props.data ? props.data.github : '/'}>
											<i className='fa fa-github'></i>
										</a>
									</li>
									<li>
										<a target="_blank" rel="noopener noreferrer" href={props.data ? props.data.linkedin : '/'}>
											<i className='fa fa-linkedin'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='footer'>
        <div className='container text-center'>
          <p>
            Built by Greg Schaefer | &copy; 2022
          </p>
        </div>
      </div>
		</div>
	)
}
