import React from 'react'
import { CloudUpload, Github, ExternalLink } from 'lucide-react'

export default function Header() {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
          <CloudUpload className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          ImgBed
        </h1>
      </div>
      <p className="text-white/80 text-sm md:text-base">
        基于 GitHub 私有仓库的个人图床
      </p>
      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-white/60">
        <a href="https://github.com/chnbsdan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">
          <Github className="w-3 h-3" /> chnbsdan
        </a>
        <a href="https://aoso.hangdn.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-1">
          <ExternalLink className="w-3 h-3" /> 博客
        </a>
      </div>
    </div>
  )
}
