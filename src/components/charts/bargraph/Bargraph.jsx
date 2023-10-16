import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Bargraph.css'

const Bargraph = () => {
  const data = [
    { month: 'Jan', earnings: 1500 },
    { month: 'Feb', earnings: 1100 },
    { month: 'Mar', earnings: 1800 },
    { month: 'Apr', earnings: 1550 },
    { month: 'May', earnings: 1600 },
    { month: 'Jun', earnings: 1000 },
    { month: 'Jul', earnings: 1600 },
    { month: 'Aug', earnings: 1800 },
    { month: 'Sep', earnings: 1700 },
    { month: 'Oct', earnings: 1550 },
    { month: 'Nov', earnings: 1520 },
    { month: 'Dec', earnings: 1580 },
  ];

  return (
    <div className='barchart'>
      <div className='d-flex justify-content-between align-items-center'>
        <h5><b>Overview</b></h5>
        <select className='input-search me-4'>
            <option>Quaterly</option>
        </select>
      </div>
      <p className='monthly'>Monthly Earning</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} >
          <XAxis dataKey="month" interval={0} style={{fontSize:"10px"}} axisLine={false} tickLine={false} />
          {/* <YAxis tick={false} /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Bar
            dataKey="earnings"
            fill="#F2EFFF"
            radius={[10, 10, 10, 10]} // Border radius: top-left, top-right, bottom-right, bottom-left
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Bargraph;