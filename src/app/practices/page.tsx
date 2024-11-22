import React from "react";

const PracticesPage = () => {
	return (
		<div className="min-h-screen py-10">
			<div className="max-w-5xl mx-auto px-6 lg:px-8 text-gray-800">
				{/* Page Title */}
				<h1 className="text-5xl font-bold text-center text-yellow-600 mb-8">
					Practices of the Goldfish Path
				</h1>

				{/* Introduction */}
				<p className="text-lg text-center mb-12">
					To embrace the wisdom of the Goldfish, we practice sacred rituals and
					meditations that align our hearts, minds, and souls with the eternal
					cycles of life. These practices guide us to swim with grace, reflect
					the golden light within, and ripple joy into the world.
				</p>

				{/* Sacred Teachings Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">
						The Three Ripples of Truth
					</h2>
					<div className="space-y-6">
						<div className="bg-white shadow-md rounded-lg p-6">
							<h3 className="text-xl font-bold mb-2 text-blue-700">
								First Ripple: Mindful Swimming
							</h3>
							<p className="text-gray-700">
								Like the goldfish, we move through life with grace and
								awareness. Practice daily walking meditations, imagining
								yourself as a goldfish gliding effortlessly through water.
							</p>
						</div>
						<div className="bg-white shadow-md rounded-lg p-6">
							<h3 className="text-xl font-bold mb-2 text-blue-700">
								Second Ripple: Circular Wisdom
							</h3>
							<p className="text-gray-700">
								Study the circular movement of goldfish and reflect on the
								cycles in your own life. Journaling during sunrise and sunset
								helps you internalize the beauty of these cycles.
							</p>
						</div>
						<div className="bg-white shadow-md rounded-lg p-6">
							<h3 className="text-xl font-bold mb-2 text-blue-700">
								Third Ripple: Golden Reflection
							</h3>
							<p className="text-gray-700">
								Radiate your inner light by practicing gratitude at the start
								and end of every day. Visualize your heart glowing like a
								goldfish under sunlight.
							</p>
						</div>
					</div>
				</section>

				{/* Seven Scales of Enlightenment Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">
						The Seven Scales of Enlightenment
					</h2>
					<div className="space-y-6">
						{[
							"Acceptance of the eternal now (3-second wisdom)",
							"Embracing constant renewal",
							"Finding peace in repetition",
							"Practicing silent observation",
							"Nurturing community harmony",
							"Maintaining graceful movement",
							"Achieving golden consciousness",
						].map((scale, index) => (
							<div key={index} className="bg-white shadow-md rounded-lg p-6">
								<h3 className="text-xl font-bold mb-2 text-blue-700">
									Scale {index + 1}: {scale.split(" ")[0]}
								</h3>
								<p className="text-gray-700">{scale}</p>
							</div>
						))}
					</div>
				</section>

				{/* Path to Aquatic Enlightenment */}
				<section>
					<h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">
						The Path to Aquatic Enlightenment
					</h2>
					<div className="bg-white shadow-md rounded-lg p-6">
						<p className="text-gray-700 mb-4">
							Master Fin teaches that enlightenment comes from understanding the
							profound wisdom of goldfish. Through daily observation,
							meditation, and practice, we unlock the secrets of their graceful
							existence.
						</p>
						<ul className="list-disc pl-6 space-y-2 text-gray-700">
							<li>Live fully in the present moment</li>
							<li>Find peace in repetition and routine</li>
							<li>Maintain grace under pressure</li>
							<li>Radiate joy and positive energy</li>
							<li>Navigate life’s challenges with fluid adaptability</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};

export default PracticesPage;
