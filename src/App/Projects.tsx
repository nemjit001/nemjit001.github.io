import './Projects.css'
import AtmosphereRenderingImage from '/atmosphere_rendering.png'
import HybridRendererImage from '/hybrid_renderer.png'

interface ProjectDescription {
    name: string,
    url: string,
    description: string[],
    image?: string,
}

const PROJECT_LIST: ProjectDescription[] = [
    {
        name: "Atmosphere Rendering",
        url: "https://github.com/nemjit001/atmosphere-rendering",
        description: [
            `This project is a custom implementation of Unreal Engine's atmosphere rendering pipeline described in
            the paper "A Scalable and Production Ready Sky and Atmosphere Rendering Technique" by Sébastien Hillaire (2020)`,
            `The render pipeline was implemented in EA SEED's Gigi Rendering Framework. The render pipeline can be reused by other techniques,
            acting as a drop-in replacement for a regular sky box.`
        ],
        image: AtmosphereRenderingImage
    },
    // {
    //     name: "Bonsai",
    //     url: "https://github.com/nemjit001/bonsai-renderer",
    //     description: [
    //         `Bonsai is a high performance render engine written in C++, with the aim of being completely cross platform and highly customizable in regards
    //         to the render pipeline used for scenes. It is actively being developed.`,
    //         `The render framework allows fast implementation of render techniques through its flexible render graph system, with support for both rasterization and
    //         ray tracing. The default render backend uses Vulkan 1.3, with long term plans for DirectX12 support.`
    //     ]
    // },
    {
        name: "Hybrid Renderer",
        url: "https://github.com/nemjit001/hybrid-renderer",
        description: [
            `This project showcases combining a hybrid rendering pipeline (rasterization + ray tracing) with stochastic LOD sampling,
            implemented using Vulkan 1.3 and the Vulkan ray tracing extensions.`,
            `The implementation provides a reference path tracer implemented using RTX raytracing, and a Hybrid Rendering pipeline
            that combines a standard deferred shading setup with raytraced direct illumination.`,
            `The Stochastic LOD sampling blends model LODs in both a rasterized G-Buffer pass and in the raytracing passes.`
        ],
        image: HybridRendererImage
    },
]

function ProjectEntry(idx: number, project: ProjectDescription) {
    return (
        <div key={idx} className='project'>
            <h3>{project.name}</h3>
            <a href={project.url} target="_blank">{project.url}</a>
            <div className='project-description'>
                { project.image !== undefined && <img src={project.image} role='none'/> }
                <div>
                    { project.description.map((content, idx) => <p key={idx}>{content}</p>) }
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <>
            <h2>Graphics projects</h2>
            <section>
                <p>
                    Below are my open-source graphics projects. These projects are publicly available and represent my abilities as a graphics programmer and software engineer.
                </p>
            </section>
            <section className='projects'>
                { PROJECT_LIST.map((project, id) => ProjectEntry(id, project)) }
            </section>
        </>
    );
}

export default Projects;
