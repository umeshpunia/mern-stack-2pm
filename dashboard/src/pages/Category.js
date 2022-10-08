import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center my-5">Categories</h1>
        <Link to="/addcat" className="btn btn-info">
          Add Category
        </Link>
        <table className="table my-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Picture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Category;
