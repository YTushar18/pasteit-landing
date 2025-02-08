import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, LifeBuoy, BookOpen, Mail, HelpCircle } from "lucide-react";

export default function Support() {
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
              Support Center
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need help with PasteIt? We`&apos;`re here to assist you. Check out
              our frequently asked questions below or reach out to our support
              team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Contact Support
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Can`&apos;`t find what you`&apos;`re looking for? Our
                      support team is here to help.
                    </p>
                    <Button asChild>
                      <a href="mailto:support@getpasteit.com">Email Support</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Documentation
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Explore our detailed documentation for in-depth guides and
                      tutorials.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/docs">View Documentation</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <HelpCircle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-orange-600">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-gray-600">
                    Find quick answers to common questions about PasteIt.
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-orange-100">
                  <AccordionTrigger className="hover:text-orange-600">
                    How do I install PasteIt?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Installing PasteIt is easy! Simply visit the Chrome Web
                    Store, search for `&quot;`PasteIt`&quot;`, and click the
                    `&quot;`Add to Chrome`&quot;` button. The extension will
                    automatically install and be ready to use.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-orange-100">
                  <AccordionTrigger className="hover:text-orange-600">
                    Is my data secure with PasteIt?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Yes, your data is completely secure. PasteIt stores all
                    clipboard data locally on your device and does not transmit
                    any sensitive information to external servers. We prioritize
                    your privacy and security.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-orange-100">
                  <AccordionTrigger className="hover:text-orange-600">
                    How do I use PasteIt?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    After installation, PasteIt will automatically start
                    capturing your clipboard items. You can access your
                    clipboard history by clicking on the PasteIt icon in your
                    browser toolbar. From there, you can manage, organize, and
                    paste your saved items.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-orange-100">
                  <AccordionTrigger className="hover:text-orange-600">
                    Is there a limit to how many items PasteIt can store?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    PasteIt can store unlimited items.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-orange-100">
                  <AccordionTrigger className="hover:text-orange-600">
                    Can I sync my clipboard across devices?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Currently, PasteIt operates on a per-device basis.
                    Cross-device synchronization is a feature we`&apos;`re
                    actively working on and will be available in a future
                    update. Stay tuned for announcements!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <LifeBuoy className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    Still Need Help?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Our support team is available Monday through Friday, 9:00 AM
                    - 5:00 PM EST. We typically respond to all inquiries within
                    24 hours.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild>
                      <a href="mailto:support@getpasteit.com">
                        Contact Support
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/docs">Browse Documentation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
