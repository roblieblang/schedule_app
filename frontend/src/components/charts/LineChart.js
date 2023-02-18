import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../../data/mockData"

const LineChart = () => {
    return (
            <ResponsiveLine
              data={data}
              theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: "black",
                    },
                  },
                  legend: {
                    text: {
                      fill: "black",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "black",
                      strokeWidth: 1,
                    },
                    text: {
                      fill: "black",
                    },
                  },
                },
                legends: {
                  text: {
                    fill: "black",
                  },
                },
                tooltip: {
                  container: {
                    color: "lightBlue",
                  },
                },
              }}
              colors={"blue"} 
              margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              curve="catmullRom"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                orient: "bottom",
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Time", 
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                orient: "left",
                tickValues: 10, 
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Score", 
                legendOffset: -40,
                legendPosition: "middle",
              }}
              enableGridX={false}
              enableGridY={false}
              pointSize={7}
              pointColor={"blue"}
              pointBorderWidth={2}
              pointBorderColor={"blue"}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "top-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                //   currently hiding the legend, probably won't need it
                  itemWidth: 0,
                  itemHeight: 0,
                  itemOpacity: 0,
                  itemTextColor: "transparent",
                  symbolSize: 0,
                  symbolShape: "triangle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          );
        };
        
        export default LineChart;