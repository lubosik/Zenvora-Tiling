'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Container } from '@/components/layout/Container'
import { featuredProjects } from '@/content/projects/featured'

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [announcement, setAnnouncement] = useState('')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const prefersReducedMotion = useRef(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.current = mediaQuery.matches

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches
      if (e.matches) {
        setIsPaused(true)
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Auto-advance (only if not paused and not reduced motion)
  useEffect(() => {
    if (isPaused || prefersReducedMotion.current) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
    }, 5000) // 5 second intervals

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAnnouncement(`Viewing project ${index + 1} of ${featuredProjects.length}: ${featuredProjects[index].title}`)
    // Clear announcement after screen reader has time to read it
    setTimeout(() => setAnnouncement(''), 1000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % featuredProjects.length
    goToSlide(newIndex)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
    setAnnouncement(isPaused ? 'Carousel resumed' : 'Carousel paused')
    setTimeout(() => setAnnouncement(''), 1000)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === ' ') {
        e.preventDefault()
        togglePause()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const currentProject = featuredProjects[currentIndex]

  return (
    <section
      className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-neutral-900"
      aria-label="Featured projects carousel"
      role="region"
    >
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900">
          {/* Placeholder gradient - replace with actual image */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neutral-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neutral-500/10 rounded-full blur-3xl" />
          </div>
        </div>
        {/* When actual images are available, use this:
        <Image
          src={currentProject.image}
          alt={currentProject.imageAlt}
          fill
          priority={currentIndex === 0}
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
          className="object-cover"
          sizes="100vw"
        />
        */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-neutral-900/60" />

      {/* Content */}
      <Container className="relative z-20">
        <div className="max-w-3xl py-16 lg:py-20">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-[var(--accent)]/20 border border-[var(--accent)]/30 rounded-full mb-4">
              <span className="text-sm font-medium text-[var(--accent)]">Featured Project</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              {currentProject.title}
            </h2>
            <p className="text-lg sm:text-xl text-neutral-200 mb-2">{currentProject.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-300">
              <span>{currentProject.location}</span>
              <span>•</span>
              <span>{currentProject.type}</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <Container>
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              type="button"
              onClick={goToPrevious}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label="Previous project"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Project slides">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to project ${index + 1}: ${project.title}`}
                  aria-controls={`slide-${index}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNext}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label="Next project"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Pause/Play Button */}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={togglePause}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
              aria-pressed={isPaused}
            >
              {isPaused ? (
                <>
                  <svg
                    className="inline w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Resume
                </>
              ) : (
                <>
                  <svg
                    className="inline w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                  Pause
                </>
              )}
            </button>
          </div>
        </Container>
      </div>
    </section>
  )
}

