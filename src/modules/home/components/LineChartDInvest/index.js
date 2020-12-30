import React, { PureComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import * as actions from "../../redux/actions";

const windowSize = window.innerWidth;

const LineChartX = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(
      actions.getLineChart({ day: 10 }, (data) => {
        setData(data);
      })
    );
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={windowSize < 1100 ? 200 : 320}
      className="area-chart"
    >
      <AreaChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="valueIn"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="valueOut"
          stroke="#8884d8"
          fill="#CA2106"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChartX;
