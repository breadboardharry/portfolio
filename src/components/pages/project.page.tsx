import sockimage from "../../../public/stock1.jpg";

function ProjectPage() {
  return (
    <div className="h-full flex flex-col bg-cyan-200">
      <div className="basis-1/3 bg-red-300">
        <img className="object-cover size-full" src={sockimage} alt="image" />
      </div>
    </div>
  );
}

export default ProjectPage;
