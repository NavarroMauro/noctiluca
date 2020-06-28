import React, { PureComponent } from "react"
import {
  ComposedChart,
  ResponsiveContainer,
  // Cell,
  // Line,
  // Area,
  Bar,
  XAxis,
  YAxis,
  // CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const data = [
  {
    React: 40,
    HTML5: 10,
    CSS3: 20,
    JavaScript: 20,
    Node: 5,
  },
]
class SkillsPlot extends PureComponent {
  render() {
    return (
      <div className="my-10">
        <h1 className="text-center my-10 text-xl">My coding time proportion</h1>
        <ResponsiveContainer width="100%" height={700}>
          <ComposedChart
            layout="horizontal"
            data={data}
            margin={{
              top: 0,
              right: 30,
              bottom: 0,
              left: 0,
            }}
          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <YAxis type="number" domain={[0, 100]} />
            <XAxis
              dataKey="name"
              type="category"
              angle={-90}
              textAnchor="middle"
            />
            <Tooltip />
            <Legend />
            {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
            <Bar dataKey="HTML5" stackId="a" fill="#e34c26" opacity="50%" />
            <Bar dataKey="CSS3" stackId="a" fill="#254bdd" opacity="50%" />
            <Bar dataKey="Nodejs" stackId="a" fill="#87bf00" opacity="50%" />
            <Bar
              dataKey="JavaScript"
              stackId="a"
              fill="#eadb1a"
              opacity="50%"
            />
            <Bar dataKey="React" stackId="a" fill="#0bd1f7" opacity="50%" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default SkillsPlot
