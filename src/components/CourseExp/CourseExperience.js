import React from "react";
import img from "../../assets/images/Group 468.png";
import Img from "../../assets/images/Group 910.png";
import "../CourseExp/CourseExperience.css";
class CourseExperience extends React.Component {
  constructor(props) {
    super(props);
    this.OnClickBtn = this.OnClickBtn.bind(this);
    this.state = {
      id: 1,
    };
  }
  OnClickBtn(e) {
    const id = parseInt(e.target.id);
    this.setState((prevState) => ({
      ...prevState,
      id,
    }));
  }

  render() {

    const { id } = this.state;
    // console.log(id);
    return (
      <div className="container">
        <div className="back row">
        <div className="col-lg-12 ">
          <img className=" Img_title" src={Img} alt="test" />
        </div>
          <div className="col-lg-12 box_item">
            <div
              type="submit"
              className={` btn1 item_btn ${id === 1 && `active`} `}
              onClick={this.OnClickBtn}
              id="1"
            >
              After attending the course
            </div>
            <div
              type="submit"
              className={`btn2 item_btn ${id === 2 && `active`} `}
              onClick={this.OnClickBtn}
              id="2"
            >
              During the period
            </div>
            <div
              type="submit"
              className={`btn3 item_btn ${id === 3 && `active`} `}
              onClick={this.OnClickBtn}
              id="3"
            >
              Before attending the course
            </div>
          </div>
          <div className="col-lg-12 exp_content">
            {id === 1 && (
              <div className="exp_content">
                <img className="img_course" src={img} alt="test" />
                <p className="content_course">
                  This course has been attempted by zero people who are eager to
                  learn product design, especially user experience and user
                  interface, so it is not a prerequisite, but due to the limited
                  capacity of the priority course with early enrolled people,
                  others can participate in future courses.  Obviously, the
                  ability to use tools like Adobe Photoshop and Adobe
                </p>
              </div>
            )}
            {id === 2 && (
              <div className="exp_content">
                <img className="img_course" src={img} alt="test" />
                <p className="content_course">
                  This course has been attempted by zero people who are eager to
                  learn product design, especially user experience and user
                  interface, so it is not a prerequisite, but due to the limited
                  capacity of the priority course with early enrolled people,
                </p>
              </div>
            )}
            {id === 3 && (
              <div className="exp_content">
                <img className="img_course" src={img} alt="test" />
                <p className="content_course">
                  This course has been attempted by zero people who are eager to
                  learn product design, especially
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default CourseExperience;
