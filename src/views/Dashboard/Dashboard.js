import React, { Component, lazy, Suspense } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table
} from "reactstrap";
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

const Widget03 = lazy(() => import("../../views/Widgets/Widget03"));

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

// Card Chart 1
const cardChartData1 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandPrimary,
      borderColor: "rgba(255,255,255,.55)",
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ]
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 2
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandInfo,
      borderColor: "rgba(255,255,255,.55)",
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ]
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 3
const cardChartData3 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.2)",
      borderColor: "rgba(255,255,255,.55)",
      data: [78, 81, 80, 45, 34, 12, 40]
    }
  ]
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

// Card Chart 4
const cardChartData4 = {
  labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,255,255,.3)",
      borderColor: "transparent",
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ]
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  }
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: "facebook" },
  { data: [1, 13, 9, 17, 34, 41, 38], label: "twitter" },
  { data: [78, 81, 80, 45, 34, 12, 40], label: "linkedin" },
  { data: [35, 23, 56, 22, 97, 23, 64], label: "google" }
];

const makeSocialBoxData = dataSetNo => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        backgroundColor: "rgba(255,255,255,.1)",
        borderColor: "rgba(255,255,255,.55)",
        pointHoverBackgroundColor: "#fff",
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "New Clients"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Recurring Clients"
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "Pageviews"
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Organic"
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: "CTR"
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: "Bounce Rate"
  }
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: variant ? variant : "#c2cfd6",
        data: dataset.data,
        label: dataset.label
      }
    ]
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false
      }
    ],
    yAxes: [
      {
        display: false
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: [
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su",
    "Mo",
    "Tu",
    "We",
    "Th",
    "Fr",
    "Sa",
    "Su"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data1
    },
    {
      label: "My Second dataset",
      backgroundColor: "transparent",
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 2,
      data: data2
    },
    {
      label: "My Third dataset",
      backgroundColor: "transparent",
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3
    }
  ]
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-green">
              <CardBody className="pb-0">
                <div className="text-value"><center>98% Match </center></div>
                <div> <center> 10,610 Enrolled </center> </div>
                <div> 
                  <AppHeaderDropdown>
                    <DropdownToggle block color="green">
                      <div className="text-white bg-green"> <i className="icon-cursor" /> Program Highlights </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Highlights</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> 13,740 projected annual opening software developer jobs from 2012-2022 <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> $97,240 median annual wage <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Ranked #2 for best technology jobs </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Ranked #2 for best STEM jobs </DropdownItem>
                      </DropdownMenu>
                  </AppHeaderDropdown>
                
                  <AppHeaderDropdown>
                    <DropdownToggle block color="green">
                      <div className="text-white bg-green" classname-> <i className="cui-info icons" /> Graduation Requirements </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Requirements</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> Minimum of 2.5 GPA in Software Engineering required courses<br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Contains a total of 122 credits, with 40 for liberal education <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 75 Credits for program requirements </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 25 credits for electives </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Mandatory internship for credit</DropdownItem>
                    </DropdownMenu>
                  </AppHeaderDropdown>
                </div>
              </CardBody>
              <div className="text-value" style={{ height: "40px" }} />
              </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="10" sm="5" lg="2">
                  <img src={'https://specials-images.forbesimg.com/imageserve/55b94de9e4b05c2c343245db/300x300.jpg?fit=scale&background=000000'} width="100px"/>
                  </Col>
                  <Col>
                    <h3>Software Engineering, Saint Cloud State University</h3>
                    <div className="small text-muted">
                      Saint Cloud, MN (3 Miles Away)
                    </div>
                    <div classname="small text">4 Year, Public</div>
                  </Col>
                </Row>
                <div className="text-value" style={{ height: "40px" }} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-green">
              <CardBody className="pb-0">
                <div className="text-value"> <center> 84% Match </center></div>
                <div> <center> 10,610 Enrolled </center> </div>
                <div>  
                  <AppHeaderDropdown direction="down">
                  <DropdownToggle block color="green">
                      <div className="text-white bg-green"> <i className="icon-cursor" /> Program Highlights </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Highlights</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> 100% placement rate for the past 5 years of graduates <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 1 of 2 Minnesota Schools acredited by the Computing Accreditation Commission <br></br>
                                                                      of Accreditation Board for Engineers Technology </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Laboratory projects considered graduate-level work</DropdownItem>
                      </DropdownMenu>
                  </AppHeaderDropdown>
                  
                  <AppHeaderDropdown>
                    <DropdownToggle block color="green">
                      <div className="text-white bg-green" classname-> <i className="cui-info icons" /> Graduation Requirements </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Requirements</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> Minimum of 2.5 GPA in Computer Science required courses<br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 59-63 Program requirements <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 20 required elective credits </DropdownItem>
                    </DropdownMenu>
                  </AppHeaderDropdown>
                </div>
                   
             </CardBody>
              <div className="text-value" style={{ height: "40px" }} />
              </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="10" sm="5" lg="2">
                  <img src={'https://specials-images.forbesimg.com/imageserve/55b94de9e4b05c2c343245db/300x300.jpg?fit=scale&background=000000'} width="100px"/>
                  </Col>
                  <Col>
                    <h3>Computer Science, Saint Cloud State University</h3>
                    <div className="small text-muted">
                      Saint Cloud, MN (3 Miles Away)
                    </div>
                    <div classname="small text">4 Year, Public</div>
                  </Col>
                </Row>
                <div className="text-value" style={{ height: "10px" }} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-yellow">
              <CardBody className="pb-0">
                <div className="text-value"> <center> 72% Match </center> </div>
                <div> <center> 2,782 Enrolled </center> </div>
                <div>  
                  <AppHeaderDropdown direction="down">
                  <DropdownToggle block color="yellow">
                      <div className="text-white bg-yellow"> <i className="icon-cursor" /> Program Highlights </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Highlights</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> 100% placement rate in 2017 <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Graduates receive an average hourly pay of $35 per hour <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Many graduates work at notable companies like Ch Robinson, <br></br> 
                                                                       GeoComm, and Wolters Kluwer. </DropdownItem>
                      </DropdownMenu>
                  </AppHeaderDropdown> 
                  
                  <AppHeaderDropdown>
                    <DropdownToggle block color="yellow">
                      <div className="text-white bg-yellow" classname-> <i className="cui-info icons" /> Graduation Requirements </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Requirements</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> 71 Credits required<br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Can transfer to SCSU for BS in information science <br></br> </DropdownItem>
                    </DropdownMenu>
                  </AppHeaderDropdown>
                </div>
              </CardBody>
              <div className="text-value" style={{ height: "40px" }} />
              </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="10" sm="5" lg="2">
                  <img src={'https://www.sctcc.edu/sites/all/themes/custom/images/sctcc-icons/@2x/logo@2x.png'} width="100px" height="100px"/>
                  </Col>
                  <Col>
                    <h3>Computer Programming, Saint Cloud Technical and Community College</h3>
                    <div className="small text-muted">
                      Saint Cloud, MN (6 Miles Away)
                    </div>
                    <div classname="small text">2 Year, Public</div>
                  </Col>
                </Row>
                <div className="text-value" style={{ height: "10px" }} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-yellow">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right" />
                <div className="text-value"> <center> 67% Match </center></div>
                <div> <center> 12,259 Enrolled </center> </div>
                <div>  
                  <AppHeaderDropdown direction="down">
                  <DropdownToggle block color="yellow">
                      <div className="text-white bg-yellow"> <i className="icon-cursor" /> Program Highlights </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Highlights</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> 31% of graduates work at software companies <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 26% of graduates work in healthcare or government agencies <br></br> </DropdownItem>
                      <DropdownItem divider />
                      </DropdownMenu>
                  </AppHeaderDropdown> 

                  <AppHeaderDropdown>
                    <DropdownToggle block color="yellow">
                      <div className="text-white bg-yellow" classname-> <i className="cui-info icons" /> Graduation Requirements </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Requirements</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> Minimum of 2.5 GPA in Software Engineering required courses<br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Recomended 3.0 GPA <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Cannot dual major in the college of science and engineering department </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 120 Credits required for graduation </DropdownItem>
                    </DropdownMenu>
                  </AppHeaderDropdown>
                </div>
              </CardBody>
              <div className="text-value" style={{ height: "40px" }} />
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="10" sm="5" lg="2">
                  <img src={'https://msumavericks.com/images/logos/site/site.png'} width="100px"/> </Col>
                  <Col>
                    <h3>Computer Information Technology, Mankato State University</h3>
                    <div className="small text-muted">
                      Mankato, MN (114 Miles Away)
                    </div>
                    <div classname="big text">4 Year, Public</div>
                  </Col>
                </Row>
                <div className="text-value" style={{ height: "10px" }} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-red">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right" />
                <div className="text-value"><center> 52% Match </center> </div>
                <div> <center> 12,259 Enrolled </center> </div>
                <div>  
                  <AppHeaderDropdown direction="down">
                  <DropdownToggle block color="red">
                      <div className="text-white bg-red"> <i className="icon-cursor" /> Program Highlights </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Highlights</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> Named top public university for veteran <br></br>   
                                                                        students studying cyber security</DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Designated as a national center of academic <br></br> 
                                                                        excellence in cyber operation by the NSA</DropdownItem>
                      <DropdownItem divider />
                      </DropdownMenu>
                  </AppHeaderDropdown> 

                  <AppHeaderDropdown>
                    <DropdownToggle block color="red">
                      <div className="text-white bg-red" classname-> <i className="cui-info icons" /> Graduation Requirements </div>
                    </DropdownToggle>
                     <DropdownMenu left style={{ left: 'auto' }}>
                      <DropdownItem header tag="div" className="text-center"><strong>Requirements</strong></DropdownItem>
                      <DropdownItem> <i className="cui-star icons"></i> 120 Credit Program<br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> 46 hours of liberal education <br></br> </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Must complete a writing-in-the-discipline course </DropdownItem>
                      <DropdownItem><i className="cui-star icons"></i> Computer Science principles required as pre-requisite </DropdownItem>
                    </DropdownMenu>
                  </AppHeaderDropdown>
                </div>
              </CardBody>
              <div className="text-value" style={{ height: "40px" }} />
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <Row>
                <Col xs="10" sm="5" lg="2">
                  <img src={'https://msep.mhec.org/sites/default/files/UNO-icon-color.png'} width="100px"/> </Col>
                  <Col>
                    <h3>Computer Science, University Of Nebraska At Omaha</h3>
                    <div className="small text-muted">
                      Omaha, NE (379 Miles Away)
                    </div>
                    <div classname="big text">4 Year, Public</div>
                  </Col>
                </Row>
                <div className="text-value" style={{ height: "10px" }} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        
      </div>
    );
  }
}

export default Dashboard;
