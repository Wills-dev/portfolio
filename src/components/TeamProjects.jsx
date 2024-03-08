import { projects } from "../constants";

const TeamProjects = () => {
  return (
    <section
      className="py-16 max-md:py-10 padding-x bg-primary-color"
      id="project"
    >
      <div className="flex-center gap-6">
        <h1 className="text-5xl font-medium text-white max-md:text-2xl">
          Team Projects
        </h1>
        <img
          src="/assets/stroke.svg"
          alt="stroke"
          className="max-md:w-[120px] max-md:h-[10px]"
        />
      </div>
      <div className="flex justify-between gap-16 max-md:justify-center py-16 flex-wrap">
        {projects?.map((project, i) => (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            className="max-w-[340px] w-[340px] min-w-[320px] max-h-[490px] min-h-[490px] border-1 group transition-all"
          >
            <div className="h-[45%] min-h-[45%] w-full min-w-full overflow-hidden">
              <img
                src={project.projectImgUrl}
                alt="project"
                className="w-full h-full min-h-full min-w-full object-cover group-hover:scale-110  transition-all"
              />
            </div>
            <div className="flex-1 h-[55%] w-full bg-gray-900 px-4 max-md:px-2">
              <div className="flex-center-between gap-5 ">
                <h5 className=" text-xl text-tert-colr group-hover:text-primary-color transition-all">
                  {project.projectTitle}
                </h5>
                <h6 className="text-sec-color text-sm"> {project.status}</h6>
              </div>
              <div className="flex-center gap-4 py-4 flex-wrap">
                {project?.stacks?.map((stack) => (
                  <p
                    className={`bg-slate-600 px-1 ${stack.color} rounded-md whitespace-nowrap font-fira`}
                  >
                    {stack.stack}
                  </p>
                ))}
              </div>
              <p className="font-fira text-tert-colr">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TeamProjects;
