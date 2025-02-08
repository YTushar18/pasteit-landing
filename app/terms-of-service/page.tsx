import Link from "next/link";
import { Logo } from "@/components/logo";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />
          <Link
            href="/"
            className="flex items-center text-orange-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-500 text-transparent bg-clip-text">
              Terms of Service
            </h1>
            <p className="text-gray-600">Last updated: February 4, 2025</p>
          </div>

          <Card className="border-orange-100">
            <CardContent className="p-6">
              <p className="text-gray-600 leading-relaxed">
                Please read these Terms of Service (&quot;Terms&quot;,
                &quot;Terms of Service&quot;) carefully before using the PasteIt
                browser extension operated by PasteIt (&quot;us&quot;,
                &quot;we&quot;, or &quot;our&quot;).
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <section className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using our service, you agree to be bound by
                    these Terms. If you disagree with any part of the terms,
                    then you may not access the service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    2. Use of Service
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to use PasteIt only for purposes that are legal,
                    proper and in accordance with these Terms and any applicable
                    laws or regulations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    3. Intellectual Property
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    The service and its original content, features, and
                    functionality are and will remain the exclusive property of
                    PasteIt and its licensors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    4. Termination
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may terminate or suspend access to our service
                    immediately, without prior notice or liability, for any
                    reason whatsoever, including without limitation if you
                    breach the Terms.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    5. Limitation of Liability
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    In no event shall PasteIt, nor its directors, employees,
                    partners, agents, suppliers, or affiliates, be liable for
                    any indirect, incidental, special, consequential or punitive
                    damages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    6. Changes
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    7. Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about these Terms, please contact
                    us at{" "}
                    <a
                      href="mailto:support@getpasteit.com"
                      className="text-orange-600 hover:text-orange-500"
                    >
                      support@getpasteit.com
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
