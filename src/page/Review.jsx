import React, { useEffect, useState } from "react";
import "./Review.css";

export function Review() {
  const [data, setData] = useState({
    name: "",
    review_text: "",
  });

  const [Testimonial, setreviews] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch(
        "https://evamakeup.pythonanywhere.com/list-reviews"
      );
      const response = await data.json();
      console.log(response, "fetched reviews");

      setreviews(response);
    };
    fetchdata();
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    // window.location.reload();

    console.log(data, 'sent data');

    let result = await fetch(
      "https://evamakeup.pythonanywhere.com/submit-review/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.ok) {
      const response = await result.json();
      console.log(response, "Review Submitted");

      setreviews((prevReviews) => ({
        ...prevReviews,
        reviews: [...prevReviews.reviews, {'SUJOY MODAK' : data.name , 'nice' : data.review_text}],
      }));

    } else {
      console.log("Error submitting review:", result.statusText);
    }
  };
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-2 text-center">What people say</h2>
          </div>
          <div className="col-12">
            <div className="card-columns">
              {Testimonial?.reviews?.map((x, index) => (
                <div className="card mb-4" key={index}>
                  <div className="card-body">
                    <blockquote>
                      <i
                        className="fa fa-quote-right fa-2x text-muted pull-right mt-3 mb-3"
                        aria-hidden="true"
                      ></i>
                      <h2>{x['SUJOY MODAK']}</h2>
                      <p className="m-0 text-muted">{x['nice']}</p>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Section for Reviews */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="mb-3 text-center">Submit Your Review</h2>
            <form
              className="review-form"
              onSubmit={(e) => {
                HandleSubmit(e);
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="review">Your Review</label>
                <textarea
                  id="review"
                  className="form-control"
                  placeholder="Write your review here"
                  rows="4"
                  onChange={(e) =>
                    setData({ ...data, review_text: e.target.value })
                  }
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
