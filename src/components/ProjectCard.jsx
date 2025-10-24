import React from 'react'

export default function ProjectCard({project}){
  return (
    <article className="border rounded-lg p-4 shadow-sm">
      <img src={project.image || '/placeholder.png'} alt={project.title} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
      <div className="mt-3 flex justify-between items-center">
        <a href={project.liveUrl} className="text-indigo-600">Live</a>
        <a href={project.repo} className="text-slate-500 text-sm">Code</a>
      </div>
    </article>
  )
}