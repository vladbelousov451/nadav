// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const galleryImages = [
    { filename: 'parliament.jpg', alt: 'Parliament' },
    { filename: 'chain-bridge.jpg', alt: 'Chain Bridge' },
    { filename: 'danube.jpg', alt: 'Danube River' },
    { filename: 'apartment-interior.jpg', alt: 'Apartment Interior' },
    { filename: 'neighborhood.jpg', alt: 'Neighborhood' },
    { filename: 'budapest-view.jpg', alt: 'Budapest View' },
  ];

  const partners = [
    { name: 'Nadav', image: 'ido.jpeg' },
    { name: 'Ido', image: 'ido.jpeg' },
    { name: 'Yehonatan', image: 'ido.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>IRM Real Estate</title>
        <meta name="description" content="250+ Apartments Across Budapest. Trusted by Locals & International Investors." />
      </Head>

      <header className="bg-white shadow-md fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">IRM Real Estate</h1>
          <nav className="space-x-4">
            <Link href="#about">About Us</Link>
            
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/budapest-castle.jpg)' }}>
        <div className=" bg-opacity-10 h-full flex flex-col justify-center items-center text-white text-center px-6">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">250+ Apartments Across Budapest</h2>
            <p className="text-lg md:text-2xl mb-6">Trusted by Locals & International Investors</p>
            <div className="space-x-4">
              <Link href="#properties" className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100 transition">View Properties</Link>
              <Link href="#contact" className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">Contact Us</Link>
            </div>
          </div>
        </section>


        {/* About Us */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h3 className="text-3xl font-semibold mb-6">About Us</h3>
          <p className="mb-8">IRM is a real estate company based in Budapest and Israel, providing high-quality housing and investment opportunities. Founded by Nadav, Ido, and Yehonatan, our mission is to bridge Israel and Hungary through real estate.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map(({ name, image }) => (
              <div key={name} className="text-center">
                <Image src={`/images/${image}`} alt={name} width={256} height={256} className="rounded-full mx-auto" />
                <p className="mt-4 font-semibold">{name}</p>
              </div>
            ))}
          </div>
        </section>


        {/* Gallery */}
        <section id="gallery" className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-10">Gallery</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {galleryImages.map(({ filename, alt }) => (
                <div key={filename} className="overflow-hidden rounded shadow">
                  <Image src={`/images/${filename}`} alt={alt} width={400} height={300} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-gray-100 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4 text-left">
              <input type="text" name="name" placeholder="Name" required className="p-2 border rounded w-full" />
              <input type="email" name="email" placeholder="Email" required className="p-2 border rounded w-full" />
              <textarea name="message" placeholder="Message" rows={4} required className="p-2 border rounded w-full"></textarea>
              <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Send Message</button>
            </form>
            <div className="mt-6 text-sm text-gray-600">
              <p><strong>Israel Office:</strong> Tel Aviv, Israel</p>
              <p><strong>Budapest Office:</strong> District V, Budapest, Hungary</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} IRM Real Estate. All rights reserved.
      </footer>
    </div>
  )
}