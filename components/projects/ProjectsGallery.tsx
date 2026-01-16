'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Grid } from '@/components/layout/Grid'
import { Stack } from '@/components/layout/Stack'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Button } from '@/components/ui/Button'
import {
  projects,
  getAllProjectTypes,
  getAllProjectLocations,
  getProjectsByType,
  getProjectsByLocation,
} from '@/content/projects/projects'

export function ProjectsGallery() {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<string>('all')

  const types = getAllProjectTypes()
  const locations = getAllProjectLocations()

  let filteredProjects = projects

  if (selectedType !== 'all') {
    filteredProjects = getProjectsByType(selectedType)
  }

  if (selectedLocation !== 'all') {
    filteredProjects = filteredProjects.filter((project) =>
      getProjectsByLocation(selectedLocation).some((p) => p.id === project.id)
    )
  }

  // If both filters are applied, need to intersect
  if (selectedType !== 'all' && selectedLocation !== 'all') {
    const typeProjects = getProjectsByType(selectedType)
    const locationProjects = getProjectsByLocation(selectedLocation)
    filteredProjects = typeProjects.filter((project) =>
      locationProjects.some((p) => p.id === project.id)
    )
  }

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="type-filter" className="block text-sm font-medium text-neutral-700 mb-2">
            Filter by Type
          </label>
          <select
            id="type-filter"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
          >
            <option value="all">All Types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label
            htmlFor="location-filter"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Filter by Location
          </label>
          <select
            id="location-filter"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
          >
            <option value="all">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <Grid cols={3} gap="lg">
          {filteredProjects.map((project) => (
            <Card key={project.id} hover padding="none" className="overflow-hidden">
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-video bg-neutral-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm text-neutral-500">Project Image</span>
                  </div>
                  {project.clientConfidential && (
                    <div className="absolute top-4 right-4">
                      <Tag variant="neutral" size="sm">Confidential</Tag>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <Stack spacing="sm">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[var(--text-strong)] mb-2 tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Tag variant="default" size="sm">
                          {project.type}
                        </Tag>
                        <span className="text-sm text-neutral-600">{project.location}</span>
                      </div>
                      {project.volume && (
                        <p className="text-sm text-neutral-600 mb-2">Volume: {project.volume}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-700 mb-1">Tile Types:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tileTypes.map((type, index) => (
                          <Tag key={index} variant="accent" size="sm">
                            {type}
                          </Tag>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm text-[var(--accent)] font-medium group-hover:text-[var(--accentHover)]">
                        View Case Study →
                      </span>
                    </div>
                  </Stack>
                </div>
              </Link>
            </Card>
          ))}
        </Grid>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-neutral-600">No projects found matching your filters.</p>
          <Button
            variant="outline"
            size="md"
            className="mt-4"
            onClick={() => {
              setSelectedType('all')
              setSelectedLocation('all')
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </>
  )
}

