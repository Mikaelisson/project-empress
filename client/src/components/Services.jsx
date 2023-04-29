import { useState } from "react";

const Services = () => {
  const [viewMore, setViewMore] = useState(true);
  const [services, setServices] = useState([
    {
      image: "./Technology-Watch.jpg",
      title: "Consultancy",
      text: "We have experienced professionals who observe the digital transformation, synchronize with actions and with possibilities of earnings in the shortest possible time.",
      link: "#",
    },
    {
      image: "./Technology-Watch.jpg",
      title: "INCREASE PRODUCTIVITY",
      text: "Not having to worry about these IT issues and focusing on the performance of your own employees is such a relief. To control services, we present simple-to-understand reports with all services performed and costs invested with technology.",
      link: "#",
    },
    {
      image: "./Technology-Watch.jpg",
      title: "HELPING YOUR GROWTH",
      text: "Having your own IT team is essential, but this is an unfeasible cost for most companies. For this, we offer tailor-made solutions at a predetermined cost in the form of a monthly contract. In addition to not incurring employee expenses such as salaries, labor charges and equipment for performing services, the outsourced company is responsible for keeping the operation running. Leaving the customer focused on the business.",
      link: "#",
    },
    {
      image: "./Technology-Watch.jpg",
      title: "CONTROL YOUR BUSINESS",
      text: "One of the responsibilities of the outsourced IT team is to constantly evaluate the performance and consumption of equipment to suggest improvements and acquisitions that help the company. With this action we can obtain consumption savings and increase productivity that result in growth and profitability for the business. Reducing costs and concerns with hiring, IT outsourcing presents a return on investment in the medium and long term.",
      link: "#",
    },
    {
      image: "./Technology-Watch.jpg",
      title: "SOLUTION FOR DEMANDS",
      text: "Imagine how many professionals would be needed for the entire technology area of ​​your company to be 100% working? Now think that your company can have complete coverage in technology by a qualified team with professionals from different areas: Systems Analyst, Support, Training, Networks, Communications Specialist, Hardware Technician for maintenance of computers and other equipment and so on. with experienced professionals in every aspect that involves technology in your business is one reason for you to outsource IT. They are professionals who are always up to date with the latest technologies and software, in addition to the ability to propose solutions for daily demands.",
      link: "#",
    },
    {
      image: "./Technology-Watch.jpg",
      title: "CONTROL YOUR BUSINESS",
      text: "Having all the necessary tools for the operation of your business to work perfectly is the dream of any entrepreneur. The guarantee of full operation of technology services starts right away with the analysis of its structure and standardization of systems, in addition to preventive verification of equipment. Managing several vital services for the business, such as e-mails, operating systems, backups, contingency, data security, among others, is complex and takes a lot of time. You don't need to understand everything that encompasses technology in your company, just rely on someone who specializes in the subject and in this case our team will take care of it for you.",
      link: "#",
    },
  ]);

  return (
    <div id="solutions" className="d-flex flex-column align-items-center mt-5">
      <p
        className="text-primary mb-1 fs-5"
        style={{ fontWeight: "700", letterSpacing: "2px" }}
      >
        Empress
      </p>
      <h1 className="bold">ABOUT OUR WORK</h1>

      <p className="w-75 mt-4">
        Empress was born with a simple mission, to provide its customers with
        Technology Smart that benefit and collaborate for the mutual growth of
        businesses.
      </p>

      <div className="w-75 d-flex flex-wrap justify-content-around gap-4">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="card"
              style={{ width: "18rem", height: "100%" }}
            >
              <img src={service.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p
                  className="card-text"
                  id={`text_${index}`}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.text}
                </p>
                <button
                  href={service.link}
                  id={index}
                  className="btn btn-primary"
                  onClick={(e) => {
                    const element = document.getElementById(
                      `text_${e.target.id}`
                    );

                    if (element.style.whiteSpace == "nowrap")
                      element.style.whiteSpace = "normal";
                    else element.style.whiteSpace = "nowrap";
                  }}
                >
                  View more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
