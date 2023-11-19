import { useState } from 'react';
import Project from '../Project';
import fakemon from '../../assets/ampithere.png'
import folio from '../../assets/folio.png'
import horiseon from '../../assets/horiseon.png'
import marblegolem from '../../assets/marble-golem.png'
import passwordGen from '../../assets/password-gen.png'
import songstories from '../../assets/songstories.png'

export default function Portfolio() {
  
  return (
    <div className='col-12'>
      <div className='container-l bg-main text-main p-5'>
        <h1 className='color-tex'>Check out some of my work!</h1>
        <div className='portfolio-container'>
        <Project thumbnail = {fakemon} title = {'Check out my art!'}/>
        
        <Project thumbnail = {folio} title = {'MyFolio'}/>
        
        <Project thumbnail = {horiseon} title = {'Horiseon Landing Page'}/>
        <Project thumbnail = {marblegolem} title = {'My 3D Art'}/>
        <Project thumbnail = {passwordGen} title = {'Password Generator'}/>
        <Project thumbnail = {songstories} title = {'SongStories'}/>
        </div>
        
      </div>
    </div>
  );
}