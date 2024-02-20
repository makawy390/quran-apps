import { ProgressSpinner } from "primereact/progressspinner";
const Spinner = () => {
  return (
    <div className="spinn" style={{
      margin: 'auto',
      display :'flex',
      justifyContent : 'center',
      alignItems : 'center'
    }}>
       {/* <ProgressSpinner
        style={{ width: "50px", height: "50px" }}
         strokeWidth="8"
         fill="var(--surface-ground)"
         animationDuration=".5s"
       /> */}
                   <ProgressSpinner />

    </div>
  );
};

export default Spinner;
