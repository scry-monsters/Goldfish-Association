import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import author from "../../public/author.png";
export default function Home() {
	return (
		<main>
			<div className="relative">
				<div className="bg-gradient-to-r from-[#112D4E] to-[#0F4C75] text-white py-24">
					<div className="container flex flex-col place-content-center items-center mx-auto text-center px-4 min-h-[30vh]">
						<h1 className="text-5xl font-bold mb-6">
							Discover Inner Peace Through Goldfish Wisdom
						</h1>
						<p className="text-xl mb-8">
							Join us on the path to aquatic enlightenment
						</p>
						<Link
							href="/teachings"
							className="bg-white text-orange-600 px-8 py-3 max-w-[180px] rounded-md font-bold hover:bg-orange-500 hover:text-white inline-block"
						>
							Begin Your Journey
						</Link>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16">
				<div className="grid md:grid-cols-3 gap-8">
					<FeatureCard
						title="The Three Ripples"
						description="Discover the fundamental teachings of mindful swimming, circular wisdom, and golden reflection."
					/>
					<FeatureCard
						title="Daily Practices"
						description="Learn our meditation techniques inspired by the serene movement of goldfish."
					/>
					<FeatureCard
						title="Community"
						description="Join our global community of practitioners seeking enlightenment through aquatic wisdom."
					/>
				</div>

				<div className="mt-16 bg-white p-8 rounded-lg shadow-md">
					<h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
						Our Core Beliefs
					</h2>
					<div className="space-y-6">
						<p className="text-gray-600">
							The Goldfish Association teaches that true enlightenment comes
							from embracing the wisdom of our aquatic guides. Just as goldfish
							move in perfect circles, we too must find our center in life's
							endless cycle.
						</p>
						<p className="text-gray-600">
							Our founder, Master Fin, received these teachings through deep
							meditation while observing the ancient goldfish of the Crystal
							Lake Temple. These sacred teachings have been preserved and shared
							for the benefit of all beings.
						</p>
						<p className="text-gray-600">
							We believe that every goldfish embodies the three sacred
							principles: Perpetual Present (living in the now), Circular
							Harmony (finding balance in life's cycles), and Golden Radiance
							(spreading joy to others).
						</p>
					</div>
				</div>
				<div className="flex flex-col mt-16 bg-white p-8 rounded-lg shadow-md items-center">
					<h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
						Who is Isaac Lane
					</h2>
					<div className="w-72 h-72 overflow-hidden">
						<Image
							src={author}
							alt="Founder of Goldfish Association"
							className="w-full h-full object-cover rounded-full"
						/>
					</div>
					<p className="text-gray-600 pt-5">
						Isaac Lane, founder of the Goldfish Association, is a visionary
						leader whose profound insights and unwavering purpose illuminate a
						path to a brighter future. His unique philosophy inspires
						transformation and unity, inviting those seeking meaning to join a
						movement that transcends boundaries and redefines possibilities.
					</p>
				</div>
			</div>
		</main>
	);
}
