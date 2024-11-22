import React from "react";

const Contact = () => {
	return (
		<div className="min-h-screen  py-10">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Page Heading */}
				<h1 className="text-4xl font-bold text-center text-yellow-600 mb-8">
					Contact Us
				</h1>

				{/* Contact Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{/* Card 1 */}
					<div className="bg-white shadow-lg rounded-lg p-6 text-center">
						<h2 className="text-xl font-semibold text-gray-700 mb-4">
							Customer Support
						</h2>
						<p className="text-gray-600 mb-4">
							Have questions? Reach out to our support team!
						</p>
						<a
							href="mailto:goldfish@association.com"
							className="text-blue-500 hover:underline"
						>
							goldfish@association.com
						</a>
					</div>

					{/* Card 2 */}
					<div className="bg-white shadow-lg rounded-lg p-6 text-center">
						<h2 className="text-xl font-semibold text-gray-700 mb-4">
							Our Location
						</h2>
						<p className="text-gray-600 mb-4">
							Yusup Abdrakhmanov Street 17, Bishkek, Kyrgyzstan
						</p>
						<p className="text-gray-600">Phone: +996 (503) 242804</p>
					</div>

					{/* Card 3 */}
					<div className="bg-white shadow-lg rounded-lg p-6 text-center">
						<h2 className="text-xl font-semibold text-gray-700 mb-4">
							Business Inquiries
						</h2>
						<p className="text-gray-600 mb-4">
							For partnerships and collaborations:
						</p>
						<a
							href="mailto:Isaac.Lane@goldfish.com"
							className="text-blue-500 hover:underline"
						>
							Isaac.Lane@goldfish.com
						</a>
					</div>
				</div>

				{/* Map Section */}
				<div className="bg-white shadow-lg rounded-lg overflow-hidden">
					<iframe
						title="Our Location"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6877576179327!2d74.60914417631918!3d42.87943417114929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c95220f2fd%3A0x5966f3c54d4ca092!2sYusup%20Abdrahmanov%20St%2C%20Bishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2sus!4v1732251504873!5m2!1sen!2sus"
						width="100%"
						height="450"
						style={{ border: 0 }}
						aria-hidden="false"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
