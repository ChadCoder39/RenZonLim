import ProjectBlock1 from "@/components/projects/project_block1";
import ProjectBlock2 from "@/components/projects/project_block2";
import ProjectBlock3 from "@/components/projects/project_block3";
import ProjectBlock4 from "@/components/projects/project_block4";

export default function ProjectPage({params: {id}}: {params: {id: string}}) {
    return (
        <>
          <ProjectBlock1 id={id}/>
    
          <ProjectBlock2 id={id}/>

          <ProjectBlock3 id={id}/>

          <ProjectBlock4/>
        </>
      );
    
  }