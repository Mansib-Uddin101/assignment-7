import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FriendContext } from '../context/FriendContext';

const StatsPage = () => {
  const { contacts } = useContext(FriendContext);

  const dataMap = contacts.reduce((acc, curr) => {
    acc[curr.type] = (acc[curr.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(dataMap).map((key) => ({
    name: key,
    value: dataMap[key],
  }));

  const COLORS = {
    Text: '#8b5cf6',
    Call: '#1e463a',
    Video: '#3da066',
    Meetup: '#f59e0b',
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-10 md:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1a2e2a] mb-8">Friendship Analytics</h1>

        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-[#1a2e2a] mb-4">By Interaction Type</h2>
          
          <div className="h-100 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  cornerRadius={10}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[entry.name] || '#cbd5e1'} 
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;