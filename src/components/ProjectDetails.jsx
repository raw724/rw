import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './Projects.jsx'; 

// Extend the data with detailed content
const detailedProjectData = projectsData.map(p => {
    // Note: The projectsData array will only have title, slug, desc, and tech 
    // from the Projects.jsx file. We must manually define the unique content here.
    if (p.slug === 'hyrox') {
        return {
            ...p,
            details: 'Hyrox is a fitness race for everybody. It combines functional exercises with running, testing both endurance and strength. My training involves a rigorous combination of HIIT, lifting, running and perfecting the specialized functional movements for the event.',
            imgUrl: '/images/hyrox.jpg', 
            tags: ['Fitness', 'Endurance', 'Discipline']
        };
    }
    if (p.slug === 'sailing') {
        return {
            ...p,
            details: 'Sailing competitively requires precision, quick decision-making, and deep technical knowledge of how to keep the boat cruising flat on the water; because a flat boat is a fast boat. Competing in high-performance classes allows me to apply critical thinking and teamwork under intense pressure. My sister and I have competed on national, european and world stages in the Hobie 16 category.',
            imgUrl: '/images/sailing.jpg', 
            tags: ['Teamwork', 'Strategy', 'Technical Skill']
        };
    }
    if (p.slug === 'tech') {
        return {
            ...p,
            details: 'This portfolio itself is an ongoing technical project, built using Vite, React, and Tailwind CSS. My other project area of interest has focused on using Python to solve real-world problems and enhance user experiences. For example, I created a machine learning and AI based program to predict the likelyhood of rain, depending on historical data.',
            imgUrl: '/images/raincheck.png', 
            tags: ['Python', 'Web Development', 'Machine Learning']
        };
    }
    return p;
});

export default function ProjectDetails() {
    // 1. Get the slug from the URL
    const { slug } = useParams();
    
    // 2. Find the project data that matches the slug
    const project = detailedProjectData.find(p => p.slug === slug);

    // If project is not found (e.g., bad URL), display a 404-like message
    if (!project) {
        return (
            <div className="min-h-screen pt-40 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-4">404 - Project Not Found</h1>
                <p className="text-[--muted] mb-8">
                    We couldn't find a project with the identifier: **{slug}**.
                </p>
                <Link to="/" className="btn btn-primary">Return to Home</Link>
            </div>
        );
    }
    
    // 3. Render the project details
    return (
        <section className="pt-40 pb-20 max-w-6xl mx-auto">
            {/* Back Button */}
            <Link to="/" className="text-[--accent-to] flex items-center gap-2 mb-8 font-semibold">
                &larr; Back to Pursuits
            </Link>

            {/* Title and Image */}
            <h1 className="text-5xl font-extrabold mb-8">{project.title}</h1>
            
            <img 
                src={project.imgUrl} 
                alt={`${project.title} Banner`} 
                className="w-full rounded-xl object-cover mb-10 shadow-lg"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x400/7c3aed/ffffff?text=Image+Placeholder'; }}
            />

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <p className="text-xl leading-relaxed">{project.details}</p>

                    <h3 className="text-2xl font-bold mt-10 mb-4">Key Focus</h3>
                    <p className="text-[--muted]">{project.desc}</p>
                </div>
                
                {/* Sidebar / Key Details Card */}
                <div className="glass p-6 rounded-xl self-start">
                    <h3 className="text-xl font-bold mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-sm rounded-full bg-gray-600/20 text-[--text]">{tag}</span>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold mt-6 mb-3">URL Slug</h3>
                    <p className="font-mono text-sm text-[--accent-from] p-2 bg-gray-700/10 rounded-lg overflow-x-auto">/project/{project.slug}</p>
                </div>
            </div>
        </section>
    );
}
