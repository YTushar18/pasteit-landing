import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PasteItProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">PasteIt</h1>
        <p className="text-xl mb-8">Your Ultimate Copy-Paste Manager</p>
        <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-300">
          Install PasteIt
        </Button>
      </header>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Multiple Clipboards"
            description="Store and manage multiple clipboard items simultaneously"
          />
          <FeatureCard
            title="Keyboard Shortcuts"
            description="Quick access to your stored items with customizable shortcuts"
          />
          <FeatureCard title="Cross-browser Support" description="Works seamlessly across different web browsers" />
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="PasteIt Screenshot 1"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="PasteIt Screenshot 2"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">See PasteIt in Action</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Install</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-2xl mx-auto bg-white bg-opacity-20 p-8 rounded-lg">
          <li>Open your preferred web browser (Chrome, Firefox, or Edge)</li>
          <li>Go to the browser's extension store</li>
          <li>Search for "PasteIt"</li>
          <li>Click on the "Add to Browser" or "Install" button</li>
          <li>Grant the necessary permissions</li>
          <li>Start using PasteIt to manage your clipboards!</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 PasteIt. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="bg-white bg-opacity-20 border-none">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

