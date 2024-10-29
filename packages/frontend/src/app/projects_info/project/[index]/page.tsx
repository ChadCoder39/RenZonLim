import ProjectBlock1 from "@/components/projects/project_block1";
import ProjectBlock2 from "@/components/projects/project_block2";
import ProjectBlock3 from "@/components/projects/project_block3";
import ProjectBlock4 from "@/components/projects/project_block4";

export default function ProjectPage({params}: {params: {index: number}}) {
    return (
        <>
          <ProjectBlock1/>
    
          <ProjectBlock2/>

          <ProjectBlock3/>

          <ProjectBlock4/>


        </>
      );
    
  }