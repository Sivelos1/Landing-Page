import { useState } from 'react';
import Icon from '../Icon'
import portrait from '../../assets/1619200446503.jpg'

export default function AboutMe() {
  
  return (
    <div className='col-12'>
      <div className='container-l bg-main text-main p-5 d-flex'>
        <div className='p-1 about-me-portrait'><img src = {portrait}></img></div>
        <div className='p-5'><h1>Who am I?</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis praesentium molestias perferendis velit labore hic quisquam aliquam ea incidunt optio aut soluta fuga, laboriosam exercitationem nostrum nesciunt veniam sunt dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in neque exercitationem aliquid molestiae accusantium beatae. Maxime, reiciendis impedit? Commodi ullam labore vero totam cumque ab explicabo molestiae praesentium laboriosam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam deleniti quae dicta soluta qui similique eaque quam nemo possimus mollitia labore placeat quia impedit, voluptate saepe libero eius quasi natus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deserunt numquam iure voluptatum error provident nemo recusandae, maiores, autem velit tempora placeat aperiam qui debitis obcaecati illo quae dolor laudantium.
        </div>
        </div>
      </div>
    </div>
  );
}