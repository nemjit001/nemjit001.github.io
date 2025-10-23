import './Projects.css'
import HybridRendererImage from '/hybrid_renderer.png'

interface ProjectDescription {
    name: string,
    url: string,
    description: string[],
    image?: string,
}

const PROJECT_LIST: ProjectDescription[] = [
    {
        name: "Bonsai",
        url: "https://github.com/nemjit001/bonsai-renderer",
        description: [
            `Bonsai is a high performance render engine written in C++, with the aim of being completely cross platform and highly customizable in regards
            to the render pipeline used for scenes. It is actively being developed.`,
            `The render framework allows fast implementation of render techniques through its flexible render graph system, with support for both rasterization and
            ray tracing. The default render backend uses Vulkan 1.3, with long term plans for DirectX12 support.`
        ],
    },
    {
        name: "Hybrid Renderer",
        url: "https://github.com/nemjit001/hybrid-renderer",
        description: [
            `A rendering project testing the combination of hybrid rendering (rasterization + ray tracing) and stochastic LOD sampling, made using Vulkan 1.3 and 
            the Vulkan ray tracing extensions.`,
            `The implementation provides a reference path tracer implemented using RTX raytracing, and a Hybrid Rendering pipeline
            that combines a standard deferred shading setup with raytraced direct illumination.`,
            `The Stochastic LOD sampling blends model LOD’s in both a rasterized
            G-Buffer pass and in the raytracing passes.`
        ],
        image: HybridRendererImage
    },
]

function ProjectEntry(id: number, project: ProjectDescription) {
    return (
        <>
            <h3>{project.name}</h3>
            <a href={project.url} target="_blank">{project.url}</a>
            <div className='project-description'>
                { project.image ? <img src={project.image}/> : <></> }
                <div>
                    { project.description.map((content, id) => <p id={String(id)}>{content}</p>) }
                </div>
            </div>
        </>
    );
}

function Projects() {
    return (
        <>
            <h2>Graphics projects</h2>
            <section className='projects'>
                { PROJECT_LIST.map((project, id) => ProjectEntry(id, project)) }
            </section>
        </>
    );
}

export default Projects;
