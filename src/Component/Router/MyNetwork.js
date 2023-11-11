

import Invitations from "../../Component/MyNetwork/Invitations";
import ManageNetwork from "../../Component/MyNetwork/ManageNetwork";
const MyNetwork = () => {
  return (
    <div>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-3 bg-white me-2">
            <ManageNetwork/>
          </div>
          <div className="col-md-7 ">
            <Invitations/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyNetwork;
