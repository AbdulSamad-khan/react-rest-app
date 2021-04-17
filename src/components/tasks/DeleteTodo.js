import React, { useEffect } from "react";
import { connect } from "react-redux";

import { deleteTask } from "../../actions";

const DeleteTodo = (props) => {
  console.log(props.match.params.id);
  useEffect(() => {
    props.deleteTask(props.match.params.id);
  }, []);
  return <div>DeleteTodo</div>;
};

export default connect(null, { deleteTask })(DeleteTodo);
