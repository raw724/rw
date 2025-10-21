import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h3 className="text-2xl font-bold mb-6">Experience</h3>
      <div className="grid gap-3">
        <div className="glass p-6">
          <h4 className="font-semibold">Manager on Duty — Pizza Express, Jersey</h4>
          <p className="text-[--muted] mt-2">Leadership, maintaining customer service excellence and acting as the face of a leading national brand.</p>
        </div>
        <div className="glass p-6">
          <h4 className="font-semibold">Senior Dinghy Instructor & Sailing Coach — RYA</h4>
          <p className="text-[--muted] mt-2">Mentor junior instructors, manage safety and adapting lessons to different skill levels, changing weather conditions and ensuring engaging experiences.</p>
        </div>
        <div className="glass p-6">
          <h4 className="font-semibold">Animal Shelter Volunteer, Jersey</h4>
          <p className="text-[--muted] mt-2">Caring for vulnerable animals, ensuring cleanliness and interacting with the public at difficult times.</p>
        </div>
      </div>
    </section>
  );
}
