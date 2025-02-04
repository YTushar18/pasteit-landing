import Link from "next/link"
import { Logo } from "@/components/logo"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Server, Cog, Bell } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />
          <Link href="/" className="flex items-center text-orange-600 hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-transparent bg-clip-text">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: February 4, 2025</p>
          </div>

          <Card className="border-orange-100">
            <CardContent className="p-6">
              <p className="text-gray-600 leading-relaxed">
                PasteIt (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how your personal information is collected, used, and disclosed by PasteIt.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-orange-600">Information We Collect</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We collect information you provide directly to us when you use the PasteIt browser extension,
                      including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Clipboard data that you choose to store in PasteIt</li>
                      <li>Usage data, such as how often you use certain features</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Cog className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-orange-600">How We Use Your Information</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Develop new features and functionality</li>
                      <li>Understand and analyze how you use our services</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Server className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-orange-600">Data Storage and Security</h2>
                    <p className="text-gray-600 leading-relaxed">
                      All clipboard data is stored locally on your device and is not transmitted to our servers. We
                      implement appropriate technical and organizational measures to protect your data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Bell className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-orange-600">Changes to This Privacy Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                      the new Privacy Policy on this page.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-orange-600">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:support@getpasteit.com" className="text-orange-600 hover:text-orange-500">
                    support@getpasteit.com
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

