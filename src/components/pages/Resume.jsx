import { useState } from 'react';

export default function Resume() {
  
  return (
    <div className='col-12'>
      <div className='container-l bg-main text-main p-5'>
        <h2>Resume</h2>
        <div>
<ul>
    <li>Built, designed, and launched multiple game and web projects</li>
    <li>Provides quality work at a quick pace; meets deadlines with time to spare</li>
    <li>Developed and shipped action/adventure, RPGs, and more.</li>
    <li>Experience in Photoshop, Maya, Substance, Unreal Engine 4, Unity, Visual Studio, Full Stack
Development</li>
</ul>
        </div>
        <h2>Work Experience</h2>
        <div className='p-2'>
            <h5><strong>Freelance Journalist</strong></h5>
            <div className='text-minor'>Dualshockers - Remote</div>
            <div className='text-minor'>November 2022 to Present</div>
            <div className='text-main'>
            Composed and revised articles to inform, guide, and comment on video games and gaming news.
            </div>
        </div>
        <div className='p-2'>
            <h5><strong>Game Artist</strong></h5>
            <div className='text-minor'>Hopoo Games, LLC - Remote</div>
            <div className='text-minor'>November 2021 to December 2021</div>
            <div className='text-main'>
            Composed 80+ text blurbs for in-game collectibles; Revised work based on internal critique and exceeded
all expectations.
            </div>
        </div>
        <div className='p-2'>
            <h5><strong>Indie Game Developer</strong></h5>
            <div className='text-main'>
            Developed and published multiple
RPG Maker games iterating on popular fan-game series. Pushed engine to its limits to produce visually
stunning levels and new game mechanics
            </div>
            <ul>
                <li>Level Designer (1 Year); Developed 3D Assets for Unreal Engine 4 project; Conceptualized scene layout</li>
                <li>Programmer (2+ Years); Developed and debugged multiple game mods, established positive
reputation among modding community</li>
            </ul>
        </div>
        <div className='p-2'>

        </div>

      </div>
    </div>
  );
}