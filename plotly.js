var xValue = ["2012-IV", "2013-I", "2013-II", "2013-III", "2013-IV", "2014-I", "2014-II", "2014-III", "2014-IV", "2015-I", "2015-II", "2015-III", "2015-IV", "2016-I", "2016-II"];
var yValue = ["0.1", "2.8", "0.8", "3.1", "4.0", "-1.2", "4.0", "5.0", "2.3", "2.0", "2.6", "2.0", "0.9", "0.8", "1.2"];
var rangeX = [-0.5, 5.5];
var rangeY = [-1.2, 5];  //[ymax, ymin]        
                                                                                                                  
    var data = [
  {    
    x: xValue,
    y: yValue,
    error_x: {visible: false},
    error_y: {visible: false},
    hoverinfo: "x+y",
    legendgroup: "",
    marker: {
      color: "rgba(216,96,24,1.0)",
      line: {color: "#444"}
    },
    name: "A",
    opacity: 1,
    orientation: "v",
    showlegend: true,
    //text: ["1.9", "0.5", "0.1", "1.9", "1.1", "3", "3.8", "-0.9", "4.6", "4.3", "2.1", "0.6", "3.9", "2", "1.4", "0.8"],
    textsrc: "TanyaShen-BEA:8:849fa0",
    type: "bar",
    uid: "37f073",
    visible: true,
    xaxis: "x",
    xsrc: "TanyaShen-BEA:8:7e9e87",
    yaxis: "y",
    ysrc: "TanyaShen-BEA:8:849fa0"
  }
];
var layout = {
  annotations: [
    {
      x: -0.0697835180924,
      y: -0.375494071146,
      align: "left",
      bgcolor: "rgba(0,0,0,0)",
      bordercolor: "rgba(0,0,0,0)",
      borderpad: 1,
      borderwidth: 1,
      font: {
        color: "rgba(17, 18, 19, 1)",
        family: "\"Open Sans\", verdana, arial, sans-serif",
        size: 10
      },
      opacity: 1,
      showarrow: false,
      text: "Real GDP growth is measured at seasonally adjusted annual rates<br>U.S. Bureau of Economic Analysis",
      textangle: 0,
      xanchor: "auto",
      xref: "paper",
      yanchor: "auto",
      yref: "paper"
    },
    {
      x: 0.696193265007,
      y: -0.365612648221,
      align: "center",
      bgcolor: "rgba(0,0,0,0)",
      bordercolor: "rgba(0,0,0,0)",
      borderpad: 1,
      borderwidth: 1,
      font: {
        color: "rgba(84, 108, 134, 1)",
        family: "\"Open Sans\", verdana, arial, sans-serif",
        size: 13
      },
      opacity: 1,
      showarrow: false,
      text: "",
      textangle: 0,
      xanchor: "auto",
      xref: "paper",
      yanchor: "auto",
      yref: "paper"
    }
  ],
  autosize: false,
  bargap: 0.24,
  bargroupgap: 0.24,
  barmode: "group",
  barnorm: "",
  dragmode: "zoom",
  font: {
    color: "rgba(84,108,134,1)",
    family: "\"Open Sans\", verdana, arial, sans-serif",
    size: 13
  },
  height: 482.875,
  hidesources: false,
  hovermode: "closest",
  margin: {
    r: 80,
    t: 100,
    autoexpand: true,
    b: 130,
    l: 80,
    pad: 0
  },
  paper_bgcolor: "#fff",
  plot_bgcolor: "#fff",
  separators: ".,",
  showlegend: false,
  smith: false,
  title: "<b>Quarter-to-Quarter Growth in Real GDP</b>",
  titlefont: {
    color: "rgba(0,0,0,1.0)",
    family: "\"Open Sans\", verdana, arial, sans-serif",
    size: 18
  },
  width: 843,
  xaxis: {
    anchor: "y",
    autorange: true,
    categoryorder: "trace",
    color: "#444",
    domain: [0, 1],
    dtick: 1,
    exponentformat: "e",
    fixedrange: false,
    gridcolor: "rgb(238, 238, 238)",
    gridwidth: 1,
    nticks: 0,
    range: rangeX,
    rangemode: "normal",
    showexponent: "all",
    showgrid: false,
    showline: false,
    showticklabels: true,
    side: "bottom",
    tick0: 0,
    tickangle: "auto",
    tickfont: {
      color: "rgba(84, 108, 134, 1)",
      family: "\"Open Sans\", verdana, arial, sans-serif",
      size: 12
    },
    tickmode: "auto",
    tickprefix: "",
    ticks: "",
    ticksuffix: "",
    title: "Quarter",
    titlefont: {
      color: "rgba(0, 0, 0, 1)",
      family: "\"Open Sans\", verdana, arial, sans-serif",
      size: 12
    },
    type: "category",
    zeroline: true
  },
  yaxis: {
    anchor: "x",
    autorange: true,
    color: "#444",
    domain: [0, 1],
    dtick: 1,
    exponentformat: "B",
    fixedrange: false,
    gridcolor: "rgb(238, 238, 238)",
    gridwidth: 1,
    hoverformat: "",
    nticks: 0,
    range: rangeY,
    rangemode: "normal",
    showexponent: "all",
    showgrid: true,
    showline: false,
    showticklabels: true,
    side: "left",
    tick0: 0,
    tickangle: "auto",
    tickfont: {
      color: "rgba(84, 108, 134, 1)",
      family: "\"Open Sans\", verdana, arial, sans-serif",
      size: 12
    },
    tickformat: "",
    tickmode: "auto",
    tickprefix: "",
    ticks: "",
    ticksuffix: "",
    title: "Percent",
    titlefont: {
      color: "rgba(0, 0, 0, 1)",
      family: "\"Open Sans\", verdana, arial, sans-serif",
      size: 12
    },
    type: "linear",
    zeroline: false
  }
};
Plotly.plot('plotly-div', data, layout, {displaylogo: false});                                                                                                                            