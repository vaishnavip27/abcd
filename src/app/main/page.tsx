"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Paperclip, Plus } from 'lucide-react'
import Link from "next/link"
import { Sidebar } from "@/components/Sidebar"
import FloatingStars from "../../components/Floatingstars"

export default function MainPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0F0F0F] text-white relative">
      <FloatingStars />
      <header className="fixed right-4 top-4 z-50 flex items-center gap-2 border border-white rounded-xl">
        <Button variant="ghost" className="text-sm hover:bg-white/10 border border-white">
          Connect Wallet
        </Button>
      </header>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 pl-16">
          <div className="flex min-h-screen flex-col items-center justify-center p-4">
            <h1 className="mb-8 text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              What can I help you ship?
            </h1>
            <div className="relative w-full max-w-[640px]">
              <Input
                className="h-[54px] rounded-lg border-[#27272a] bg-[#0A0A0A] pl-10 pr-20 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Ask v0 a question..."
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Paperclip className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Plus className="mr-2 h-4 w-4" />
                  Project
                </Button>
              </div>
            </div>
          </div>
          <footer className="fixed bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 text-sm text-gray-400 bg-[#0F0F0F]/80 backdrop-blur-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Enterprise
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Legal
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Legacy v0
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Vercel ↗
            </Link>
          </footer>
        </main>
      </div>
    </div>
  )
}   