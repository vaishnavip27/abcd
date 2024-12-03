"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send, Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { SparklesCore } from "@/components/ui/sparkles";

interface Message {
 content: string;
 isUser: boolean;
}

export default function MainPage() {
 const [messages, setMessages] = useState<Message[]>([]);
 const [input, setInput] = useState("");
 const [isFirstMessage, setIsFirstMessage] = useState(true);
 const messagesEndRef = useRef<HTMLDivElement>(null);

 const scrollToBottom = () => {
   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
 };

 useEffect(() => {
   scrollToBottom();
 }, [messages]);

 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   if (!input.trim()) return;

   setMessages((prev) => [...prev, { content: input, isUser: true }]);

   setTimeout(() => {
     setMessages((prev) => [
       ...prev,
       { content: "I'm processing your request: " + input, isUser: false },
     ]);
   }, 500);

   setInput("");
   setIsFirstMessage(false);
 };

 return (
   <div className="flex min-h-screen flex-col bg-[#0F0F0F] text-white relative">
     <header className="fixed right-4 top-4 z-50 flex items-center gap-2">
       <Button
         variant="ghost"
         className="text-sm hover:bg-white/10 border border-white rounded-xl"
       >
         Connect Wallet
       </Button>
     </header>

     <div className="flex flex-1">
       <Sidebar />
       <main className="flex-1 pl-16 relative">
         {isFirstMessage ? (
           <div className="flex min-h-screen flex-col items-center justify-center p-4">
             <h1 className="mb-8 text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
               What can I help you ship?
             </h1>

             <div className="relative w-full max-w-[600px] mx-auto">
               <form onSubmit={handleSubmit} className="relative z-10">
                 <Input
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   className="h-[64px] rounded-lg border-2 border-[#27272a] bg-[#0A0A0A] pl-10 pr-20 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-500 transition-colors"
                   placeholder="Ask v0 a question..."
                 />
                 <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
                   <Paperclip className="h-5 w-5 text-gray-400" />
                 </div>
                 <Button
                   type="submit"
                   variant="ghost"
                   size="sm"
                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-20"
                 >
                   <Send className="h-4 w-4" />
                 </Button>
               </form>
               <div className="absolute inset-0 z-0">
                 <SparklesCore
                   id="searchBarParticles"
                   background="transparent"
                   minSize={0.4}
                   maxSize={1.2}
                   particleDensity={80}
                   particleColor="#FFFFFF"
                   className="w-full h-full"
                 />
               </div>
             </div>
           </div>
         ) : (
           <div className="flex flex-col h-screen">
             <div className="flex-1 p-4 mt-16">
               <div 
                 className="max-w-[600px] mx-auto h-[calc(100vh-240px)] mb-8 overflow-y-auto border border-gray-800 p-2 rounded-xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
               >
                 <div className="space-y-4">
                   {messages.map((message, index) => (
                     <div
                       key={index}
                       className={`flex flex-col ${
                         message.isUser ? "items-end" : "items-start"
                       }`}
                     >
                       <div
                         className={`max-w-[75%] p-3 rounded-lg ${
                           message.isUser
                             ? "bg-blue-600 text-white text-right"
                             : "bg-[#27272a] text-white text-left"
                         }`}
                       >
                         {message.content}
                       </div>
                       {!message.isUser && (
                         <div className="flex gap-1 mt-2">
                           <button className="p-1 hover:bg-white/10 rounded-md transition-colors">
                             <Copy className="h-4 w-4 text-gray-400" />
                           </button>
                           <button className="p-1 hover:bg-white/10 rounded-md transition-colors">
                             <ThumbsUp className="h-4 w-4 text-gray-400" />
                           </button>
                           <button className="p-1 hover:bg-white/10 rounded-md transition-colors">
                             <ThumbsDown className="h-4 w-4 text-gray-400" />
                           </button>
                         </div>
                       )}
                     </div>
                   ))}
                   <div ref={messagesEndRef} />
                 </div>
               </div>
             </div>

             <div className="fixed bottom-16 left-16 right-0 p-4 bg-[#0F0F0F]">
               <div className="max-w-[600px] mx-auto relative">
                 <form onSubmit={handleSubmit} className="relative">
                   <Input
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     className="h-[64px] rounded-lg border-2 border-[#27272a] bg-[#0A0A0A] pl-10 pr-20 text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 hover:border-gray-500 transition-colors"
                     placeholder="Type your message..."
                   />
                   <div className="absolute left-3 top-1/2 -translate-y-1/2">
                     <Paperclip className="h-5 w-5 text-gray-400" />
                   </div>
                   <Button
                     type="submit"
                     variant="ghost"
                     size="sm"
                     className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
                   >
                     <Send className="h-4 w-4" />
                   </Button>
                 </form>
               </div>
             </div>
           </div>
         )}
       </main>
     </div>
   </div>
 );
}