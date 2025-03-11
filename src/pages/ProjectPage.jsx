import React, { useEffect } from 'react';
import ProjectComp1 from '../components/ProjectComp1'
import ProjectIntro from '../components/ProjectIntro'

function ProjectPage() {
     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <ProjectIntro/>
        <ProjectComp1/>
      
    </div>
  )
}

export default ProjectPage
