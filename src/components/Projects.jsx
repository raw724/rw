import React from 'react';

const projects = [
  { title: 'Hyrox', desc: 'Vigorously training in prepartion for my first of many Hyrox events in Manchester, January'},
  { title: 'High Perfomance Sailing', desc: 'Sailing competitively on a national and world stage with my sister; yes, my sister, eek!'},
  { title: 'Technical Projects', desc: 'I enjoy working on techincal projects on new exciting initiatives; just like this website.'}
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Personal Pursuits</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="glass p-6">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-[--muted] mt-2">{p.desc}</p>
            <p className="text-sm mt-2">{p.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
