import { ProgressSpinner } from "primereact/progressspinner";
const Spinner = () => {
  return (
    <div className="spinn">
      <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
        strokeWidth="8"
        fill="var(--surface-ground)"
        animationDuration=".5s"
      />
    </div>
  );
};

export default Spinner;
