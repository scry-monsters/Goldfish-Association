import React from "react";

const EventsPage = () => {
	const events = [
		{
			title: "Issyk-Kul Lake Meditation Retreat",
			date: "April 15, 2025",
			location: "Cholpon-Ata, Kyrgyzstan",
			description:
				"Join us for a serene meditation retreat at the stunning Issyk-Kul Lake. Immerse yourself in mindful swimming practices and connect with the ripples of truth.",
			mapLink:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47183.99437665387!2d77.93576195215287!3d42.34253085862284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388676c4cd7f1bdb%3A0x14ff3257a926350d!2sKyzyl%20Suu%2C%20Kyrgyzstan!5e0!3m2!1sen!2sus!4v1732254049273!5m2!1sen!2sus",
		},
		{
			title: "Bishkek Enlightenment Gathering",
			date: "June 5, 2025",
			location: "Bishkek, Kyrgyzstan",
			description:
				"An inspiring day of workshops and talks led by Master Fin. Discover the Seven Scales of Enlightenment and practice golden reflection.",
			mapLink:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58412.048706094494!2d74.55801377174983!3d42.87636562158454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dcbdacf87b%3A0xfc7d686ab988f348!2sAla%20Too%20Square!5e0!3m2!1sen!2sus!4v1732254134644!5m2!1sen!2sus",
		},
		{
			title: "Alay Valley Wisdom Walk",
			date: "August 10, 2025",
			location: "Osh Region, Kyrgyzstan",
			description:
				"Explore the tranquil beauty of Alay Valley while practicing silent observation and grace in movement. A spiritual journey like no other.",
			mapLink:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24594.452739304976!2d72.83245601884747!3d39.597775431278336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38be5c80c7f09a6b%3A0x6c4be1de9308ef90!2sAlai%20Valley!5e0!3m2!1sen!2sus!4v1732254182349!5m2!1sen!2sus",
		},
	];

	return (
		<div className="min-h-screen  py-10">
			<div className="max-w-6xl mx-auto px-6 lg:px-8">
				{/* Page Title */}
				<h1 className="text-4xl font-bold text-center text-yellow-600 mb-8">
					Upcoming Events in Kyrgyzstan
				</h1>

				{/* Event Cards */}
				<div className="space-y-8">
					{events.map((event, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-center"
						>
							{/* Event Info */}
							<div className="flex-1 lg:pr-6">
								<h2 className="text-2xl font-bold text-blue-700">
									{event.title}
								</h2>
								<p className="text-gray-600 mt-2">
									<strong>Date:</strong> {event.date}
								</p>
								<p className="text-gray-600">
									<strong>Location:</strong> {event.location}
								</p>
								<p className="text-gray-700 mt-4">{event.description}</p>
							</div>

							{/* Map */}
							<div className="mt-6 lg:mt-0 w-full lg:w-1/3">
								<iframe
									src={event.mapLink}
									title={event.title}
									className="w-full h-48 rounded-lg"
									allowFullScreen
									loading="lazy"
									style={{ border: 0 }}
								></iframe>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventsPage;
