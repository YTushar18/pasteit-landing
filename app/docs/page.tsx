import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Download,
  Clipboard,
  DropletsIcon as DragDropLines,
  Zap,
  Lock,
  // Trash2,
  HelpCircle,
  MousePointerClick,
  ToggleLeft,
  Menu,
  XCircle,
  Star,
  Move,
  Maximize
} from "lucide-react";
import type React from "react"; // Import React

export default function Documentation() {
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
              PasteIt Documentation
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to the official documentation for PasteIt. Here
              you`&apos;`ll find everything you need to know about installing,
              using, and getting the most out of PasteIt.
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
                    <li>
                      Open your Chrome browser and navigate to the Chrome Web
                      Store.
                    </li>
                    <li>
                      In the search bar, type `&quot;`PasteIt`&quot;` and press
                      Enter.
                    </li>
                    <li>
                      Look for PasteIt in the search results and click on it.
                    </li>
                    <li>
                      On the PasteIt extension page, click the `&quot;`Add to
                      Chrome`&quot;` button.
                    </li>
                    <li>
                      A pop-up will appear asking for permissions. Click
                      `&quot;`Add extension`&quot;` to proceed.
                    </li>
                    <li>
                      PasteIt will now be installed and ready to use.
                      You`&apos;`ll see the PasteIt icon in your browser
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
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    Key Features
                  </h2>
                  <div className="space-y-8">
                    <div className="grid gap-6">
                      <h3 className="text-xl font-semibold">Core Features</h3>
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
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <h3 className="text-xl font-semibold">New Features</h3>
                      <div className="grid gap-4">
                        <FeatureItem
                          icon={<MousePointerClick className="w-6 h-6" />}
                          title="Smart Right-Click Control"
                          description="The clipboard popup automatically disappears when right-clicking on a field, ensuring a smoother user experience and preventing unintended UI states."
                        />
                        <FeatureItem
                          icon={<ToggleLeft className="w-6 h-6" />}
                          title="Customizable Popup Behavior"
                          description="Control when the clipboard popup appears with a persistent toggle switch in the extension window. Your settings are remembered across browser sessions."
                        />
                        <FeatureItem
                          icon={<Menu className="w-6 h-6" />}
                          title="Context Menu Integration"
                          description="Access your stored texts directly from the right-click menu, providing a familiar and less intrusive way to paste content."
                        />
                        <FeatureItem
                          icon={<XCircle className="w-6 h-6" />}
                          title="Quick Clear Function"
                          description="Clear your entire clipboard history instantly using the right-click menu, without needing to open the extension popup."
                        />
                        <FeatureItem
                          icon={<Move className="w-6 h-6" />}
                          title="Draggable Popup"
                          description="Move the clipboard popup anywhere on the screen and it stays in place between sessions."
                        />
                        <FeatureItem
                          icon={<Maximize className="w-6 h-6" />}
                          title="Resizable Popup"
                          description="Adjust the popup size to your preference, perfect for handling long text snippets."
                        />
                      </div>
                    </div>

                    <div className="grid gap-6">
                      <h3 className="text-xl font-semibold">
                        Additional Features
                      </h3>
                      <div className="grid gap-4">
                        <FeatureItem
                          icon={<Lock className="w-6 h-6" />}
                          title="Persistent Storage"
                          description="Your clipboard items remain intact even after browser restart."
                        />
                        <FeatureItem
                          icon={<Star className="w-6 h-6" />}
                          title="Enhanced UI"
                          description="Clean, modern design with a floating clipboard for easy access."
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    How to Use PasteIt
                  </h2>
                  <div className="space-y-8">
                    <div className="grid gap-6">
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
                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        Basic Usage
                      </h3>
                      <ol className="list-decimal list-inside space-y-4 text-gray-600">
                        <li>
                          <strong>Copying text:</strong> Simply copy text as you
                          normally would (Ctrl+C or right-click and select
                          Copy). PasteIt will automatically save it.
                        </li>
                        <li>
                          <strong>Accessing your clipboard:</strong> Click on
                          the PasteIt icon in your browser toolbar to open the
                          clipboard panel.
                        </li>
                        <li>
                          <strong>Pasting items:</strong> In the clipboard
                          panel, click on any saved item to paste it into the
                          current text field.
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">
                        New Features Guide
                      </h3>
                      <ol className="list-decimal list-inside space-y-4 text-gray-600">
                        <li>
                          <strong>Right-Click Control:</strong> The clipboard
                          popup will automatically hide when you right-click,
                          providing a cleaner interaction experience.
                        </li>
                        <li>
                          <strong>Toggle Popup Visibility:</strong>
                          <ul className="list-disc list-inside ml-6 mt-2">
                            <li>
                              Click the PasteIt icon in your browser toolbar
                            </li>
                            <li>Find the toggle switch for popup visibility</li>
                            <li>Turn it ON/OFF according to your preference</li>
                            <li>
                              Your setting will be remembered even after closing
                              the browser
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Using the Context Menu:</strong>
                          <ul className="list-disc list-inside ml-6 mt-2">
                            <li>Right-click on any text field</li>
                            <li>
                              Look for the `&quot;`PasteIt`&quot;` option in the
                              context menu
                            </li>
                            <li>
                              Select from your stored snippets in the dropdown
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Quick Clear Function:</strong>
                          <ul className="list-disc list-inside ml-6 mt-2">
                            <li>Right-click anywhere on the page</li>
                            <li>
                              Find the `&quot;`Clear Clipboard`&quot;` option
                              under PasteIt
                            </li>
                            <li>
                              Click to instantly remove all stored snippets
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="advanced">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                    Advanced Features
                  </h2>
                  <ul className="space-y-4 text-gray-600">
                    <li>
                      <strong>Keyboard Shortcuts:</strong> Use Ctrl+Shift+V to
                      open the PasteIt panel quickly.
                    </li>
                    <li>
                      <strong>Categories:</strong> Organize your clipboard items
                      into custom categories for easier management.
                    </li>
                    <li>
                      <strong>Search:</strong> Quickly find specific clipboard
                      items using the search feature in the PasteIt panel.
                    </li>
                    <li>
                      <strong>Pinning:</strong> Pin important items to the top
                      of your clipboard for quick access.
                    </li>
                    <li>
                      <strong>Export/Import:</strong> Backup and restore your
                      clipboard data across devices or browsers.
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
                      <h3 className="font-semibold text-lg mb-2">
                        PasteIt icon is not visible in the toolbar
                      </h3>
                      <p className="text-gray-600">
                        Try clicking the puzzle piece icon in your Chrome
                        toolbar and pin PasteIt from there. If it`&apos;`s still
                        not visible, try reinstalling the extension.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Clipboard items are not saving
                      </h3>
                      <p className="text-gray-600">
                        Ensure that PasteIt has the necessary permissions. You
                        can check this in Chrome`&apos;`s extension settings. If
                        the problem persists, try restarting your browser.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Autofill is not working
                      </h3>
                      <p className="text-gray-600">
                        Make sure you have enabled the autofill feature in
                        PasteIt`&apos;`s settings. If it`&apos;`s enabled and
                        still not working, try clearing your browser cache and
                        restarting Chrome.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild>
                      <a href="mailto:support@getpasteit.com">
                        Contact Support
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-600">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Is PasteIt free?
                  </h3>
                  <p className="text-gray-600">
                    Yes, PasteIt offers is a free extension with all the core
                    features.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    How many items can I store in my clipboard?
                  </h3>
                  <p className="text-gray-600">
                    PasteIt allows you to store unlimited items.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Is my data secure?
                  </h3>
                  <p className="text-gray-600">
                    Yes, all your clipboard data is stored locally on your
                    device and is not transmitted to our servers. We prioritize
                    your privacy and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
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
  );
}
