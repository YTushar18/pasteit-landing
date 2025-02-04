import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Download,
  Clipboard,
  DropletsIcon as DragDropLines,
  Zap,
  Lock,
  Trash2,
  HelpCircle,
} from "lucide-react"
import type React from "react" // Import React

export default function Documentation() {
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
              PasteIt Documentation
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to the official documentation for PasteIt. Here you'll find everything you need to know about
              installing, using, and getting the most out of PasteIt.
            </p>
          </div>

          <Tabs defaultValue="installation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>
            <TabsContent value="installation">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center">
                    <Download className="w-6 h-6 mr-2" />
                    Installation
                  </h2>
                  <ol className="list-decimal list-inside space-y-4 text-gray-600">
                    <li>Open your Chrome browser and navigate to the Chrome Web Store.</li>
                    <li>In the search bar, type "PasteIt" and press Enter.</li>
                    <li>Look for PasteIt in the search results and click on it.</li>
                    <li>On the PasteIt extension page, click the "Add to Chrome" button.</li>
                    <li>A pop-up will appear asking for permissions. Click "Add extension" to proceed.</li>
                    <li>
                      PasteIt will now be installed and ready to use. You'll see the PasteIt icon in your browser
                      toolbar.
                    </li>
                  </ol>
                  <div className="mt-6">
                    <Button asChild>
                      <a
                        href="https://chrome.google.com/webstore/detail/foiaocdbmfnbjhcnjbcdjaddjbghmefc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Install PasteIt
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">Key Features</h2>
                  <div className="grid gap-4">
                    <FeatureItem
                      icon={<Clipboard className="w-6 h-6" />}
                      title="Multi-Text Clipboard"
                      description="Store and manage multiple clipboard items simultaneously."
                    />
                    <FeatureItem
                      icon={<DragDropLines className="w-6 h-6" />}
                      title="Drag & Drop Reordering"
                      description="Easily prioritize and organize your clipboard items."
                    />
                    <FeatureItem
                      icon={<Zap className="w-6 h-6" />}
                      title="Smart Autofill"
                      description="Intelligently recognize and fill form fields."
                    />
                    <FeatureItem
                      icon={<Lock className="w-6 h-6" />}
                      title="Persistent Storage"
                      description="Your clipboard items remain intact even after browser restart."
                    />
                    <FeatureItem
                      icon={<Trash2 className="w-6 h-6" />}
                      title="Easy Management"
                      description="Quickly delete individual items or clear all with one click."
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">How to Use PasteIt</h2>
                  <ol className="list-decimal list-inside space-y-4 text-gray-600">
                    <li>
                      <strong>Copying text:</strong> Simply copy text as you normally would (Ctrl+C or right-click and
                      select Copy). PasteIt will automatically save it.
                    </li>
                    <li>
                      <strong>Accessing your clipboard:</strong> Click on the PasteIt icon in your browser toolbar to
                      open the clipboard panel.
                    </li>
                    <li>
                      <strong>Pasting items:</strong> In the clipboard panel, click on any saved item to paste it into
                      the current text field.
                    </li>
                    <li>
                      <strong>Reordering items:</strong> Drag and drop items in the clipboard panel to reorder them.
                    </li>
                    <li>
                      <strong>Deleting items:</strong> Hover over an item and click the trash icon to remove it from
                      your clipboard.
                    </li>
                    <li>
                      <strong>Using autofill:</strong> When filling out forms, PasteIt will suggest relevant saved items
                      for each field.
                    </li>
                  </ol>
                  <div className="mt-6">
                  <iframe
                    
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/idaaTVNOVr4?si=XbvRTr5MH3TQ58Ee"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">Advanced Features</h2>
                  <ul className="space-y-4 text-gray-600">
                    <li>
                      <strong>Keyboard Shortcuts:</strong> Use Ctrl+Shift+V to open the PasteIt panel quickly.
                    </li>
                    <li>
                      <strong>Categories:</strong> Organize your clipboard items into custom categories for easier
                      management.
                    </li>
                    <li>
                      <strong>Search:</strong> Quickly find specific clipboard items using the search feature in the
                      PasteIt panel.
                    </li>
                    <li>
                      <strong>Pinning:</strong> Pin important items to the top of your clipboard for quick access.
                    </li>
                    <li>
                      <strong>Export/Import:</strong> Backup and restore your clipboard data across devices or browsers.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="troubleshooting">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center">
                    <HelpCircle className="w-6 h-6 mr-2" />
                    Troubleshooting
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">PasteIt icon is not visible in the toolbar</h3>
                      <p className="text-gray-600">
                        Try clicking the puzzle piece icon in your Chrome toolbar and pin PasteIt from there. If it's
                        still not visible, try reinstalling the extension.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Clipboard items are not saving</h3>
                      <p className="text-gray-600">
                        Ensure that PasteIt has the necessary permissions. You can check this in Chrome's extension
                        settings. If the problem persists, try restarting your browser.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Autofill is not working</h3>
                      <p className="text-gray-600">
                        Make sure you have enabled the autofill feature in PasteIt's settings. If it's enabled and still
                        not working, try clearing your browser cache and restarting Chrome.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <a href="mailto:support@getpasteit.com">Contact Support</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is PasteIt free?</h3>
                  <p className="text-gray-600">
                    Yes, PasteIt offers is a free extension with all the core features.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">How many items can I store in my clipboard?</h3>
                  <p className="text-gray-600">
                    PasteIt allows you to store unlimited items.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is my data secure?</h3>
                  <p className="text-gray-600">
                    Yes, all your clipboard data is stored locally on your device and is not transmitted to our servers.
                    We prioritize your privacy and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        <div className="p-3 bg-orange-100 rounded-full">{icon}</div>
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

