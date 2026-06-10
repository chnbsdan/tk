import React from 'react'

export default function Header({ onRefreshBg }) {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
          <i className="fas fa-cloud-upload-alt text-3xl text-white"></i>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          ImgBed
        </h1>
      </div>
      <p className="text-white/80 text-sm md:text-base">
        基于 GitHub 私有仓库的独立图床
      </p>
      {onRefreshBg && (
        <button
          onClick={onRefreshBg}
          className="mt-3 text-white/60 hover:text-white text-xs transition flex items-center gap-1 mx-auto"
        >
          <i className="fas fa-sync-alt"></i> 换背景
        </button>
      )}
    </div>
  )
}
