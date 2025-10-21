import React from 'react';

export default function Skills() {
  const skills = ['React', 'JavaScript', 'Leadership', 'Teamwork', 'Problem Solving', 'CSS', 'HTML'];
  return (
    <section id="skills" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Skills</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <span key={i} className="px-4 py-2 glass text-sm">{s}</span>
        ))}
      </div>
    </section>
  );
}
