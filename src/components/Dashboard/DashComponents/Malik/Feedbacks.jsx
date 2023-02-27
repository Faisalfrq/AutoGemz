import React from "react";
import { Badge, Button } from "reactstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteFeedbackMutation,
  useGetAllFeedsQuery,
} from "../../../../features/feedback/feedbackSlice";

const Feedbacks = () => {
  const { data } = useGetAllFeedsQuery();
  const [deleteFeedback] = useDeleteFeedbackMutation();

  return (
    <>
      <div
        className="main"
        style={{
          height: "85vh",
          marginTop: "15vh",
          width: "72vw",
          marginLeft: "25vw",
        }}
      >
        <div className="container">
          <div className="row">
            {data?.data.map((dat) => {
              return (
                <div className="col-12 mt-2" key={dat._id}>
                  <div className="container card p-2 text-dark">
                    <div className="row gap-4 " style={{ textAlign: "center" }}>
                      <div className="col-3 mt-3">
                        <h6>{dat.email}</h6>
                        <Badge>{ dat.status}</Badge>
                      </div>
                      <div className="col-7 mt-2">
                        <h6>{dat.comment}</h6>
                      </div>
                      <div className="col-1 mt-3">
                        <Button
                          className="btn-danger"
                          style={{ height: "2.5rem" }}
                          onClick={() => {
                            deleteFeedback(dat._id);
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
