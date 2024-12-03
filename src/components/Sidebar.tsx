'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus, PanelLeft } from 'lucide-react'
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-30 flex h-full flex-col border-r border-[#27272a] bg-[#0A0A0A] transition-all duration-300",
      isExpanded ? "w-64" : "w-16"
    )}>
      <div className="flex h-full flex-col items-center justify-between">
        {/* Top section */}
        <div className="p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black font-semibold">
            AI
          </div>
        </div>

        {/* Middle section */}
        <div className="flex-1 flex  justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 flex items-center justify-center text-white hover:bg-white/10 border border-gray-500"
          >
            <Plus className="h-8 w-8" /> {/* Adjusted icon size */}
          </Button>
        </div>

        {/* Bottom section */}
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 flex items-center m-2 text-white hover:bg-white/10 border border-gray-500"
          onClick={() => setIsExpanded(!isExpanded)}>
          <PanelLeft className="h-8 w-8" /> {/* Adjusted icon size */}
        </Button>
      </div>
    </aside>
  );
}
